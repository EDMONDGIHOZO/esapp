// as product container

import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import Styles from "./style";
import List from "./list";
const data = require("../../assets/data/products.json");

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFiltered] = useState([]);

  useEffect(() => {
    setProducts(data);
    setFiltered(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="search product" />
        </Item>
      </Header>
      <View style={Styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <List key={item.id.toString()} product={item} />
          )}
        />
      </View>
    </Container>
  );
};

export default Product;
