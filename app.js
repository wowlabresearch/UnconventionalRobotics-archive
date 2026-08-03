/**
 * Main Application Logic
 * Handles filtering, searching, and grid/detail view rendering
 */

let currentYearFilter = 'all';
let currentSearchTerm = '';
let currentOpenProjectId = null; // set while the detail view is open, for thumb-strip highlighting

/**
 * Projects matching the current year filter + search term
 */
function getFilteredProjects() {
  return rawProjects.filter(p => {
    const matchesYear = (currentYearFilter === 'all') || (p.year === currentYearFilter);
    const matchesSearch = p.title.toLowerCase().includes(currentSearchTerm) ||
                          p.team.toLowerCase().includes(currentSearchTerm) ||
                          p.members.toLowerCase().includes(currentSearchTerm) ||
                          p.desc.toLowerCase().includes(currentSearchTerm);
    return matchesYear && matchesSearch;
  });
}

/**
 * Re-render the grid and the thumbnail strip based on current filter/search
 */
function renderProjects() {
  const filtered = getFilteredProjects();
  renderGrid(filtered);
  renderThumbStrip(filtered);
}

/**
 * Render the full project cards grid
 */
function renderGrid(filtered) {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No projects found for the selected year or search criteria.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');

    let keywordsHtml = '';
    if (p.keywords && p.keywords.length > 0) {
      keywordsHtml = '<div class="card-keywords">' +
        p.keywords.map(kw => `<span class="keyword-pill">${kw}</span>`).join('') +
        '</div>';
    }

    card.className = 'card';
    card.onclick = () => openProjectDetail(p);
    card.innerHTML = `
      <div class="card-thumb-wrapper">
        <img src="${p.thumb}" onerror="this.onerror=null; this.src='${fallbackImage}'" alt="${p.title}" class="card-thumb" loading="lazy" />
        <span class="year-badge">${p.year}</span>
      </div>
      <div class="card-body">
        <span class="card-tag">${p.team}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-members">👤 ${p.members}</p>
        <p class="card-desc">${p.desc}</p>
        ${keywordsHtml}
        <div class="card-footer-btn">
          View Details & Materials &rarr;
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/**
 * Render the small thumbnail strips (shown only while the detail view is
 * open — one above the content, one repeated below it) so switching to
 * another project doesn't require going back to the grid first, or
 * scrolling all the way back up.
 */
function renderThumbStrip(filtered) {
  renderThumbStripInto('thumbStrip', filtered);
  renderThumbStripInto('thumbStripBottom', filtered);
}

function renderThumbStripInto(containerId, filtered) {
  const strip = document.getElementById(containerId);
  strip.innerHTML = '';

  filtered.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'thumb-strip-item' + (p.id === currentOpenProjectId ? ' active' : '');
    btn.type = 'button';
    btn.title = p.title;
    btn.onclick = () => openProjectDetail(p);
    btn.innerHTML = `
      <img src="${p.thumb}" onerror="this.onerror=null; this.src='${fallbackImage}'" alt="${p.title}" loading="lazy" />
      <span class="thumb-strip-label">${p.team}</span>
    `;
    strip.appendChild(btn);
  });
}

/**
 * Set year filter and re-render.
 * Filter buttons are duplicated (top bar + bottom-nav strip), so active
 * state is synced by data-year rather than by the clicked element alone.
 */
function setYearFilter(year) {
  currentYearFilter = year;
  document.querySelectorAll('.filter-btn[data-year]').forEach(b => {
    b.classList.toggle('active', b.dataset.year === year);
  });
  renderProjects();
}

/**
 * Handle search input
 */
function handleSearch() {
  currentSearchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
  renderProjects();
}

/**
 * Show the project detail view in place of the grid.
 * (Modified to show both Media and Blog content simultaneously without tabs)
 */
function openProjectDetail(project) {
  currentOpenProjectId = project.id;

  // Set header information
  document.getElementById('modalYearBadge').innerText = project.year;
  document.getElementById('modalTeamTag').innerText = project.team;
  document.getElementById('modalTitle').innerText = project.title;

  // One member per line, name bolded, with their affiliation in parentheses
  // when available (parsed from the markdown's "## Affiliations" list);
  // otherwise fall back to just the bolded name.
  const memberLines = (project.authors && project.authors.length > 0)
    ? project.authors.map(a => `<strong>${a.name}</strong> (${a.affiliation})`)
    : project.members.split(',').map(name => `<strong>${name.trim()}</strong>`);
  document.getElementById('modalTeam').innerHTML = `Team Members:<br>${memberLines.join('<br>')}`;

  // Set description (full text, no truncation)
  document.getElementById('projectDesc').innerText = project.desc;

  // Setup media content (video or gallery)
  const videoContainer = document.getElementById('videoContainer');
  const galleryGrid = document.getElementById('galleryGrid');
  const mediaContentSection = document.getElementById('mediaContent');

  videoContainer.innerHTML = '';
  galleryGrid.innerHTML = '';
  galleryGrid.style.display = 'none';

  let hasMedia = false;

  // Add YouTube embed if available
  if (project.youtubeEmbed) {
    const iframeElem = document.createElement('iframe');
    iframeElem.src = project.youtubeEmbed;
    iframeElem.allowFullscreen = true;
    iframeElem.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    videoContainer.appendChild(iframeElem);
    hasMedia = true;
  }

  // Add local video if available
  if (project.videoUrl && !hasMedia) {
    const videoElem = document.createElement('video');
    videoElem.src = project.videoUrl;
    videoElem.controls = true;
    videoElem.autoplay = false;
    videoContainer.appendChild(videoElem);
    hasMedia = true;
  }

  // Add image gallery if no video
  if (!hasMedia && project.gallery && project.gallery.length > 0) {
    project.gallery.forEach(imgUrl => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `<img src="${imgUrl}" alt="Project image" onerror="this.onerror=null; this.src='${fallbackImage}'" />`;
      galleryGrid.appendChild(galleryItem);
    });
    galleryGrid.style.display = 'grid';
    hasMedia = true;
  }

  // Show or hide the entire Media section depending on content availability
  if (hasMedia) {
    mediaContentSection.style.display = 'block';
  } else {
    mediaContentSection.style.display = 'none'; // 미디어가 아예 없으면 미디어 영역 숨김
  }

  // Setup blog content
  const blogContent = document.getElementById('blogContent');
  if (project.blogContent) {
    blogContent.innerHTML = project.blogContent;
    blogContent.style.display = 'block'; // 블로그 내용 항상 보이기
  } else {
    blogContent.innerHTML = '';
    blogContent.style.display = 'none'; // 내용이 없으면 숨김
  }

  // Hide the old tab buttons if they still exist in HTML
  const mediaTabsContainer = document.getElementById('mediaTabsContainer');
  if (mediaTabsContainer) {
    mediaTabsContainer.style.display = 'none';
  }

  // Setup material buttons
  const materialButtonsContainer = document.getElementById('materialButtons');
  materialButtonsContainer.innerHTML = '';

  if (project.materials && project.materials.length > 0) {
    project.materials.forEach(material => {
      const btn = document.createElement('a');
      btn.href = material.url;
      btn.target = '_blank';
      btn.className = material.type === 'report' ? 'btn btn-primary' : 'btn btn-secondary';
      btn.innerHTML = material.label;
      materialButtonsContainer.appendChild(btn);
    });
  } else {
    materialButtonsContainer.innerHTML = '<p style="color: #64748b;">No materials available for this project.</p>';
  }

  // Copyright notice, auto-filled from this project's year + team members
  document.getElementById('copyrightNotice').innerText =
    `© ${project.year} ${project.members}. All video, photo, and image content on this page was created by the project team.`;

  // Swap the grid out for the detail view; filter bar and search stay visible.
  // The thumb strips re-render so the newly opened project is highlighted.
  document.getElementById('projectGrid').style.display = 'none';
  document.getElementById('thumbStrip').style.display = 'flex';
  document.getElementById('thumbStripBottom').style.display = 'flex';
  renderThumbStrip(getFilteredProjects());
  const detailView = document.getElementById('projectDetail');
  detailView.style.display = 'block';

  // 상세 화면을 열 때마다 페이지 맨 위로 스크롤합니다.
  window.scrollTo(0, 0);

  // Blog/gallery images load in asynchronously and change the page's
  // height as they do; re-pin scroll to the top each time one finishes so
  // the header (year/team/description) stays the first thing visible
  // instead of drifting down once images have loaded.
  detailView.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
      img.addEventListener('load', () => { window.scrollTo(0, 0); });
    }
  });
}

/**
 * Return to the full project grid
 */
function closeProjectDetail() {
  currentOpenProjectId = null;
  document.getElementById('projectDetail').style.display = 'none';
  document.getElementById('thumbStrip').style.display = 'none';
  document.getElementById('thumbStripBottom').style.display = 'none';
  document.getElementById('projectGrid').style.display = '';
  const videoContainer = document.getElementById('videoContainer');
  videoContainer.innerHTML = ''; // 상세 화면을 닫으면 영상 끄기
  window.scrollTo(0, 0);
}

/**
 * Tap/click a blog-content image to enlarge it in place (toggles between
 * the default width and full width). Deliberately not a fixed/absolute-
 * positioned lightbox overlay — this page has a long history of iframe
 * position bugs when embedded in Wix, so zooming stays a simple in-flow
 * size toggle instead.
 */
document.getElementById('blogContent').addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    event.target.classList.toggle('zoomed');
  }
});

/**
 * Initialize application on page load
 */
window.addEventListener('load', () => {
  renderProjects();
});
