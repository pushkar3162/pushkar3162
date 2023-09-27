var mysql =require('mysql')
const dbconn =mysql.createConnection(
    {
        host:'localhost',
        user: 'root',  
        password:'pj123',
        database:'mydb'
    })
    dbconn.connect(function(err)
    {
        if(err)
        {
        console.log('database failed')    
        }
        else{
            console.log('connection successful')
        }
        
    } )
    var record={name:'vipin',mail:'vipin@gmail.com',pass:'vipin123'}
    dbconn.query('insert into student set?',record,function(err,res)
    {
        if(err)
        {
            console.log(err)
        }
        else{
            console.log('record added')
        }
    })