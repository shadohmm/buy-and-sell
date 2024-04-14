import  mysql from "mysql";
//we have just created the connection with the database
//for next step read the server.js file
const connection = mysql.createConnection({
    host: "localhost",
    user: "hapi-server",
    password: "Rajesh@1234",
    database: "buy-and-sell",
});

export const db ={
    connect:()=>connection.connect(),
    query : (queryString, escapedValues)=>
         new Promise((resolve, reject)=>{
        connection.query(queryString, escapedValues, (error, results, fields)=>{
            if(error) reject(error);
            resolve({results,fields});
        });
    }),
    end:() => connection.end(),
}

module.exports = db;
