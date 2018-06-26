
const electron = require('electron');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const ipc = electron.ipcRenderer;
const {dialog} = require('electron').remote;
const path = require('path');


document.getElementById('import').addEventListener('click', function(){



  var db = new sqlite3.Database("/home/aaditya/Desktop/Untitled Folder/electron-boilerplate-sqlite/app/Files/chinook.db",(err)=>{

    if(err){
      console.error(err.message);
    }
    else if(db.open === true){

      alert("the destination file connection is ready.");
      console.log(db);

    }
  });

  let sql = `SELECT DISTINCT Name name FROM playlists
             ORDER BY name`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.name);
    });
  });









db.close((err)=>{
if(err){
  console.error(err.message);
}
else if(db.open === false){
  console.log('the database successfully closed');
  console.log(db);
}
});


});
