import React from "react";
import { useRecoilState } from "recoil";
import { apiState } from "../Atom";
import { apitask } from "../Atom";

import { Box, TextField, Button } from "@mui/material";

const Settings = () => {
  const [uapi, setuapi] = useRecoilState(apiState);
  const [tapi, settapi] = useRecoilState(apitask);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  //   const submitData = (data) => {
  //     props.getApi(data);
  //   };

  return (
    <Box
      sx={{
        margin: "20%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Change User Api"
            onChange={(e) => setuapi(e.target.value)}
          ></TextField>
          <TextField
            label="Change Task Api"
            onChange={(e) => settapi(e.target.value)}
          ></TextField>
        </Box>
        <Button
          type="submit"
          //  onClick={() => submitData(api)}
        >
          submit
        </Button>
      </form>
    </Box>
  );
};

export default Settings;
