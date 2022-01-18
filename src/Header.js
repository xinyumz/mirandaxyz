import React, { useState } from "react";
import "./Header.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

const drawerWidth = 230;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "3.5rem",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
}));

function Overlay({ open }) {
  return open ? <div className="overlay"></div> : null;
}

//Header component for narrow screens
function HeaderNarrow() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "white",
          color: "#6b7575",
          boxShadow: "0 2px 10px 0 #acacac",
          height: "3.5rem",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              fontSize: "1rem",
            }}
            component="div"
            fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          >
            <Link to="/">
              <strong>Xinyu (Miranda) Zhang</strong>
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerHeader />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: "relative",
          zIndex: "1400",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#fffffff2",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            color: "#6b7575",
            fontSize: "1.1rem",
            lineHeight: "3.5rem",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          }}
        >
          <ListItem>
            <Link to="/">
              <strong> Home </strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/research">
              <strong> Research Projects </strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/compositions">
              <strong> Compositions </strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/paintings">
              <strong> Paintings </strong>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/resume">
              <strong> Resume </strong>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Overlay open={open} />
    </div>
  );
}

//Header component for wide screens
function HeaderWide() {
  return (
    <div className="header">
      <span className="header-name">
        <Link to="/">
          <strong>Xinyu (Miranda) Zhang</strong>
        </Link>
      </span>
      <span className="header-nav">
        <span>
          <Link to="/research">
            <strong> RESEARCH PROJECTS</strong>
          </Link>
        </span>
        <span>
          <Link to="/compositions">
            <strong> COMPOSITIONS </strong>
          </Link>
        </span>
        <span>
          <Link to="/paintings">
            <strong> PAINTINGS </strong>
          </Link>
        </span>
        <span>
          <Link to="/resume">
            <strong> RESUME </strong>
          </Link>
        </span>
      </span>
    </div>
  );
}

export default function Header() {
  const smallScreen = useMediaQuery("(max-width:850px)");
  return smallScreen ? <HeaderNarrow /> : <HeaderWide />;
}
