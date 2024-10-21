import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ListItem from './ListItem';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

export default function ViewList() {
  return (
    <Box sx={{ width: '100%', padding: '4%'}}>
      <Stack spacing={2}>
        <ListItem id={4} text="Item 1"/>
        <ListItem id={4} text="Item 1"/>
      
      </Stack>
    </Box>
  );
}
