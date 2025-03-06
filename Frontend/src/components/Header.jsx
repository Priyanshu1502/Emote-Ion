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
        <div className="flex flex-row items-center gap-2">
          <img
            src="https://outstanding-motherly-penguin-gwu7pf.teleporthq.app/logonew-1500h.png"
            alt="Logo"
            style={{ width: 48, height: 48 }}
          />
          <p className=" font-bold text-2xl hidden md:flex">EMOTE-ION</p>
        </div>

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
            Contact Us
          </Button>
          <Button href="/about" color="inherit" sx={{ fontWeight: "500" }}>
            About
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
          <Button fullWidth sx={{ color: "white" }}>
            Home
          </Button>
          <Button fullWidth sx={{ color: "white" }}>
            Contact Us
          </Button>
          <Button fullWidth sx={{ color: "white" }}>
            About
          </Button>
          <Button fullWidth sx={{ backgroundColor: "#ff773d", color: "white" }}>
            Blog
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
