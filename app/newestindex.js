"use strict";
const electron = require('electron');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const ipc = electron.ipcRenderer;
const {dialog} = require('electron').remote;
const path = require('path');


var database = new sqlite3.Database(`/home/aaditya/Desktop/chinook.db`,(err)=>{
  if(err){
    console.error(err.message);
  }


console.log(database);

if(database.open == true) {



    database.serialize(function() {


    database.run("CREATE TABLE KHAI (info TEXT)");

    var statement = database.prepare("INSERT INTO KHAI VALUES (?)");
    for (var i = 0; i < 10; i++) {
        statement.run("Ipsum " + i);
    }
    statement.finalize();

    database.each("SELECT rowid AS id, info FROM KHAI", function(err, row) {
        console.log(row.id + ": " + row.info);

    });

});
}


});
