// Proceso RGBA → Ajustar transparencia con el slider
    const alphaSlider = document.getElementById('alphaRange');
    const rgbaBox = document.getElementById('rgbaBox');
    alphaSlider.addEventListener('input', () => {
      const alpha = alphaSlider.value;
      rgbaBox.style.backgroundColor = `rgba(231, 76, 60, ${alpha})`;
    });

    // Proceso HSL → Ajustar matiz (Hue) con el slider
    const hueSlider = document.getElementById('hueRange');
    const hslBox = document.getElementById('hslBox');
    hueSlider.addEventListener('input', () => {
      const hue = hueSlider.value;
      hslBox.style.backgroundColor = `hsl(${hue}, 50%, 30%)`;
    });