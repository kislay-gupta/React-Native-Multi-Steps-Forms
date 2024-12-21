import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import KeyboardAwareScreen from "../../components/KeyboardAwareScreen";
import { useCheckoutForm } from "../../context/CheckoutFormProvider";
export default function ConfirmForm() {
  const { personalInfo, paymentInfo, onSubmit } = useCheckoutForm();
  const onNext = () => {
    // validate the form
    // redirect
    router.dismissAll();
    router.back();
  };
  return (
    <KeyboardAwareScreen>
      <View style={{ gap: 5, flex: 1 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={"/checkout"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value.toString()}
              </Text>
            ))}
          </View>
        )}
        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={"/checkout/payment"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value.toString()}
              </Text>
            ))}
          </View>
        )}
      </View>
      <CustomButton title="Submit" onPress={onSubmit} style={styles.button} />
    </KeyboardAwareScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
    marginBottom: 25,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});
