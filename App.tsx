import { StyleSheet, Image, View, Text} from 'react-native';
import BtnTeacher from './src/components/Button/Btn';
import { useState } from 'react';


export default function App() {

  const [loanding,setLoanding] = useState(false)
  const handleButton = (event: any)=>{
    setLoanding(true);
    console.log('Clicou!')
    alert('fui clicado')
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.png')} resizeMode='contain'/>
      <Text 
        style={styles.text}
        
        >Agenda Escolar</Text>
      <BtnTeacher 
        isLoanding={true}
        onPress={handleButton}
        value={loanding}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  text: {
    marginBottom: 50,
    color: '#355f3a',
    
  }
});
