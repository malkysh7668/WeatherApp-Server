const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const User = require('../models/User');

//read


const getAll = (req, res) => {
    User.find({}, function (err, result_e) {
        console.log(result_e)
        return res.status(200).json({
            result: result_e
        })
    })
}

const getAllUsers = async (req, res) => {
    let users;
    try {
        debugger
        users = await User.find()
        //   '5fe37001a1b7dbdea5b9f736'
        console.log(User)
        console.log("url = ", req.url, "  req-body  = ", req.body, "res-type  = ", res.get('Content-Type'));
        //   res.sendFile(indexPath);
        res.status(200).json({ users })
    }
    catch (error) {
        debugger
        res.status(400).json({ errorMessage: error })
    }
}

/*
module.exports = {

  getAllData: (req, res) => {
      CopyItem.find().then((dataItem) => {
          res.status(200).json({
              dataItem
          })
      }).catch(error => {
          console.log("error 5")
          res.status(500).json({
              error
          })
      });

      console.log("server!!!!")
*/
const getUserByEmail = async (req, res) => {
    debugger
    try {
        let user = await User.findOne({ email: req.params.email})
        // console.log(req.params.pass, req.params.user_name)
        //   .populate({path:'user_name',match:'shosha'});
        // console.log(user)
        if (user == null) {
            console.log("!!!!!!!!!!")
            res.status(400)
            res.send("could not have user")
        }
        else {
            console.log("___________")
            res.send(user)
            // res.status(200).json({  user })
        }
        return user
    } catch (error) {
        // console.log("error.errorMessage")

        console.log(error.errorMessage)
        res.status(400).json({ err: error.errorMessage })

        //   res.send("cannot find user: ", error.message)
    }

}

const getUserLogin = async (req, res) => {
    console.log("!!!")
    debugger
    try {
        let user = await User.findOne({ email: req.params.email, pass: req.params.pass })
        // console.log(req.params.pass, req.params.email)
        //   .populate({path:'user_name',match:'shosha'});
        // console.log(user)
        if (user == null) {
            res.status(400)
            res.send("could not have user")
        }
        else {
            console.log("!!")
            
            res.status(200).send( user )
        }
        return user
    } catch (error) {
        console.log("error.errorMessage",error)

        console.log(error.errorMessage)
        res.status(400).json({ err: error.errorMessage })

        //   res.send("cannot find user: ", error.message)
    }

}
// let user;
// try {
//     debugger
//     user = await User.findOne({user_name:req.params.user_name,pass:req.params.pass})
//     debugger
//     if (user == null) {
//         res.send("could not have user")
//     }
//     return res.json({ status: 200, theUser: user })
// }
// catch (error) {
//     debugger
//     res.status(400).json({ errorMessage: error })
// }

const getUser = async (req, res) => {
    console.log(req.params.id);
    debugger
    let user;
    try {
        debugger
        user = await User.findById(req.params.id)
        debugger
        //   user=JSON.stringify(user)
        if (user == null) {
            res.send("could not have user")
        }
        return res.json({ status: 200, theUser: user })
        //res.status(200).json({userName:user.name})
    }
    catch (error) {
        debugger
        res.status(400).json({ errorMessage: error })
        //res.status(400).send("error")
    }
    // try {
    //   user = await User.findById(req.params.id);
    //   if (user == null) {
    //     res.send("could not have user");
    //   }
    //   return res.json({ status: 200, myUser: user })
    // } catch (error) {
    //   res.status(400).json({ myMessage: error.message })
    // }
    // return res.json({ myUser: user });
}


//create
const saveUser = async (req, res) => {
    // console.log(req.body.json())
    // console.log(req.body.name)
    // console.log(mongoose.connection.readyState)
    // console.log(req.body.first_name)

    const { first_name, last_name, email, pass } = req.body
    const currentUser = new User({
        first_name,
        last_name,
        email,
        pass
    });
    // console.log(currentUser);
    currentUser.save().then(() => {
        console.log(currentUser)
        return res.status(200).json({
            currentUser
        })
    })
    .catch((err)=>{res.json(err)});
    // console.log("OK",req)
    // res.send("ok")

    //צורה 1
    //   try {
    //     await currentUser.save()
    //     res.status(200).json({ new__user: currentUser })
    //   } catch (error) {
    //     res.send("cannot save user: ", error.message)
    //   }

    //צורה 2
    //   currentUser.save()
    //   .then((user) => {
    //     res.status(200).json({ user: user })
    //   }).catch((error) => {
    //     res.status(400).send(error);
    //   }) 

    //צורה 3
    // currentUser.save(function (err, user) {
    //     if (err) {
    //         console.log("error")
    //         res.status(400).send(err);
    //     }
    //     else {
    //         console.log(`ok..${req.body.first_name}`)
    //         res.status(200).json({ new_user: user })
    //     }
    // })
}

module.exports = { getUser, getAllUsers, getAll, saveUser, getUserLogin ,getUserByEmail};