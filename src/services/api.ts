import { supabase } from '../integrations/supabase/client';
export async function listCompanies(){const {data,error}=await supabase.from('companies').select('*').eq('ativo',true).order('codigo');if(error)throw error;return data;}
export async function listCompetencies(){const {data,error}=await supabase.from('competencies').select('*').order('competencia',{ascending:false});if(error)throw error;return data;}
export async function listRoutines(competencyId?:string){let q=supabase.from('routines').select('*,companies(codigo,razao_social),competencies(competencia)').order('data_limite').limit(100);if(competencyId)q=q.eq('competency_id',competencyId);const {data,error}=await q;if(error)throw error;return data;}
export async function updateRoutine(id:string,patch:Record<string,unknown>){const {data,error}=await supabase.from('routines').update(patch).eq('id',id).select().single();if(error)throw error;return data;}
