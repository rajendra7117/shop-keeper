import React from "react";
import { Box, Paper } from "@mui/material";
import PaymentChip from "./PaymentChip";
import {PreviousPaymentPaperSx} from './Styles'
import {PreviousPaymentProps} from '../../utils/Interfaces'


const PreviousPayment = (props: PreviousPaymentProps) => {
  return (
    <Paper
      elevation={3}
      sx={PreviousPaymentPaperSx}
    >
      <Box className="flex-row">
        <PaymentChip icon={props.icon1} label={props.label1} />
        <PaymentChip icon={props.icon2} label={props.label2} />
        <PaymentChip icon={props.icon3} label={props.label3} />
      </Box>
    </Paper>
  );
};

export default PreviousPayment;
