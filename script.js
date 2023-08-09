window.addEventListener('resize', function() {
    var videozinho = document.getElementById('videozinho');
    if (window.innerWidth <= 600) {
      videozinho.style.display = 'none';
    } else {
        videozinho.style.display = 'block';
    }
  });

  // Chamada inicial para verificar o estado quando a página carrega
  if (window.innerWidth <= 600) {
    document.getElementById('videozinho').style.display = 'none';
  }