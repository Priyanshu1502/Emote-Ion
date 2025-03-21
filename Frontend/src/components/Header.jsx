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
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black", height: 80 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        {/* Image Section */}
        <Link to="/">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <img
              src="https://outstanding-motherly-penguin-gwu7pf.teleporthq.app/logonew-1500h.png"
              alt="Logo"
              style={{ width: 48, height: 48 }}
            />
            <p className=" font-bold text-2xl hidden md:flex">EMOTE-ION</p>
          </div>
        </Link>

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
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            color: "#757372",
          }}
        >
          <Button href="/" color="inherit" sx={{ fontWeight: "500" }}>
            Home
          </Button>
          <Button href="/contact" color="inherit" sx={{ fontWeight: "500" }}>
            Contact
          </Button>
          <Button href="/about" color="inherit" sx={{ fontWeight: "500" }}>
            About Us
          </Button>
          <Button href="/carrer" color="inherit" sx={{ fontWeight: "500" }}>
            Carrer
          </Button>
          <Button
            href="https://mern-blog-hrhj.onrender.com/"
            color="inherit"
            sx={{
              backgroundColor: "#ff773d",
              color: "black",
              borderRadius: 0,
              paddingLeft: 2,
              paddingRight: 2,
              fontWeight: "600",
            }}
          >
            Blogs
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "black" } }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          <Button href="/" fullWidth sx={{ color: "white" }}>
            Home
          </Button>
          <Button href="/contact" fullWidth sx={{ color: "white" }}>
            Contact
          </Button>
          <Button href="/about" fullWidth sx={{ color: "white" }}>
            About Us
          </Button>
          <Button href="/carrer" fullWidth sx={{ color: "white" }}>
            Carrer
          </Button>
          <Button
            href="https://mern-blog-hrhj.onrender.com/"
            fullWidth
            sx={{ backgroundColor: "#ff773d", color: "white" }}
          >
            Blog
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
