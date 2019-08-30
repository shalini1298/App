import React from 'react';
const sql=require('mssql');
const app= express();
const port =process.env.port || 3000;
const config ={
 email: 'abcde@gmail.com'
  password: '12345';
  database: 'PSLibrary';

};
sql.connect(config).catch(err) => debug(err));