import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import waterfall1 from "../assests/images/waterfall1.jpg";
import waterfall2 from "../assests/images/waterfall2.jpg";
import Profile from "../assests/images/profile4.jpg";
import Profile3 from "../assests/images/profile3.jpg";

function Cards() {
  return (
    <div>
      <Card sx={{m: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image={waterfall2}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{color: "red"}} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{m: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Alex"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image={waterfall1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{color: "red"}} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{m: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
              E
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Emma"
          subheader="September 19, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image={Profile3}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{color: "red"}} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{m: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Jhon"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="10%"
          image={Profile}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{color: "red"}} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
