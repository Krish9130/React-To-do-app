pipeline {
    agent any
    environment {
        HAWK_API_KEY = credentials("stackhawk-api-key")
    }
    //triggers {
        //pollSCM('H/5 * * * *')
    //}
    
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
                        remoteDirectory: 'react/',
                        execCommand: '''
                            sudo mv /home/ubuntu/react/* /var/www/html/ && sudo service nginx reload
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
            withEnv(["API_KEY=${HAWK_API_KEY}", "NO_COLOR=true"]) {
                sh """
                  docker run -v ${WORKSPACE}:/hawk:rw -t \
                  -e API_KEY=${API_KEY} \
                  -e NO_COLOR=${NO_COLOR} \
                  --name hawkscan-container \
                  stackhawk/hawkscan
                """
                //sh "docker stop hawkscan-container"
                sh "docker rm hawkscan-container" 
            }
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
