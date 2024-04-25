import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const WhiteButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[50]),
  backgroundColor: grey[50],
  "&:hover": {
    backgroundColor: grey[50],
  },
}));

export default WhiteButton;
