pipeline{
    agent any

    stages{
        stage('Clonar repositorio'){
            steps{
                git brand: 'main', credentialsId: 'git-jenkins', url: 'https://github.com/SebastianAram/node-jenkins.git'
            }
        }
        stage('Construir imagen docker'){
            script{
            steps{
                withCredentials([
                    string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                ]){
                    docker.build('proyectos:v1', '--build-arg MONGO_URI=${MONGO_URI} .')
                }
            }
            }
        }
        stage('Desplegar contenedores docker'){
            steps{
                script{
                    withCredentials([
                    string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]){
                    sh """
                        sed 's|\\${MONGO_URI}|${MONGO_URI}|g' docker-compose.yml > docker-compose-update.yml
                        docker-compose -f docker-compose-update.yml up -d 
                    """
                }
                    
                }
            }
        }
    }
}