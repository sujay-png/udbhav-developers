const fs = require('fs');
let current = fs.readFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', 'utf-8');

// 1. Restore the Floor Plan Script logic (with fix for Top View badge)
const scriptToInject = `      // Floor Plan Carousel logic
      const carousel = document.getElementById("fp-carousel");
      const prevBtn = document.getElementById("fp-prev");
      const nextBtn = document.getElementById("fp-next");
      const cards = document.querySelectorAll(".fp-card");

      const seriesText = document.getElementById("fp-series-text");
      const titleText = document.getElementById("fp-title-text");
      const configText = document.getElementById("fp-config-text");
      const viewsText = document.getElementById("fp-views-text");

      let currentIndex = 0;

      function updateActiveCard(index) {
        cards.forEach((c) => c.classList.remove("active"));
        const seriesStartIndex = Math.floor(index / 2) * 2;

        if (cards[seriesStartIndex]) {
          cards[seriesStartIndex].classList.add("active");
          cards[seriesStartIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
        if (cards[seriesStartIndex + 1]) {
          cards[seriesStartIndex + 1].classList.add("active");
        }

        const plan = floorPlans[index];
        if (plan) {
          if (seriesText) seriesText.textContent = plan.series;
          if (titleText) titleText.textContent = plan.shortTitle || plan.title;
          const topViewBadge = document.getElementById("fp-top-view-badge");
          if(topViewBadge) {
             topViewBadge.style.display = (plan.title.toLowerCase().includes('top view')) ? 'inline-block' : 'none';
          }
          if (configText) configText.textContent = plan.config.replace(/\\s*\\(Top View\\)\\.?/i, "");
          if (viewsText) viewsText.textContent = plan.views;
        }
      }

      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          currentIndex = parseInt(card.getAttribute("data-index"));
          updateActiveCard(currentIndex);
        });
      });

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          const currentSeriesIndex = Math.floor(currentIndex / 2) * 2;
          if (currentSeriesIndex > 0) {
            currentIndex = currentSeriesIndex - 2;
            updateActiveCard(currentIndex);
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          const currentSeriesIndex = Math.floor(currentIndex / 2) * 2;
          if (currentSeriesIndex < cards.length - 2) {
            currentIndex = currentSeriesIndex + 2;
            updateActiveCard(currentIndex);
          }
        });
      }
`;

// Insert the floor plan script inside the existing <script is:inline> block
if (!current.includes('// Floor Plan Carousel logic')) {
    current = current.replace('<script is:inline>', '<script is:inline define:vars={{ floorPlans }}>\n' + scriptToInject);
    current = current.replace('<script is:inline define:vars={{ floorPlans }}>', '<script is:inline define:vars={{ floorPlans }}>'); // Just in case it was already replaced
}

// 2. Fix the `fp-card` padding and image hover
current = current.replace(
  /\.fp-card\s*\{[\s\S]*?\}/,
  `.fp-card {
        background: #fff;
        border: 1px solid var(--line);
        border-radius: 6px;
        box-sizing: border-box;
        flex: 0 0 calc(50% - 10px);
        cursor: pointer;
        transition: border-color 0.2s, box-shadow 0.2s ease;
        text-align: center;
        overflow: hidden;
      }`
);
current = current.replace(
  /\.fp-card:hover\s*\{[\s\S]*?\}/,
  `.fp-card:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }`
);

current = current.replace(
  /\.fp-card img\s*\{[\s\S]*?\}/,
  `.fp-card img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        transition: transform 0.3s ease;
        display: block;
      }`
);

// Add the image hover zoom rule
if (!current.includes('.fp-card:hover img {')) {
    current = current.replace(
      /\.fp-card-title\s*\{/,
      `.fp-card:hover img {
        transform: scale(1.08);
      }
      .fp-card-title {`
    );
}
// Add padding to fp-card-title since we removed padding from fp-card
current = current.replace(
  /\.fp-card-title\s*\{[\s\S]*?\}/,
  `.fp-card-title {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--ink);
        padding: 12px;
      }`
);

// Replace `<script is:inline>` with the define:vars version if it exists
current = current.replace('<script is:inline>', '<script is:inline define:vars={{ floorPlans }}>');

fs.writeFileSync('src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro', current, 'utf-8');
console.log('Restored floor plan JS and updated card styles');
