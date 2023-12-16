import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function Button({addSkills, skillInput}) {
    return (
        <TouchableOpacity 
            style={[styles.button, {opacity: skillInput.length > 0 ? 1 : .7}]}
            activeOpacity={.7}
            onPress={addSkills}
            disabled={skillInput.length == 0}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
      }
})