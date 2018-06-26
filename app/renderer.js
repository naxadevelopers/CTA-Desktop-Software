const electron = require('electron');
const {ipcRenderer} = require('electron');


var ROWS = document.getElementById("Categories");


ipcRenderer.on('query:ResultRows',(event,rows) =>{


console.log(rows);

var btn = document.createElement("BUTTON");
var t = document.createTextNode(rows[0].name);       // Create a text node
btn.appendChild(t);
document.body.appendChild(btn);








//var item = document.createElement("li");

//
  //  item.textContent = "  " + smallJson.tablename + ":   " + JSON.stringify(smallJson.formdata);

  //    ROWS.appendChild(item);

        // JsonData = JSON.parse(row.json);
        // console.log(JsonData);

});
