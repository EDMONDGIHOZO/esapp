import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ProductCard from "./productCard";

const List = (props) => {
  const { product } = props;
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <ProductCard {...product} />
    </TouchableOpacity>
  );
};

export default List;
