import { View, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScreen from "../../components/KeyboardAwareScreen";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const PaymentDetailsSchema = z.object({
  cardNo: z
    .string({ message: "please enter a valid number" })
    .length(10, { message: "please enter a 10 digit value" }),
  expires: z
    .string({ message: "please enter a valid date" })
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/),
  cvv: z.coerce
    .number({ message: "please enter a valid cvv" })
    .min(1000)
    .max(9999),
});
type PaymentForm = z.infer<typeof PaymentDetailsSchema>;
export default function PaymentDetailsForm() {
  const form = useForm<PaymentForm>({
    resolver: zodResolver(PaymentDetailsSchema),
  });

  const onNext: SubmitHandler<PaymentForm> = (data) => {
    // validate the form
    // redirect
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
