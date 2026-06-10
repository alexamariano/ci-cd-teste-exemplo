pipeline{
    agent any

    stages{
        stage('Instalação das dependências'){
            steps{
                echo "Instalando os pacotes node..."
                bat 'npm install'
            }
        }

        stage('Execução dos Testes'){
            steps{
                echo "Executando os testes..."
                bat'npm test'
            }
        }

    }

    post {
        success {
            echo "Build e testes executados com sucesso!"
        }
        failure {
            echo "Falha na execução do pipeline"
        }
    }


}