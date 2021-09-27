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
      <View>
        <TouchableHighlight style={styles.backButton}>
          <Text>◄</Text>
        </TouchableHighlight>
        <Text style={styles.header}>Cadastro</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Insira um email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Insira uma senha"
        keyboardType="default"
        secureTextEntry={true}
      />
      <TouchableHighlight>
        <View style={styles.button}>
          <Text>Finalizar</Text>
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
  header: {
    marginLeft: 165
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

export default UselessTextInput
