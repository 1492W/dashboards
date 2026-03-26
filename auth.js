// Shared auth check — redirects to login if not authenticated
(function() {
  const HASH = '38c30f8971b957aba303815153300d2601bb60f4e0146d39dba69e4648ad9ebd';
  if (localStorage.getItem('1492w_auth') !== HASH && sessionStorage.getItem('1492w_auth') !== HASH) {
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    const prefix = depth > 1 ? '../'.repeat(depth - 1) : './';
    window.location.href = prefix + 'index.html';
  }
})();
