import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

import { initDbQueries , dbConfig} from './initDbQueries';


const app = express();
const port = 8080;

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

function insertRecords(connection){
    connection.query(initDbQueries.insertFruits, function (err, result) {
        if (err) throw err;
        console.log("Records inserted",result);
    });
}
function createTable(connection){
    connection.query(initDbQueries.setContext,function (err,result){
        if(err) console.log('failed to set context',err);
        connection.query(initDbQueries.createTable, function (err, result) {
            if (err) console.log('failed to create table',err);
            insertRecords(connection);
        });
    });
}
function createDatabase (connection){
        connection.query(initDbQueries.showTables, function (err, result) {
            if (err) console.log('query error',err);
            console.log(result);
            createTable(connection);
        });

}

createDatabase(connection);

app.use(cors({
    origin: 'localhost:63342',
    credentials: false
}));

app.get('/*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/fruits', (req, res) => {
        connection.query(initDbQueries.selectFruits, function (err, result, fields) {
            if (err) console.log('api query error',err);
            console.log('got fruits',result,fields);
            res.json(result);
        });
});
app.listen(port, () => {
    console.log(`App server now listening to port ${port}`);
});