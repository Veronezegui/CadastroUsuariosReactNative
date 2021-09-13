import React from "react";

import { 
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform
} from "react-native";

export function UsuarioCard() {
    return (
        <TouchableOpacity
              style={styles.usuarios}>
            <Text style={styles.usuariosName}>
              Nome: 
            </Text>
            <Text style={styles.usuariosEmail}>
              Email: 
            </Text>
            <Text style={styles.usuariosTelefone}>
              Telefone: 
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    usuarios: {
        backgroundColor: '#041b15',
        borderRadius: 7,
        padding: Platform.OS === 'ios' ? 15 : 9,
        fontSize: 18,
        marginTop: 10,
    },

    usuariosName: {
        color: '#4ce0d2', 
        fontSize: 17
    },
  
    usuariosEmail: {
        color: '#4ce0d2', 
        fontSize: 15
    },
  
    usuariosTelefone: {
        color: '#4ce0d2', 
        fontSize: 13
    },
})