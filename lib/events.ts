import { supabase } from './supabase';
export type EventRecord = { id:string; event_code:string; title:string; start_time:string|null; end_time:string|null; created_by:string; created_at:string };
export async function createEvent(i:{eventCode:string;title:string;start:string;end:string;createdBy:string}) { return supabase.from('events').upsert({event_code:i.eventCode,title:i.title,start_time:i.start,end_time:i.end,created_by:i.createdBy},{onConflict:'event_code'}).select().single(); }
export async function getEventByCode(code:string) { const r=await supabase.from('events').select('*').eq('event_code',code).maybeSingle(); return {event:r.data as EventRecord|null,error:r.error}; }
export async function getEventsByTeacher(id:string) { const r=await supabase.from('events').select('*').eq('created_by',id).order('start_time',{ascending:false}); return {events:(r.data??[]) as EventRecord[],error:r.error}; }
