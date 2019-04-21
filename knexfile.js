// Update with your config settings.
const localPgConnection = {
    host: "",
    database: "",
    user: "",
    password: ""
}

const dbConnection = process.env.DATABASE_URL || localPgConnection

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./dev.sqlite3"
        },
        useNullAsDefault: true, //not needed for production, only sqlite3
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    },

    // staging: {
    //     client: "postgresql",
    //     connection: {
    //         database: "my_db",
    //         user: "username",
    //         password: "password"
    //     },
    //     pool: {
    //         min: 2,
    //         max: 10
    //     },
    //     migrations: {
    //         tableName: "knex_migrations"
    //     }
    // },

    production: {
        client: "pg",
        connection: dbConnection + "?ssl=true", // can be an object or a string
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    }
}
