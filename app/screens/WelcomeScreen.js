import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Text
} from 'react-native'

export default function Login({ navigation }) {
  const [email, onChangeEmail] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)

  const main = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainScreen' }]
    })
  }

  const register = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'RegisterScreen' }]
    })
  }

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
      <View style={styles.button}>
        <Button title="Entrar" color="#FFBD19" onPress={() => main()} />
      </View>
      <View style={styles.button}>
        <Button
          title="Cadastrar"
          color="#FFBD19"
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
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
