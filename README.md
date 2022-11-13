## Installation

```bash
$ npm install
```

## Running the app

```bash
$docker-compose up

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
You will need .env file also to include in root folder
It should look like this:
```bash
DB_HOST='localhost'
DB_PORT=5432
DB_USERNAME=
DB_PASSWORD=
DB_NAME='user_management_system'
```
