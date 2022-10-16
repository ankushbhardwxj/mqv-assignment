import React from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";

interface ISearchPageProps {
  value: string | { companyName: string; cin: string };
  options: Array<any>;
  handleSearchInput: (evt: any) => void;
  handleSubmit: () => void;
  handleSelectInput: (evt: any, selectedOption: string) => void;
}

const SearchPage: React.FC<ISearchPageProps> = ({
  value,
  options,
  handleSearchInput,
  handleSelectInput,
  handleSubmit,
}) => {
  return (
    <Container style={{ marginTop: "150px" }}>
      <Autocomplete
        value={typeof value === "object" ? value.companyName : value}
        onChange={handleSelectInput}
        onInputChange={handleSearchInput}
        renderInput={(params) => (
          <TextField {...params} label="Enter Company Name" />
        )}
        options={(options && options?.map((item) => item.companyName)) || []}
      />
      <Link href="/companies">
        <Button onClick={handleSubmit}>Submit</Button>
      </Link>
    </Container>
  );
};

export default SearchPage;
