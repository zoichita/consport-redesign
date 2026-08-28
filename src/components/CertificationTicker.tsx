import Image from "next/image";

const certifications = [
  { label: "FIFA Basic", image: "/images/certifications/fifa-basic.webp", className: "certification-logo-fifa" },
  { label: "FIFA Quality", image: "/images/certifications/fifa-quality.webp", className: "certification-logo-fifa" },
  { label: "FIFA Quality Pro", image: "/images/certifications/fifa-quality-pro.webp", className: "certification-logo-fifa" },
  { label: "ITF 2 - Medium-slow", pace: "2" },
  { label: "ITF 3 - Medium", pace: "3" },
  { label: "ITF 4 - Medium-fast", pace: "4" },
  { label: "ITF 5 - Fast", pace: "5" },
  { label: "Labosport", image: "/images/certifications/labosport.png", className: "certification-logo-labosport" },
] as const;

function CertificationSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="certification-ticker-set" aria-hidden={hidden || undefined}>
      {certifications.map((certification) => (
        <div className="certification-card" key={certification.label}>
          {"pace" in certification ? (
            <span className={`itf-badge itf-badge-${certification.pace}`} role="img" aria-label={hidden ? undefined : certification.label} />
          ) : certification.className === "certification-logo-fifa" ? (
            <span className="certification-logo-fifa-frame">
              <Image
                src={certification.image}
                alt={hidden ? "" : certification.label}
                fill
                sizes="(max-width: 820px) 129px, 186px"
                className={`certification-logo ${certification.className}`}
              />
            </span>
          ) : (
            <Image
              src={certification.image}
              alt={hidden ? "" : certification.label}
              width={190}
              height={110}
              className={`certification-logo ${certification.className}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function CertificationTicker() {
  return (
    <section className="certification-ticker" aria-label="Πιστοποιήσεις και συνεργασίες">
      <div className="certification-ticker-viewport">
        <div className="certification-ticker-track">
          <CertificationSet />
          <CertificationSet hidden />
        </div>
      </div>
    </section>
  );
}
