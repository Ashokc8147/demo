window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 0) {
      nav.style.backgroundColor = '#95c11e';
    } else {
      nav.style.backgroundColor = 'transparent';
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const sleepQuality = document.getElementById('sleepQuality');
    const qualityText = document.getElementById('qualityText');

    sleepQuality.addEventListener('input', function () {
        const quality = parseInt(sleepQuality.value);
        let qualityDescription;

        switch (quality) {
            case 1:
                qualityDescription = 'Very Poor';
                break;
            case 2:
                qualityDescription = 'Poor';
                break;
            case 3:
                qualityDescription = 'Okay';
                break;
            case 4:
                qualityDescription = 'Good';
                break;
            case 5:
                qualityDescription = 'Very Good';
                break;
            default:
                qualityDescription = 'Okay';
        }

        qualityText.textContent = qualityDescription;
    });
});

function toggleOption(button) {
    const options = button.parentElement.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('active'));
    button.classList.add('active');
}
