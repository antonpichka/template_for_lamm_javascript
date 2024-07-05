- https://github.com/antonpichka/library_architecture_mvvm_modify/tree/main/package#architectural-objects   
- https://github.com/antonpichka/library_architecture_mvvm_modify/labels

---

- After setup. Everything after this message can be deleted. Even the message itself

## Project setup

- [api_template_for_lamm_javascript](https://github.com/antonpichka/template_for_lamm_javascript#api_template_for_lamm_javascript)
- [Docker](https://github.com/antonpichka/template_for_lamm_javascript#docker)

### api_template_for_lamm_javascript

- If you need to change the application name from 'api_template_for_lamm_javascript' to 'api_${your_name}':
- - 'api_template_for_lamm_javascript/package.json':
- - - '"name": "api_template_for_lamm_javascript"'

### Docker

#### Commands

- docker-compose config
- - Check for errors
- docker ps -a
- - Check for any running container or container that is not working
- docker images
- - Used to display a list of Docker images that are on your machine. This allows you to see all the images you've uploaded or created, along with their sizes and other details.
- docker-compose up -d
- - The "docker-compose up -d" command not only creates containers, but can also update them if changes have been made to the docker-compose.yml file. When this command is executed, Docker Compose checks the current state of the containers and updates them, if necessary, according to the new settings specified in the docker-compose.yml file.
- - Runs all services described in the docker-compose.yml file in the background. This allows you to run multiple containers at the same time using the settings defined in the docker-compose.yml file.
- docker stop ${container_name}

#### Inside the container

##### MySQL 

- mysql -h localhost -P 3306 --protocol=tcp -uadmin -pletmein
- SHOW DATABASES;
- USE exampledb;
- SHOW TABLES;
- DESC users;
- SELECT * FROM users;