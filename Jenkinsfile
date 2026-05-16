pipeline {
    agent any

    environment {
        APP_NAME = "cloudops-landing-page"
        CONTAINER_NAME = "cloudops-frontend-container"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/vaibhavj20/cloudops-landing-platform.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 3000:3000 \
                $APP_NAME
                '''
            }
        }
    }
}