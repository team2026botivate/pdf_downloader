import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase env vars missing. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env.local.');
}

export const supabase = createClient(supabaseUrl as string, supabaseKey as string);
