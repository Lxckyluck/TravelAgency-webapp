import { Clock } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-secondary/30 py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold text-foreground">
                TimeTravel
              </span>
              <span className="font-serif text-xl italic text-primary">
                Agency
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premiere agence de voyage temporel certifiée. Explorez le passé en
              toute securité avec nos expeditions premium.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Siege : Station Temporelle Alpha, 2087
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider">
              Destinations
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#destinations"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Paris 1889
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Cretace
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Florence 1504
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider">
              Informations
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Notre agence
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Securite temporelle
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Conditions de voyage
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            TimeTravel Agency. Tous droits reserves a travers le temps.
          </p>
          <p className="text-xs text-muted-foreground">
            Licence Chrononautique N 42-ALPHA-7
          </p>
        </div>
      </div>
    </footer>
  );
}
