
const electron = require('electron');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const ipc = electron.ipcRenderer;
const {dialog} = require('electron').remote;
const path = require('path');
const {BrowserWindow} = require('electron').remote


document.getElementById('select-file').addEventListener('click', function(){



dialog.showOpenDialog(function(fileNames){

    if(fileNames === undefined){

      alert('No file was Selected');
      return;
      }

var fileName = fileNames[0];

alert(fileName + " was selected.");

document.getElementById('actual-file').value = fileName;


document.getElementById('read').addEventListener('click', function(){

  var database = new sqlite3.Database(fileName,(err)=>{
    if(err){
      console.error(err.message);
      alert('The following error occured while reading the database file ' + err.message);
    }

    else if(database.open === true){

      console.log(database);
      console.log('The '+ fileName + ' was successfully read.');

    }
});






var rows = document.getElementById("DB");

console.log(rows);

database.serialize( function(){

  database.each(`SELECT _id_table as id,
                  _table_json as name
           FROM _table_main`, (err, row) => {
    if (err) {
      alert(err.message);
    }
    var item = document.createElement("li");



    item.textContent =  ">" + row.id + ": " + row.name;

    console.log(item.textContent);


    rows.push(item.textContent);

  });



});











});
});
});
