import React, { useState, useEffect } from "react";
import axios from "axios";

import ImageResults from "../image-results/image-results";

import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  select: { minWidth: 120 }
}));

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(3);
  const [images, setImages] = useState([]);
  const apiUrl = "https://pixabay.com/api";
  const apiKey = process.env.REACT_APP_PIXABAY_KEY;
  const classes = useStyles();

  useEffect(() => {
    const fetchImages = () => {
      axios
        .get(
          `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
        )
        .then(res => setImages(res.data.hits))
        .catch(err => console.log(err));
    };

    fetchImages();
    // console.log(images);
  }, [searchText, amount, apiKey]);

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleInputChange = event => {
    setInputText(event.target.value);
  };
  const handleSearch = event => {
    setSearchText(inputText);
  };

  console.log(images);
  return (
    <>
      <InputLabel id="amount-select-label">Amount</InputLabel>
      <Select
        className={classes.select}
        labelId="amount-select-label"
        id="amount-select"
        value={amount}
        onChange={handleAmountChange}
        styles={{ width: "25%" }}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <TextField
        name="inputText"
        value={inputText}
        onChange={handleInputChange}
        label="Search for images"
        styles={{ width: "500px" }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSearch}
        styles={{ width: "10%" }}
      >
        Search
      </Button>

      {images.length ? (
        <ImageResults images={images} keyword={searchText} />
      ) : null}
    </>
  );
};

export default Search;
