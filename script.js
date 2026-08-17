const chart = document.querySelector('#tideChart');
const tideValue = document.querySelector('#tideValue');
const tideState = document.querySelector('#tideState');
const settings = {
  rising: { value: '+1.82', label: 'RISING / ABOVE SEASONAL MEAN', points: [112, 105, 96, 86, 77, 62, 48, 41, 35, 29, 23, 19] },
  high: { value: '+2.41', label: 'HIGH TIDE / PEAK WINDOW', points: [145, 125, 99, 69, 42, 20, 13, 18, 39, 71, 111, 148] },
  falling: { value: '+0.74', label: 'FALLING / RETURNING TO BASELINE', points: [27, 30, 39, 58, 76, 97, 118, 137, 152, 161, 168, 173] }
};

function drawChart(points) {
  const width = 760;
  const step = width / (points.length - 1);
  const line = points.map((point, index) => `${index ? 'L' : 'M'} ${index * step} ${point + 15}`).join(' ');
  const area = `${line} L ${width} 220 L 0 220 Z`;
  chart.innerHTML = `<path class="chart-grid" d="M0 65H760M0 130H760M0 195H760"/><path class="chart-area" d="${area}"/><path class="chart-path" d="${line}"/>`;
}

document.querySelectorAll('.state-button').forEach((button) => {
  button.addEventListener('click', () => {
    const state = settings[button.dataset.state];
    document.querySelector('.state-button.active').classList.remove('active');
    button.classList.add('active');
    tideValue.textContent = state.value;
    tideState.textContent = state.label;
    drawChart(state.points);
  });
});

drawChart(settings.rising.points);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const toast = document.querySelector('.archive-toast');
document.querySelectorAll('.archive-row').forEach((row) => row.addEventListener('click', () => {
  toast.textContent = `Signal ${row.dataset.filter} / ${row.querySelector('strong').textContent} logged.`;
  toast.style.display = 'block';
  window.setTimeout(() => { toast.style.display = 'none'; }, 3200);
}));

document.querySelector('.signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'You are in ↗';
  event.currentTarget.querySelector('input').value = '';
  event.currentTarget.querySelector('input').placeholder = 'Signal received.';
});
