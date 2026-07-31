# CONFI CONSULTORIA | CONTROLE FISCAL INTERNO

Projeto inicial React + TypeScript + Supabase pronto para GitHub e importação/sincronização com Lovable.

## Instalação

```bash
npm install
cp .env.example .env
npm run dev
```

Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`.

## Supabase

1. Conecte o projeto Supabase no Lovable.
2. Execute a migration em `supabase/migrations/202607310001_initial_schema.sql`.
3. Publique a Edge Function `invite-user`.
4. Configure URLs de redirecionamento do Auth.
5. Crie o primeiro usuário no Supabase Auth e insira o profile como `ADMINISTRADOR` pelo SQL Editor.

Exemplo, substituindo os valores:

```sql
insert into public.profiles(id,nome,email,perfil,ativo)
values ('UUID_DO_AUTH_USER','ARTHURO','EMAIL@EXEMPLO.COM','ADMINISTRADOR',true);
```

## Segurança

Nunca coloque a service role no frontend. O frontend usa apenas a chave pública. A Edge Function usa a chave administrativa no ambiente seguro.

## Estado atual

Operacionais: autenticação, rotas protegidas, dashboard por contagem, empresas, rotinas, colaboradores e schema/RLS base.
Preparados como próximos módulos: guias, pendências e repasses.
