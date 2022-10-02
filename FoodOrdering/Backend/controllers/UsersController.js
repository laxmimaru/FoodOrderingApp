import UsersModel from '../models/Users.js';
import asyncHandler from 'express-async-handler';

export const createNewUser= asyncHandler(async(req,res)=>{
   
    const {  email,
    firstname,
    lastname,
    password
    } = req.body;

    let  newUsersModel =   new UsersModel(
            {
                email : email,
    firstname :firstname,
    lastname : lastname,
    password : password

            }
        )

        newUsersModel.save().then((user)=>
        res.json(user)
        );


}

);