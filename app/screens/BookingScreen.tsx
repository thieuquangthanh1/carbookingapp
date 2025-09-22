import React from "react";
import { View, Text, Button } from "react-native";

export default function BookingScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Màn hình đặt vé 🚗</Text>
      <Button title="Đi tới Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}
