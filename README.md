# QR Attendance

An Expo SDK 57 mobile app for QR-based school attendance with Supabase authentication, role-aware student and teacher views, cloud events, QR generation, scanning, and attendance history.

## Setup

1. Copy `.env.example` to `.env` and add the Supabase project URL and anon key.
2. Run `supabase/schema.sql` in the Supabase SQL Editor. Paste and run the entire file at once.
3. Install packages with `npm install`.
4. Start with `npm start` and open it in an SDK 57-compatible Expo Go client.

Never put the Supabase `service_role` key in this app.
