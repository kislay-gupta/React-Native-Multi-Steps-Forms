import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScreen from "../../components/KeyboardAwareScreen";

export default function ConfirmForm() {
  const onNext = () => {
    // validate the form
    // redirect
    router.dismissAll();
    router.back();
  };
  return (
    <KeyboardAwareScreen>
      <Text>Confirm Form</Text>
      <CustomButton title="Submit" onPress={onNext} style={styles.button} />
    </KeyboardAwareScreen>
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
