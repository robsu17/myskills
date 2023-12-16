import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity key={skill} style={styles.skill}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
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
})