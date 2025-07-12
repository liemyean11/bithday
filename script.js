function blowCandles() {
  const flames = document.querySelectorAll('.flame');
  flames.forEach(flame => flame.style.display = 'none');

  const wish = document.getElementById('wish');
  wish.style.opacity = 1;
}
