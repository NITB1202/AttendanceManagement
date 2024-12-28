import Layout from "@/component/Layout";
import { useAuth } from "@/context/AuthContext";
import { View, Text } from "react-native";

export default function DashboardManager() {
  const { authState } = useAuth();

  return (
    <Layout>
      <View>
        <Text>This is manager dashboard</Text>
      </View>
    </Layout>
  );
}
