pipeline {
    agent any
    environment {
        registry = "rachit01/my-nodejs-app" // DockerHub repository name
    }
    stages {
        stage('Fetch from GitHub') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/rachit1a/js-calculator.git'
            }
        }
         stage('Install Dependencies') {
            steps {
                dir('root/js-calculator') { // Replace with your project path
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                dir('root/js-calculator') {
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                dir('root/js-calculator') {
                    sh 'npm test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(registry)
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker') {
                        docker.image(registry).push()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "docker run -d -p 3000:3000 ${registry}:latest"
            }
        }

