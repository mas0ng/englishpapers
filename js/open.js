// js/open.js
(function() {
  function initOpen() {
    const container      = document.getElementById('game-container');
    const loaderOverlay  = document.getElementById('loader-overlay');

    if (!container || !loaderOverlay) {
      console.error('Missing #game-container or #loader-overlay');
      return;
    }

    loaderOverlay.addEventListener('click', onClickLoad);

    async function onClickLoad() {
      // Prevent double‐click
      loaderOverlay.removeEventListener('click', onClickLoad);
      loaderOverlay.style.display = 'none';

      // 1) Decode activity identifier
      const enc = new URLSearchParams(location.search).get('activity');
      let name;
      try {
        name = atob(decodeURIComponent(enc));
      } catch {
        console.error('Invalid activity identifier');
        return;
      }

      // 2) Fetch list of activities
      let list;
      try {
        list = await fetch('https://services.depoxtxyz.workers.dev/json')
                  .then(r => r.json());
      } catch {
        console.error('Could not load activity list');
        return;
      }

      // 3) Find the selected game
      const game = list.find(g => g.name === name);
      if (!game) {
        console.error(`Activity “${name}” not found`);
        return;
      }

      // 4) First show warning.html in an iframe
      const iframe = document.createElement('iframe');
      Object.assign(iframe.style, {
        width: '100%',
        height: '100%',
        border: 'none'
      });
      iframe.src = 'warning.html';
      container.appendChild(iframe);

      // 5) After 3s swap to the real game URL
      setTimeout(() => {
        iframe.src = game.game_url;
      }, 5000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOpen);
  } else {
    initOpen();
  }
})();
