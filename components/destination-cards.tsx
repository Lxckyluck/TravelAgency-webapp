"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Star,
  Clock,
  Users,
  Shield,
  ChevronRight,
  X,
} from "lucide-react";

interface Destination {
  id: string;
  title: string;
  era: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
  rating: number;
  duration: string;
  groupSize: string;
  safetyLevel: string;
  fullDescription: string;
  included: string[];
  warnings: string[];
}

const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    era: "Belle Epoque",
    year: "1889",
    image: "/images/paris-1889.jpg",
    description:
      "Vivez l'Exposition Universelle et l'inauguration de la Tour Eiffel dans le Paris de la fin du XIXe siecle.",
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Exposition Universelle",
      "Cafés de Montmartre",
      "Moulin Rouge",
    ],
    rating: 4.9,
    duration: "3 jours",
    groupSize: "2-6 voyageurs",
    safetyLevel: "Excellent",
    fullDescription:
      "Plongez au coeur du Paris de 1889, une ville en pleine effervescence. Assistez a l'inauguration de la Tour Eiffel lors de l'Exposition Universelle, flanez dans les ateliers de Montmartre ou travaillent Toulouse-Lautrec et Van Gogh, et decouvrez les cafés litteraires ou se retrouvent les plus grands esprits de l'epoque. Une immersion totale dans la Belle Epoque.",
    included: [
      "Costume d'epoque sur mesure",
      "Guide chrononaute certifié",
      "Acces VIP a l'Exposition",
      "Diner aux Folies Bergere",
    ],
    warnings: [
      "Vaccinations temporelles requises",
      "Pas d'appareils electroniques visibles",
    ],
  },
  {
    id: "cretaceous",
    title: "Cretace",
    era: "Ere Mesozoique",
    year: "-68M",
    image: "/images/cretaceous.jpg",
    description:
      "Explorez un monde oublie ou les dinosaures regnent en maitres sur une Terre meconnaissable.",
    highlights: [
      "T-Rex en liberte",
      "Forets prehistoriques",
      "Volcans actifs",
      "Faune marine geante",
    ],
    rating: 4.7,
    duration: "2 jours",
    groupSize: "2-4 voyageurs",
    safetyLevel: "Aventure extreme",
    fullDescription:
      "L'expedition la plus audacieuse de notre catalogue. Remontez 68 millions d'annees dans le passe pour observer les derniers dinosaures dans leur habitat naturel. Traversez des forets de fougeres geantes, observez des Tyrannosaures depuis notre base securisee, et survolez des paysages volcaniques a couper le souffle. Une aventure que l'humanite n'avait jamais osee imaginer.",
    included: [
      "Combinaison de protection anti-predateur",
      "Bouclier temporel de securite",
      "Drone d'observation silencieux",
      "Kit de survie prehistorique",
    ],
    warnings: [
      "Risque eleve - assurance obligatoire",
      "Condition physique excellente requise",
      "Interactions avec la faune strictement interdites",
    ],
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    era: "Renaissance Italienne",
    year: "1504",
    image: "/images/florence-1504.jpg",
    description:
      "Rencontrez Leonard de Vinci et Michel-Ange dans le berceau de la Renaissance italienne.",
    highlights: [
      "Atelier de Leonard de Vinci",
      "David de Michel-Ange",
      "Palazzo Vecchio",
      "Marches de la Renaissance",
    ],
    rating: 4.8,
    duration: "4 jours",
    groupSize: "2-8 voyageurs",
    safetyLevel: "Tres bon",
    fullDescription:
      "Florence en 1504 est le coeur battant de la Renaissance. Visitez l'atelier de Leonard de Vinci au moment ou il travaille sur la Joconde, assistez au devoilement du David de Michel-Ange, et decouvrez les intrigues politiques des Medicis. Quatre jours d'immersion dans la ville qui a reinvente l'art, la science et la pensee occidentale.",
    included: [
      "Tenue Renaissance authentique",
      "Acces prive aux ateliers d'artistes",
      "Traducteur universel discret",
      "Banquet chez les Medicis",
    ],
    warnings: [
      "Connaissance basique de l'italien recommandee",
      "Periode politiquement instable",
    ],
  },
];

export function DestinationCards() {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  return (
    <section id="destinations" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Nos expeditions
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Trois époques, trois aventures
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">
            Chaque destination a été soigneusement selectionnée pour offrir une
            experience immersive et inoubliable à travers le temps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest, index) => (
            <article
              key={dest.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(201,168,76,0.1)]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`Destination ${dest.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-xs font-semibold text-foreground">
                    {dest.rating}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground">
                    {dest.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium tracking-wider uppercase text-primary">
                  {dest.era}
                </span>
                <h3 className="mt-1 font-serif text-2xl font-bold text-foreground">
                  {dest.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {dest.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {dest.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {dest.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {dest.groupSize}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedDestination(dest)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3 text-sm font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Explorer cette destination
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </section>
  );
}

function DestinationModal({
  destination,
  onClose,
}: {
  destination: Destination;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Details de ${destination.title}`}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <Image
            src={destination.image}
            alt={`Destination ${destination.title}`}
            fill
            className="rounded-t-2xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-background/80 p-2 backdrop-blur-sm text-foreground transition-colors hover:bg-background"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              {destination.era}
            </span>
            <h3 className="font-serif text-3xl font-bold text-foreground">
              {destination.title}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 rounded-xl bg-secondary p-4">
            <div className="text-center">
              <Clock className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-1 text-xs text-muted-foreground">Duree</p>
              <p className="text-sm font-semibold text-foreground">
                {destination.duration}
              </p>
            </div>
            <div className="text-center">
              <Users className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-1 text-xs text-muted-foreground">Groupe</p>
              <p className="text-sm font-semibold text-foreground">
                {destination.groupSize}
              </p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-1 text-xs text-muted-foreground">Securite</p>
              <p className="text-sm font-semibold text-foreground">
                {destination.safetyLevel}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Description
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {destination.fullDescription}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Points forts
            </h4>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {destination.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Inclus
            </h4>
            <div className="mt-3 space-y-2">
              {destination.included.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {destination.warnings.length > 0 && (
            <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
              <h4 className="text-sm font-semibold text-primary">
                Avertissements
              </h4>
              <ul className="mt-2 space-y-1">
                {destination.warnings.map((w) => (
                  <li key={w} className="text-sm text-muted-foreground">
                    {"- "}
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110">
            Reserver cette expedition
          </button>
        </div>
      </div>
    </div>
  );
}
