import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: "3306"
}).promise();

export async function getBooks () {
    const [rows] = await pool.query("SELECT * FROM books ORDER BY rating DESC");
    return rows;
}

export async function getGenres () {
    const [rows] = await pool.query("SELECT * FROM genres");
    return rows;
}



