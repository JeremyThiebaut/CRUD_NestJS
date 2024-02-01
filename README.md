# CRUD_NestJS

## Description

CRUD_NestJS is a simple CRUD application using NestJS, Prisma, and PostgreSQL.

## Start

- Install dependencies to path: **/CRUD_NestJS/backend**

```bash
$ npm install
```

---

- Run docker and run the following command to path: **/CRUD_NestJS**

```bash
$ docker-compose up
```

---

- Run the following command to connect to the docker container.

```bash
$ docker exec -it backend /bin/sh
```

---

- Add the prisma migration.

```bash
$ npx prisma migrate dev --name init
```

If migration exists, you can press "**y**" to continue.

---

- Restart the docker container to apply the migration to the path: **/CRUD_NestJS**

```bash
$ docker-compose restart
```

---

- Run the following command to connect to the docker container.

```bash
$ docker exec -it backend /bin/sh
```

---

- Add the prisma seed.

```bash
$ npx prisma db seed
```

## View

When you run the docker, you can see the following view:

- **Backend**: http://localhost:3000

| route         | method | description   |
| ------------- | ------ | ------------- |
| /api/book     | GET    | Get all books |
| /api/book     | POST   | Create a book |
| /api/book/:id | GET    | Get a book    |
| /api/book/:id | PUT    | Update a book |
| /api/book/:id | DELETE | Delete a book |

- **Prisma-Studio**: http://localhost:5555

Prisma Studio is a visual editor for your database.

## Reset

If you want reset the project, you must remove the node_modules, package-lock.json and db folder in the backend folder to the path: **/CRUD_NestJS/backend**.

Remove migrations folder in the prisma folder to the path: **/CRUD_NestJS/backend/prisma**.

You must delete the docker container and image with this command.

```bash
$ docker-compose down --rmi all
```
