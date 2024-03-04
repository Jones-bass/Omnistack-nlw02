import { StatusBar } from "native-base";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import { Loading } from "./src/components/Loading";

import { theme } from "./src/theme";
import { Landing } from "./src/screens/Landing";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? <Landing /> : <Loading />}
        </ThemeProvider>
  );
}

