const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:JfyWPQ03e0HGposPfGzIHvtq@localhostu:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })