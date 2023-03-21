import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Input, Button } from 'ui';
import { LocalizationService } from 'services';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LocalizationService.initLocalization();

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={{
          alignItems: 'center', justifyContent: 'center', padding: 30,
        }}
        >
          <Input type="email" label="Email" value={email} onChangeText={setEmail} />
          <Input type="password" label="Password" value={password} onChangeText={setPassword} error="Something wrong" />
          <Input label="Name" value={text} onChangeText={setText} />
          <Button title="Registration" onPress={() => { setIsLoading(false); setIsDisabled(false); }} />
          <Button title="Disabled" disabled={isDisabled} onPress={() => setIsDisabled(true)} />
          <Button title="Loading" isLoading={isLoading} onPress={() => setIsLoading(true)} />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
