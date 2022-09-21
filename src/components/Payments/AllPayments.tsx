import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Layout2 from "../layout/Layout2";
const AllPayments = () => {
  return (
    <Layout2 >
      <Box sx={{width: '89vw'}}>
        <Stack spacing={2}>
          <Typography> Add Payments</Typography>
        </Stack>
      </Box>
    </Layout2>
  );
};

export default AllPayments;
