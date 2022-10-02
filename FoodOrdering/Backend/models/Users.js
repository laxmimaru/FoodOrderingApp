import mongoose from "mongoose";

const UsersSchema = mongoose.Schema(
    {


        email: {
            type: String
        },
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        password: {
            type: String
        }

    }
)

const UsersModel = mongoose.model('users', UsersSchema);

export default UsersModel;