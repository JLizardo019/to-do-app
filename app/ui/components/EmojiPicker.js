import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Box, Popover, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';


export default function EmojiPicker() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [emoji, setEmoji] = useState(":)");
    const [customEmoji, setCustomEmoji] = useState(emoji);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleEmojiChange = (e) => {
      setCustomEmoji(e);
    };
  
    const handleApplyEmoji = () => {
      setEmoji(customEmoji);
      handleClose();
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <Box>
        <TextField
          label="Selected Icon"
          value={emoji}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  sx={{
                    marginRight: 1,
                  }}
                >
                  {emoji}
                </Box>
              </InputAdornment>
            ),
          }}
          onClick={handleClick}
        />
  
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Picker data={data} onEmojiSelect={handleEmojiChange} />


            <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleApplyEmoji}
          >
            Apply Emoji
          </Button>
            {/* <ChromePicker color={customColor} onChange={handleColorChange} /> */}
          </Box>
        </Popover>
      </Box>
    );
  }


// export default function EmojiPicker() {
//   return (

    
//     <Picker data={data} onEmojiSelect={console.log} />
//   )
// }