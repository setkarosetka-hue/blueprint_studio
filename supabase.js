// Blueprint Studio — Supabase

const SUPABASE_URL = "https://atfhyyarjqiwlaxixbrd.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_2rtmu-1UkcDR4D35qkGwgw_AQDBR8Lw";

if (!window.supabase) {
  console.error("Supabase CDN не загрузился.");
} else {
  const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  window.supabaseClient = supabaseClient;
}

