# 🎓 SNO — Système Nerveux Opérationnel
## Service de Soutien Scolaire en Ligne (Live Sessions)

Application web complète pour piloter les 4 équipes opérationnelles.
Stack : **Supabase** (DB + Auth) + **HTML/JS vanilla** (GitHub Pages) + **GitHub Actions** (automatisations)
**100% gratuit — Déploiement en moins de 30 minutes**

---

## ⚡ Déploiement en 5 étapes

### Étape 1 — Créer le projet Supabase

1. Aller sur [supabase.com](https://supabase.com) → **New Project**
2. Choisir un nom (ex: `sno-soutien`) et un mot de passe fort
3. Attendre ~2 minutes que le projet démarre

### Étape 2 — Créer la base de données

1. Dans Supabase → **SQL Editor** → **New Query**
2. Coller le contenu de **`supabase/schema.sql`** en entier
3. Cliquer **Run** (attendre ~10 secondes)
4. Vérifier : `Table Editor` doit montrer ~15 tables

### Étape 3 — Récupérer les clés API

1. Supabase → **Settings** → **API**
2. Copier :
   - **Project URL** (ex: `https://xxxxx.supabase.co`)
   - **anon public** key (longue chaîne)

### Étape 4 — Configurer l'application

Ouvrir le fichier **`config.js`** et remplacer :

```javascript
const SUPABASE_URL  = 'https://VOTRE-PROJET.supabase.co';  // ← Votre URL
const SUPABASE_KEY  = 'VOTRE-ANON-KEY';                    // ← Votre clé anon
```

### Étape 5 — Héberger sur GitHub Pages

1. Créer un repo GitHub (ex: `sno-app`) — peut être **privé**
2. Pousser tous les fichiers :
```bash
git init
git add .
git commit -m "Initial SNO deployment"
git branch -M main
git remote add origin https://github.com/VOTRE-USER/sno-app.git
git push -u origin main
```
3. GitHub → **Settings** → **Pages** → Source : **Deploy from branch `main`**, dossier `/root`
4. L'app sera disponible sur `https://VOTRE-USER.github.io/sno-app/`

---

## 🔐 Créer le premier compte admin

1. Ouvrir l'application → cliquer **S'inscrire**
2. Créer un compte avec votre email
3. Dans Supabase → **Table Editor** → `user_profiles`
4. Trouver votre ligne → changer `role` de `agent_saisie` en `admin`
5. Créer les autres comptes de la même façon avec les rôles appropriés :

| Rôle | Équipe | Accès |
|------|--------|-------|
| `admin` | Direction / IT | Tout |
| `tech_planif` | Équipe technique | Planning + QC + Saisie |
| `agent_saisie` | Équipe saisie | Saisie uniquement |
| `agent_fidelisation` | Fidélisation | Absences + Contacts |
| `direction` | Direction | Lecture seule |

---

## ⚙️ Configurer les automatisations GitHub Actions

Dans GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret** :

| Secret | Valeur | Obligatoire |
|--------|--------|-------------|
| `SUPABASE_URL` | URL de votre projet Supabase | ✅ |
| `SUPABASE_SERVICE_KEY` | Clé `service_role` (Settings → API) | ✅ |
| `RESEND_API_KEY` | Clé API [resend.com](https://resend.com) (gratuit) | Optionnel |
| `REPORT_EMAIL` | Email destinataire des rapports | Optionnel |

### Automatisations incluses

| Workflow | Fréquence | Action |
|----------|-----------|--------|
| `daily-report.yml` | Tous les jours à 7h | Rapport journalier par email |
| `monthly-salary.yml` | Le 1er du mois à 9h | Calcul auto salaires mois précédent |
| `absence-alert.yml` | 2x/jour (10h + 18h) | Alerte absents non contactés >24h |

---

## 📱 Modules de l'application

| Module | Équipe | Fonctionnalités |
|--------|--------|-----------------|
| **📊 Tableau de bord** | Tous | KPIs temps réel, alertes, graphiques |
| **📅 Planification** | Technique | CRUD séances, emploi du temps, export CSV |
| **✏️ Saisie** | Saisie | Documents reçus, pipeline statut, saisies |
| **🔧 Technique / QC** | Technique | Validation saisies, incidents, montages, checklist |
| **🤝 Fidélisation** | Fidélisation | Absents, contacts, suivi satisfaction |
| **👨‍🏫 Professeurs** | Admin | CRUD professeurs, taux horaire |
| **🎒 Élèves** | Admin | CRUD élèves, moyennes, statut |
| **💰 Salaires** | Admin | Calcul auto, validation, paiement |
| **⚙️ Référentiels** | Admin | Sièges, salles, matières, classes |

---

## 🗃️ Structure des fichiers

```
sno-app/
├── index.html              ← Application complète
├── config.js               ← ⚠️ À modifier avec vos clés
├── supabase/
│   └── schema.sql          ← Schéma DB complet (à exécuter dans Supabase)
├── .github/
│   └── workflows/
│       ├── daily-report.yml      ← Rapport journalier
│       ├── monthly-salary.yml    ← Calcul salaires
│       └── absence-alert.yml     ← Alertes absences
└── README.md
```

---

## 🆘 Dépannage courant

**"Invalid API key"** → Vérifier `config.js` — la clé `anon public` (pas `service_role`)

**Tables vides après schema.sql** → Re-exécuter uniquement la section `-- 12. DONNÉES DE DÉMARRAGE`

**Page blanche sur GitHub Pages** → Vérifier que `index.html` est à la racine du repo (pas dans un sous-dossier)

**"Row violates row-level security"** → Dans Supabase → Authentication → Policies → vérifier que les politiques RLS sont bien créées

**Email non reçu** → Vérifier les secrets GitHub Actions + compte Resend vérifié

---

## 📊 Connecter Metabase (Dashboards avancés — optionnel)

1. Créer un compte gratuit sur [Render.com](https://render.com)
2. Déployer Metabase (template disponible sur Render)
3. Connecter à Supabase via PostgreSQL :
   - Host : `db.VOTRE-PROJET.supabase.co`
   - Port : `5432`
   - Database : `postgres`
   - User/Password : dans Supabase → Settings → Database

---

*Version 1.0 — Système Nerveux Opérationnel — Soutien Scolaire en Ligne*
