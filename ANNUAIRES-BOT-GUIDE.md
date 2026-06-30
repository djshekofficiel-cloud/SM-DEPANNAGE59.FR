# 🤖 Guide d'utilisation du Bot d'Inscription Annuaires

Script automatisé pour remplir Pages Jaunes, Bing Places, Cylex, etc.

---

## **📋 Prérequis**

1. **Python 3.8+** installé sur ton ordinateur
2. **Selenium** (framework d'automatisation)
3. **ChromeDriver** (pour contrôler Chrome)
4. **Chrome** navigateur installé

---

## **⚙️ Installation (5 min)**

### **Étape 1 — Installer les dépendances**

Ouvre un terminal et exécute :

```bash
# Sur Mac / Linux
pip3 install selenium

# Sur Windows
pip install selenium
```

### **Étape 2 — Télécharger ChromeDriver**

1. Va à **https://chromedriver.chromium.org**
2. Télécharge la version qui correspond à **ta version de Chrome**
3. Place le fichier `chromedriver` dans `/Users/djshek/Desktop/depannage-lille/`

**Vérifie ta version Chrome :**
- Mac : Chrome menu → About Google Chrome (affiche ta version)
- Windows : même chose

### **Étape 3 — Donner les permissions**

Sur Mac/Linux, rends le script exécutable :

```bash
chmod +x annuaires-bot.py
```

---

## **🚀 Utilisation**

### **Lancer le script**

```bash
cd /Users/djshek/Desktop/depannage-lille
python3 annuaires-bot.py
```

Le navigateur Chrome s'ouvrira automatiquement.

### **Pendant l'exécution**

Le script va :

1. **Ouvrir Pages Jaunes** → remplir le formulaire automatiquement
   - Tu dois finaliser : **captcha + vérifier le SMS/email**
   - Code SMS reçu → copie-colle dans le formulaire
   - Une fois validé → appuie sur **Entrée** dans le terminal

2. **Ouvrir Bing Places** → remplir automatiquement
   - Tu dois finaliser : **vérification SMS**
   - Appuie sur **Entrée** quand c'est fait

3. **Ouvrir Cylex** → remplir automatiquement
   - Tu dois finaliser : **valider le formulaire**
   - Appuie sur **Entrée**

---

## **📝 Ce que tu dois faire MANUELLEMENT**

| Étape | Action |
|-------|--------|
| 1️⃣ Lancer le bot | `python3 annuaires-bot.py` |
| 2️⃣ Pages Jaunes | Complète captcha + entrée code SMS → Appuie Entrée |
| 3️⃣ Bing Places | Récupère code SMS → Appuie Entrée |
| 4️⃣ Cylex | Clique « Valider » → Appuie Entrée |
| 5️⃣ Copie les URLs | Chaque fiche reçoit une URL → Envoie-les moi |

**Temps total : ~20 min (vs 55 min en manuel)**

---

## **🔍 Troubleshooting**

### **Erreur : "chromedriver not found"**
→ Assure-toi que `chromedriver` est dans le même dossier que `annuaires-bot.py`

### **Erreur : "Module selenium not found"**
→ Réinstalle : `pip3 install selenium --upgrade`

### **Le navigateur se ferme trop vite**
→ Modifie le script (ligne ~50) : décommente `# options.add_argument("--headless")` en la commentant si elle ne l'est pas

### **Les boutons ne se trouvent pas**
→ Pages Jaunes / Bing / Cylex changent parfois leur HTML
→ Tu finis manuellement ce que le bot n'a pas pu remplir

---

## **📍 Une fois les inscriptions faites**

1. Chaque annuaire te donne une **URL de fiche** (ex: `https://www.pagesjaunes.fr/entreprise/...`)
2. **Envoie-moi toutes les URLs** → Je les ajoute en `sameAs` au JSON-LD
3. Les fiches apparaîtront dans Google en 2–4 semaines

---

## **💡 Tips pour éviter les blocages**

- ✅ Lance le bot une fois par annuaire (pas besoin de le relancer)
- ✅ Attends 2–3 secondes entre chaque action (déjà intégré)
- ✅ Utilise un VPN si tu es bloqué (rare)
- ✅ Pas besoin de modifier le script sauf si Pages Jaunes/Bing/Cylex changent

---

**Questions ?** Teste d'abord Pages Jaunes, c'est l'annuaire le plus important. 🎯
