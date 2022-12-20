
function pageCount(n, p) {
    return Math.min(p === 1 ? 0 : Math.floor(p/2), Math.floor(n/2) - Math.floor(p/2));
  }