import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useNotes } from '@/context/NotesContext';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/AddNote.styles';

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
