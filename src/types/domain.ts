export type AppRole = 'ADMINISTRADOR'|'ANALISTA'|'CONSULTA';
export type TaxSphere = 'MUNICIPAL'|'ESTADUAL'|'FEDERAL';
export interface Profile { id:string; nome:string; email:string; perfil:AppRole; ativo:boolean; ultimo_acesso:string|null; }
export interface Company { id:string; codigo:string; razao_social:string; nome_curto:string|null; cnpj:string|null; municipio:string|null; uf:string|null; regime:string|null; status:string|null; responsavel_id:string|null; ativo:boolean; }
export interface Competency { id:string; competencia:string; ano:number; mes:number; status:string; }
export interface Routine { id:string; company_id:string; competency_id:string; esfera:TaxSphere; categoria:string|null; obrigacao:string; status:string; data_limite:string|null; prioridade:string|null; risco:string|null; responsavel_id:string|null; observacao:string|null; }
