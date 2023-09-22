import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "555px",
    height: "555px",
    borderRadius: "50%",
    position: "relative",
    left: "-85px",
    top: "-150px",
    background: `linear-gradient(-45deg, #f38836, #ffd155 100%)`,
    animation: "$zoomFade 4s infinite linear",
    [theme.breakpoints.down("xs")]: {
      width: "100%", // Adjust for smaller screens if needed
      height: "auto", // Adjust for smaller screens if needed
      top: 0, // Adjust for smaller screens if needed
      left: 0, // Adjust for smaller screens if needed
    },
  },
  "@keyframes zoomFade": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.2)",
      opacity: 0,
    },
  },
}));
const Testimonial = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.container}>
        <Typography
          variant="h4"
          sx={{
            color: "orange",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "black",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Worked With Best Clients Around The World
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonial;
