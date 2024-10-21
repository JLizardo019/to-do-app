import React, { useState } from "react";
import { Box, Button, Popover, TextField, InputAdornment } from "@mui/material";
import { ChromePicker } from "react-color";

export default function ColorPicker() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState("#000000");
  const [customColor, setCustomColor] = useState(color);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color) => {
    setCustomColor(color.hex);
  };

  const handleApplyColor = () => {
    setColor(customColor);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <TextField
        label="Selected Color"
        value={color}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: color,
                  border: "1px solid #000",
                  marginRight: 1,
                }}
              />
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
          <ChromePicker color={customColor} onChange={handleColorChange} />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleApplyColor}
          >
            Apply Color
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}
