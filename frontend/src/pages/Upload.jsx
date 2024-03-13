import React from 'react'
import "../styles/Upload.css";
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';

const Upload = () => {
    return (
        <div className='upload-main-container'>
            <Navbar />
            <div className="upload-content">
                <h1 className="upload-title">Upload Your Files</h1>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <div className="upload-content-dragbox">
                    <input type="file" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default Upload;