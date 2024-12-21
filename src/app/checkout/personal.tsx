import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScreen from "../../components/KeyboardAwareScreen";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfo,
  PersonalInfoSchema,
  useCheckoutForm,
} from "../../context/CheckoutFormProvider";
import countries from "../../../assets/countries.json";
import CustomPicker from "../../components/CustomPicker";
import CustomDateTimePicker from "../../components/CustomDateTimePicker";
export default function PersonalDetailsForm() {
  const { setPersonalInfo, personalInfo } = useCheckoutForm();
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo,
  });
  console.log(form.formState.errors);
  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    // validate the form
    setPersonalInfo(data);
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

        <CustomPicker
          name="country"
          placeholder={{ label: "Country" }}
          items={countries.map((country) => ({
            label: country.name,
            value: country.code,
          }))}
          style={{
            viewContainer: {
              marginTop: 4,
              marginBottom: 2,
            },
            inputIOS: {
              borderColor: "gainsboro",
              borderWidth: 1,
              width: "100%",
              padding: 10,
              borderRadius: 5,
            },
            inputAndroid: {
              borderColor: "gainsboro",
              borderWidth: 1,
              width: "100%",
              padding: 10,
              borderRadius: 5,
            },
          }}
        />
        <CustomDateTimePicker name="birthDate" />
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
