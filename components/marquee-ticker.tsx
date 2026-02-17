export function MarqueeTicker() {
  const items = [
    "VOYAGE TEMPOREL",
    "PARIS 1889",
    "CRETACE",
    "FLORENCE 1504",
    "EXPEDITION PREMIUM",
    "IMMERSION TOTALE",
    "CHRONONAUTE",
    "BELLE EPOQUE",
    "RENAISSANCE",
    "DINOSAURES",
  ]

  return (
    <div className="overflow-hidden border-y border-border bg-secondary/50 py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
