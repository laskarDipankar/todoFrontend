import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState,useEffect } from "react";
import UserGallery from "./UserGallery";
import UserList from "./UserLIst";

const Index = () => {
    const [state, setstate] = useState(false)



return(
<>
    <Box
    sx={{
        marginTop:'10%'
    }}
    >
        <button
        value='true'
        onClick={(e)=>setstate( true)}
        >List-View</button>
        <button
        value='false'
        onClick={()=>setstate(false)}
        >Gallery</button>
    </Box>
    {
        state ? <UserList/>:<UserGallery/>
    }

    


</>)
};

export default Index;
