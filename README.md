# Loopback docker boilerplate #

A boilerplate for a application using loopback

### Features ###

* User Registration
* Basic Authentication with username and password
* Admin use [admin-on-rest](https://github.com/marmelab/admin-on-rest)
* Oauth 2.0 Authentication
  * Facebook

### Pre-requisites ###

* [Docker (at least 1.10)](https://www.docker.com/)
* [Docker-compose (at least 1.6)](https://docs.docker.com/compose/install/)

### Getting Started ###

To get up and running, simply do the following:

    $ git clone https://github.com/minhuyen/loopback-docker-boilerplate.git
    $ cd loopback-docker-boilerplate

    # build docker images
    $ docker-compose build 

    $ docker-compose up

* api explorer: http://localhost:3000/explorer
* admin: http://localhost:3000
