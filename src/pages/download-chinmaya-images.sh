#!/usr/bin/env bash
# Downloads real Udbhav Chinmaya images from udbhavdevelopers.com
# and saves them into public/images/udbahv-chinmaya/ with clean, consistent names.
#
# Usage: run this from the ROOT of your Next.js project
#   chmod +x download-chinmaya-images.sh
#   ./download-chinmaya-images.sh

set -e

BASE="public/images/udbahv-chinmaya"
mkdir -p "$BASE/floor-plans" "$BASE/gallery" "$BASE/projects" "$BASE/updates"

dl() {
  # dl <url> <output-path>
  echo "→ $2"
  curl -sSL --fail -o "$2" "$1" || echo "  !! FAILED: $1"
}

# ── Floor Plans ──────────────────────────────────────────────
dl "https://udbhavdevelopers.com/wp-content/uploads/2024/07/UDBHAV_CHINMAYA_TOP-View-with-Dimention.jpg-1-scaled.jpeg" "$BASE/floor-plans/master-plan.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2026/06/Screenshot-2026-06-17-102315.png" "$BASE/floor-plans/series-5-4bhk-2255.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/05_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-5-4bhk-2255-top.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2024/07/Screenshot-2026-03-10-161551.png" "$BASE/floor-plans/series-1-3bhk-1730.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/01_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-1-3bhk-1730-top.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2024/07/Screenshot-2026-03-10-161707.png" "$BASE/floor-plans/series-2-3bhk-1715.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/02_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-2-3bhk-1715-top.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2024/07/3-e1773385510617.png" "$BASE/floor-plans/series-3-3bhk-1795.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/03_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-3-3bhk-1795-top.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2024/07/4.png" "$BASE/floor-plans/series-4-3bhk-1820.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/04_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-4-3bhk-1820-top.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/6.png" "$BASE/floor-plans/series-6-3bhk-1810.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/06_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-6-3bhk-1810-top.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/7.png" "$BASE/floor-plans/series-7-3bhk-1765.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/07_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-7-3bhk-1765-top.jpg"

dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/8.png" "$BASE/floor-plans/series-8-3bhk-1880.png"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/12/08_UDBHAV_CHINMAYA-scaled.jpg" "$BASE/floor-plans/series-8-3bhk-1880-top.jpg"

# ── Project Gallery (hero/gallery carousel) ─────────────────
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/07/udbhav-chinmaya-2.jpg" "$BASE/gallery/udbhav-chinmaya-1.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/07/udbhav-chinmaya-3.jpg" "$BASE/gallery/udbhav-chinmaya-2.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/07/udbhav-chinmaya-4.jpg" "$BASE/gallery/udbhav-chinmaya-3.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2025/07/udbhav-chinmaya-1-1.jpg" "$BASE/gallery/udbhav-chinmaya-4.jpg"

# ── Bhoomi Pooja (Oct 15 2025) ───────────────────────────────
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/01/NBP_5040-scaled.jpg" "$BASE/projects/bhoomipooja1.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/01/NBP_5125-scaled.jpg" "$BASE/projects/bhoomipooja2.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/01/NBP_5115-scaled.jpg" "$BASE/projects/bhoomipooja3.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/01/NBP_5130-scaled.jpg" "$BASE/projects/bhoomipooja4.jpg"

# ── Project Updates: Dec 12 2025 (first 3 of 10 live) ───────
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-15-at-6.32.22-PM-2.jpeg" "$BASE/updates/dec-2025-1.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-15-at-6.32.22-PM-1.jpeg" "$BASE/updates/dec-2025-2.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-15-at-6.32.22-PM.jpeg" "$BASE/updates/dec-2025-3.jpg"

# ── Project Updates: Feb 06 2026 (first 3 of 5 live) ────────
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260206093144.jpg-scaled.jpeg" "$BASE/updates/feb-2026-1.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260206091825.jpg-scaled.jpeg" "$BASE/updates/feb-2026-2.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260205095534.jpg-scaled.jpeg" "$BASE/updates/feb-2026-3.jpg"

# ── Project Updates: March 11 2026 (first 3 of 12 live) ─────
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/1.jpg" "$BASE/updates/mar-2026-1.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/12.jpg" "$BASE/updates/mar-2026-2.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/11.jpg" "$BASE/updates/mar-2026-3.jpg"

# ── Project Updates: April 01 2026 (first 3 of 8 live) ──────
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/9.jpg" "$BASE/updates/apr-2026-1.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/8.jpg" "$BASE/updates/apr-2026-2.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/7.jpg" "$BASE/updates/apr-2026-3.jpg"

# ── Project Updates: May 01 2026 (first 3 of 16 live) ───────
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/SAI_3134-scaled.jpg" "$BASE/updates/may-2026-1.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/SAI_3156-scaled.jpg" "$BASE/updates/may-2026-2.jpg"
dl "https://udbhavdevelopers.com/wp-content/uploads/2026/05/SAI_3146-scaled.jpg" "$BASE/updates/may-2026-3.jpg"

echo ""
echo "Done. Images saved under $BASE/"
