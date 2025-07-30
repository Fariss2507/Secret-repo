import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const ModalDialogBox = () => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.buttonText}>Open Dialog</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.dialogBox}>
            <Text style={styles.dialogTitle}>This is a Dialog</Text>
            <Text style={styles.dialogText}>Hello Fariss! This is a modal dialog box.</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


export default ModalDialogBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: '#f44336',
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogBox: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 15,
    padding: 25,
    elevation: 10,
    alignItems: 'center',
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dialogText: {
    fontSize: 16,
    textAlign: 'center',
  },
});