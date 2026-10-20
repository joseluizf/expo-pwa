import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo PWA</Text>
      <Text style={styles.description}>Base Web instalada. As telas de cadastro serão criadas no Checkpoint 2.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#ffffff' },
  title: { fontSize: 30, fontWeight: '700', color: '#14213d', marginBottom: 12 },
  description: { fontSize: 16, textAlign: 'center', color: '#374151', maxWidth: 420 },
});
