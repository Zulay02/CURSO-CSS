  const slider = document.getElementById('alphaRange');
    const rgbaBox = document.getElementById('rgbaBox');

    slider.addEventListener('input', () => {
      const alpha = slider.value;
      rgbaBox.style.backgroundColor = `rgba(231, 76, 60, ${alpha})`;
    });   
