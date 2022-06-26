pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                yarn 'init -y'
                npm 'view react'
            }
        }
        stage('Hello with subdirectories') {
            steps {
                yarn command: 'init -y', workspaceSubdirectory 'some-subdirectory'
                npm command: 'view react', workspaceSubdirectory 'some-other-subdirectory'
            }
        }
    }
}
