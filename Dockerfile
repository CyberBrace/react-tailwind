pipeline {

  environment {
    dockerimagename = "cyberbrace/react-skp"
    dockerImage = ""
  }

  agent any

  stages {
    
    stage('Checkout Source') {
      steps {
        git branch: 'devops/test-skp', credentialsId: 'keloyeleye-git', url: 'https://github.com/CyberBrace/react-tailwind.git'
      }
    }
    
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhublogin'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deploymentservice.yaml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
