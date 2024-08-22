import { ThemedView } from "../../../buildIn/ThemedView";
import { Pressable, Text, View } from "react-native";
import React from "react";
import { loginStyles } from "@/components/project/components/login/styles";
import { stateApp } from "@/components/project/components/app/types";

export default function LoginScreen({
  setMode,
}: {
  setMode: (mode: stateApp) => void;
}) {
  return (
    <ThemedView>
      <Pressable style={loginStyles.btn} onPress={() => setMode("wakeUp")}>
        <Text>login to wake up</Text>
      </Pressable>
      <Pressable
        style={loginStyles.btn}
        onPress={() => setMode("notifications")}
      >
        <Text>login to get notifications</Text>
      </Pressable>
    </ThemedView>
  );
}
