import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ctabg2 from "../assets/ctabg2.jpg";

const NeedHelp = () => {
  return (
    <Box
      sx={{
        background: `url(${ctabg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: 12,
            pb: 12,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              mt: 2,
            }}
          >
            Need Help In Creating The Best Solutions To Run Your Business?
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              textAlign: "center",
              mt: 2,
            }}
          >
            We help our clients succeed by providing them high Quality Work,
            best experiences, and full Satisfaction.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "black",
                cursor: "pointer",
                p: 2,
                "&:hover": {
                  background:
                    "linear-gradient(to right, #F49039 50%, #FECC53 100%)",
                  color: "white",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NeedHelp;
