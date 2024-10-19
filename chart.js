renderChart();

function renderChart() {
  const ctx1 = document.getElementById('chart1');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'Match', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Monthly Expenses',
        data: [12, 19, 3, 5, 2, 3, 5, 6, 8, 9, 11, 5],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx2 = document.getElementById('chart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [{
        label: 'Day-to-Day Expenses',
        data: [12, 19, 3, 5, 2, 3, 8],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}