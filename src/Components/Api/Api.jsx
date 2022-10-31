import { InputLabel,Box,TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const Api = (props) => { 

    const [api,setApi] = useState()

const getinput = (e)=>{
    setApi(e.target.value)    
    // console.log(e.target.value)
}
const handleSubmit = (e) =>{
e.preventDefault()
e.target.reset()

}

const submitData = (data ) =>{
    props.getApi(data)    
}


return (
    <Box>
        <form

        onSubmit={handleSubmit}
        
        >

            
        <TextField
        label="change api"
        onChange={ (e)=>setApi(e.target.value)}
        
        >

        </TextField>
        <Button
        type="submit"
        onClick={()=>submitData(api)}
        >submit</Button>
        </form>
    </Box>
)
}

export default Api