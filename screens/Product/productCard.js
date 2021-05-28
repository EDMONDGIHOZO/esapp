import React from "react";
import { View, Text, Dimensions, Image, Button } from "react-native";
import Styles from "./style";

const ProductCard = (props) => {
  const { title, price, description, image, category, countstock } = props;

  return (
    <View style={Styles.prodContainer}>
      <Image
        style={Styles.prodImage}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        }}
      />
      <View style={Styles.card} />
      <Text style={Styles.title}>
        {title.length > 15 ? title.substring(0, 15, -3) + "..." : title}
      </Text>
      <Text style={Styles.price}>{price} RWF</Text>
      {countstock > 0 ? (
        <View>
          <Button title={"Buy"} color={"green"} />
        </View>
      ) : (
        <Text>out of stock</Text>
      )}
    </View>
  );
};

export default ProductCard;
