import { TextInput, Button, StyleSheet, Modal, View, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [goalText, setGoalText] = useState('');

    function goalInputHandler(enteredTexts) {
        setGoalText(enteredTexts);
    }

    function addGoalHandler() {
        props.onCreateGoal(goalText);
        setGoalText('');
      }

    return (
        <Modal visible={props.visible} animationType='slide'>
          <View style={styles.inputContainer} >
              <Image  style={styles.image} source={require('../assets/images/goal.png')}/>
              <TextInput value={goalText} placeholder='Goals go here' style={styles.textInput} onChangeText={goalInputHandler}/>
              
              <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <Button title="Add goal" onPress={addGoalHandler} color="#b180f0"/>
                  </View>
                  <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                  </View> 
              </View>
          </View>
        </Modal>     
    )
}

export default GoalInput;

const styles = StyleSheet.create({
      textInput: {
        borderColor:'#e4d0ff',
        backgroundColor: '#e4d0ff',
        color:"#120438",
        borderRadius: 6,
        borderWidth: 1,
        width:'100%',
        padding: 16
      },
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width:'40%',
        marginHorizontal: 8
      },
      image: {
        width:100,
        height:100,
        margin: 20
      }
})