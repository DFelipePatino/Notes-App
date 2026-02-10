import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useNotes } from '@/context/NotesContext';
import ListItem from '@/components/ListItem';
import { Ionicons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
  },
});
