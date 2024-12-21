import { useState } from "react";
import { useController } from "react-hook-form";
import { View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React from "react";
type CustomDateTimePicker = {
  name: string;
  label?: string;
};

export default function CustomDateTimePicker({
  name,
  label,
}: CustomDateTimePicker) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  return (
    <View>
      {label && (
        <Text style={{ fontWeight: "600", color: "dimgray" }}>{label}</Text>
      )}
      <Text
        onPress={showDatePicker}
        style={{
          borderWidth: 1,
          borderColor: "gainsboro",
          padding: 10,
          borderRadius: 5,

          marginTop: 4,
          marginBottom: 2,
          color: "black",
        }}
      >
        {value?.toLocaleDateString() || "Select a date"}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text style={{ color: "crimson" }} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
}