import camille from "../assets/camille.jpg"
import minicamille from "../assets/minicamille.jpg"
import pierre from "../assets/pierre.jpg"
import minipierre from "../assets/minipierre.jpg"
import louis from "../assets/louis.jpg"
import minilouis from "../assets/minilouis.jpg"
import note from "../assets/note.jpg"
import { pairs } from "rxjs"

 const Conseillers =  [
  {
    id: 1,
    name: 'Camille Durand',
    img: minicamille,
    img2: camille,
    note: note,
    fonction: 'droit de la famille',
    consult: "45 Consultations",
    active: false,
    experience: "Camille a 6 ans d'experience dans le domaine du droit de la famille et son expérience en fait une experte reconnue",
    description: "Accueil paysan propose des espaces de vie et de rencontre, une agriculture paysanne pour une souveraineté alimentaire, un engagement solidaire pour un projet équitable, des pratiques respectueuses de l'environnement et de la diversité. Ces principes éthiques sont définis par cette charte, En France, le réseau est constitué d'antennes locales, constituées en associations départementales et/ou régionales, permettant d'accompagner et de promouvoir les paysans dans leur projet de diversification en lien avec l'accueil de public en milieu rural.", 
    langue: "français",
    ville: "Bordeaux",
    numero: "230",
    diplome: "Paris",
    annee: "2007",
  },
    {
    id: 2,
    name: 'Pierre Monant',
    img: minipierre,
    img2: pierre,
    note: note,
    fonction: 'droit du travail',
    consult: "54 Consultations",
    active: false,
    experience: "Pierre a 6 ans d'experience dans le domaine du droit du travail et son expérience en fait un expert reconnu",
    description: "Accueil paysan propose des espaces de vie et de rencontre, une agriculture paysanne pour une souveraineté alimentaire, un engagement solidaire pour un projet équitable, des pratiques respectueuses de l'environnement et de la diversité. Ces principes éthiques sont définis par cette charte, En France, le réseau est constitué d'antennes locales, constituées en associations départementales et/ou régionales, permettant d'accompagner et de promouvoir les paysans dans leur projet de diversification en lien avec l'accueil de public en milieu rural.", 
    langue: "français",
    ville: "Marseille",
    numero: "543",
    diplome: "Bruxelles",
    annee: "1994",
  },
  {
    id: 3,
    name: 'Louis Litt',
    img: minilouis,
    img2: louis,
    note: note,
    fonction: 'droit informatique',
    consult: "34 Consultations",
    active: true,
    experience: "Louis a 6 ans d'experience dans le domaine du droit informatique et son expérience en fait un expert reconnu",
    description: "Accueil paysan propose des espaces de vie et de rencontre, une agriculture paysanne pour une souveraineté alimentaire, un engagement solidaire pour un projet équitable, des pratiques respectueuses de l'environnement et de la diversité. Ces principes éthiques sont définis par cette charte, En France, le réseau est constitué d'antennes locales, constituées en associations départementales et/ou régionales, permettant d'accompagner et de promouvoir les paysans dans leur projet de diversification en lien avec l'accueil de public en milieu rural.", 
    langue: "anglais",
    ville: "Paris",
    numero: "356",
    diplome: "Londres",
    annee: "1992",
  }
]

export default Conseillers;