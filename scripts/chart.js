const data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const data2 = [0, 0, 0, 0, 0, 0, 0];
function renderChart() {
  const ctx1 = document.getElementById('chart1');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'Match', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Monthly Expenses',
        data: data1,
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
        data: data2,
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
renderChart();