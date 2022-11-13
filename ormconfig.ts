const loadEnv = (env) => require('dotenv').config({path: `${env}`});
loadEnv(`.env`);

export = {
  host: process.env.DB_HOST,
  type: 'postgres',
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/modules/**/**.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: false,
  cli: {
    migrationsDir: 'migrations',
  },
};
