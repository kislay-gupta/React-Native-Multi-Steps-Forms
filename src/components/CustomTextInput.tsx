import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { ComponentProps } from "react";
type CustomTextInput = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;
export default function CustomTextInput({
  label,
  containerStyle,
  ...TextInputProps
}: CustomTextInput) {
  const error = undefined;
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...TextInputProps}
        // value={fullName}
        // onChangeText={setFullName}

        style={[
          styles.input,
          TextInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={styles.error} numberOfLines={1}>
        {/* {error?.message} */}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "gainsboro",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 1,
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },
  errorInput: {
    borderColor: "crimson",
  },
  error: {
    color: "crimson",
    height: 17,
  },
});
