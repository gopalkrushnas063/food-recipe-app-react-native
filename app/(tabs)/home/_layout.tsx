import { useTheme } from "@/context/ThemeContext";
import { Stack } from "expo-router";

export default function HomeLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.cardBackground,
        },
        headerTitleStyle: {
          color: colors.text,
        },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Book Details",
          headerBackTitle: "Back",
          headerBackVisible: true, // Optional, default is true
        }}
      />
    </Stack>
  );
}
