import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MovieScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Movie Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieScreen;
