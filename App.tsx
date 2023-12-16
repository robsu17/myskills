import { useState, useEffect } from 'react';

import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  FlatList,
  StatusBar
 } from 'react-native';

import { Button } from './components/Button';
import { SkillCard } from './components/Skillcard';

export interface SkillData {
  id: string
  name: string
  date?: Date
}

export default function App() {
  const [skills, setSkills] = useState<SkillData[]>([])
  const [skillInput, setSkillInput] = useState<string>('')
  const [greeting, setGreeting] = useState<string>('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: skillInput
    }

    setSkills([...skills, data])
    setSkillInput('')
  }

  function handleRemoveSkill(id: string) {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Robson!
      </Text>
      <Text style={styles.grettings}>
        {greeting}
      </Text>
      
      <TextInput 
        onChangeText={setSkillInput} 
        value={skillInput} 
        style={styles.input} 
        placeholder='New skill' placeholderTextColor='#555'
      />

      <Button 
        title='Add'
        addSkills={handleAddNewSkill} 
        skillInput={skillInput}
      />

      <Text style={[styles.title, {marginTop: 50}]}>
        My Skills
      </Text>

      <FlatList
        showsHorizontalScrollIndicator={false} 
        keyExtractor={item => item.id}
        data={skills}
        renderItem={({ item }) => {
          return <SkillCard removeSkill={handleRemoveSkill} skill={item} />
        }}
      />
     

      <StatusBar barStyle="light-content" translucent/>
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
  grettings: {
    color: '#fff'
  }
});
