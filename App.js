import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import Header from './src/components/Common/Header';
import ToDoList from './src/components/ToDo/ToDoList';
import store from './src/redux/store';

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
    <Provider store={store} >
      <RootApp />
    </Provider>
  );
}
