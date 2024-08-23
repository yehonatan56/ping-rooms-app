import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SoundPlayer from "react-native-sound-player";
import { stateApp } from "@/components/project/components/app/types";
import LoginScreen from "../login";
import WakeUp from "@/components/project/components/wakeUp/wakeUp";
import Notifications from "@/components/project/components/notifications/notifications";
import { socketLogic } from "@/components/project/logic/socket";

export default function App() {
  const [state, setState] = useState<stateApp>("noAuth");
  const [wakeUp, setWakeUp] = useState<boolean>(false);
  const ping = () => {
    console.log("pin885" + "/g");
    setWakeUp((prev) => !prev);
    // try {
    //   SoundPlayer.playSoundFile("ping", "mp3");
    // } catch (e) {
    //   console.log(e);
    // }
    //0
    // SoundPlayer.playAsset(require("../../../../assets/sounds/ping.mp3"));
  };
  useEffect(() => {
    console.log("app mounted");
    socketLogic(ping);
  }, []);
  // @ts-ignore
  return (
    <View>
      {(state === "noAuth" && <LoginScreen setMode={setState} />) ||
        (state === "wakeUp" && <WakeUp />) ||
        (state === "notifications" && <Notifications />)}

      <Text>{wakeUp === true ? "4" : "8"}</Text>
    </View>
  );
}
