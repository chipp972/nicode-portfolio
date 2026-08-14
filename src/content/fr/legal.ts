import type { LegalPage } from '../schema';

export const legal: LegalPage = {
  title: 'Mentions légales',
  updatedAt: 'En vigueur au 1er janvier 2021',
  intro:
    "Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, dite L.C.E.N.",
  sections: [
    {
      heading: "L'éditeur",
      paragraphs: [
        "L'édition du site est assurée par la société EURL Nicode, au capital de 50 euros, immatriculée au RCS de Créteil sous le numéro 877 783 902, dont le siège est situé 15 B avenue de la République.",
        'Téléphone : 06 85 31 64 99. Adresse électronique : nicolas@nicode.fr.',
        'Numéro de TVA intracommunautaire : FR83877783902.',
        'Le responsable de la publication est Nicolas Pierre-Charles.',
      ],
    },
    {
      heading: "L'hébergeur",
      paragraphs: [
        "L'hébergeur du site est la société Netlify, dont le siège social est situé 610 22nd Street, Suite 315, San Francisco, CA 94107, États-Unis.",
        'Téléphone : 844-899-7312.',
      ],
    },
    {
      heading: 'Accès au site',
      paragraphs: [
        "Le site est accessible depuis tout endroit, 7 j/7 et 24 h/24, sauf cas de force majeure ou interruption, programmée ou non, pouvant découler d'une nécessité de maintenance.",
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        "Un cookie est un élément qui ne permet pas d'identifier l'utilisateur mais sert à enregistrer des informations relatives à sa navigation.",
        "Ce site ne dépose aucun cookie de mesure d'audience ni de publicité. Le widget de prise de rendez-vous n'est chargé qu'après une action explicite de votre part.",
      ],
    },
    {
      heading: 'Propriété intellectuelle',
      paragraphs: [
        "Toute utilisation, reproduction, diffusion, commercialisation ou modification de tout ou partie du site, sans autorisation de l'éditeur, est prohibée.",
      ],
    },
  ],
};

export const credits: LegalPage = {
  title: 'Crédits',
  updatedAt: 'Mis à jour en août 2026',
  intro: 'Les ressources graphiques et typographiques utilisées sur ce site.',
  sections: [
    {
      heading: 'Typographies',
      paragraphs: [
        'Fraunces, par Undercase Type. Distribuée sous licence SIL Open Font License.',
        'Inter Tight, par Rasmus Andersson. Distribuée sous licence SIL Open Font License.',
        'JetBrains Mono, par JetBrains. Distribuée sous licence SIL Open Font License.',
        'Les trois fontes sont auto-hébergées : aucune requête vers un service tiers au chargement de la page.',
      ],
    },
    {
      heading: 'Illustrations et photographies',
      paragraphs: [
        'Icônes et illustrations réalisées par Freepik, illustration par vectorjuice.',
        'Photographies issues d’Unsplash : Safar Safarov, Thomas Kelley, Adeolu Eletu, Marvin Meyer, Marek Szturc, Campaign Creators, Austin Distel, Murai .hr et Lars Kienle.',
      ],
    },
    {
      heading: 'Réalisation',
      paragraphs: [
        'Conception et développement : Nicolas Pierre-Charles.',
        'Le code source de ce site est public : github.com/chipp972/nicode-portfolio.',
      ],
    },
  ],
};
