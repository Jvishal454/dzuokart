const mongoose = require('mongoose');
const dotenv = require('dotenv');

// THIS ONE IS USED
// Load environment variables from .env
dotenv.config();

// Connect to MongoDB Atlas using the environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Defined a generic function to get a collection based on name and schema
function getCollection(collectionName, schema) {
  return mongoose.model(collectionName, schema);
}


// Define a schema and model for your collection (e.g., 'products')
const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  category: String,
  subCategory: String,
  image: String,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  uhPassword: {
    type: String,
    require: true
  },
  address: {
    type: String, 
  },
  wishlist:{
    type: Array,
  }
});

const ProductCollection = getCollection('products', productSchema);
const UserCollection = getCollection('users', userSchema);

// Export the collections
export { ProductCollection, UserCollection };