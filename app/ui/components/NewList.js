'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ColorPicker from './ColorPicker';
import EmojiPicker from './EmojiPicker';


export default function NewList() {
    return (
        <Stack spacing={2} sx={{
            justifyContent: "center",
            alignItems: "center",
            my:1,
            mx:2,
            paddingTop:4}}>
    
            <h1 style={{marginBottom: 0.5 + 'em'}}>Create New List</h1> 

            {/* <EmojiPicker/> */}
            <ColorPicker/>
 
            <TextField
            required
            id="outlined-required"
            label="List Name"
            defaultValue="Untitled List"
             sx={{
                minWidth: "80%", 
             }}/>

            <TextField
            id="outlined-multiline-static-required"
            label="Description"
            multiline
            rows={4}
            defaultValue="This list is for ...."
            sx={{
                my:2,
                minWidth: "80%", 
             }}
            />
        
        <Button variant="contained" href="#outlined-buttons">
          Create!
        </Button>

        </Stack>
    )
}