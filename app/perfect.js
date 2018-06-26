"use strict";
const electron = require('electron');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const ipc = electron.ipcRenderer;
const {dialog} = require('electron').remote;
const path = require('path');


document.getElementById('select-file').addEventListener('click', function(){

dialog.showOpenDialog(function(fileNames){

    if(fileNames === undefined){

      alert('No file was Selected');
      return ;
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
   console.log(database);
    console.log('The '+ fileName + ' was successfully read.');

});







database.close((err)=>{
  if(err){
    console.error(err.message);
  }
  else if(database.open === false){

    console.log(database);
    console.log('The '+ fileName +' was successfully closed.' );
}
});




});
});
});
