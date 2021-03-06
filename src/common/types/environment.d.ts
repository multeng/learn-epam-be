
declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DIALECT: string;
  }
}