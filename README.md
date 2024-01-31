# CRUD_NestJS

## Description

CRUD_NestJS is a simple CRUD application using NestJS, TypeORM, and PostgreSQL.

## Start

Run docker and run the following command to path: /CRUD_NestJS

```bash
$ docker-compose up
```

Or if you want to run the docker in the background, run the following command.

```bash
$ docker-compose up -d
```

In the other terminal, connect to the docker container.

```bash
$ docker exec -it backend /bin/bash
```

Add the prisma migration.

```bash
$ npx prisma migrate dev --name init
```

If migration exists, you can press "y" to continue.

Add the prisma seed.

```bash
$ npx prisma db seed
```

## View

When you run the docker, you can see the following view:

- Backend: http://localhost:3000
- Prisma-Studio: http://localhost:5555
