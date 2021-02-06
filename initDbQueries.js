export const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'test1234',
    database: 'mysql', // default database present
};
export const initDbQueries = {
    showTables: "SHOW TABLES;",
    setContext: "USE mysql;",
    createTable: "CREATE TABLE IF NOT EXISTS FRUITS (name VARCHAR(25));",
    insertFruits: "INSERT INTO FRUITS (name) \n" +
        "SELECT * FROM ( \n" +
        "SELECT 'Mango' UNION ALL \n" +
        "SELECT 'Orange' UNION ALL \n" +
        "SELECT 'Grape' UNION ALL\n" +
        "SELECT 'Pomegranate') AS DATA \n" +
        "WHERE NOT EXISTS (SELECT * FROM FRUITS);",
    selectFruits: "SELECT * from FRUITS;"

}
