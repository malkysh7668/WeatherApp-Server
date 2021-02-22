const mongoose = require('mongoose')
const History = require('../models/History');

//read

// const getAll = (req, res) => {
//     history.find({}, function (err, result_e) {
//         console.log(result_e)
//         return res.status(200).json({
//             result_e
//         })
//     })
// }
const getHistoryForUser = async (req, res) => {
    debugger
    let histories;
    try {
        debugger
        histories = await History.find({"userId":req.params.userId})//.populate({path:'userId',match:req.params.userId})
        console.log(histories)
        if(histories==null){
            res.status(200).json(histories)
        }
        else
        res.status(200).json({ res:histories })

    }
    catch (error) {
        debugger
        console.log("error")
        res.status(400).json({ errorMessage: error })
    }
}

const getAllHistory = async (req, res) => {
    debugger
    let histories;
    try {
        debugger
        histories = await History.find()
        console.log(histories)
        //   '5fe37001a1b7dbdea5b9f736'
        // console.log(User)
        // console.log("url = ", req.url, "  req-body  = ", req.body, "res-type  = ", res.get('Content-Type'));
        //   res.sendFile(indexPath);
        res.status(200).json({ res:histories })
    }
    catch (error) {
        debugger
        console.log("error")
        res.status(400).json({ errorMessage: error })
    }
}

const getHistory = async (req, res) => {
    console.log(req.params.id);
    debugger
    let history;
    try {
        debugger
        history = await History.findById(req.params.id)
        debugger
        //   user=JSON.stringify(user)
        if (history == null) {
            res.send("could not have history")
        }
        return res.json({ status: 200, theHistory: history })
        //res.status(200).json({userName:user.name})
    }
    catch (error) {
        debugger
        res.status(400).json({ errorMessage: error })
        //res.status(400).send("error")
    }
}

//create
const saveHistory = async (req, res) => {
    const { dateTime, userId, cityName,country,description,temp } = req.body
    let currentHistory = new History({
        dateTime,userId,cityName,country,description,temp
    });
    // console.log(currentHistory);

     currentHistory.save().then(() => {
        console.log(currentHistory)
        return res.status(200).json({
            currentHistory
        })
    }).catch((err)=>{res.json(err)});

         //(function (err, history) {
    //     if (err) {
    //         console.log("error")
    //         res.status(400).send(err);
    //     }
    //     else {
    //         console.log("ok..")
    //         res.status(200).json({ new_history: history })
    //     }
    // })
}

module.exports = { getHistory, saveHistory,getAllHistory,getHistoryForUser };
// getAllUsers, getAll, 