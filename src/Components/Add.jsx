import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import Profile from "../assests/images/profile1.jpg";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Tooltip
        onClick={e => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {xs: "calc(50% - 25px)", md: 30},
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox mb={1}>
            <Avatar
              alt="Remy Sharp"
              src={Profile}
              sx={{width: 40, height: 40}}
            />
            <Typography variant="h6">Emma</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{width: "100%"}}
            multiline
            rows={3}
            placeholder="Post Title"
            variant="standard"
          />
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="sucess" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width: "100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </React.Fragment>
  );
}

export default Add;
