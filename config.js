// ============================================================
// CONFIGURATION — Archipel Online OS
// ============================================================
// Où trouver ces valeurs :
//   Supabase Dashboard → Settings (⚙️) → API
//
//   SUPABASE_URL  = "Project URL"  (ex: https://xxxx.supabase.co)
//
//   SUPABASE_KEY  = l'une de ces deux options (les deux fonctionnent) :
//     • Nouvelle clé : "Publishable key"   → commence par  sb_publishable_...
//     • Ancienne clé : "anon public"        → commence par  eyJhbGci...  (JWT)
//
// ⚠️  N'utilisez JAMAIS la "service_role" ou "Secret key" ici (côté client).
// ============================================================

const SUPABASE_URL  = 'https://cmdjcyaqdmyvwiuyqsat.supabase.co';
const SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZGpjeWFxZG15dndpdXlxc2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1MTYzNTcsImV4cCI6MjA5MjA5MjM1N30.WHI2krpD4MfLvDxQ_ix7vyo6JisKSvrQhPXRs5ZlyWc';

// Nom de l'application (apparaît dans la barre latérale)
const APP_NAME      = 'Archipel Online OS';
