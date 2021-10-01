import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image
} from 'react-native'

export default function Login({ navigation }) {
  const [email, onChangeEmail] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)

  const welcome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'WelcomeScreen' }]
    })
  }

  return (
    <SafeAreaView style={styles.mainArea}>
      <View>
        <TouchableHighlight style={styles.backButton} onPress={() => welcome()}>
          <Text>◄</Text>
        </TouchableHighlight>
        <Text style={styles.header}>Compras do Zeus</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Ex: 3kg de ração por R$70,00"
        keyboardType="email-address"
      />
      <TouchableHighlight>
        <View style={styles.button}>
          <Text>Registrar</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFBD19',
    marginTop: 10,
    padding: 10
  },
  mainArea: {
    paddingTop: 50
  },
  header: {
    marginLeft: 135
  },
  backButton: {
    height: 40,
    width: 40,
    alignItems: 'center',
    backgroundColor: '#FFBD19',
    marginTop: 10,
    padding: 10
  }
})
