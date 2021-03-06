import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

// importing icons
import { Ionicons } from "@expo/vector-icons";

class AddTodo extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          placeholder="Ex. Create New Video"
          style={{
            borderWidth: 1,
            borderColor: "#f2f2e1",
            backgroundColor: "#eaeaea",
            height: 50,
            flex: 1,
            padding: 5
          }}
        />
        <TouchableOpacity onPress={() => alert("added todo")}>
          <View
            style={{
              height: 50,
              backgroundColor: "pink",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <Ionicons
              name="md-add"
              size={30}
              style={{ color: "#EC0E80", padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
