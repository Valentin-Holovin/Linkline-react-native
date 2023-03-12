import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
    },
  });

  return (
    <GestureHandlerRootView style={styles.layout}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 100,
          }}
          >
            <Text>Hello Mongoloid</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
