import React from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={Styles.header}>
      <Image
        source={require("../../assets/logo.png")}
        resizeMode={"contain"}
        style={{ height: 50 }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "transparent",
  },
});

export default Header;
