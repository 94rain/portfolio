---
title: An online collaborative text editor
date: '2020-09-30'
tags: ['Projects']
draft: false
summary: An online collaborative text editor built upon SpringBoot, Mybatis, Websocket and Vue.js
layout: PostSimple
---


Here is an online collaborative text editor built upon SpringBoot, Mybatis, Websocket and Vue.js.
* Demo website: [https://jsy-doc.herokuapp.com](https://jsy-doc.herokuapp.com)
    *  Note: Due to the limitations of the free version of Heroku, it may take **up to 1 minute** to load the page initially to start the service.
    * Public test accounts: (You can also create your own accounts if you wish)
        * `Username: test, Password: Test123456`
        * `Username: test1, Password: Test123456`
* GitHub repo: [https://github.com/94rain/OnlineDocs](https://github.com/94rain/OnlineDocs)

## Deployment

### Docker

To deploy the application with Docker, run `docker-compose up` and configure Nginx to be like [nginx.conf](https://github.com/94rain/OnlineDocs/blob/master/nginx.conf)

### Separately

To run the backend and frontend separately (with maven, jre8 and npm): 

run `mvn package -DskipTests; java -jar ./target/docs-0.0.1-SNAPSHOT.jar` for a production build of the backend, and `npm install; npm run serve` for frontend development (`npm run build` for a production build, needs a http server to host static files)

Default MySQL config: (initial file: [sql.sql](https://github.com/94rain/OnlineDocs/blob/master/sql.sql) )
```
Host: localhost
Port: 3306
Username: mysqluser
Password: mysqlpass
Database: cmd
```


## Customization
* MySQL default data location: `/var/lib/mysql`. You can change it in [docker-compose.yml](https://github.com/94rain/OnlineDocs/blob/master/docker-compose.yml) if you wish.
* Swagger2 UI: `localhost:8082/v2/api-docs`

## Acknowledgement
* The Vue.js frontend UI is adapted from [mortenterhart/collaborative-markdown-editor](https://github.com/mortenterhart/collaborative-markdown-editor/tree/master/frontend) (based on Java EE)
* [Springboot + websocket and vue.js integration](https://blog.csdn.net/BADAO_LIUMANG_QIZHI/article/details/114392573)
* [JWT and inteceptors implementation demo](https://programmersought.com/article/73635537032/)
* ...