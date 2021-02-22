const router=require("express").Router();
const bodyParser = require('body-parser')

const {getUser,getAllUsers,getAll,saveUser,getUserLogin,getUserByEmail}=require("../controllers/user")
const {getHistory,saveHistory,getAllHistory,getHistoryForUser}=require("../controllers/history")
// const task=require("../controllers/task")
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()
router.get('/getUserById/:id',getUser);
router.get('/getUserByEmail/:email',getUserByEmail);
router.get('/getUserLogin/:email/:pass',getUserLogin);
router.get('/getAll',getAll);
router.get('/getAllUsers',getAllUsers);
// router.post('/newUser',jsonParser,saveUser);
router.post('/newUser',saveUser);
// router.patch('/updateUser',user.updateUser);
// router.delete('/deleteUser/:id',user.deleteUser);
router.post('/saveHistory',saveHistory);
router.get('/getHistory',getHistory);
router.get('/getAllHistory',getAllHistory);
router.get('/getHistoryForUser/:userId',getHistoryForUser);

module.exports=router;
