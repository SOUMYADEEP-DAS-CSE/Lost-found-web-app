import clientPromise from "@/lib/mongodb"; // make sure this file exists at lib/mongodb.js

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(); // uses DB from MONGODB_URI
  const collection = db.collection("items");

  if (req.method === "POST") {
    const item = req.body;
    await collection.insertOne(item);
    res.status(201).json({ message: "Item stored" });
  } else if (req.method === "GET") {
    const items = await collection.find({}).sort({ id: -1 }).toArray();
    res.status(200).json(items);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
