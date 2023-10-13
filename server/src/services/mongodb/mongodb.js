const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB Atlas using the environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for your collection (e.g., 'products')
const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  category: String,
  subCategory: String,
  image: String,
});

const modelProduct = mongoose.model('products', productSchema);

export default modelProduct;