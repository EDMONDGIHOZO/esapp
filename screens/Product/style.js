import React from "react";
import { StyleSheet, Dimensions } from "react-native";

let { width } = Dimensions.get("window");

const Styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  // product card style
  prodContainer: {
    width: width / 2 - 20,
    height: width / 1.7,
    margin: 10,
    marginTop: 55,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  prodImage: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },

  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },

  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    marginTop: 10,
    color: "orange",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Styles;
