import React from "react";
import { Paper, Button } from "@mui/material";
import { PaymentTypePaperSx } from "./Styles";

type prop = {
  icon: any;
  text: string;
};
const PaymentType = ({ icon, text }: prop) => {
  return (
    <Paper elevation={3} sx={PaymentTypePaperSx} className="flex-col">
      <Button startIcon={icon} size="large" sx={{ color: "#e36b8d" }}>
        {text}
      </Button>
    </Paper>
  );
};

export default PaymentType;
