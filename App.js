import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleEqualPress = () => {
    try {
      setOutput(eval(input).toString());
      setInput("");
    } catch (error) {
      setOutput("Error");
      setInput("");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = isDarkMode
    ? {
        container: { backgroundColor: "#121212" },
        text: { color: "#ffffff" },
        button: { backgroundColor: "#333333" },
        operatorButton: { backgroundColor: "#555555" },
        clearButton: { backgroundColor: "red" },
        equalButton: { backgroundColor: "green" },
        footer: { color: "#ffffff" },
      }
    : {
        container: { backgroundColor: "#f0f0f0" },
        text: { color: "#000000" },
        button: { backgroundColor: "#ffffff" },
        operatorButton: { backgroundColor: "#ffcc00" },
        clearButton: { backgroundColor: "red" },
        equalButton: { backgroundColor: "green" },
        footer: { color: "#000000" },
      };

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Icon
            name={isDarkMode ? "sunny" : "moon"}
            size={30}
            color={themeStyles.text.color}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.display}>
        <Text style={[styles.output, themeStyles.text]}>{output}</Text>
        <Text style={[styles.input, themeStyles.text]}>{input}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("1")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("2")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("3")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.operatorButton, themeStyles.operatorButton]}
            onPress={() => handlePress("+")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("4")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("5")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("6")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.operatorButton, themeStyles.operatorButton]}
            onPress={() => handlePress("-")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("7")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("8")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("9")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.operatorButton, themeStyles.operatorButton]}
            onPress={() => handlePress("*")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, themeStyles.button]}
            onPress={() => handlePress("0")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.clearButton, themeStyles.clearButton]}
            onPress={handleClear}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.equalButton, themeStyles.equalButton]}
            onPress={handleEqualPress}
          >
            <Text style={[styles.equalButtonText, themeStyles.text]}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.operatorButton, themeStyles.operatorButton]}
            onPress={() => handlePress("/")}
          >
            <Text style={[styles.buttonText, themeStyles.text]}>/</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={[styles.footer, themeStyles.footer]}>Calc by Dipesh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  toggleContainer: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  display: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 80,
  },
  output: {
    fontSize: 50,
    textAlign: "right",
    marginBottom: 20,
  },
  input: {
    fontSize: 30,
    textAlign: "right",
    marginBottom: 10,
  },
  buttons: {
    flex: 3,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  operatorButton: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  clearButton: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  equalButton: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  equalButtonText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
  },
});

export default App;
