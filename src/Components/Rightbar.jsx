import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Profile from "../assests/images/profile4.jpg";
import Profile1 from "../assests/images/profile1.jpg";
import Profile3 from "../assests/images/profile3.jpg";
import Profile4 from "../assests/images/profile4.jpg";
import Profile5 from "../assests/images/profile5.jpg";
import itemData from "./data";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed" width={400}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={Profile} />
          <Avatar alt="Travis Howard" src={Profile1} />
          <Avatar alt="Cindy Baker" src={Profile3} />
          <Avatar alt="Agnes Walker" src={Profile4} />
          <Avatar alt="Trevor Henderson" src={Profile5} />
          <Avatar alt="Remy Sharp" src={Profile} />
          <Avatar alt="Travis Howard" src={Profile} />
          <Avatar alt="Cindy Baker" src={Profile4} />
          <Avatar alt="Agnes Walker" src={Profile5} />
          <Avatar alt="Trevor Henderson" src={Profile3} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList sx={{width: 500}} cols={3} rowHeight={164}>
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>

        <List sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={Profile} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: "inline"}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={Profile5} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: "inline"}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={Profile3} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{display: "inline"}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
