const electron = require('electron');
const { app, BrowserWindow, Menu, dialog, webContents } = electron;

const path = require('path');
const url = require('url');
const ipc = electron.ipcMain;
const sqlite3 = require('sqlite3').verbose();



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function openFile() {


  dialog.showOpenDialog(function(fileNames){

      if( fileNames === undefined ){

        alert('No file was Selected');
        return ;

        }

  var fileName = fileNames[0];

var database = new sqlite3.Database(fileName,(err) => {
  if(err){
    console.error(err.message);
    alert('The following error occured while reading the database file ' + err.message);
  }

  else if(database.open === true){

    console.log(database);
    console.log('The '+ fileName + ' was successfully read.');

  }
});



database.serialize( function (){

database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "EWS Equipment Status Recording"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);


});


database.all(`SELECT _table_Name as name, _table_json as json FROM _table_main WHERE _table_Name = "Crop Depredation"`, (err, rows) =>{
  if(err) {
    console.log(err.message);
  }

  mainWindow.webContents.send('query:ResultRows', rows);
});


database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Wetland Management"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});


database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Elephant Status Recording"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});

database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Species Occupancy Survey"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});

database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Snow Leopard Prey Base Monitoring"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});

database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Scat Collection Details"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});

database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Livestock Depredation"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});


database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Institutional Support"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});


database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "HWC Mitigation Support"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});



database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "HWC Endowment Fund"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});


database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Forest Protection"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});


database.all(`SELECT _table_Name as name, _table_json as json
           FROM _table_main WHERE _table_Name = "Elephant Activity Recording"`, (err, rows) => {

    if (err) {
      console.log(err.message);
    }


mainWindow.webContents.send('query:ResultRows', rows);

});

});





});
}



const menuTemplate = [
  {
    label : 'File',
    submenu : [
      { label: 'Open a file',
    click(){
        openFile();
      }
  },
      {
        label: 'Quit',
        click(){
          app.quit();
        }
      }
    ]
  }
];


const mainMenu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(mainMenu);



function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({});

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'read-data-new.html'),
    protocol: 'file:',
    slashes: true
  }));







  //Open the DevTools.
 mainWindow.webContents.openDevTools();



  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });
}







// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
