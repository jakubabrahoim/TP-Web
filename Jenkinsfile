    pipeline {
        
        agent any
        
        environment {
            PATH = "/opt/docker:$PATH"
        }
    
        stages {
            stage("Clean workspace"){
                steps{
                    script {
                        mattermostSend (
                            color: "#2A42EE", 
                            message: "Build STARTED: ${env.JOB_NAME} #${env.BUILD_NUMBER} (<${env.BUILD_URL}|Link to build>)"
                        )
                    }
                    cleanWs()
                }
            }
            // stage("Pull repository"){
            //     steps{
            //         withCredentials([sshUserPrivateKey(credentialsId: "asicde-git", keyFileVariable: 'keyfile')]) {    
            //             script{
            //                 sh "GIT_SSH_COMMAND='ssh -i ${keyfile} -o IdentitiesOnly=yes' git clone -b dev git@github.com:ASICDE/website.git ."
            //             }
            //         }
            //     }
            // }
            stage('Build app') {
                steps {
                    script {
                        nodejs(nodeJSInstallationName: 'nodejs') {
                            sh "npm install"
                            sh "npm run build"
                        }
                    }
                }
            }
            stage('Build & push docker images') {
                steps {
                    script {
                            withCredentials([usernamePassword(credentialsId: 'asicde-nexus', usernameVariable: 'user', passwordVariable: 'pass')]) {
                            sh "docker login -u ${user} -p ${pass} http://localhost:8082"
                            
                            def frontendImage = docker.build("localhost:8082/asicde/website:${env.BUILD_ID}")
                            sh "docker image tag localhost:8082/asicde/website:${env.BUILD_ID} localhost:8082/asicde/website:latest"
                            sh "docker push localhost:8082/asicde/website:${env.BUILD_ID}"
                            sh "docker push localhost:8082/asicde/website:latest"
                            // frontendImage.push()
                            // frontendImage.push('latest')
                        }
                    }
                }
            }
        }
        post {
            failure {
                mattermostSend (
                    color: "danger", 
                    message: "Build FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER} (<${env.BUILD_URL}|Link to build>)"
                )
            }
            success {
                mattermostSend (
                    color: "good", 
                    message: "Build SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER} (<${env.BUILD_URL}|Link to build>)"
                )
            }
        }
    }