import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
const [enteredGoalText, setEnteredGoalText] = useState("")
const [goals, setGoals] = useState([])

function handleInputGoal(enteredText) {
  console.log(enteredText)
  setEnteredGoalText(enteredText)
}

function handleAddGoal() {
  console.log(enteredGoalText)
  setGoals(()=>[...goals, {text: enteredGoalText, key: Math.random().toString()}])
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your Goal!'
          onChangeText={handleInputGoal}
        />
        <Button 
          title='Add Goal'
          color={'#666666'}
          onPress={handleAddGoal}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={goals}
        renderItem={(itemData) => {
          <View style={styles.goalsContainer}>
              <Text style={styles.goalText}>
              </Text>
          </View>
        }}
              >
              </FlatList> 
          
              
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    paddingTop : 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#279327' 
  },
  btnGoal: {
    borderWidth: 1,
    borderColor: '#276327',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5,
  },
  goalsContainer:{
    flex: 5,
  },
  goalsItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#145414',
    color: 'white'
  },
  goalText: {
    color: 'white'
  }
  
});
