import { Box, Container, Grid, Typography } from "@mui/material";

const data = [
  {
    h: "100+",
    p: "Successful Projects",
  },
  {
    h: "200",
    p: "Satisfied Clients",
  },
  {
    h: "20",
    p: "Experienced Staff",
  },
  {
    h: "10",
    p: "Awards Win",
  },
];

const Achievements = () => {
  return (
    <Box
      sx={{
        background: "#02D3C4",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "36px",
              textAlign: "center",
              pt: 5,
              color: "#fff",
            }}
          >
            ACHIEVEMENTS
          </Typography>
          <Grid container>
            <Box
              pt={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                gap: 10,
                m: "0 auto",
                flexWrap: { md: "nowrap", sm: "nowrap", xs: "wrap" },
              }}
            >
              {data.map((dt, i) => {
                return (
                  <Grid item md={12} sm={6} xs={6} key={i}>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {dt.h}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                        }}
                      >
                        {dt.p}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Achievements;
