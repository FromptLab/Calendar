import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        popToTopOnBlur: true,
      }}
    >
      <Tabs.Screen
        name='(home)'
        options={{ headerShown: false, tabBarLabel: '홈' }}
      />
      <Tabs.Screen
        name='(first)'
        options={{ headerShown: false, tabBarLabel: '첫 번째' }}
      />
      <Tabs.Screen
        name='(second)'
        options={{ headerShown: false, tabBarLabel: '두 번째' }}
      />
      <Tabs.Screen
        name='(third)'
        options={{ headerShown: false, tabBarLabel: '세 번째' }}
      />
    </Tabs>
  );
}
