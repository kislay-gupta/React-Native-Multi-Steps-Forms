import React from "react";
import { Stack } from "expo-router";
import CheckoutFormProvider from "../../context/CheckoutFormProvider";
import CheckoutFormIndicator from "../../components/CheckoutFormIndicator";

export default function CheckOutLayout() {
  return (
    <CheckoutFormProvider>
      <CheckoutFormIndicator />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="personal" options={{ title: "Personal" }} />
        <Stack.Screen name="payment" options={{ title: "Payment" }} />
        <Stack.Screen name="confirm" options={{ title: "Confirm" }} />
      </Stack>
    </CheckoutFormProvider>
  );
}
