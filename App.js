import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import {Status, StatusBar} from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

 
  // list of goals
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);



  function addGoalHandler(goalText) {
    if(goalText){
      setGoals(currentGoals => [...currentGoals, goalText]);
      endGoalHandler();
    }    
  }

  
  function startGoalHandler() {
    setModal(true);
  }

  function endGoalHandler() {
    setModal(false);
  }

  function deleteGoalHandler (idx) {
    
   setGoals(currentGoals =>{
      return currentGoals.filter((_, index) => index !== idx);
    })
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Button title='Add new goal' color="#a065ec" onPress={startGoalHandler} />

        <GoalInput visible={modal} onCreateGoal={addGoalHandler} onCancel={endGoalHandler} />

      </View>
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={
                      (itemData) =>{
                        return <GoalItem itemProp={itemData} onDelete={deleteGoalHandler}/>;
                    } 
          }>

          </FlatList>
        </View>  
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal: 16
 

  },
  goalsContainer: {
    flex: 5
  }

});
