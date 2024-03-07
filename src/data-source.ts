import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import 'dotenv/config';

const host = process.env.DB_HOST as string;
const port = Number(process.env.DB_PORT);
const user = process.env.DB_USER as string;
const password = process.env.DB_PASS as string;
const db = process.env.DB_NAME as string;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: host,
    port: port,
    username: user,
    password: password,
    database: db,
    synchronize: true,
    logging: true,
    entities: [Product],
    // migrations: [],
    // subscribers: [],
});
