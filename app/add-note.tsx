import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useNotes } from '@/context/NotesContext';
import { Ionicons } from '@expo/vector-icons';

export default function AddNoteScreen() {
  const [enteredText, setEnteredText] = useState('');
  const { addNote } = useNotes();
  const router = useRouter();

  const handleSave = () => {
    if (enteredText.trim().length > 0) {
      addNote(enteredText);
      setEnteredText('');
      router.back();
    } else {
      Alert.alert('Error', 'Please enter a note before saving.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Add Note</Text>
        <TextInput
          value={enteredText}
          onChangeText={setEnteredText}
          style={styles.input}
          placeholder="Enter your note here..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={handleSave}
        >
          <Ionicons name="checkmark-circle" size={24} color="#fff" />
          <Text style={styles.buttonText}>Save Note</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    minHeight: 150,
    marginBottom: 20,
    backgroundColor: '#fafafa',
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  buttonPressed: {
    backgroundColor: '#3700b3',
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
