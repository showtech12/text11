var express = require('express')
var bodyParser = require('body-parser')
const app = express();
const port = 4000;

let myArr = [];
//console.log(myArr)
app.get('/',(req,res)=>{
    res.send('<h1> hello World </h1>');
});

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/add',(req,res)=>{

    //console.log(req.body);
    //res.send("Add")
   

    myArr.push(req.body);
    
        myArr.map((item)=>{
                console.log(item);
        });


   res.send("added")

})


app.post('/rmv',(req,res)=>{

    
    myArr.slice(0)
   // myArr.push(req.body);
   // console.log(myArr)
   myArr.map((item)=>{
    console.log(item);
   })
    res.send("Remove")
})



app.listen(port,()=>{
    console.log(`listen ${port}`);
})