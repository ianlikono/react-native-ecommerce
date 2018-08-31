import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UtilityThemeProvider } from "react-native-design-utility";

export default class App extends React.Component {
  render() {
    return (
      <UtilityThemeProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </UtilityThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
