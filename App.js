import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Product from "./screens/Product";
import Header from "./components/shared/Header";
// Redux
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Product />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
