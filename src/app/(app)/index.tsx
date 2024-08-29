import { Text, View } from "react-native";
import { useSession } from "src/auth/AuthContext";

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => signOut()}>Sign Out</Text>
    </View>
  );
}
