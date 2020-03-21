import React, { useState, useEffect } from "react";
import axios from "axios";

import ImageResults from "../image-results/image-results";

import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: { padding: 20 },
  select: { minWidth: 120, width: "95%" },
  searchField: { width: "100%" }
}));

const amountList = [3, 9, 12];
const categoryList = [
  "backgrounds",
  "fashion",
  "nature",
  "science",
  "education",
  "feelings",
  "health",
  "people",
  "religion",
  "places",
  "animals",
  "industry",
  "computer",
  "food",
  "sports",
  "transportation",
  "travel",
  "buildings",
  "business",
  "music"
];
const colorList = [
  "grayscale",
  "transparent",
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "lilac",
  "pink",
  "white",
  "gray",
  "black",
  "brown"
];
const Search = () => {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(9);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState();
  const [images, setImages] = useState([]);
  const apiUrl = "https://pixabay.com/api";
  const apiKey = process.env.REACT_APP_PIXABAY_KEY;
  const classes = useStyles();

  useEffect(() => {
    const url = `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&category=${category}&colors=${color}&safesearch=true`;

    console.log(url);
    const fetchImages = () => {
      axios
        .get(url)
        .then(res => setImages(res.data.hits))
        .catch(err => console.log(err));
    };

    fetchImages();
  }, [apiKey, searchText, amount, category, color]);

  console.log(images);
  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleColorChange = event => {
    console.log("handleColorChange:", event.target.value);
    setColor(event.target.value);
  };

  const handleInputChange = event => {
    setInputText(event.target.value);
  };
  const handleSearch = event => {
    setSearchText(inputText);
  };

  // console.log(images);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={2}>
        <InputLabel id="amount-select-label">Amount</InputLabel>
        <Select
          className={classes.select}
          labelId="amount-select-label"
          id="amount-select"
          value={amount}
          onChange={handleAmountChange}
        >
          {amountList.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} md={2}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          className={classes.select}
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          {categoryList.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} md={2}>
        <InputLabel id="color-select-label">Color</InputLabel>
        <Select
          className={classes.select}
          labelId="color-select-label"
          id="color-select"
          value={color ? color : ""}
          onChange={handleColorChange}
        >
          {colorList.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={10}>
            <TextField
              className={classes.searchField}
              name="inputText"
              value={inputText}
              onChange={handleInputChange}
              label="Search for images"
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSearch}
              styles={{
                width: "100%",
                background: "red",
                padding: 30,
                margin: 50
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {images.length ? (
        <ImageResults images={images} keyword={searchText} />
      ) : null}
    </Grid>
  );
};

export default Search;
