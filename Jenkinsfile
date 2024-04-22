pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/tishanW98/4271-weerasinghe'
                }
            }
        }
        stage('Build Image') {
            steps {  
                bat 'docker build -t shakilat/backend-api-basic:%BUILD_NUMBER% .'
            }
        }
        stage('Login to DockerHub') {
            steps {
                withCredentials([string(credentialsId: 'shakilatpassid', variable: 'shakilatpass')]) {
   
               bat'docker login -u shakilat -p ${shakilatpass}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push shakilat/backend-api-basic:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}