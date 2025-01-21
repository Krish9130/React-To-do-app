pipeline {
    agent any
    environment {
        HAWK_API_KEY = credentials("stackhawk-api-key")
    }
    triggers {
        pollSCM('H/5 * * * *')
    }
    
    tools {nodejs "Nodejs"}
    
    stages {
        stage("Build") {
            steps {
                git branch: 'main', credentialsId: 'git', url: 'https://github.com/Krish9130/React-To-do-app.git'
                sh "ls"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage('Deploy') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(
                    configName: 'stackhawk-test-react-app', 
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
        stage("Pull HawkScan Image") {
          steps {
            sh 'docker pull stackhawk/hawkscan'
            sh 'pwd'
            sh 'docker images'
          }
        }
        stage("Run HawkScan Test") {
          steps {
            sh "docker run -v ${WORKSPACE}:/hawk:rw \
                -t \
                -e API_KEY=${env.HAWK_API_KEY} \
                -e NO_COLOR=true \
                stackhawk/hawkscan"
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
