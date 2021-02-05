
export const initDbQueries = {
    createDb: "CREATE DATABASE ENTITIES;",
    setContext: "USE ENTITIES",
    createTable: "CREATE TABLE FRUITS (name VARCHAR(25));",
    insertFruits: "INSERT INTO FRUITS (name) VALUES ('Mango'),('Orange'),('Grape'),('Pomegranate');",
    selectFruits: "SELECT * from FRUITS;"

}
