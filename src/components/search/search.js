import React, { useState, useEffect } from "react";
import axios from "axios";

import ImageResults from "../image-results/image-results";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: { padding: "10px 20px" },
  select: { minWidth: 120, width: "100%" },
  searchField: { width: "100%" },
  gridItem: { padding: 5 }
}));

const amountList = [3, 9, 12, 15, 30];
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
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(12);
  const [category, setCategory] = useState("All");
  const [color, setColor] = useState("All");
  const [images, setImages] = useState([]);
  const apiUrl = "https://pixabay.com/api";
  const apiKey = process.env.REACT_APP_PIXABAY_KEY;
  const classes = useStyles();

  useEffect(() => {
    const url = `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&category=${category}&colors=${color}&safesearch=true`;

    // console.log(url);
    const fetchImages = () => {
      axios
        .get(url)
        .then(res => setImages(res.data.hits))
        .catch(err => console.log(err));
    };

    fetchImages();
  }, [apiKey, searchText, amount, category, color]);

  // console.log(images);
  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleColorChange = event => {
    setColor(event.target.value);
  };

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={2} className={classes.gridItem}>
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
      <Grid item xs={12} md={2} className={classes.gridItem}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          className={classes.select}
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value="All">All</MenuItem>
          {categoryList.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} md={2} className={classes.gridItem}>
        <InputLabel id="color-select-label">Color</InputLabel>
        <Select
          className={classes.select}
          labelId="color-select-label"
          id="color-select"
          value={color ? color : ""}
          onChange={handleColorChange}
        >
          <MenuItem value="All">All</MenuItem>
          {colorList.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} md={6} className={classes.gridItem}>
        <TextField
          className={classes.searchField}
          name="searchText"
          value={searchText}
          onChange={handleSearchTextChange}
          label="Search for images"
        />
      </Grid>

      {images.length ? (
        <ImageResults images={images} keyword={searchText} />
      ) : null}
    </Grid>
  );
};

export default Search;
