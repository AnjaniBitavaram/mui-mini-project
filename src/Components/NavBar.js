import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import {Notifications} from "@mui/icons-material";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const AvatarBreak = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h5" sx={{display: {xs: "none", sm: "block"}}}>
          FaceBook
        </Typography>
        <FacebookIcon sx={{display: {xs: "block", sm: "none"}}} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://www.pexels.com/photo/woman-wearing-white-shirt-with-white-flower-on-her-ear-3586798/"
            onClick={e => setOpen(true)}
          />
        </Icons>
        <AvatarBreak onClick={e => setOpen(true)}>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://www.pexels.com/photo/woman-wearing-white-shirt-with-white-flower-on-her-ear-3586798/"
          />
          <Typography variant="span">Sam</Typography>
        </AvatarBreak>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default NavBar;
