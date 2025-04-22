import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";


dotenv.config();
const {PGHOST, PGUSER, PGPASSWORD, PGDATABASE} = process.env;

// This is the connection string for the Neon database
// It uses the environment variables defined in the .env file
export const sql = neon(
    `postgressql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

// This exported function is a tagged template literal that allows you to write SQL queries safely