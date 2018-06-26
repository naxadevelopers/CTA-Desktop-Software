const sqlite3 = require('sqlite3').verbose();






var database = new sqlite3.Database(`./Files/_db_digitalNepal.db`,(err)=>{
  if(err){
    console.error(err.message);
    alert('The following error occured while reading the database file ' + err.message);
  }

  else if(database.open === true){

    console.log(database);
    console.log('The '+ 'fileName' + ' was successfully read.');

  }
});









database.serialize( function(){

database.each(`SELECT _id_table as id,
                _table_json as name
         FROM _table_main`, (err, row) => {
  if (err) {
    alert(err.message);
  }



console.log(">" + row.id + ": " + row.name);



});



});
