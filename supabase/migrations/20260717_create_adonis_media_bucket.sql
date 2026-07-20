insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'adonis-media',
  'adonis-media',
  true,
  20971520,
  array['image/jpeg','image/png','image/webp','image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "adonis admin can upload media"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'adonis-media'
  and (auth.jwt() ->> 'email') = 'gokmen1313@gmail.com'
);

create policy "adonis admin can update media"
on storage.objects for update
to authenticated
using (
  bucket_id = 'adonis-media'
  and (auth.jwt() ->> 'email') = 'gokmen1313@gmail.com'
)
with check (
  bucket_id = 'adonis-media'
  and (auth.jwt() ->> 'email') = 'gokmen1313@gmail.com'
);

create policy "adonis admin can delete media"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'adonis-media'
  and (auth.jwt() ->> 'email') = 'gokmen1313@gmail.com'
);
