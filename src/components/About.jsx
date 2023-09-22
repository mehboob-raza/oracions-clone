import { Box, Container, Grid, Typography } from "@mui/material";
import { TiTick } from "react-icons/ti";
import project from "../assets/project.jpg";

const About = () => {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Grid container spacing={22}>
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#F38836",
                  fontSizer: "30px",
                  fontWeight: "bold",
                  textAlign: { md: "start", sm: "center", xs: "center" },
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "20px",
                  textAlign: { md: "start", sm: "center", xs: "center" },
                }}
              >
                We are an experienced IT provider that offers a wide range of
                services to help your business succeed. We are creating
                softwares that shapes the world!
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "#000",
                  fontSize: "20px",
                  textAlign: { md: "start", sm: "center", xs: "center" },
                }}
              >
                We are dedicated to delivering innovative and cost-effective
                technology solutions to help businesses of all sizes stay
                competitive in the digital age. Our services include IT
                consulting, software development and Cloud solutions. We are
                dedicated to delivering results that drive business growth.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                    mt: 4,
                  }}
                >
                  {" "}
                  <TiTick />
                  Clients Focused
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  <TiTick />
                  We Can Save You Money.
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  <TiTick />
                  Quick Innovative Solutions.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                width: { md: "50%", sm: "100%", xs: "100%" },
              }}
            >
              <Box
                component="img"
                src={project}
                alt="project"
                sx={{
                  width: "100vw",
                  height: "80vh",
                }}
              />

              <Box
                sx={{
                  backgroundColor: "#82E0DB",
                  p: 2,
                  position: "absolute",
                  top: "60%",
                  left: { md: "-20%", sm: 0, xs: 0 },
                  width: { lg: "100%", md: "50%" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                  }}
                >
                  At
                  <span
                    style={{
                      color: "black",
                    }}
                  >
                    Oracions
                  </span>
                  , let us help you to transform the way you do business.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
