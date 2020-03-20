import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Dialog,
  DialogTitle,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const ImageDialog = ({ open, image, handleClose }) => {
  console.log(open, image);
  return image ? (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Dialog Title</DialogTitle>
      <img
        alt=""
        src={image.largeImageURL}
        style={{ width: "600px", height: "auto" }}
      />
      <p>WTF</p>
    </Dialog>
  ) : null;
};
const ImageResults = ({ images, keyword }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const classes = useStyles();

  const handleOpenDialog = image => {
    console.log(image);
    setOpenDialog(true);
    setCurrentImage(image);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  let content = images ? (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols="3">
        {images.map(image => (
          <GridListTile key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
            <GridListTileBar
              title={image.tags}
              subtitle={<span>by: {image.user}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${image.tags}`}
                  className={classes.icon}
                  onClick={() => handleOpenDialog(image)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  ) : null;

  return (
    <div>
      {content}

      <ImageDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        image={currentImage}
      />
    </div>
  );
};

export default ImageResults;
