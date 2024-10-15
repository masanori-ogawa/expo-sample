import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Page() {
  return (
    <Text>
      Top-level page
      <Link href="/(tabs)" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </Text>
  );
}
