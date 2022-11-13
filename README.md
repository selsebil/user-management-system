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
##You will need .env file also to include in root folder so here is an example:
```bash
DB_HOST='localhost'
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME='user_management_system'
```
For running locally you will to install Docker and DBeaver/PgAdmin to connect to database
