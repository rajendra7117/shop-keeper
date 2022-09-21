import React from "react";
import { Box, Stack, Typography, Paper, Button, Chip } from "@mui/material";
import Layout2 from "../layout/Layout2";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import CreateNewFolderSharpIcon from "@mui/icons-material/CreateNewFolderSharp";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const AddPayment = () => {
  return (
    <Layout2>
      <Box
        sx={{
          width: "89vw",
          backgroundColor: "#000000",
          minHeight: "100vh",
          maxHeight: "auto",
        }}
        className="flex-row"
      >
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
              <Paper
                elevation={3}
                sx={{
                  width: "20rem",
                  height: "15rem",
                  justifyContent: "center",
                  backgroundColor: "#131519",
                  color: "#ffffff",
                }}
                className="flex-col"
              >
                <Button
                  startIcon={<AddBoxSharpIcon fontSize="large" />}
                  size="large"
                  sx={{ color: "#e36b8d" }}
                >
                  Quick Add
                </Button>
              </Paper>
              <Paper
                elevation={3}
                sx={{
                  width: "20rem",
                  height: "15rem",
                  justifyContent: "center",
                  backgroundColor: "#131519",
                  color: "#ffffff",
                }}
                className="flex-col"
              >
                <Button
                  size="large"
                  startIcon={<CreateNewFolderSharpIcon fontSize="large" />}
                  sx={{ color: "#e36b8d" }}
                >
                  Add New Payment
                </Button>
              </Paper>
            </Stack>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: "30rem",
            height: "35rem",
            padding: "1rem",
            backgroundColor: "#1c1d21",
            color: "#ffffff",
          }}
          elevation={4}
        >
          <Typography variant="h4">Recent Payments</Typography>
          <Stack
            direction={"column"}
            sx={{ width: "25rem", margin: "2rem auto" }}
            spacing={2}
          >
            <Paper
              elevation={3}
              sx={{
                width: "22rem",
                height: "3.5rem",
                backgroundColor: "#131519",
              }}
            >
              <Box className="flex-row">
                <Chip
                  icon={<InfoIcon />}
                  label="Gun"
                  sx={{
                    marginTop: "0.6rem",
                    color: "#e36b8d",
                    backgroundColor: "#000000",
                  }}
                />
                <Chip
                  icon={<CurrencyRupeeIcon />}
                  label="25"
                  sx={{
                    marginTop: "0.6rem",
                    color: "#e36b8d",
                    backgroundColor: "#000000",
                  }}
                />
                <Chip
                  icon={<ProductionQuantityLimitsIcon />}
                  label="x6"
                  sx={{
                    marginTop: "0.6rem",
                    color: "#e36b8d",
                    backgroundColor: "#000000",
                  }}
                />
              </Box>
            </Paper>
          </Stack>
        </Paper>
      </Box>
    </Layout2>
  );
};

export default AddPayment;
