import { View, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScreen from "../../components/KeyboardAwareScreen";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentForm,
  PaymentDetailsSchema,
  useCheckoutForm,
} from "../../context/CheckoutFormProvider";
import CustomCheckbox from "../../components/CustomCheckbox";
import CustomSwitch from "../../components/CustomSwitch";
import CustomDateTimePicker from "../../components/CustomDateTimePicker";

export default function PaymentDetailsForm() {
  const { setPaymentInfo, paymentInfo } = useCheckoutForm();
  const form = useForm<PaymentForm>({
    resolver: zodResolver(PaymentDetailsSchema),
    defaultValues: paymentInfo,
  });
  const onNext: SubmitHandler<PaymentForm> = (data) => {
    // validate the form
    // redirect
    setPaymentInfo(data);
    console.log(data);
    router.push("/checkout/confirm");
  };
  return (
    <KeyboardAwareScreen>
      <FormProvider {...form}>
        <CustomTextInput name="cardNo" label="Card Number" />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expires"
            label="Expires"
            containerStyle={{ flex: 1 }}
          />

          <CustomTextInput
            name="cvv"
            label="CVV"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomCheckbox name="saveCard" label="save card info" />
        <CustomSwitch name="switchValue" label="on and off" />
        <CustomButton
          title="Next"
          style={styles.button}
          onPress={form.handleSubmit(onNext)}
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
  },
  button: {
    marginTop: "auto",
  },
});
