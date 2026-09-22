import { supabase } from './supabase';
export type Profile = { id: string; email: string; full_name: string | null; role: 'student' | 'teacher'; created_at: string };
export async function getProfile(id: string) { const r = await supabase.from('profiles').select('*').eq('id', id).single(); return { profile: r.data as Profile | null, error: r.error }; }
export async function updateProfile(id: string, updates: Pick<Partial<Profile>, 'full_name'>) { return supabase.from('profiles').update(updates).eq('id', id).select().single(); }
