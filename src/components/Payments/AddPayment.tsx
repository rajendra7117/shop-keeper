import React from "react";
import { Box, Stack, Typography, Paper} from "@mui/material";
import Layout2 from "../layout/Layout2";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import CreateNewFolderSharpIcon from "@mui/icons-material/CreateNewFolderSharp";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { LayoutSx, RecentPaymentsPaperSx } from "./Styles";
import PaymentType from "./PaymentType";
import PreviousPayment from "./PreviousPayment";

const AddPayment = () => {
  return (
    <Layout2>
      <Box sx={LayoutSx} className="flex-row">
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#1c1d21",
            color: "#ffffff",
            fontFamily: "inherit",
          }}
        >
          <Stack
            spacing={5}
            sx={{ width: "45rem", height: "35rem", padding: "1rem" }}
          >
            <Typography variant="h3"> Add Payments</Typography>
            <Stack
              spacing={5}
              direction="row"
              sx={{ marginLeft: "1rem !important" }}
            >
              <PaymentType
                icon={<AddBoxSharpIcon fontSize="large" />}
                text="Quick Add"
              />
              <PaymentType
                icon={<CreateNewFolderSharpIcon fontSize="large" />}
                text="Add New Payment"
              />
            </Stack>
          </Stack>
        </Paper>
        <Paper sx={RecentPaymentsPaperSx} elevation={4}>
          <Typography variant="h4">Recent Payments</Typography>
          <Stack
            direction={"column"}
            sx={{ width: "25rem", margin: "2rem auto" }}
            spacing={2}
          >
            <PreviousPayment
              icon1={<InfoIcon />}
              icon2={<CurrencyRupeeIcon />}
              icon3={<ProductionQuantityLimitsIcon />}
              label1="banana"
              label2="50"
              label3="x6"
            />
          </Stack>
        </Paper>
      </Box>
    </Layout2>
  );
};

export default AddPayment;
