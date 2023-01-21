import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Header from './src/components/Common/Header';
import ToDoList from './src/components/ToDo/ToDoList';
import store from './src/redux/store';

export default function App() {
  const [isEdit, setIsEdit] = useState();
  const [taskId, setTaskId] = useState();
  const RootApp = () => {
    return (
      <SafeAreaView>
        <Header isEdit={isEdit} setIsEdit={setIsEdit} taskId={taskId} />
        <ToDoList setIsEdit={setIsEdit} setTaskId={setTaskId} />
      </SafeAreaView>
    )
  };

  return (
    <Provider store={store} >
      <RootApp />
    </Provider>
  );
}
