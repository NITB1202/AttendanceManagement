import { AuthProvider } from "@/context/AuthContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="authentication/login" />
        <Stack.Screen name="section_manager/dashboard_manager" />
      </Stack>
    </AuthProvider>
  );
}
