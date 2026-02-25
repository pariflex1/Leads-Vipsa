<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Use the relative path for GitHub Pages compatibility
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('PWA Service Worker Registered!'))
        .catch(err => console.log('Service Worker Registration Failed', err));
    });
  }
</script>
