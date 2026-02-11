import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { useNotes } from '@/context/NotesContext';
import ListItem from '@/components/ListItem';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/AllNotes.styles';

export default function AllNotesScreen() {
  const { notes, isLoading } = useNotes();

  const renderItem = ({ item }: { item: { id: number; note: string } }) => {
    return <ListItem note={item.note} id={item.id} />;
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="document-text-outline" size={64} color="#ccc" />
      <Text style={styles.emptyText}>No notes yet</Text>
      <Text style={styles.emptySubtext}>Add your first note to get started!</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {notes.length > 0 ? (
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        renderEmpty()
      )}
    </View>
  );
}
