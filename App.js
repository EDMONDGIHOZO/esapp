import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Product from "./screens/Product";
import Header from "./components/shared/Header";

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
