#!/usr/bin/env python3
"""
Automatisation inscription annuaires — SM Dépannage
Utilise Selenium pour remplir les formulaires Pages Jaunes, Bing, Cylex, etc.
Toi tu gères les codes de vérification SMS/email.
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
import sys

# ─── DONNÉES NAP CONSTANTES ───────────────────────────────────────────────────
NAP = {
    "nom": "SM Dépannage",
    "telephone": "07 67 87 80 34",
    "telephone_intl": "+33767878034",
    "site": "https://www.sm-depannage59.fr",
    "email": "contact@smdepannage59.fr",  # À adapter si tu as une vraie adresse
    "ville": "Lille",
    "code_postal": "59000",
    "region": "Nord-Pas-de-Calais",
    "pays": "France",
    "description": """SM Dépannage : service de dépannage et remorquage automobile 24h/24, 7j/7 à Lille,
dans le Nord (59) et le Pas-de-Calais (62). Intervention rapide 20-30 min.
Batterie, crevaison, panne moteur, remorquage. Voitures, motos, scooters, utilitaires.""",
}

# ─── CONFIG SELENIUM ───────────────────────────────────────────────────────────
def init_driver():
    """Initialise le navigateur Chrome avec Selenium."""
    options = Options()
    # options.add_argument("--headless")  # Commente pour voir le navigateur
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("start-maximized")

    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(10)
    return driver

def wait_for_element(driver, by, value, timeout=10):
    """Attends qu'un élément soit présent."""
    wait = WebDriverWait(driver, timeout)
    return wait.until(EC.presence_of_element_located((by, value)))

def wait_for_clickable(driver, by, value, timeout=10):
    """Attends qu'un élément soit cliquable."""
    wait = WebDriverWait(driver, timeout)
    return wait.until(EC.element_to_be_clickable((by, value)))

# ─── PAGES JAUNES ─────────────────────────────────────────────────────────────
def inscription_pagesjaunes(driver):
    """Inscription sur Pages Jaunes (pagesjaunes.fr)."""
    print("\n🟡 [Pages Jaunes] Début inscription...")

    try:
        driver.get("https://pro.pagesjaunes.fr")
        time.sleep(3)

        # Clique sur "S'inscrire"
        inscription_btn = wait_for_clickable(driver, By.XPATH, "//button[contains(text(), 'S')]", timeout=15)
        inscription_btn.click()
        time.sleep(2)

        # Remplis les champs
        nom_input = wait_for_element(driver, By.NAME, "businessName")
        nom_input.send_keys(NAP["nom"])

        phone_input = driver.find_element(By.NAME, "phone")
        phone_input.send_keys(NAP["telephone"])

        code_postal_input = driver.find_element(By.NAME, "postalCode")
        code_postal_input.send_keys(NAP["code_postal"])

        # Catégorie
        try:
            category_select = Select(driver.find_element(By.NAME, "category"))
            category_select.select_by_visible_text("Dépannage automobile")
        except:
            print("  ⚠️  Catégorie non trouvée, à remplir manuellement")

        # Description
        desc_input = driver.find_element(By.NAME, "description")
        desc_input.send_keys(NAP["description"])

        # Site web
        site_input = driver.find_element(By.NAME, "website")
        site_input.send_keys(NAP["site"])

        print("  ✓ Formulaire rempli")
        print("  ⏸️  Pages Jaunes : tu dois finaliser l'inscription manuellement (captcha, vérification SMS)")
        print("     📍 Tu recevras un code SMS → copie-colle dans le navigateur")

        input("  ➡️  Appuie sur Entrée une fois que c'est fait...")

        print("  ✅ Pages Jaunes inscrit !")
        return True

    except Exception as e:
        print(f"  ❌ Erreur Pages Jaunes : {e}")
        return False

# ─── BING PLACES ──────────────────────────────────────────────────────────────
def inscription_bing(driver):
    """Inscription sur Bing Places."""
    print("\n🔵 [Bing Places] Début inscription...")

    try:
        driver.get("https://www.bingplaces.com")
        time.sleep(3)

        # Clique "Add your business"
        add_btn = wait_for_clickable(driver, By.XPATH, "//a[contains(text(), 'Add')]", timeout=15)
        add_btn.click()
        time.sleep(2)

        # Remplis nom
        name_input = wait_for_element(driver, By.ID, "business_name")
        name_input.send_keys(NAP["nom"])

        # Phone
        phone_input = driver.find_element(By.ID, "phone")
        phone_input.send_keys(NAP["telephone_intl"])

        # Website
        website_input = driver.find_element(By.ID, "website")
        website_input.send_keys(NAP["site"])

        # Address
        address_input = driver.find_element(By.ID, "address")
        address_input.send_keys("Lille")

        print("  ✓ Formulaire rempli")
        print("  ⏸️  Bing : finalise manuellement (vérification SMS)")

        input("  ➡️  Appuie sur Entrée une fois que c'est fait...")

        print("  ✅ Bing Places inscrit !")
        return True

    except Exception as e:
        print(f"  ❌ Erreur Bing : {e}")
        return False

# ─── CYLEX ────────────────────────────────────────────────────────────────────
def inscription_cylex(driver):
    """Inscription sur Cylex."""
    print("\n🟢 [Cylex] Début inscription...")

    try:
        driver.get("https://www.cylex.fr")
        time.sleep(3)

        # Cherche le bouton "Inscrire"
        inscrire_btn = wait_for_clickable(driver, By.XPATH, "//a[contains(text(), 'Inscrire')]", timeout=15)
        inscrire_btn.click()
        time.sleep(2)

        # Remplis les champs
        name_input = wait_for_element(driver, By.NAME, "company")
        name_input.send_keys(NAP["nom"])

        phone_input = driver.find_element(By.NAME, "phone")
        phone_input.send_keys(NAP["telephone"])

        website_input = driver.find_element(By.NAME, "website")
        website_input.send_keys(NAP["site"])

        city_input = driver.find_element(By.NAME, "city")
        city_input.send_keys(NAP["ville"])

        postal_input = driver.find_element(By.NAME, "postal_code")
        postal_input.send_keys(NAP["code_postal"])

        desc_input = driver.find_element(By.NAME, "description")
        desc_input.send_keys(NAP["description"])

        print("  ✓ Formulaire rempli")
        print("  ⏸️  Cylex : valide et finalise manuellement")

        input("  ➡️  Appuie sur Entrée une fois que c'est fait...")

        print("  ✅ Cylex inscrit !")
        return True

    except Exception as e:
        print(f"  ❌ Erreur Cylex : {e}")
        return False

# ─── MAIN ─────────────────────────────────────────────────────────────────────
def main():
    print("🤖 Bot d'inscription annuaires — SM Dépannage")
    print(f"   Données : {NAP['nom']}, {NAP['telephone']}, {NAP['site']}\n")

    driver = init_driver()

    try:
        # Pages Jaunes
        if inscription_pagesjaunes(driver):
            time.sleep(2)

        # Bing Places
        if inscription_bing(driver):
            time.sleep(2)

        # Cylex
        if inscription_cylex(driver):
            time.sleep(2)

        print("\n✅ TOUTES LES INSCRIPTIONS TERMINÉES !")
        print("   📍 Envoie-moi les URLs des fiches pour les ajouter au site (JSON-LD sameAs)")

    finally:
        driver.quit()

if __name__ == "__main__":
    main()
