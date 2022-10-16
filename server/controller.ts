import axios from "axios";
import HTMLParser from "node-html-parser";
import FormData from "form-data";

const cleanData = (data: string) => {
  const htmlData = HTMLParser.parse(data);
  const elements = htmlData.querySelectorAll("div");
  const companyList: any = [];
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i].id;
    const [category, companyName, cin] = element.split("/");
    companyList.push({ companyName: companyName, cin: cin });
  }
  console.log(companyList);
  return companyList;
};

const fetchCompanies = async (query: string) => {
  try {
    const api = "https://www.zaubacorp.com/custom-search";
    const url = api + `?search=${query}&filter=company`;
    const form = new FormData();
    form.append("search", query);
    form.append("filter", "company");
    const res = await axios.post(url, form);
    return cleanData(res.data);
  } catch (error) {
    console.error(error);
  }
};

export { fetchCompanies, cleanData };
