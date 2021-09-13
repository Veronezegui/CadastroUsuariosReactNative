import React from "react"

import { 
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet,
    Platform
} from "react-native"

type ButtonProps = TouchableOpacityProps

export default function Button({ onPress }: ButtonProps) {
    
    return (
        <TouchableOpacity
         style={styles.button}
         activeOpacity={0.3}
         onPress={onPress}
        >
            <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
    )
   
    
}

const styles = StyleSheet.create({
    button: { 
        backgroundColor: '#041b15',
        padding: Platform.OS === 'ios' ? 15 : 9,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 15,
        width: 150,
    },

    textButton: {
        color: '#4ce0d2',
        fontWeight: 'bold',
        fontSize: 18,
      },
})