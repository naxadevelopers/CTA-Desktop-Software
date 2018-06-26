const electron = require('electron');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const ipc = electron.ipcRenderer;
const {dialog} = require('electron').remote;
const path = require('path');
const {BrowserWindow} = require('electron').remote;




var db = new sqlite3.Database('/home/aaditya/Desktop/DBTB.db',(err)=>{

  if(err){
    console.error(err.message);
  }
  else if(db.open === true){


    console.log(db);
    alert("the destination file connection is ready.");
  }
});


let sql = `CREATE TABLE _table_main(_id_table INTEGER PRIMARY KEY AUTOINCREMENT ,_table_id Text not null ,_table_Name Text not null ,_table_date Text not null ,_table_json Text not null ,_table_Gps Text not null ,_table_photo Text not null ,_table_status Text not null ,_delete_flag Text not null )`;

  db.serialize(function(){
    db.run(sql);
     console.log('tables were created');
  });
