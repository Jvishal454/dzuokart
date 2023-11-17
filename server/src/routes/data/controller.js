import { all } from ".";
import { connectMongodb } from "../../services/mongodb/db-controller"
import { ProductCollection, UserCollection } from "../../services/mongodb/mongodb";

var path = require("path");
var bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); 


export async function getProducts(req, res) {
    try {
        const products = await ProductCollection.find().lean(); // Retrieve all documents in the collection
        // console.log('all products',products)
        res.json(products); // Send the data as JSON
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

export async function getProductItem(req, res) {
  try{
    const pid = req.query.pid;
    console.log('pid is', pid);
    const product = await ProductCollection.findOne({ id: pid }).lean();
    res.json(product); // Send the matching product as JSON
  }
  catch(error) {
    console.log(error);
    res.status(404).json({ message: 'Product not found' });
  }
}

export async function signup(req, res) {
  try {
    const data = {
      name: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    }

    // check if user already exists
    const existingUser = await UserCollection.findOne({email: data.email});

    if (existingUser){
      res.status(200).json({ message: 'User Already Exists! Please Login.' });
      // res.status(409).json({message: 'User Already Exists! Please Login.'})
    }
    else{
      // hash password using bcrypt 
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.password, saltRounds)
      data.uhPassword = data.password; //unhashed password
      data.password = hashedPassword; //replace password with hashed password

      const userData = await UserCollection.insertMany(data);
      const hasId = userData.some(obj => obj && obj._id);
      if (hasId){
        res.status(200).json({ message: 'Registered Sucessfully!'})
        console.log('Inserted User Data - ',userData);
      }
      else{
        res.status(200).json({message: 'Please Try Again!!'})
        console.log('Registration Failed! Please Try againn', userData);
      }
    }
  }
  catch(error) {
    res.status(404).json({ message: 'couldnt signup'})
  }
}


export async function login(req, res) {
  try {
    const check = await UserCollection.findOne({email: req.body.email});
    
    if (check){
      const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
      if (isPasswordMatch){
        const secretKey = crypto.randomBytes(32).toString('hex'); // 256 bits
        const token = jwt.sign({ userId: check.email }, secretKey, { expiresIn: '1h' });
        res.status(200).json({message: 'Welcome', token})
      }
      else{
        res.status(401).json({ message: 'Wrong Password! Please try'})
      }
    }
    else{
      res.status(200).json({message: 'User Not Found! Please Signup'});
    }
  }
  catch(error){
    res.status(404).json({ message: 'couldnt Login! Try Again.'})
  }
}

export async function userDetail(req, res){
  const userEmail = req.query.email;
  const userData = await UserCollection.findOne({email: userEmail});
  const user = {
    name: userData.name,
    email: userData.email
  }
  // console.log(user)
  
  res.status(200).json({user})
}

export async function addUserAddress(req, res){
  try{
    const userAddress = req.query.address;
    console.log('aaaddress', userAddress)
    const userEmail = req.query.email;
    console.log(userAddress, userEmail);
    if(userAddress){
      const result = await UserCollection.updateOne(
        { email: userEmail },
        { $set: { address: userAddress}},
        { upsert: true } // This option inserts a new document if no matching document is found
      );
      console.log('User address updated:', result);
      res.status(200).json({ message: 'Address updated succesfully!'});
    }
   else{
    res.status(200).json({ message: 'Please fill in address'});
   }
  }
  catch(error){
    console.error('Error updating user address:', error);
    res.status(404).json({ message: 'Error updating! Try Again.'})
  }  
}

export async function getUserAddress(req, res){
  try{
    const userAddress = req.query.address;
    const userEmail = req.query.email;
    console.log(userAddress, userEmail);
    if(userAddress){
      const result = await UserCollection.updateOne(
        { email: userEmail },
        { $set: { address: userAddress}},
        { upsert: true } // This option inserts a new document if no matching document is found
      );
      console.log('User address updated:', result);
      res.status(200).json({ message: 'Address updated succesfully!'});
    }
   else{
    res.status(200).json({ message: 'Please fill in address'});
   }
  }
  catch(error){
    console.error('Error getting user address:', error);
    res.status(404).json({ message: 'Error! Try Again.'})
  }  
}