import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder-key';
const storage = {
  getItem: (k: string) => Platform.OS === 'web' ? Promise.resolve(typeof localStorage === 'undefined' ? null : localStorage.getItem(k)) : SecureStore.getItemAsync(k),
  setItem: (k: string, v: string) => Platform.OS === 'web' ? Promise.resolve(typeof localStorage === 'undefined' ? undefined : localStorage.setItem(k, v)) : SecureStore.setItemAsync(k, v),
  removeItem: (k: string) => Platform.OS === 'web' ? Promise.resolve(typeof localStorage === 'undefined' ? undefined : localStorage.removeItem(k)) : SecureStore.deleteItemAsync(k),
};
export const isConfigured = !url.includes('placeholder') && key !== 'placeholder-key';
export const supabase = createClient(url, key, { auth: { storage, persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } });
