export function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-heading text-foreground mb-3">
            Certifications &amp; Partnerships
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Recognized and certified by leading technology brands, ensuring you get genuine products and expert service.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 flex flex-col items-center gap-3 max-w-sm w-full border border-border">
            <div className="text-center">
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1 rounded-full">
                HP Partner First Silver
              </span>
              <p className="mt-2 text-muted-foreground text-sm">
                Silver Retail Partner – Computing
              </p>
              <p className="mt-1 text-muted-foreground text-sm font-medium">
                February 24, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
