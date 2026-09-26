import Button from "./Button";
import Container from "./Container";

export default function CtaBand({
  eyebrow = "Have a project in mind?",
  title = "Talk to our engineering team.",
  href = "/contact-us",
  label = "Contact Us",
}: {
  eyebrow?: string;
  title?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-muted py-16 md:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="eyebrow text-gold-600">{eyebrow}</p>
          <h2 className="mt-3 max-w-xl text-balance text-[clamp(1.5rem,2.6vw,2.1rem)] font-extrabold leading-tight text-navy-950">
            {title}
          </h2>
        </div>
        <Button href={href}>{label}</Button>
      </Container>
    </section>
  );
}
