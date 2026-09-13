/**
 * ====================================================================
 * ABDULLAH BUTT — EXECUTIVE PORTFOLIO CORE JAVASCRIPT
 * ====================================================================
 * Lightweight, zero-dependency vanilla JavaScript engine.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initContactConfig();
  initPortfolio();
  initSmoothScroll();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".header");
  const toggleBtn = document.querySelector(".mobile-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header blur transition
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header?.classList.add("header-scrolled");
    } else {
      header?.classList.remove("header-scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener("click", () => {
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", !isExpanded);
      mobileNav.classList.toggle("is-open", !isExpanded);
      document.body.style.overflow = !isExpanded ? "hidden" : "";
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleBtn.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        toggleBtn.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
        toggleBtn.focus();
      }
    });
  }
}

/* ==========================================================================
   2. CENTRALIZED CONTACT CONFIGURATION INJECTION
   ========================================================================== */
function initContactConfig() {
  if (typeof SITE_CONFIG === "undefined") return;

  // Update WhatsApp links
  const waLinks = document.querySelectorAll('[data-contact-action="whatsapp"]');
  const waUrl = SITE_CONFIG.getWhatsAppUrl();
  waLinks.forEach(el => {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Update Email links
  const emailLinks = document.querySelectorAll('[data-contact-action="email"]');
  const mailtoUrl = SITE_CONFIG.getMailtoUrl();
  emailLinks.forEach(el => {
    el.setAttribute("href", mailtoUrl);
  });

  // Update Google Form links
  const formLinks = document.querySelectorAll('[data-contact-action="form"]');
  const formUrl = SITE_CONFIG.getGoogleFormUrl();
  formLinks.forEach(el => {
    el.setAttribute("href", formUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Update text placeholders if present
  const ownerNames = document.querySelectorAll('[data-config-field="ownerName"]');
  ownerNames.forEach(el => el.textContent = SITE_CONFIG.ownerName);

  const execTitles = document.querySelectorAll('[data-config-field="executiveTitle"]');
  execTitles.forEach(el => el.textContent = SITE_CONFIG.executiveTitle);
}

/* ==========================================================================
   3. PORTFOLIO ENGINE (Filter, Search & Render)
   ========================================================================== */
function initPortfolio() {
  if (typeof PROJECTS_DATA === "undefined" || !Array.isArray(PROJECTS_DATA)) {
    return;
  }

  const grid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("filter-bar");
  const searchInput = document.getElementById("portfolio-search");
  const counterEl = document.getElementById("portfolio-counter");
  const loadMoreBtn = document.getElementById("load-more-btn");

  if (!grid) return;

  let activeCategory = "All";
  let searchQuery = "";
  const PAGE_SIZE = 12;
  let displayedCount = PAGE_SIZE;

  // Build filter tabs dynamically from actual categories
  const categories = ["All"];
  const catCounts = { "All": PROJECTS_DATA.length };

  PROJECTS_DATA.forEach(p => {
    const cat = p.category || "Corporate & Business Services";
    if (!catCounts[cat]) {
      catCounts[cat] = 0;
      categories.push(cat);
    }
    catCounts[cat]++;
  });

  // Render Filter Buttons
  if (filterBar) {
    filterBar.innerHTML = categories.map(cat => `
      <button type="button" class="filter-btn ${cat === activeCategory ? 'active' : ''}" data-category="${escapeHtml(cat)}">
        ${escapeHtml(cat)}
        <span class="filter-count">${catCounts[cat] || 0}</span>
      </button>
    `).join("");

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      activeCategory = btn.getAttribute("data-category");
      displayedCount = PAGE_SIZE; // Reset pagination
      renderProjects();
    });
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      displayedCount = PAGE_SIZE;
      renderProjects();
    });
  }

  // Load More button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      displayedCount += PAGE_SIZE;
      renderProjects();
    });
  }

  function getFilteredProjects() {
    return PROJECTS_DATA.filter(p => {
      const matchesCat = (activeCategory === "All" || p.category === activeCategory);
      if (!matchesCat) return false;

      if (!searchQuery) return true;
      const haystack = (p.name + " " + p.category + " " + p.industry + " " + p.platform + " " + p.summary + " " + p.tagline).toLowerCase();
      return haystack.includes(searchQuery);
    });
  }

  function renderProjects() {
    const filtered = getFilteredProjects();
    const totalMatching = filtered.length;
    const toShow = filtered.slice(0, displayedCount);

    if (counterEl) {
      counterEl.textContent = `Showing ${toShow.length} of ${totalMatching} verified live digital projects`;
    }

    if (toShow.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #fff;">No projects match your current filter.</p>
          <p style="font-size: 0.9rem;">Try selecting another category or clearing your search term.</p>
        </div>
      `;
      if (loadMoreBtn) loadMoreBtn.style.display = "none";
      return;
    }

    grid.innerHTML = toShow.map(p => {
      const cleanUrl = p.final_url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      const initial = p.name.charAt(0).toUpperCase();

      return `
        <article class="project-card" data-slug="${p.slug}">
          <!-- Visual Card Header Mockup -->
          <div class="project-thumbnail-wrapper">
            <div class="thumb-top">
              <span class="thumb-platform-tag">${escapeHtml(p.platform)}</span>
              <span class="thumb-status"><span class="dot-live"></span> Verified Live</span>
            </div>
            <div class="thumb-center">
              <h3 class="thumb-domain-title">${escapeHtml(p.name)}</h3>
              <span class="thumb-url-sub">${escapeHtml(cleanUrl)}</span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="project-card-body">
            <div class="project-category-pill">${escapeHtml(p.category)}</div>
            <h4 class="project-name">${escapeHtml(p.name)}</h4>
            <p class="project-short-desc">${escapeHtml(p.summary)}</p>
            
            <div class="project-tech-meta">
              <span>Industry:</span> ${escapeHtml(p.industry)}
            </div>

            <div class="project-card-actions">
              <a href="${escapeHtml(p.final_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" title="Open verified external website">
              <a href="${escapeHtml(p.final_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" title="Open verified external website for ${escapeHtml(p.name)}" aria-label="Visit external live website for ${escapeHtml(p.name)}">
                Visit Website
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
              <a href="projects/${p.slug}.html" class="btn btn-outline" title="Read in-depth case study and technical analysis">
              <a href="projects/${p.slug}.html" class="btn btn-outline" title="Read in-depth case study and technical analysis for ${escapeHtml(p.name)}" aria-label="Read technical case study for ${escapeHtml(p.name)}">
                Read More &rarr;
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Toggle Load More button
    if (loadMoreBtn) {
      if (displayedCount < totalMatching) {
        loadMoreBtn.style.display = "inline-flex";
        loadMoreBtn.textContent = `Load More Projects (${totalMatching - displayedCount} remaining)`;
      } else {
        loadMoreBtn.style.display = "none";
      }
    }
  }

  // Initial render
  renderProjects();
}

/* ==========================================================================
   4. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/* Utility HTML Escape */
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

