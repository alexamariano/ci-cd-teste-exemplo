pipeline{
    agent any

    stages{
        stage('Instalação das dependências'){
            steps{
                bat 'npm install'
            }
        }

        stage('Execução dos Testes'){
            steps{
                bat'npm test'
            }
        }

    }



}