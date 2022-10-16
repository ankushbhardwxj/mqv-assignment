import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import config from "../config";

const CompanyList: NextPage = () => {
  const [companyList, setCompanyList] = useState([]);
  const getAllCompanies = async () => {
    const res = await axios.get(`${config.apiEndpoint}/get-companies`);
    setCompanyList(res.data);
  };

  useEffect(() => {
    getAllCompanies();
  }, [companyList]);

  return (
    <Container>
      <h2>Companies List</h2>
      <Link href="/">
        <Button>Add a company</Button>
      </Link>
      <h4>Total companies: {companyList.length}</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Company Name</TableCell>
              <TableCell align="left">CIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companyList &&
              companyList.map((item: any, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.companyname}</TableCell>
                  <TableCell>{item.cin}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CompanyList;
