import ParallaxScrollView from "@/components/ParallaxScrollView";
import App from "@/components/project/app/app";
export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      {/*<ThemedText>Welcome to Expo</ThemedText>z*/}
      <App />
    </ParallaxScrollView>
  );
}
