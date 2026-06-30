// components/Faq.tsx — FAQ complète optimisée pour Google "People also ask" + FAQPage schema

const PHONE = "07 67 87 80 34";

interface FAQItem {
  q: string;
  a: string;
  icon?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  // ZONE & DISPONIBILITÉ
  {
    q: "Quelles sont vos zones d'intervention ?",
    a: "Nous intervenons à Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq, Lens, Liévin, Béthune, Arras, Douai et toute la Métropole Européenne de Lille (MEL). Couverture complète du Nord (59) et Pas-de-Calais (62).",
    icon: "📍",
  },
  {
    q: "Quel est le délai d'intervention ?",
    a: "20 à 30 minutes garanties à Lille et MEL. Hors agglomération, délai confirmé par téléphone. Nous arrivons en moyenne plus vite que la concurrence grâce à notre flotte et localisation stratégique.",
    icon: "⏱️",
  },
  {
    q: "Êtes-vous disponibles 24h/24, 7j/7 ?",
    a: "Oui, 24h/24 et 7j/7 : jour, nuit, week-end, jours fériés. Pas d'abonnement obligatoire, pas de supplément de nuit (tarif unifié).",
    icon: "🌙",
  },

  // TARIFS & PAIEMENT
  {
    q: "Combien coûte un dépannage ?",
    a: "Prix annoncé AVANT intervention, sans surprise. Tarif dépend de: distance (0-25 km, +25 km), type véhicule, horaire (jour/nuit/week-end), type de panne. Devis gratuit au téléphone : appelez-nous.",
    icon: "💰",
  },
  {
    q: "Quels sont vos tarifs exacts ?",
    a: "Consultation sur /tarifs pour détails complets. Exemples: batterie 60-120€, crevaison 50-90€, remorquage 80-200€ (selon distance). Tous les services incluent le déplacement. Pas de frais cachés.",
    icon: "📊",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Espèces, carte bancaire (débit/crédit), chèque, virement bancaire. Pas de frais de paiement. Facture fournie sur place ou par email.",
    icon: "💳",
  },
  {
    q: "Puis-je négocier le tarif ou demander une remise ?",
    a: "Le prix est transparent et équitable pour tous. Pour clients réguliers ou petites entreprises, contactez-nous pour un forfait/partenariat. Club SM: 15€/mois = -10% sur tous les services.",
    icon: "🎁",
  },

  // VÉHICULES & PANNES
  {
    q: "Quels véhicules dépannez-vous ?",
    a: "Voitures essence/diesel/électrique/hybride toutes marques (Renault, Peugeot, Citroën, BMW, Mercedes, Tesla, etc.), motos, scooters, quads, camionnettes et utilitaires légers.",
    icon: "🚗",
  },
  {
    q: "Quels types de pannes couvrez-vous ?",
    a: "Batterie à plat, crevaison, panne carburant, panne moteur/électronique, remorquage complet, clés enfermées, vitre cassée, bris de chaîne, transport planifié, assistance routière, accident.",
    icon: "🔧",
  },
  {
    q: "Intervenez-vous sur autoroute ou voie rapide ?",
    a: "Autoroute/voie rapide: réglementé = utilisez borne orange 07 SOS ou 112. Routes ordinaires (villes, RD): oui, nous intervenons directement 24h/24.",
    icon: "🛣️",
  },
  {
    q: "Pouvez-vous remorquer ma voiture chez mon garagiste ?",
    a: "Oui, remorquage vers garage, concessionnaire, domicile, centre VE. Jusqu'à 300 km. Tarif: 1.50€/km environ (variable selon distance). Accès sécurisé à la prise. Assurance responsabilité incluse.",
    icon: "🚚",
  },

  // SERVICE & PROCÉDURE
  {
    q: "Comment demander une intervention d'urgence ?",
    a: `Appelez immédiatement : ${PHONE}. Urgence (accident, panne critique): +3€. Précisez lieu, type panne, marque/modèle. Technicien confirmé en ~5 min. Chat du site aussi disponible 24h/24.`,
    icon: "📞",
  },
  {
    q: "Pouvez-vous intervenir sans que je sois sur place ?",
    a: "Oui. Donnez accès au véhicule (clé en main, permission propriétaire). Nous vous rappelons avec bilan et tarif confirmé. Paiement accepté par téléphone/SMS pour urgences.",
    icon: "🔑",
  },
  {
    q: "Mon assurance auto couvre-t-elle le dépannage ?",
    a: "Beaucoup d'assurances (tiers, tiers+, tous risques) couvrent dépannage et remorquage 0-100 km. Vérifiez votre contrat. Nous acceptons paiement direct de l'assurance sur bon de tiers.",
    icon: "📋",
  },

