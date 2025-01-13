import { Sequelize } from 'sequelize-typescript';
import * as process from "process";
export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
            });
            sequelize.addModels([

            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];