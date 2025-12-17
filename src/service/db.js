import { Pool } from "pg";

export const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_Y59LboPdFUsB@ep-icy-shadow-ah1s4m4z.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require", 
  ssl: { rejectUnauthorized: false },
});

