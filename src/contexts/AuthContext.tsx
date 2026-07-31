import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../integrations/supabase/client';
import type { Profile } from '../types/domain';
type AuthValue={session:Session|null;profile:Profile|null;loading:boolean;signOut:()=>Promise<void>;refreshProfile:()=>Promise<void>};
const AuthContext=createContext<AuthValue|null>(null);
export function AuthProvider({children}:{children:React.ReactNode}){
 const [session,setSession]=useState<Session|null>(null); const [profile,setProfile]=useState<Profile|null>(null); const [loading,setLoading]=useState(true);
 const loadProfile=async(s:Session|null)=>{ if(!s){setProfile(null);return;} const {data,error}=await supabase.from('profiles').select('*').eq('id',s.user.id).single(); if(error) throw error; setProfile(data as Profile); };
 useEffect(()=>{ supabase.auth.getSession().then(async({data})=>{setSession(data.session);try{await loadProfile(data.session)}finally{setLoading(false)}}); const {data:{subscription}}=supabase.auth.onAuthStateChange((_e,s)=>{setSession(s); queueMicrotask(()=>loadProfile(s).catch(console.error));}); return()=>subscription.unsubscribe();},[]);
 const value=useMemo(()=>({session,profile,loading,signOut:async()=>{await supabase.auth.signOut()},refreshProfile:async()=>loadProfile(session)}),[session,profile,loading]);
 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth(){const v=useContext(AuthContext);if(!v)throw new Error('AuthProvider ausente');return v;}
