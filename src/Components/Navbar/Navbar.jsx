import React from "react";
import "./navbar.scss";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="right">
        <div className="icons">
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton>
            <Badge color="secondary" variant="dot">
              <ChatBubbleOutlineOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge color="secondary" variant="dot">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
        </div>
        <hr />
        <Button>
          <Avatar sx={{ width: 34, height: 34, margin: 1 }} />
          <span>
            Hi,
            <b> Julia</b>
          </span>
          <KeyboardArrowDownOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
