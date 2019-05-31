import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    '12345',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
        },
        logging: false
    }
)
