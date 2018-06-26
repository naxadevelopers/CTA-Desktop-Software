const electron = require('electron');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const ipc = electron.ipcRenderer;
const {dialog} = require('electron').remote;
const path = require('path');


document.getElementById('close-connection').addEventListener('click',function(){



  database.close((err)=>{
    if(err){
      console.error(err.message);
    }
    console.log(database);
  });

  db.close((err)=>{
    if(err){
      console.error(err.message);
    }
    console.log(db);
  });


});
