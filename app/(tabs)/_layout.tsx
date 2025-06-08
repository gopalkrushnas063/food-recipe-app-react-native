import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

const _TabLayouts = () => {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Text style={{ color }}>👤</Text>,
        }}
      />
    </Tabs>
  );
};

export default _TabLayouts;

const styles = StyleSheet.create({});
