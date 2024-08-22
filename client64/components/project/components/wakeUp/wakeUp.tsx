import { ThemedView } from "@/components/buildIn/ThemedView";
import { Pressable, Text } from "react-native";
import { ping } from "@/components/project/logic/socket";
export default function WakeUp() {
  return (
    <ThemedView>
      <Pressable onPress={ping} style={{ padding: 50, backgroundColor: "red" }}>
        <Text>wake up</Text>
      </Pressable>
    </ThemedView>
  );
}
