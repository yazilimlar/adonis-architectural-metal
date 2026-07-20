create extension if not exists pgcrypto;

create table if not exists public.asset_slots (
  id uuid primary key default gen_random_uuid(),
  slot_key text unique not null check (slot_key in ('hero','furniture','gate','hospitality','decorative','craftsmanship')),
  title text not null,
  required_ratio text not null,
  minimum_width integer not null,
  minimum_height integer not null,
  active_version_id uuid,
  locked boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists public.asset_versions (
  id uuid primary key default gen_random_uuid(),
  slot_key text not null references public.asset_slots(slot_key) on update cascade on delete restrict,
  storage_url text not null,
  original_filename text not null,
  mime_type text not null,
  file_size bigint not null,
  width integer not null,
  height integer not null,
  alt_text text not null,
  focal_x numeric(5,2) not null default 50,
  focal_y numeric(5,2) not null default 50,
  status text not null default 'draft' check (status in ('draft','published','archived')),
  uploaded_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  published_at timestamptz
);

alter table public.asset_slots
  drop constraint if exists asset_slots_active_version_id_fkey;

alter table public.asset_slots
  add constraint asset_slots_active_version_id_fkey
  foreign key (active_version_id) references public.asset_versions(id) on delete set null;

create table if not exists public.asset_activity (
  id uuid primary key default gen_random_uuid(),
  action text not null check (action in ('uploaded','previewed','published','restored','archived','deleted')),
  slot_key text not null,
  version_id uuid references public.asset_versions(id) on delete set null,
  user_id uuid references auth.users(id),
  created_at timestamptz not null default now()
);

alter table public.asset_slots enable row level security;
alter table public.asset_versions enable row level security;
alter table public.asset_activity enable row level security;

create policy "public can read slots"
  on public.asset_slots for select
  using (true);

create policy "public can read published versions"
  on public.asset_versions for select
  using (status = 'published');

create policy "authenticated admins manage slots"
  on public.asset_slots for all
  to authenticated
  using ((auth.jwt() ->> 'email') = 'gokmen1313@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'gokmen1313@gmail.com');

create policy "authenticated admins manage versions"
  on public.asset_versions for all
  to authenticated
  using ((auth.jwt() ->> 'email') = 'gokmen1313@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'gokmen1313@gmail.com');

create policy "authenticated admins read activity"
  on public.asset_activity for select
  to authenticated
  using ((auth.jwt() ->> 'email') = 'gokmen1313@gmail.com');

create policy "authenticated admins write activity"
  on public.asset_activity for insert
  to authenticated
  with check ((auth.jwt() ->> 'email') = 'gokmen1313@gmail.com');

insert into public.asset_slots (slot_key,title,required_ratio,minimum_width,minimum_height)
values
  ('hero','Hero Image','16:10',2000,1250),
  ('furniture','Furniture Collection','4:5',1600,2000),
  ('gate','Architectural Metalwork','4:5',1600,2000),
  ('hospitality','Hospitality','3:2',2000,1333),
  ('decorative','Decorative Object','4:5',1600,2000),
  ('craftsmanship','Craftsmanship','3:2',2000,1333)
on conflict (slot_key) do update set
  title = excluded.title,
  required_ratio = excluded.required_ratio,
  minimum_width = excluded.minimum_width,
  minimum_height = excluded.minimum_height;
