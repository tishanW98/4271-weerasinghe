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
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t shakilat/backend-api:%BUILD_NUMBER% .'
            }
        }
        stage('Cleanup Old Container') {
            steps {
                bat '''
                    docker rm -f container-bapi || true
                '''
            }
        }
        stage('Run Image') {
            steps {
                bat '''
                    docker run -d --name container-bapi -p 3001:3001 shakilat/backend-api:%BUILD_NUMBER%
                '''
            }
        }
        stage('Verify') {
            steps {
                bat '''
                    docker ps
                    docker logs container-bapi
                '''
            }
        }
    }
}