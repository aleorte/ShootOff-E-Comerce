const express = require("express") ;
const userRouter = express.Router() ;

const { Users } = require("../models")
const passport = require("passport");



userRouter.post("/register", (req, res) => {
    Users.create(req.body).then((user) => res.status(201).send(user))
});

userRouter.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user)
});

userRouter.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
})

userRouter.get("/me", (req, res) => {
    if(!req.user){
        return res.sendStatus(404);
    }else{ 
        res.send(req.user)
    }

})

userRouter.put("/me/:id" , (req, res) => {
   
    Users.update(req.body, {
       where: {
           id: req.params.id
       },
       returning: true,
       plain: true
   }).then(result => {
    const user = result[1]
    res.json({
        messege: "upadted successfully",
        user,
    })
   })
   .catch(() => res.sendStatus(500))
})

userRouter.get("/admin/:id/users", (req, res) => {
    Users.findByPk(req.params.id)
        .then((user) => {
            if(user.admin === true){
                Users.findAll()
                   .then((users) => res.status(200).json(users))
           }else{
              res.sendStatus(401)
           }
        })
        .catch(err => console.log(err))
})

userRouter.delete("/admin/:adminId/remove/:id", (req, res) => {
    Users.findByPk(req.params.adminId)
        .then((user) => {
            if(user.admin === true){
                Users.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                res.sendStatus(204)
            }else{
                res.sendStatus(401)
            }
        })
        .catch(err =>  console.log(err))
})

userRouter.put("/admin/:adminId/add/:id", (req, res) => {
    Users.findByPk(req.params.adminId)
        .then((user) => {
            if(user.admin === true){
            Users.findByPk(req.params.id)
            .then(newAdmin => {
                newAdmin.update({
                    admin: !newAdmin.admin
                       
                })
            })
            }
        })
        .then(() => res.sendStatus(204))
        .catch(() =>  res.sendStatus(500))
})

     


module.exports = userRouter ;

