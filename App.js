import { SafeAreaView, View } from 'react-native';
import Header from './src/components/Common/Header';

export default function App() {

  const RootApp = () => {
    return (
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    )
  };

  return (
    <View >
      <RootApp />
    </View>
  );
}
