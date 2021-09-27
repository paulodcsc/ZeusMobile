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

const UselessTextInput = () => {
  const [email, onChangeEmail] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)

  return (
    <SafeAreaView style={styles.mainArea}>
      <Text style={styles.header}>Log-in</Text>
      <Image
        style={styles.illustration}
        source={require('../assets/illustration.png')}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry={true}
      />
      <TouchableHighlight>
        <View style={styles.button}>
          <Text>Entrar</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.button}>
          <Text>Cadastrar</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
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
  illustration: {
    width: 200,
    height: 205,
    marginLeft: 90
  },
  header: {
    marginLeft: 175,
    marginBottom: 30
  }
})

export default UselessTextInput
