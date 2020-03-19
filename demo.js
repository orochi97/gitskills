var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/node';    
 
var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('score');
  //查询数据
  var whereStr = {};
  collection.find(whereStr).toArray(function(err, result) {
    if(err) {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  selectData(db, function(result) {
    console.log(result);
    let sum = 0;
    result.forEach((data) => {
        sum += data.score;
    });
    console.log(`您的平均分为${sum/result.length}分`);
    db.close();
  });
});
// add some new
// this is remote dev branch
// this is feature
// this is loacl feature
// this is loacl feature new