import { StyleSheet, View, Text, Pressable } from 'react-native';


function GoalItem(props){
    return (
      <Pressable onPress={props.onDelete.bind(this, props.itemProp.index)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
          <View  key={props.itemProp.item.index}  
          style={styles.goalItem}><Text style={styles.goalText}>
          {props.itemProp.item} </Text></View>
      </Pressable>

    )
    
}

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8
       
      },
      goalText: {
        color: "white"
      },
      pressedItem: {
        opacity: 0.5,

      }
      
});

export default GoalItem;