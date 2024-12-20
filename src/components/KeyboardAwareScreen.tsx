import React from "react";
import { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeyboardAwareScreen({ children }: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
      keyboardVerticalOffset={110}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView
          edges={["bottom"]}
          style={{ flex: 1, backgroundColor: "white" }}
        >
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: 10,
    gap: 5,
  },
});
