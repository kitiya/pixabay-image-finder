import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px"
  },
  gridList: {
    width: "100%"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  imageDialog: {
    width: "600px",
    height: "auto"
  }
}));

const ImageDialog = ({ open, image, handleClose }) => {
  const classes = useStyles();
  return image ? (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {image.tags.charAt(0).toUpperCase() + image.tags.slice(1)}
      </DialogTitle>
      <img alt="" src={image.largeImageURL} className={classes.imageDialog} />
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
      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {images.map(image => (
          <GridListTile key={image.id}>
            <img
              src={image.largeImageURL}
              alt={image.tags}
              style={{ cursor: "pointer" }}
              onClick={() => handleOpenDialog(image)}
            />
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
