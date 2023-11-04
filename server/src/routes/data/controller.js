import { all } from ".";
import { connectMongodb } from "../../services/mongodb/db-controller"
import modelProduct from "../../services/mongodb/mongodb";


export async function getProducts(req, res) {
    console.log('sample test api')
    
    try {
        const products = await modelProduct.find().lean(); // Retrieve all documents in the collection
        console.log('all products',products)
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
    const product = await modelProduct.findOne({ id: pid }).lean();
    res.json(product); // Send the matching product as JSON
  }
  catch(error) {
    console.log(error);
    res.status(404).json({ message: 'Product not found' });
  }

}