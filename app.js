/**
 * Main Application Logic
 * Handles filtering, searching, modal interactions, and rendering
 */

let currentYearFilter = 'all';
let currentSearchTerm = '';

/**
 * Render all projects based on current filter and search
 */
function renderProjects() {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';

  const filtered = rawProjects.filter(p => {
    const matchesYear = (currentYearFilter === 'all') || (p.year === currentYearFilter);
    const matchesSearch = p.title.toLowerCase().includes(currentSearchTerm) ||
                          p.team.toLowerCase().includes(currentSearchTerm) ||
                          p.members.toLowerCase().includes(currentSearchTerm) ||
                          p.desc.toLowerCase().includes(currentSearchTerm);
    return matchesYear && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No projects found for the selected year or search criteria.</p>
      </div>
    `;
  } else {
    filtered.forEach(p => {
      const card = document.createElement('div');
      
      let keywordsHtml = '';
      if (p.keywords && p.keywords.length > 0) {
        keywordsHtml = '<div class="card-keywords">' + 
          p.keywords.map(kw => `<span class="keyword-pill">${kw}</span>`).join('') + 
          '</div>';
      }

      card.className = 'card';
      card.onclick = () => openModal(p);
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
  
  sendHeightToWix();
}

/**
 * Set year filter and re-render
 */
function setYearFilter(year, btnElement) {
  currentYearFilter = year;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');
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
 * Switch between Media and Blog tabs
 */
function switchMediaTab(tabName, btnElement) {
  // Update button states
  document.querySelectorAll('.media-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  btnElement.classList.add('active');

  // Show/hide content based on selected tab
  if (tabName === 'media') {
    document.getElementById('mediaContent').style.display = 'block';
    document.getElementById('blogContent').style.display = 'none';
  } else if (tabName === 'blog') {
    document.getElementById('mediaContent').style.display = 'none';
    document.getElementById('blogContent').style.display = 'block';
  }

  sendHeightToWix();
}

/**
 * Open project detail modal
 */
function openModal(project) {
  // Set header information
  document.getElementById('modalYearBadge').innerText = project.year;
  document.getElementById('modalTeamTag').innerText = project.team;
  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalTeam').innerText = `Team Members: ${project.members}`;
  
  // Set description (full text, no truncation)
  document.getElementById('projectDesc').innerText = project.desc;

  // Setup media content (video or gallery)
  const videoContainer = document.getElementById('videoContainer');
  const galleryGrid = document.getElementById('galleryGrid');
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

  // Setup blog content
  const blogContent = document.getElementById('blogContent');
  if (project.blogContent) {
    blogContent.innerHTML = project.blogContent;
  } else {
    blogContent.innerHTML = '<p>No additional content available for this project.</p>';
  }

  // Show/hide media tabs
  const mediaTabsContainer = document.getElementById('mediaTabsContainer');
  if (hasMedia && project.blogContent) {
    mediaTabsContainer.style.display = 'flex';
    // Reset to media tab
    document.querySelector('.media-tab-btn').click();
  } else {
    mediaTabsContainer.style.display = 'none';
    document.getElementById('mediaContent').style.display = 'block';
    document.getElementById('blogContent').style.display = 'none';
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

  // Show modal
  document.getElementById('projectModal').style.display = 'flex';
  sendHeightToWix();
}

/**
 * Close project detail modal
 */
function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
  const videoContainer = document.getElementById('videoContainer');
  videoContainer.innerHTML = '';
  sendHeightToWix();
}

/**
 * Close modal when clicking outside of it
 */
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
  }
};

/**
 * Auto-Height Sync for Wix Integration
 * This function sends the actual document height to the parent Wix window
 * to prevent double scrollbars and ensure proper embedding.
 */
function sendHeightToWix() {
  if (window.parent && window.parent !== window) {
    // Calculate the total scrollable height of the document
    const height = document.documentElement.scrollHeight || document.body.scrollHeight;
    window.parent.postMessage({ type: 'RESIZE_IFRAME', height: height }, '*');
  }
}

/**
 * Initialize application on page load
 */
window.addEventListener('load', () => {
  renderProjects();
  // Wait for images to load, then recalculate height
  setTimeout(sendHeightToWix, 500); 
});

/**
 * Recalculate height on window resize
 */
window.addEventListener('resize', sendHeightToWix);
