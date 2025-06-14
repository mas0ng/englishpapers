// js/open.js
(function() {
  function initOpen() {
    console.log("[Open] initOpen called");

    const container     = document.getElementById('game-container');
    const loaderOverlay = document.getElementById('loader-overlay');
    console.log("[Open] container:", container, "loaderOverlay:", loaderOverlay);
    if (!container || !loaderOverlay) {
      console.error("[Open] Missing container or loaderOverlay, aborting.");
      return;
    }

    async function onClickLoad() {
      console.log("[Open] loaderOverlay clicked");
      loaderOverlay.removeEventListener('click', onClickLoad);
      loaderOverlay.textContent = '⏳ Loading…';
      loaderOverlay.style.cursor = 'default';

      const enc = new URLSearchParams(location.search).get('activity');
      console.log("[Open] Encoded activity:", enc);
      if (!enc) {
        loaderOverlay.textContent = '❌ No activity specified.';
        console.error("[Open] No activity query param");
        return;
      }

      let name;
      try {
        name = atob(decodeURIComponent(enc));
        console.log("[Open] Decoded activity name:", name);
      } catch {
        loaderOverlay.textContent = '❌ Invalid activity identifier.';
        console.error("[Open] Failed to decode activity identifier");
        return;
      }

      let list;
      try {
        console.log("[Open] Fetching activity list...");
        list = await fetch('https://services.depoxtxyz.workers.dev/json').then(r => r.json());
        console.log(`[Open] Received ${list.length} activities`);
      } catch {
        loaderOverlay.textContent = '⚠️ Could not load activity list.';
        console.error("[Open] Failed to fetch ubg.json");
        return;
      }

      const game = list.find(g => g.name === name);
      console.log("[Open] Selected activity:", game);
      if (!game) {
        loaderOverlay.textContent = `❌ Activity “${name}” not found.`;
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.src   = game.game_url;
      iframe.style = 'width:100%; height:100%; border:none;';
      container.appendChild(iframe);

      iframe.onload = () => {
        console.log("[Open] Iframe loaded");
        loaderOverlay.style.display = 'none';
      };
    }

    loaderOverlay.addEventListener('click', onClickLoad);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOpen);
  } else {
    initOpen();
  }
})();
