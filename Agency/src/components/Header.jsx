import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        p: 2,
        background: "#fff",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src={logo}
          alt="Digital Agency Logo"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      <List>
        {navLinks.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.href}
              sx={{
                textAlign: "center",
                color: "#000",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: 6,
                  left: "50%",
                  backgroundColor: "#000",
                  transform: "translateX(-50%)",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "60%",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 2 }}>
        <Button
          component={Link}
          to="/contact"
          fullWidth
          sx={{
            px: 2,
            py: 1.25,
            borderRadius: 999,
            bgcolor: "#0a0a0a",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: 0.4,
            gap: 1,
            "&:hover": { bgcolor: "#121212" },
          }}
        >
          <Box
            className="plusIcon"
            sx={{
              width: 24,
              height: 24,
              borderRadius: 999,
              bgcolor: "#fff",
              color: "#000",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              mr: 1,
              transition: "transform 0.5s ease",
            }}
          >
            +
          </Box>
          LET'S TALK
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          borderBottom: "1px solid #e5e7eb",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 6, lg: 8 },
            gap: { xs: 1, sm: 2 },
            minHeight: { xs: "64px", md: "80px" },
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center", minWidth: { xs: 100, sm: 120, md: 160 } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={logo}
                alt="Agency Logo"
                sx={{
                  width: { xs: "90px", sm: "110px", md: "130px" },
                  height: { xs: "90px", sm: "110px", md: "130px" },
                  objectFit: "contain",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            </Link>
          </Box>

          {/* Center: Nav Links */}
          <Box sx={{ flex: 1, display: { xs: "none", sm: "flex" }, gap: { sm: 2, md: 3, lg: 4 }, justifyContent: "center" }}>
            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.href}
                sx={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: { sm: "0.8rem", md: "0.95rem" },
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  position: "relative",
                  minWidth: "auto",
                  padding: { sm: "6px 8px", md: "6px 16px" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 4,
                    left: "50%",
                    backgroundColor: "#000",
                    transform: "translateX(-50%)",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "60%",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {/* Right: CTA on desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            <Button
              component={Link}
              to="/contact"
              sx={{
                px: { sm: 1.5, md: 2.25 },
                py: { sm: 0.75, md: 1.25 },
                borderRadius: 999,
                bgcolor: "#0a0a0a",
                color: "#fff",
                fontWeight: 700,
                fontSize: { sm: "0.75rem", md: "0.875rem" },
                letterSpacing: 0.4,
                gap: 1,
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#121212" },
                "&:hover .plusIcon": { transform: "rotate(360deg)" },
              }}
            >
              <Box
                className="plusIcon"
                sx={{
                  width: { sm: 20, md: 26 },
                  height: { sm: 20, md: 26 },
                  borderRadius: 999,
                  bgcolor: "#fff",
                  color: "#000",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  mr: 1,
                  fontSize: { sm: "1rem", md: "1.2rem" },
                  transition: "transform 0.5s ease",
                }}
              >
                +
              </Box>
              LET'S TALK
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { sm: "none" }, 
              ml: "auto",
              padding: "8px",
              "& svg": { fontSize: "2rem" }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
