# Adonis Studio — Foundation Setup

## Purpose

Adonis Studio is the protected visual-asset control surface for six governed website image slots:

- hero
- furniture
- gate
- hospitality
- decorative
- craftsmanship

Code remains in GitHub. Media will be stored in managed object storage. Supabase will provide authentication, published-state metadata, version history and audit records.

## Environment variables

Add these to Vercel only after the Supabase project and media store are provisioned:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
BLOB_READ_WRITE_TOKEN=
ADONIS_ADMIN_EMAIL=gokmen1313@gmail.com
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `BLOB_READ_WRITE_TOKEN` to client components.

## Publishing contract

1. Authenticate the administrator.
2. Validate MIME type, file size, dimensions and aspect ratio.
3. Upload to a unique immutable media URL.
4. Insert a draft `asset_versions` record.
5. Preview desktop, tablet and mobile crops.
6. Publish inside a transaction:
   - archive the current published version;
   - publish the selected draft;
   - update `asset_slots.active_version_id`;
   - append `asset_activity`;
   - revalidate the affected public route.
7. Preserve prior files and records for rollback.

## Safety boundaries

- The approved logo and logo-film are not ordinary editable slots.
- Uploading does not publish.
- Public users may read published asset metadata only.
- Only `gokmen1313@gmail.com` may mutate asset records in the initial MVP.
- The public site must retain static fallback images whenever the content service is unavailable.

## Implementation status

The feature branch contains:

- `/admin` visual-control scaffold;
- six fixed slot definitions;
- format and dimension requirements;
- disabled controls until backend security is active;
- Supabase schema, RLS policies and seeded slot records.

The live public website is not changed by this foundation branch.
