import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    h: "Links",
    p: "Home",
    p1: "About Us",
    p2: "Testimonials",
  },
  {
    h: "Services",
    p: "Services",
    p1: "Achievements",
    p2: "Career",
  },
  {
    h: "Contacts",
    p: "House No. 6/C Canal Park, Government Girls College Road, Rahim Yar Khan, Pakistan",
    p1: "+92 326 1038832",
    p2: "info@oracions.com",
  },
];
const Footer = () => {
  return (
    <Box
      mt={8}
      mb={12}
      sx={{
        backgroundColor: "#fffs",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", sm: "column", xs: "column" },
            // alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { md: "40%", sm: "100%", xs: "100%" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { md: "start", sm: "center", xs: "center" },
                alignItems: { md: "start", sm: "center", xs: "center" },
              }}
            >
              <Box
                component="img"
                src="https://oracions.com/storage/images/logo/setting1682418843.png"
                sx={{
                  width: "40%",
                }}
              />
              <Typography>
                We work with a passion of taking challenges and creating new
                things
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "start", sm: "center", xs: "center" },
              alignItems: { md: "start", sm: "center", xs: "center" },
              gap: 6,
              mt: { md: 0, sm: 4, xs: 6 },
              width: { md: "60%", sm: "100%", xs: "100%" },
              flexWrap: "wrap",
            }}
          >
            {data.map((dt, i) => {
              return (
                <Box key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {" "}
                      {dt.h}{" "}
                    </Typography>
                    <Typography sx={{ color: "black" }}> {dt.p} </Typography>
                    <Typography sx={{ color: "black" }}> {dt.p1} </Typography>
                    <Typography sx={{ color: "black" }}> {dt.p2} </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
