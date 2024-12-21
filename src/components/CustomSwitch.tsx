import { View, Text, Switch } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";
type CustomButton = {
  name: string;
  label?: string;
};
export default function CustomSwitch({ label, name }: CustomButton) {
  const {
    field: { value, onChange },
  } = useController({ name });
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
        gap: "5",
      }}
    >
      <Text style={{ fontSize: 18 }}>{value ? "on" : "off"}</Text>
      <Switch style={{ margin: 8 }} value={value} onValueChange={onChange} />
    </View>
  );
}
