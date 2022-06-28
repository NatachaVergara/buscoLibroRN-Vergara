import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Modal, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [texto, setTexto] = useState('Hola Coders')
  const Separator = () => (
    <View style={styles.separator} />
  );


  const onHandlePress = (e) => {
    setModalVisible(!modalVisible)

  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texto}>Busco Libro App</Text>
        {/* <TextInput style={styles.textInput}  />     */}
        <Pressable style={styles.button} title='Saludar' 
        onPress={onHandlePress}>
          <Text style={styles.textStyle}>Saludar</Text>

        </Pressable>
        <StatusBar style="auto" />
      </View>

      <Separator />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{texto}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto: {
    color: 'red',
    margin: '15px',
    fontSize: '30px'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }


});
