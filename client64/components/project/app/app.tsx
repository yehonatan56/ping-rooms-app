import { useState } from "react";
import { stateApp } from "@/components/project/app/types";
import LoginScreen from "@/components/project/login";
import WakeUp from "../wakeUp/wakeUp";
import Notifications from "../notifications/notifications";
import { View } from "react-native";

export default function App() {
  const [state, setState] = useState<stateApp>("noAuth");
  return (
    <View>
      {(state === "noAuth" && <LoginScreen setMode={setState} />) ||
        (state === "wakeUp" && <WakeUp />) ||
        (state === "notifications" && <Notifications />)}
    </View>
  );
}
