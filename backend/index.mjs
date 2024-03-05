import dotenv from "dotenv";
import express from "express";
import { databasePool } from "./database.mjs";

dotenv.config();
const app = express();

app.get("/", async (req, res) => {
  const connection = await databasePool.getConnection();
  try {
    const result = await connection.query(
      "SELECT * FROM companies ORDER BY name asc",
      []
    );
    return res.json({ data: result[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  } finally {
    connection.release();
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
