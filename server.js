import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { initDbQueries } from './initDbQueries';


const app = express();
const port = 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test1234'
});

app.use(cors());
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

// function insertRecords(connection){
//     connection.query(initDbQueries.insertFruits, function (err, result) {
//         if (err) throw err;
//         console.log("Records inserted");
//         connection.end(function (error){
//             if(error) console.log('failed to disconnect from DB');
//             else console.log('Disconnected from DB');
//         });
//     });
// }
// function createTable(connection){
//     connection.query(initDbQueries.setContext,function (err,result){
//         if(err) console.log('failed to set context',err);
//         connection.query(initDbQueries.createTable, function (err, result) {
//             if (err) throw err;
//             insertRecords(connection);
//         });
//     });
// }
// function createDatabase (connection){
//     connection.connect(function(err) {
//         if (err) console.log('connection error',err);
//         else console.log("Connected!");
//         connection.query(initDbQueries.createDb, function (err, result) {
//             if (err) console.log('query error',err);
//             createTable(connection);
//         });
//     });
// }
//
// createDatabase(connection);

app.get('/api/fruits', (req, res) => {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query(initDbQueries.selectFruits, function (err, result, fields) {
            if (err) throw err;
            console.log('got fruits',result);
            res.send(result);
        });
    });
});

app.listen(port, () => {
    console.log(`App server now listening to port ${port}`);
});