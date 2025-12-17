import { pool } from "./db.js";

export class HomeService {
  constructor() {
    this.pool = pool;
  }

  async getStats() {
    try {
      const result = await this.pool.query(
        "SELECT * FROM portfolio_stats WHERE id = 1"
      );
      return result.rows[0];
    } catch (err) {
      console.error("Database error:", err);
      throw err;
    }
  }
}
const homeService = new Home();

export default homeService;
