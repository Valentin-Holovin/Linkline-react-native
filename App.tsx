import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Input } from 'ui';
import { LocalizationService } from 'services';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LocalizationService.initLocalization();

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={{
          alignItems: 'center', justifyContent: 'center', padding: 30,
        }}
        >
          <Input type="email" label="Email" value={email} onChangeText={setEmail} />
          <Input type="password" label="Password" value={password} onChangeText={setPassword} error="Pizdec" />
          <Input label="Name" value={text} onChangeText={setText} />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
