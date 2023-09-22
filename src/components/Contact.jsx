import { Box, Button, Container, Grid, TextField } from "@mui/material";
import skills from "../assets/skills.jpg";
import skills1 from "../assets/skills1.jpg";

const Contact = () => {
  return (
    <Box
      sx={{
        mt: { md: 16, sm: 28, xs: 29 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              mt={14}
              sx={{
                display: "flex",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  zIndex: 1,
                }}
              >
                <Box component="img" src={skills1} alt="skills1" />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  right: { md: "4%", sm: "14%", xs: "-4%" },
                  top: "-44%",
                }}
              >
                <Box component="img" src={skills} alt="skills" />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <form>
              <TextField
                label="Name"
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "#02D3C4", my: 2 }}
              />
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "#02D3C4", my: 2 }}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="filled"
                fullWidth
                sx={{ backgroundColor: "#02D3C4", my: 2 }}
              />
              <Box
                sx={{
                  display: "flex",
                  width: "30%",
                }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "black",
                    my: 2,
                    p: 2,
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  File Chosen
                </Button>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  my: 2,
                  p: 2,
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                fullWidth
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
