import clientPromise from "./mongodb";

export async function connectMongodb() {
    try{
        const client = await clientPromise;
        const isConnected = await client.isConnected();
            const db = client.db("dzuokart-db");
            const collection = db.collection("products");
            const products = await collection.find({}).toArray();
            return products;
    }
    catch (err) {
        console.debug(err);
        throw err;
    }
}