
pipeline {

agent {
    docker { image 'node:8.11' }
}
    
stages {
    stage('Test') {
        steps {
            sh 'yarn install'
        }
    }
}
