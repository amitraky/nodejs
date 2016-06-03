var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mvc'
});

connection.connect();

connection.query('SELECT * from wkends_users', function(err, rows, fields) {
  if (!err){
	  
      connection.query("insert into wkends_users('userId')values(4215)",function(err,row){
	  if(row){
	     console.log('succ');
	  }else{
		  console.log('error');
	  }});
    console.log('The solution is: ', rows);
}else
    console.log('Error while performing Query.');
});

connection.end();