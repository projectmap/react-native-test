import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [todos, setTodos] = useState([{ key: 0, title: "start new project" }]);
  const [todosText, setTodoText] = useState("first state");

  const handleAddTodos = () => {
    setTodos((prevState) => [
      ...prevState,
      { key: prevState?.length, title: todosText },
    ]);
  };

  const handleDeleteTodos = (key) => {
    setTodos(() => todos.filter((item) => item.key !== key));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Todos</Text>
        </View>

        <View style={styles.testcontainer}>
          <View style={styles.btnNinput}>
            <TextInput
              style={styles.textInput}
              placeholder="write your todos"
              onChangeText={(val) => setTodoText(val)}
            />
            <Text>{todosText}</Text>
            <Button onPress={handleAddTodos} title="add todos" color="coral" />
          </View>
          <View style={styles.todosListContainer}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleDeleteTodos(item.key)}>
                  <View style={styles.todosList}>
                    <Text>{item.title}</Text>
                    <AntDesign name="delete" />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid red",
  },
  header: {
    marginTop: 40,
    backgroundColor: "coral",
    width: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 24,
  },
  testcontainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "pink",
    border: "solid black",
  },
  todosListContainer: { flex: 1 },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },
  btnNinput: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  todosList: {
    backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    marginTop: 4,
    marginBottom: 4,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 2,
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
  },
});
