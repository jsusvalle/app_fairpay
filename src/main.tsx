import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppBar } from "./components/organisms";

export const MainComponent = () => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <AppBar />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
