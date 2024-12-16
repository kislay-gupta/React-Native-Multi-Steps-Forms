import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

export default function PersonalDetailsForm() {
  const onNext = () => {
    // validate the form
    // redirect
    router.push("/checkout/payment");
  };
  return (
    <View style={styles.container}>
      <Text>PersonalDetailsForm</Text>
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: "auto",
    marginBottom: 25,
  },
});
