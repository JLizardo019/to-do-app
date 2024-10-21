// 'use client';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Paper';
//  import { styled } from '@mui/material/styles';

export default function ListItem(props) {
    return (<>
    <Stack direction="row" spacing={2}>
            
                <Checkbox></Checkbox>
                
                <p>{props.text}</p>
                
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            
    </Stack>
    </>)
}