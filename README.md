# boilerplate-docker-rest

Docker Rest Boilerplate is a back-end template for building fast, scalable and adaptable server.

This project is the simple structure, so you're free to architect your code in the way that you want.

## About This Repository

The project is builded in node with typescript, express, docker and NGINX using load balance for scalable API server.

## Quick start
- Add. .env file inside the app folder

### Running in production:
- It's necessary docker configured in your environment.
- ```--scale api={quantity}``` is the number of servers running.

```
cd your-project

docker compose up --scale api=2
```
### Running the server in local:
- It's necessary node and npm in your environment.
```
cd your-project/app

npm install
npm run dev
```

## Feature
- [x] Typescript
- [x] Nodemon
- [x] Express
- [x] Docker
- [x] NGINX

## To-Do
- [ ] Eslint
- [ ] Prettier
- [ ] Logger
- [ ] CORS
- [ ] Tests
- [ ] CI/CD

### _Feel free to contribute ;)_

