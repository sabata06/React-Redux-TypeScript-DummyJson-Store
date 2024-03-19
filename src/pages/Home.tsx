import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchComp from "./../components/SearchComp";
import { EventFunc, Product, Products } from "../models/models";
import { useAppDispatch } from "../app/hooks";
import {
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <SearchComp handleChange={handleChange} />
    </div>
  );
};

export default Home;
