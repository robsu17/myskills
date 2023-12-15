import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { 
  Button,
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View
 } from 'react-native';

export default function App() {
  const [skills, setSkills] = useState([])
  const [skillInput, setSkillInput] = useState('')

  function addSkills() {
    setSkills([...skills, skillInput])
    setSkillInput('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Robson!</Text>
      
      <TextInput onChangeText={setSkillInput} value={skillInput} style={styles.input} placeholder='New skill' placeholderTextColor='#555'/>
      
      <TouchableOpacity 
        style={[styles.button, {opacity: skillInput.length > 0 ? 1 : .7}]}
        activeOpacity={.7}
        onPress={addSkills}
        disabled={skillInput.length == 0}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>
        My Skills
      </Text>

      {skills.map((skill) => {
        return (
          <TouchableOpacity key={skill} style={styles.skill}>
            <Text style={styles.skillText}>{skill}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    marginTop: 20,
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  skill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    marginTop: 24,
    borderRadius: 20,
    alignItems: 'center'
  },
  skillText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
