import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '@/components/AppButton';
import { Screen } from '@/components/Screen';
import { COLORS } from '@/constants/colors';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const { user } = useAuth();
  return <Screen>
    <View style={styles.pass}>
      <View style={styles.passHeader}><Text style={styles.passLabel}>DIGITAL PASS</Text><MaterialCommunityIcons name="shield-check-outline" size={22} color={COLORS.primary} /></View>
      <View style={styles.dash} />
      <Text style={styles.passName}>{user?.email?.split('@')[0] ?? 'Student'}</Text>
      <Text style={styles.passMeta}>{user?.email}</Text>
      <View style={styles.ready}><View style={styles.dot} /><Text style={styles.readyText}>Ready to scan</Text></View>
    </View>
    <View style={styles.actions}><AppButton title="Scan event QR" icon="qrcode-scan" onPress={() => router.push('/(tabs)/scan')} /><AppButton title="View attendance history" icon="history" variant="secondary" onPress={() => router.push('/(tabs)/history')} /></View>
  </Screen>;
}

const styles = StyleSheet.create({
  pass: { backgroundColor: COLORS.card, borderColor: COLORS.border, borderWidth: 1, borderRadius: 16, padding: 20, marginTop: 18 },
  passHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, passLabel: { fontSize: 11, fontWeight: '900', letterSpacing: 1.5, color: COLORS.textSecondary },
  dash: { borderTopWidth: 1, borderStyle: 'dashed', borderColor: COLORS.border, marginVertical: 18 }, passName: { fontSize: 22, fontWeight: '800', color: COLORS.textPrimary, textTransform: 'capitalize' }, passMeta: { fontSize: 14, color: COLORS.textSecondary, marginTop: 4 },
  ready: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 20 }, dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: COLORS.success }, readyText: { fontWeight: '700', color: COLORS.success }, actions: { gap: 12, marginTop: 24 },
});
