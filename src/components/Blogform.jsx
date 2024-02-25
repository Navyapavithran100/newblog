import {TextField, Typography,Button} from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData] = useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
  return (
    <div   align='center'>
        <h1>ADD BLOG</h1>
        <TextField variant='outlined' label='Blog Name' name='fname' align='centre' onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='filled'label='Description' name='Description'onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='standard'label='Author Name'  name='Author Name' onchange={inputHandler}/>
        <br /><br />

        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup