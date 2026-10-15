// Shared navigation component - injected dynamically on all pages
export function initNav() {
  const currentPath = window.location.pathname;
  const isSubpage = currentPath.includes('/pages/');
  const prefix = isSubpage ? '../' : '';
  const pageName = currentPath.split('/').pop().replace('.html', '') || 'index';

  const pages = [
    { id: 'index', label: 'Home', icon: 'bi-house-fill', href: `${prefix}index.html` },
    { id: 'coverages', label: 'Coverages', icon: 'bi-shield-fill', href: `${prefix}pages/coverages.html` },
    { id: 'offenses', label: 'Offenses', icon: 'bi-lightning-fill', href: `${prefix}pages/offenses.html` },
    { id: 'matchups', label: 'Matchups', icon: 'bi-arrows-angle-expand', href: `${prefix}pages/matchups.html` },
    { id: 'playbook-select', label: 'Playbooks', icon: 'bi-book-fill', href: `${prefix}pages/playbook-select.html` },
    { id: 'scheme-builder', label: 'Scheme Builder', icon: 'bi-gear-fill', href: `${prefix}pages/scheme-builder.html` },
    { id: 'search', label: 'Search', icon: 'bi-search', href: `${prefix}pages/search.html` }
  ];

  const nav = document.querySelector('nav');
  if (!nav) return;

  const desktopLinks = pages.map(p =>
    `<a href="${p.href}" class="nav-link${p.id === pageName ? ' active' : ''}"><i class="bi ${p.icon} mr-1"></i> ${p.label}</a>`
  ).join('\n');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="block nav-link${p.id === pageName ? ' active' : ''}">${p.label}</a>`
  ).join('\n');

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="${prefix}index.html" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-[#00FFFF] to-[#FF1493] rounded-lg flex items-center justify-center font-black text-[#0d001a] text-lg">M</div>
          <span class="text-xl font-bold bg-gradient-to-r from-[#00FFFF] to-[#FF1493] bg-clip-text text-transparent">Madden 27 Lab</span>
        </a>
        <div class="hidden md:flex items-center gap-1">
          ${desktopLinks}
        </div>
        <button id="mobileMenuBtn" class="md:hidden text-2xl text-gray-400 hover:text-white"><i class="bi bi-list"></i></button>
      </div>
    </div>
    <div id="mobileMenu" class="hidden md:hidden bg-[#1a0033] border-t border-[#2F4F4F]">
      <div class="px-4 py-3 space-y-2">
        ${mobileLinks}
      </div>
    </div>
  `;

  // Mobile menu toggle
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
}
