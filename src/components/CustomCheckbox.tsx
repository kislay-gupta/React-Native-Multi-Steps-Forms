import { View, Text } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";
type CustomButton = {
  name: string;
  label?: string;
};
export default function CustomCheckbox({ label, name }: CustomButton) {
  const {
    field: { value, onChange },
  } = useController({ name });
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: "5" }}>
      <Checkbox style={{ margin: 8 }} value={value} onValueChange={onChange} />
      <Text>{label}</Text>
    </View>
  );
}
