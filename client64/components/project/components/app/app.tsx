import { useEffect, useState } from "react";
import { View } from "react-native";
import SoundPlayer from "react-native-sound-player";
import { stateApp } from "@/components/project/components/app/types";
import LoginScreen from "../login";
import WakeUp from "@/components/project/components/wakeUp/wakeUp";
import Notifications from "@/components/project/components/notifications/notifications";
import { socketLogic } from "@/components/project/logic/socket";

export default function App() {
  const [state, setState] = useState<stateApp>("noAuth");
  const ping = () => {
    SoundPlayer.playAsset(require("../../../../assets/sounds/ping.mp3"));
  };
  useEffect(() => {
    socketLogic(ping);
  }, []);
  // @ts-ignore
  return (
    <View>
      {(state === "noAuth" && <LoginScreen setMode={setState} />) ||
        (state === "wakeUp" && <WakeUp />) ||
        (state === "notifications" && <Notifications />)}
    </View>
  );
}
