import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#42d5cc" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Image Section */}
        <img
          src="https://outstanding-motherly-penguin-gwu7pf.teleporthq.app/logonew-1500h.png"
          alt="Logo"
          style={{ width: 48, height: 48 }}
        />

        {/* Menu Button (Visible on Mobile & Tablet) */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: "none" } }}
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Navigation Items (Desktop View) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Blog</Button>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
          <Button fullWidth color="inherit">
            Home
          </Button>
          <Button fullWidth color="inherit">
            Contact Us
          </Button>
          <Button fullWidth color="inherit">
            Blog
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
