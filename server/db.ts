import pg, { Pool } from "pg";
let pool: any;
export const init = () => {
  pool = new Pool({
    user: "ankushbhardwaj",
    host: "localhost",
    database: "companies",
    password: "password",
    port: 5432,
  });
  console.log("DB Connected");
};

export const getAllCompanies = async () => {
  const res = await pool.query(
    "SELECT * FROM company_cin_list ORDER BY id ASC"
  );
  return res.rows;
};

export const addCompany = async (companyName: string, cin: string) => {
  const res = await pool.query(
    "INSERT INTO company_cin_list (companyName, cin) VALUES ($1, $2) RETURNING *",
    [companyName, cin]
  );
  return res.rows;
};

export const deleteCompanies = async () => {
  const res = await pool.query("DELETE FROM company_cin_list");
  return res.rows;
};
