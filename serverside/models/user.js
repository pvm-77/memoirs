// // create a model for user
// import validate from 'validator';

// import mongoose from 'mongoose';

// // user models
// const userSchema =  mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim:true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if (!value.isEmail(value)) {
//             throw new Error('Email is invalid')

//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength:6,
//         trim:true,
//         validate(value){
//             if (value.toLowerCase().includes('password')) {
//             throw new Error('your password not contain word password');

//             }
//         }
//     }





// })

// export default User;



import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);