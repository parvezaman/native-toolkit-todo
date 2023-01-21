import { SafeAreaView, View } from 'react-native';
import Header from './src/components/Common/Header';
import ToDoList from './src/components/ToDo/ToDoList';

export default function App() {

  const RootApp = () => {
    return (
      <SafeAreaView>
        <Header />
        <ToDoList />
      </SafeAreaView>
    )
  };

  return (
    <View >
      <RootApp />
    </View>
  );
}
