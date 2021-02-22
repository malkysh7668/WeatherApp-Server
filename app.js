const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require("./routes/api")
var cookieParser = require('cookie-parser');
var path = require('path');
const mongoose = require('mongoose')
const cors = require('cors');

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb+srv://malkysh:NKHAHI7668@cluster0.ouj8x.mongodb.net/myDB?retryWrites=true&w=majority', connectionParams)
mongoose.connection.on('connected', () => { console.log('MongoDB connected!') })

var urlencoded_body_parser = bodyParser.urlencoded({
    extended: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(urlencoded_body_parser);
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser);

// app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.post("/users", (req, res) => {
//     console.log("hello "+req.body.first_name);
//   });
app.use('/', router);
app.listen(5000, () => { console.log('connected') });

// app.post('/add', (req, res) => {
    //     userCollection.insertOne(req.body)
    //       .then(result => {
    //         console.log(result)
    //       })
    //       .catch(error => console.log(error))
    //   })

    // function main(){

//     //prms;
//     const options={
//         method:'GET',
//         url:"https://restcounrgstydrtries.eu/rest/v2/alpha/col"
//     }

//     // request(options,function(err,res,body){
//     //     if(err){
//     //         console.error('error:', err);
//     //     }
//     //     else{
//     //      console.log('statusCode:', res && res.statusCode);
//     //      console.log('body:', body);
//     //     }

//     // })

//     return new Promise(function(resolve,reject){
//         request(options,function(err,res,body){
//             if(err){
//                 reject(err);
//             }
//             // console.log('statusCode:', res && res.statusCode);
//             // console.log('body:', body);
//             resolve(body);
//         })
//     }).then((body)=>{
//         console.log('body:', body);
//     }).catch((error)=>{
//         console.error('error:', error);
//     })
// }

// main();
