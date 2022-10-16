import { Router, Request, Response } from "express";
import { fetchCompanies } from "./controller";
import { addCompany, deleteCompanies, getAllCompanies } from "./db";

const companyRouter = Router();

companyRouter.post("/query-companies", async (req: Request, res: Response) => {
  const companies = await fetchCompanies(req.body.query);
  res.send(companies).end();
});

companyRouter.post("/add-company", async (req: Request, res: Response) => {
  const companyName: string = req.body.companyName;
  const cin: string = req.body.cin;
  console.log("Add company", companyName, cin);
  await addCompany(companyName, cin);
  res.send({ companyName, cin }).end();
});

companyRouter.get("/get-companies", async (req: Request, res: Response) => {
  const companyList = await getAllCompanies();
  console.log("GET COMPANIES", companyList);
  res.send(companyList).end();
});

export default companyRouter;
