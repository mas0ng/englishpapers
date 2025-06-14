// js/activities.js
(function() {
  function initActivities() {

    const container = document.getElementById('activities-container');
    const searchBar = document.getElementById('search-container');
    if (!container || !searchBar) {
      console.error("[Activities] Missing container or searchBar, aborting.");
      return;
    }

    // 1. Search input
    const input = document.createElement('input');
    input.placeholder = 'Search games…';
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      document.querySelectorAll('.game-tile').forEach(tile => {
        const nm = tile.querySelector('.game-name').textContent.toLowerCase();
        tile.style.display = nm.includes(q) ? '' : 'none';
      });
    });
    searchBar.appendChild(input);

    // 2. Fetch & render
    fetch('https://services.depoxtxyz.workers.dev/json')
      .then(r => {
        return r.json();
      })
      .then(list => {
        list.forEach(item => {
          const tile = document.createElement('div');
          tile.className = 'game-tile';
          tile.onclick = () => {
            const enc = encodeURIComponent(btoa(item.name));
            window.location.href = `open.html?activity=${enc}`;
          };

          const img = document.createElement('img');
          img.src = item.icon_url;
          img.alt = item.name;

          const nameDiv = document.createElement('div');
          nameDiv.className = 'game-name';
          nameDiv.textContent = item.name;

          tile.append(img, nameDiv);
          container.appendChild(tile);
        });
      })
      .catch(err => {
        console.error("[Activities] Failed to fetch ubg.json:", err);
        const msg = document.createElement('p');
        msg.textContent = '⚠️ Could not load activities.';
        msg.style.textAlign = 'center';
        msg.style.color = 'var(--text-secondary)';
        container.appendChild(msg);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initActivities);
  } else {
    initActivities();
  }
})();