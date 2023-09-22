import { Box, Button, Container, Grid, Typography } from "@mui/material";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

const btnData = [
  {
    id: 1,
    btn: "Web Development",
  },
  {
    id: 2,
    btn: "App Development",
  },
  {
    id: 3,
    btn: "Graphic Designing",
  },
];
const Services = () => {
  return (
    <Box
      mt={6}
      pt={4}
      sx={{
        backgroundColor: "#02D3C4",
        // p: 5,
        pb: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box pt={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            We Are Dedicated To ServeYou All Time.
          </Typography>

          <Box
            mt={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            {btnData.map((dt, i) => {
              return (
                <Box
                  key={i}
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
                  <Typography>{dt.btn}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box mt={4}>
          <Grid container spacing={10}>
            <Grid item md={6} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    mb: 1,
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  App Development
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    mb: 2,
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  We specialize in creating top-quality mobile apps for a wide
                  range of platforms and devices. Our experienced app
                  development team is dedicated to designing, developing, and
                  delivering innovative and user-friendly apps that meet the
                  unique needs and goals of our clients.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    mb: 2,
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  Our developers have expertise in a variety of app development
                  frameworks and technologies, including iOS, Android, React
                  Native, and more. We work closely with our clients throughout
                  the app development process, from concept to launch, to ensure
                  that their app meets their expectations and exceeds them.
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "#fff",
                    p: 2,
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Box
                sx={{
                  display: { md: "flex", sm: "none", xs: "none" },
                  position: "relative",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: "0 auto",
                }}
              >
                <img
                  src={team4}
                  alt="team3"
                  style={{
                    position: "absolute",
                    top: "18%",
                    left: "-4%",
                  }}
                />
                <img
                  src={team3}
                  alt="team3"
                  style={{
                    // position: "absolute",
                    //   left: "60%",
                    marginLeft: "30%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
