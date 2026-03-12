(function () {
  const portal = window.OIP_PORTAL;
  if (!portal) return;

  const directionsMap = Object.fromEntries(
    portal.directions.map((direction) => [direction.key, direction])
  );

  function createDirectionTile(direction) {
    return `
      <a class="tile" href="${direction.page}" style="background:${direction.tileGradient}">
        <span>${direction.owner}</span>
        <h3>${direction.shortTitle}</h3>
        <p>${direction.role}</p>
      </a>
    `;
  }

  function createGoalCards(direction) {
    return direction.goals
      .map(
        (goal) => `
          <article class="summary-card">
            <h3>${goal.title}</h3>
            <p>${goal.text}</p>
          </article>
        `
      )
      .join("");
  }

  function createOkrAccordions(direction) {
    return direction.okr
      .map((item, index) => {
        const points = item.points.map((point) => `<li>${point}</li>`).join("");

        return `
          <article class="accordion">
            <button class="accordion__toggle" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
              <span><strong>${item.title}</strong></span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__body" ${index === 0 ? 'style="max-height: 400px;"' : ""}>
              <div class="accordion__body-inner">
                <ul class="bullet-list">${points}</ul>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function createKpiCards(direction) {
    return direction.kpi
      .map(
        (item) => `
          <article class="kpi-card">
            <span class="kpi-card__value">${item.value}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `
      )
      .join("");
  }

  function createDocLink(base, path, label) {
    return `
      <a class="doc-link" href="${base}${path}" target="_blank" rel="noreferrer">
        <span>${label}</span>
        <strong>${path.split("/").pop()}</strong>
      </a>
    `;
  }

  function renderDirectionPage(direction) {
    const root = document.getElementById("directionPage");
    if (!root) return;

    root.innerHTML = `
      <section class="screen">
        <div class="direction-hero">
          <div class="direction-hero__grid">
            <div>
              <p class="eyebrow">Направление · ${direction.horizon}</p>
              <h1>${direction.title}</h1>
              <p class="direction-hero__lead">${direction.intro}</p>
              <div class="meta-row">
                <span class="meta-chip">Ответственный: ${direction.owner}</span>
                <span class="meta-chip">Горизонт: ${direction.horizon}</span>
              </div>
              <div class="direction-hero__actions">
                <a class="button button--primary" href="#goals">Цели</a>
                <a class="button button--primary" href="#okr">OKR</a>
                <a class="button button--primary" href="#kpi">KPI</a>
                <a class="button button--primary" href="#documents">Документы</a>
              </div>
            </div>
            <aside class="meta-panel">
              <h3>Руководитель направления управляет</h3>
              <ul class="meta-list">
                ${direction.management.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section class="screen screen--soft" id="goals">
        <div class="section-heading">
          <p class="eyebrow">Стратегия</p>
          <h2>Стратегические цели</h2>
          <p>${direction.summary.join(" ")}</p>
        </div>
        <div class="detail-grid">${createGoalCards(direction)}</div>
      </section>
      <section class="screen" id="okr">
        <div class="section-heading">
          <p class="eyebrow">Изменения системы</p>
          <h2>OKR направления</h2>
          <p>В деталях раскрыты через аккордеоны, чтобы первый экран оставался компактным и читаемым.</p>
        </div>
        <div class="accordion-stack">${createOkrAccordions(direction)}</div>
      </section>
      <section class="screen screen--soft" id="kpi">
        <div class="section-heading">
          <p class="eyebrow">Операционное управление</p>
          <h2>KPI направления</h2>
        </div>
        <div class="kpi-grid">${createKpiCards(direction)}</div>
      </section>
      <section class="screen" id="documents">
        <div class="section-heading">
          <p class="eyebrow">Первоисточники</p>
          <h2>Детальные документы на GitHub</h2>
        </div>
        <div class="doc-links">
          ${createDocLink(portal.repoBase, direction.docs.strategyPath, "Стратегия")}
          ${createDocLink(portal.repoBase, direction.docs.metricsPath, "Метрики")}
        </div>
      </section>
    `;

    initAccordions(root);
  }

  function initAccordions(scope) {
    const buttons = scope.querySelectorAll(".accordion__toggle");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        const body = button.nextElementSibling;
        button.setAttribute("aria-expanded", String(!expanded));
        body.style.maxHeight = expanded ? "0px" : `${body.scrollHeight}px`;
      });
    });
  }

  const tilesRoot = document.getElementById("directionTiles");
  if (tilesRoot) {
    tilesRoot.innerHTML = portal.directions.map(createDirectionTile).join("");
  }

  const directionPage = document.body.dataset.direction;
  if (directionPage && directionsMap[directionPage]) {
    renderDirectionPage(directionsMap[directionPage]);
  }
})();
