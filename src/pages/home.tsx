import React, {useState} from 'react';
import { View,
     Text,
     StyleSheet,
     TextInput,
     Platform,
     TouchableOpacity,
     FlatList,
     ScrollView } from 'react-native';
import { useEffect } from 'react';

import Button from '../components/Button'
import { UsuarioCard } from '../components/UsuarioCard';

interface IUsuariosData {
  id: string,
  name: string,
  email: string,
  telefone: string
}

export function Home() {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newTelefone, setNewTelefone] = useState('')
  const [usuarios, setNewUsuarios] = useState<IUsuariosData[]>([])

  function handleAddNewUsuario() {
    const data = {
      id: String(new Date().getTime()),
      name: newName,
      email: newEmail,
      telefone: newTelefone
    }

    setNewUsuarios([...usuarios, data])
    setNewName('')
    setNewEmail('')
    setNewTelefone('')
  } 

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastre-se</Text>
        <TextInput 
          style={styles.input}
          placeholder='Nome'
          placeholderTextColor = '#136f63'
          onChangeText={value => setNewName(value)}
          value={newName}  >
        </TextInput>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor = '#136f63'
          onChangeText={value => setNewEmail(value)}
          value={newEmail}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder ='Telefone'
          placeholderTextColor = '#136f63'
          onChangeText={value => setNewTelefone(value)}
          value={newTelefone}
        >         
        </TextInput>

        <Button onPress={handleAddNewUsuario}/>

        <Text style={[styles.title, {marginVertical: 20}]}>Usuários Cadastrados:</Text>
        
      <FlatList showsVerticalScrollIndicator={false}
        data={usuarios}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <UsuarioCard></UsuarioCard>
        )}
      />  
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#136f63',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },

    title: {
        color: '#4ce0d2',
        fontSize: 25,
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#041b15',
        borderRadius: 7,
        color: '#4ce0d2',
        padding: Platform.OS === 'ios' ? 15 : 9,
        fontSize: 18,
        marginTop: 15,
    },

})