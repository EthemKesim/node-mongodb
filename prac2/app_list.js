const mongoose = require('mongoose');
const Employee = require('./employee');

const uri = "mongodb://root:i5H0kw9Ha1PpubQEjS5YWPr2@172.21.112.225:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })