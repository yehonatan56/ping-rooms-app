import ParallaxScrollView from "@/components/buildIn/ParallaxScrollView";
import App from "@/components/project/components/app/app";
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
