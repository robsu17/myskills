import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import { SkillData } from '../App';

interface PropsSkillCardType {
  skill: SkillData
  removeSkill: (id: string) => void
}

export function SkillCard({skill, removeSkill}: PropsSkillCardType) {

  function remove() {
    removeSkill(skill.id)
  }

  return (
    <TouchableOpacity key={skill.id} style={styles.skill}>
      <View style={styles.boxContainer}>
        <Text style={styles.skillText}>{skill.name}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={remove} >
          <Text style={styles.removeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  skill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    marginTop: 24,
    borderRadius: 20,
  },
  skillText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  removeButton: {
    width: 32,
    height: 32,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
  }
})