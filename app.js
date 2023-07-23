const express = require('express');
const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');



let app = express();

const sequelize = new Sequelize('u853547394_zplay', 'u853547394_zplayUser', 'nix8T2DHnJG4rssb', {
  host: '89.117.7.166',
  dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

app.get('/',async (req,res)=>{
    try {
        await sequelize.authenticate();
        const users = await sequelize.query("SELECT * FROM `usuarios`", { type: QueryTypes.SELECT });
        res.status(200).json(`{"users":${users}}`);
      } catch (error) {
        res.status(307).json('{"status":"Não autorizado"}');
    }
   
})

app.listen(3000,()=>{
    console.log("rodando");
})