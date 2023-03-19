import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'ui';
import { LocalizationService } from 'services';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LocalizationService.initLocalization();

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <View style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 100,
      }}
      >
        <Text>Mongoloid</Text>
        <Button title="Mongoloid" />
        <Input />
      </View>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App;
