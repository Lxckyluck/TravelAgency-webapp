"use client";

import { Clock, Shield, Compass, Sparkles } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Technologie temporelle",
    description:
      "Nos portails chrono-quantiques certifiés permettent un voyage securise et stable a travers les époques.",
  },
  {
    icon: Shield,
    title: "Securite maximale",
    description:
      "Chaque expedition est supervisée par des chrononautes experimentés equipés de boucliers temporels.",
  },
  {
    icon: Compass,
    title: "Immersion totale",
    description:
      "Costumes d'époque, traducteurs universels et guides experts pour une experience 100% authentique.",
  },
  {
    icon: Sparkles,
    title: "Moments uniques",
    description:
      "Assistez aux evenements les plus marquants de l'histoire, inaccessibles par tout autre moyen.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Notre agence
            </span>
            <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Pionniers du voyage temporel
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Fondée en 2087, TimeTravel Agency est la premiere agence de voyage
              temporel certifiée au monde. Notre mission : rendre l'Histoire
              accessible a tous, en toute securite.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Avec plus de 12 000 voyageurs satisfaits et un taux de retour de
              100%, nous sommes le choix numéro un des chrononautes exigeants.
              Chaque expedition est minutieusement preparee par nos historiens
              et nos ingenieurs temporels.
            </p>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">
                  12K+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Voyageurs</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">
                  100%
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Taux de retour
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">3</p>
                <p className="mt-1 text-sm text-muted-foreground">Époques</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]"
              >
                <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