  // LOGISTIQUE & GARANTIE
  {
    q: "Quelle est votre zone de couverture maximale ?",
    a: "Couverture primaire (20-30 min): Lille, MEL. Couverture étendue (1-2h): tout le Nord 59 et Pas-de-Calais 62, soit ~10,000 km². Hors région: contactez-nous pour possibilité.",
    icon: "🗺️",
  },
  {
    q: "Avez-vous une garantie ou responsabilité ?",
    a: "Assurance responsabilité civile complète. Couverture dommages causés lors du dépannage/remorquage. Réclamation: contact immédiat après intervention. Délai traitement: 10 jours.",
    icon: "✅",
  },
  {
    q: "Puis-je vous contacter par SMS ou WhatsApp ?",
    a: `WhatsApp: wa.me/33767878034 (cliquez le lien ou +33 7 67 87 80 34). SMS: oui. Chat site: 24h/24. Réponse garantie <5 min sur urgences.`,
    icon: "💬",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Faq() {
  const PHONE = "07 67 87 80 34";

  // Grouper par catégorie
  const categories = [
    { name: "Zone & Disponibilité", items: FAQ_ITEMS.slice(0, 3), color: "blue" },
    { name: "Tarifs & Paiement", items: FAQ_ITEMS.slice(3, 7), color: "emerald" },
    { name: "Véhicules & Pannes", items: FAQ_ITEMS.slice(7, 11), color: "orange" },
    { name: "Service & Garantie", items: FAQ_ITEMS.slice(11, 16), color: "purple" },
  ];

  const colorMap = {
    blue: { border: "border-blue-500/25", bg: "bg-blue-950/10", text: "text-blue-300" },
    emerald: { border: "border-emerald-500/25", bg: "bg-emerald-950/10", text: "text-emerald-300" },
    orange: { border: "border-orange-500/25", bg: "bg-orange-950/10", text: "text-orange-300" },
    purple: { border: "border-purple-500/25", bg: "bg-purple-950/10", text: "text-purple-300" },
  };

  return (
    <section className="py-16 sm:py-24 bg-black border-t border-red-500/15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase text-red-300 border border-red-500/40 bg-red-950/20 mb-4">
            ❓ Questions fréquentes
          </span>
          <h2 className="font-black text-white leading-none mb-4" style={{ fontSize: "clamp(2rem,6vw,4rem)" }}>
            Trouvez vos&nbsp;
            <span
              style={{
                background: "linear-gradient(90deg,#ef4444,#dc2626)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              réponses
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">Tout ce que vous devez savoir sur SM Dépannage</p>
        </div>

        {/* FAQ par catégorie */}
        <div className="space-y-10">
          {categories.map((category, catIdx) => {
            const colors = colorMap[category.color as keyof typeof colorMap];
            return (
              <div key={catIdx}>
                {/* Titre catégorie */}
                <div className={`flex items-center gap-3 mb-4 ${colors.text}`}>
                  <div className={`h-1 w-8 rounded-full`} style={{ background: `rgba(var(--tw-colors-${category.color}-500), 0.5)` }} />
                  <h3 className="font-bold text-lg">{category.name}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-2 sm:space-y-3">
                  {category.items.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                      style={{
                        border: `1px solid ${colors.border.split('-')[2] === 'blue' ? 'rgba(59,130,246,0.25)' : colors.border === 'border-emerald-500/25' ? 'rgba(16,185,129,0.25)' : colors.border === 'border-orange-500/25' ? 'rgba(249,115,22,0.25)' : 'rgba(168,85,247,0.25)'}`,
                        background: `${colors.bg.includes('blue') ? 'rgba(30,58,138,0.1)' : colors.bg.includes('emerald') ? 'rgba(5,46,22,0.1)' : colors.bg.includes('orange') ? 'rgba(124,45,18,0.1)' : 'rgba(75,0,130,0.1)'}`,
                      }}
                    >
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-4 px-4 sm:px-6 py-4 font-semibold text-white text-sm sm:text-base group-hover:opacity-80 transition-opacity">
                        <div className="flex items-start gap-3 flex-1">
                          <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                          <span className="leading-relaxed">{item.q}</span>
                        </div>
                        <svg
                          className="w-5 h-5 text-red-400 flex-shrink-0 mt-1 transition-transform duration-300 group-open:rotate-90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </summary>
                      <div className="px-4 sm:px-6 pb-4 text-slate-300 leading-relaxed text-sm sm:text-base border-t" style={{ borderColor: `${colors.border.includes('blue') ? 'rgba(59,130,246,0.15)' : colors.border.includes('emerald') ? 'rgba(16,185,129,0.15)' : colors.border.includes('orange') ? 'rgba(249,115,22,0.15)' : 'rgba(168,85,247,0.15)'}` }}>
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Votre question n&apos;y est pas ? Nous sommes là pour vous aider !</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#ef4444,#dc2626)",
                border: "1px solid rgba(239,68,68,0.5)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler {PHONE}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg"
              style={{
                border: "1px solid rgba(148,163,184,0.3)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous contacter par email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
