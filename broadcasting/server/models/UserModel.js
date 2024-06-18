const mongoose = require('mongoose');
const validator = require('validator')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        index: true
    },
    password:{
        type: String,
        required: true
    },
})


UserSchema.statics.login = async function (username, password){
    if(!username || !password){
        throw Error('All field should br filled');
    }

    const user = await this.findOne({username})
    if(!user){
        throw Error("username is incorrect/Not found");
    }
    if(password != user.password){
        throw Error("PassWord is invalid")
    }

    return user;
}

UserSchema.statics.signup = async function (username,password){
    if(!username || !password){
        throw Error('All field should br filled');
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Please Enter strong Password");
    }

    const exists = await this.findOne({ username })

  if (exists) {
    throw Error('Username already in use')
  }


    const user = await this.create({username,password})
    return user;
}

module.exports = mongoose.model('user',UserSchema)