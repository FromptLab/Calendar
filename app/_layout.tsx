import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryProvider } from '../src/shared/providers/query-provider';

export default function RootLayout() {
  return (
    <QueryProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'white' }}
        edges={['top']}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaView>
    </QueryProvider>
  );
}
