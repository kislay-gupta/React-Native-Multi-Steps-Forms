import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import KeyboardAwareScreen from "../../components/KeyboardAwareScreen";
import {
  useForm,
  Controller,
  FormProvider,
  SubmitHandler,
} from "react-hook-form";
export default function PersonalDetailsForm() {
  const form = useForm();
  const [fullName, setFullName] = useState("");
  console.log(form.formState.errors);
  const onNext: SubmitHandler<any> = (data) => {
    // validate the form
    console.log(data);
    // redirect
    router.push("/checkout/payment");
  };
  return (
    <KeyboardAwareScreen>
      <FormProvider {...form}>
        {/* <Controller
        control={control}
        name="fullName"
        rules={{ required: "name is required" }}
        render={({ field: { value, onChange, onBlur } }) => (
          <CustomTextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Full name"
            placeholder="John doe"
          />
        )}
      /> */}
        <CustomTextInput
          name="fullName"
          label="Full name"
          placeholder="John doe"
        />

        <CustomTextInput
          name="address"
          label="Address"
          placeholder="address"
          style={{ height: 100 }}
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="city"
            label="City"
            placeholder="city"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="postCode"
            label="Post Code"
            placeholder="852113"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomTextInput
          name="phoneNo"
          label="Phone number"
          placeholder="+91"
          inputMode="tel"
        />
        <CustomButton
          title="Next"
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
        />
      </FormProvider>
    </KeyboardAwareScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: 10,
    gap: 5,
  },

  button: {
    marginTop: "auto",
    marginBottom: 25,
  },
});
