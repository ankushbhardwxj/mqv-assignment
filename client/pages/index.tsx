import type { NextPage } from "next";
import { useState } from "react";
import SearchPage from "../components/SearchPage";
import axios from "axios";
import { useRouter } from "next/router";
import config from "../config";

interface ICompanyListItem {
  companyName: string;
  cin: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState<string | ICompanyListItem>("");
  const [options, setOptions] = useState<Array<ICompanyListItem>>([]);

  const handleSearchInput = async (e: any) => {
    if (!e) return;
    if (e.target.value === 0) return;
    setValue(e.target.value);
    const res = await axios.post(`${config.apiEndpoint}/query-companies`, {
      query: value,
    });
    setOptions(res.data);
  };

  const handleSelectInput = (e: any, selectedOption: string) => {
    const companyName: string = selectedOption;
    let cin: string = "";
    for (let i = 0; i < options.length; i++) {
      if (options[i].companyName === companyName) {
        cin = options[i].cin;
        break;
      }
    }
    setValue({ companyName: companyName, cin: cin });
  };

  const handleSubmit = async () => {
    const res = await axios.post(`${config.apiEndpoint}/add-company`, value);
    setTimeout(() => {
      router.push("/companies");
    }, 500);
  };

  return (
    <SearchPage
      value={value}
      options={options}
      handleSearchInput={handleSearchInput}
      handleSubmit={handleSubmit}
      handleSelectInput={handleSelectInput}
    />
  );
};

export default Home;
