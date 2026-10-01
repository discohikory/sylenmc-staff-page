# SylenMC Network — Formularios Apply (todos los rangos bajo Head-Manager)

Tú mandas un link, ellos responden, tú ves las respuestas en Supabase.

## 1. Crear tabla (1 vez, 1 minuto)

Ve a Supabase Dashboard > SQL Editor > pega esto > Run:

```sql
create table if not exists sylenmc_applies (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  rango text not null,
  nick_mc text,
  discord text,
  respuestas jsonb not null
);
alter table sylenmc_applies enable row level security;
drop policy if exists "insert_apply" on sylenmc_applies;
create policy "insert_apply" on sylenmc_applies for insert to anon, authenticated with check (true);
drop policy if exists "read_apply" on sylenmc_applies;
create policy "read_apply" on sylenmc_applies for select to authenticated using (true);
```

## 2. Ver respuestas

Supabase > Table Editor > `sylenmc_applies`
Ahí ves: fecha, rango, nick, discord y columna `respuestas` (Helper/Jr Mod: 25 · resto: 15).

Tip: crea una vista o exporta a CSV desde ahí.

## 3. Mandar links

Sube esta carpeta a GitHub Pages / Netlify (ya tienes `sylenmc-deploy`):

- `apply-helper.html` → link Helper
  Ej: `https://discohikory.github.io/sylenmc-staff-page/apply-helper.html`
- `apply-jrmod.html` → link Jr Mod
  Ej: `https://discohikory.github.io/sylenmc-staff-page/apply-jrmod.html`
- `apply-soporte.html` → link Soporte Dc
- `apply-mod.html` → link Moderador
- `apply-srmod.html` → link Sr. Mod
- `apply-jradmin.html` → link Jr Admin
- `apply-admin.html` → link Admin
- `apply-headadmin.html` → link Head Admin
- `apply-manager.html` → link Manager
- `apply-developer.html` → link Developer
- `apply-control-tecnico.html` → link Control Tecnico
- `apply-director-tecnico.html` → link Director Tecnico
  Ej base: `https://discohikory.github.io/sylenmc-staff-page/<archivo>`

Mándalos en Discord:
`Postula Helper SylenMC: <link-helper>`
`Postula Jr Mod SylenMC: <link-jrmod>`

## 4. Probar local

Abre los .html doble clic > llena > Enviar > revisa que salga en Supabase.

Si sale error `relation does not exist`, es que falta el paso 1.
