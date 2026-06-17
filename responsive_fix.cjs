const fs = require('fs');

const css = `
/* Screen Fit and Responsive Overrides */
.hero,
.why-section,
.work-section,
.pricing-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 !important;
}

@media (max-height: 700px) {
  .hero,
  .why-section,
  .work-section,
  .pricing-section {
    min-height: auto;
    padding: 120px 0 !important;
  }
}

@media (max-width: 900px) {
  .hero,
  .why-section,
  .work-section,
  .pricing-section {
    min-height: auto;
    padding: 80px 0 !important;
  }
}

@media (max-width: 680px) {
  .hero__inner,
  .why-section__grid,
  .work-section__grid,
  .pricing-section__plans {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .why-section__grid > *,
  .work-section__grid > * {
    width: 100%;
  }

  .demo-prompt, .hero__cta {
    align-items: stretch;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .hero__heading {
    font-size: 32px;
  }
  .section-title {
    font-size: 28px;
  }
  .hero,
  .why-section,
  .work-section,
  .pricing-section {
    padding: 60px 0 !important;
  }
}
`;

fs.appendFileSync('src/components/Hero.css', css);
