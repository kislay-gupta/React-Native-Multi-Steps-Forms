import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";

export default function PersonalDetailsForm() {
  const [fullName, setFullName] = useState("");
  const onNext = () => {
    // validate the form
    console.log("name", fullName);
    // redirect
    router.push("/checkout/payment");
  };
  return (
    <View style={styles.container}>
      <Text>PersonalDetailsForm</Text>
      <CustomTextInput label="Full name" placeholder="John doe" />
      <CustomTextInput
        label="Address"
        placeholder="address"
        style={{ height: 100 }}
      />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          label="City"
          placeholder="city"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Post Code"
          placeholder="852113"
          inputMode="numeric"
          containerStyle={{ flex: 1 }}
        />
      </View>
      <CustomTextInput label="Phone number" placeholder="+91" inputMode="tel" />
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    gap: 5,
  },

  button: {
    marginTop: "auto",
    marginBottom: 25,
  },
});
