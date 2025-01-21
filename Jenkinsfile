pipeline {
    agent any 
    triggers {
        pollSCM('H/5 * * * *')
    }
    
    tools {nodejs "Nodejs"}
    
    stages {
        stage("Build") {
            steps {
                git url: "https://github.com/kabirbaidhya/react-todo-app.git", branch: "master"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage('Deploy') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(
                    configName: 'React-app2', 
                    transfers: [sshTransfer(
                        sourceFiles: 'build/**',
                        removePrefix: 'build',
                        remoteDirectory: '/var/www/html/',
                        execCommand: '''
                            sudo mv /home/ubuntu/var/www/html/* /var/www/html/ && sudo service nginx reload
                        '''
                    )],
                    usePromotionTimestamp: false,
                    useWorkspaceInPromotion: false,
                    verbose: true
                )])
            }
        }
        stage('Send Email Notification') {
            steps {
                emailext(
                    subject: "Build ${currentBuild.fullDisplayName} - ${currentBuild.currentResult}",
                    body: "The build ${currentBuild.fullDisplayName} has finished with status ${currentBuild.currentResult}.",
                    to: 'spe4757@gmail.com'
                )
            }
        }
    }
}
