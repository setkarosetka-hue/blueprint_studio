```javascript
// ==========================================
// Blueprint Studio — Supabase connection
// ==========================================

// ВСТАВЬ СЮДА данные своего проекта Supabase

const SUPABASE_URL = "ВСТАВЬ_СЮДА_PROJECT_URL";
const SUPABASE_ANON_KEY = "ВСТАВЬ_СЮДА_PUBLISHABLE_ИЛИ_ANON_KEY";

// Создание клиента Supabase
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
```
