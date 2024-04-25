import mysql from "mysql2/promise";

const executeQuery = async (query, data) => {
  try {
    const db = await mysql.createConnection({
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "",
      database: "tour",
    });

    const [results] = await db.execute(query, data);
    await db.end();
    return results;
  } catch (error) {
    console.log("error");
    //throw new Error(error);
  }
};

export default executeQuery;
