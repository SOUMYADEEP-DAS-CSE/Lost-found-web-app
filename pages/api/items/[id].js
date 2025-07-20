import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!id) {
    console.warn("DELETE request missing ID.");
    return res.status(400).json({ message: "Missing item ID" });
  }

  let objectId;
  try {
    objectId = new ObjectId(id);
  } catch (err) {
    console.error("Invalid ObjectId:", id);
    return res.status(400).json({ message: "Invalid item ID format" });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("items");

    console.log("Attempting to delete item with _id:", id);

    const result = await collection.deleteOne({ _id: objectId });

    console.log("Delete result:", result);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Failed to delete item" });
  }
}
