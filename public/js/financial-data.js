// Este script carga y representa los datos históricos de Bitcoin

// Guardamos la instancia de la gráfica para poder actualizarla más adelante
let bitcoinChart;

// Función principal que recupera los datos y actualiza la gráfica
function loadBitcoinData() {
  // Tomamos los valores de los filtros establecidos por el usuario
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const currency = document.getElementById('currency').value;

  // Construimos la URL de la API incluyendo los filtros necesarios
  let apiUrl = `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`;
  if (from && to) {
    apiUrl += `&start=${from}&end=${to}`; // añadimos fechas solo si ambas existen
  }

  // Realizamos la petición a la API con axios
  axios
    .get(apiUrl)
    .then(response => {
      // Obtenemos etiquetas (fechas) y valores (precios) de la respuesta
      const labels = Object.keys(response.data.bpi);
      const data = Object.values(response.data.bpi);

      // Si ya teníamos una gráfica la eliminamos para evitar superposiciones
      if (bitcoinChart) bitcoinChart.destroy();

      // Creamos la gráfica de líneas con los datos obtenidos
      bitcoinChart = new Chart(
        document.getElementById('myChart').getContext('2d'),
        {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: `Bitcoin (${currency})`,
                data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)'
              }
            ]
          }
        }
      );

      // Calculamos y mostramos los valores máximo y mínimo de la serie
      const max = Math.max(...data);
      const min = Math.min(...data);
      document.getElementById('max').innerText = max.toFixed(2);
      document.getElementById('min').innerText = min.toFixed(2);
    })
    .catch(err => console.error('Error al cargar datos:', err));
}

// Cargamos los datos iniciales al entrar en la página
window.onload = loadBitcoinData;

// Volvemos a cargar los datos cada vez que cambien los filtros
document.getElementById('from').addEventListener('change', loadBitcoinData);
document.getElementById('to').addEventListener('change', loadBitcoinData);
document.getElementById('currency').addEventListener('change', loadBitcoinData);
