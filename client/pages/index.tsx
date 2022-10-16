import type { NextPage } from "next";
import { useState } from "react";
import SearchPage from "../components/SearchPage";
import axios from "axios";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState<
    string | { companyName: string; cin: string }
  >("");
  const [options, setOptions] = useState<Array<any>>([]);

  const handleSearchInput = async (e: any) => {
    console.log("handle search input", e);
    if (!e) return;
    if (e.target.value === 0) return;
    setValue(e.target.value);
    const res = await axios.post(
      "http://localhost:8003/api/v1/query-companies",
      {
        query: value,
      }
    );
    setOptions(res.data);
  };

  const handleSelectInput = (e: any, selectedOption: any) => {
    console.log("handle select input");
    console.log(e, selectedOption);
    console.log(options);
    const companyName: string = selectedOption;
    let cin;
    for (let i = 0; i < options.length; i++) {
      if (options[i].companyName === companyName) {
        cin = options[i].cin;
        break;
      }
    }
    setValue({ companyName: companyName, cin: cin });
  };

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://localhost:8003/api/v1/add-company",
      value
    );
    console.log(res.data);
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
