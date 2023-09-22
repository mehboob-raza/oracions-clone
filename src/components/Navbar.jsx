import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://oracions.com/storage/images/logo/setting1682418843.png"
            width="20%"
          />

          <Box
            sx={{
              display: { md: "none", sm: "block", xs: "block" },
            }}
          >
            <FaBars
              style={{
                fontSize: "26px",
                cursor: "pointer",
              }}
              onClick={toggleDrawer}
            />
          </Box>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
            <List>
              {[
                { text: "Home", to: "/" }, // Add the 'to' prop with the link destination
                { text: "About Us", to: "/about" },
                { text: "Services", to: "/services" },
                { text: "Help", to: "/help" },
                { text: "Achievements", to: "/achievements" },
              ].map((item) => (
                <ListItem button key={item.text}>
                  <Link
                    to={item.to}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    {/* Use Link component with 'to' prop */}
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: "20px",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#fd7e14",
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {[
              { text: "Home", to: "/" },
              { text: "About Us", to: "/about" },
              { text: "Services", to: "/services" },
              { text: "Help", to: "/help" },
              { text: "Achievements", to: "/achievements" },
            ].map((item) => (
              <Link
                to={item.to}
                key={item.text}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#fd7e14",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Box>
          <Link to="./contact">
            <Button
              sx={{
                backgroundColor: "#000",
                p: 1,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
