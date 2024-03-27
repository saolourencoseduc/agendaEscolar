import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, Text, StyleSheet, View, Alert } from 'react-native';


interface ButtonProps {
  title: String,
  onPress: () => void,
  isLoanding? : Boolean,
}

function BtnTeacher({ onPress, title, isLoanding = false }: ButtonProps) {

  

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name='chalkboard-teacher' size={80} color="white" style={styles.icon} />
        <Text style={styles.text}>Professor{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name='users-cog' size={80} color="white" style={styles.icon} />
        <Text style={styles.text}>Gestão{title}</Text>
      </TouchableOpacity>
    </View>

  )
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#345e8f',
    borderRadius: 8,
    padding: 16,
    width: 180,
    height: 180,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,

  }
})

export default BtnTeacher;
