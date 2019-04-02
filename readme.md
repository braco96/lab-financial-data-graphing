@@ -121,25 +121,32 @@ As in the dates filter, the data has to be reloaded every time the currency chan

**Tasks**

- Add a dropdown to indicate which currency will be shown in the application.
- Add a listener to the `select` field to reload the data every time its value changes.
- Add the currency to the API URL to load the correct values in our application.

<br>

## Iteration #5 (Bonus): Max/Min Values

To finish up with the exercise, let\'s add an information box where we are going to show which are the maximum and minimum values in the indicated filters.

To do that, we have to get the prices from the response we got in the first iteration and select the max and min values. Once we have these values, we have to show them in the view.

**Tasks**

- Add an information box in the HTML to show the max/min values from the chart.
- Create an array with the price values from the response.
- Use `Math.min()` and `Math.max()` to filter the array and get the min/max values.
- Show these values in the information box we have added to the view.

<br><br>

**Happy coding!** :heart:

## Implementación realizada

- Añadidos enlaces CDN de Axios y Chart.js para consumir la API y dibujar la gráfica.
- Creado formulario con filtros de fecha y divisa para consultar el precio del Bitcoin.
- Script `financial-data.js` que obtiene los datos de CoinDesk, genera la gráfica y muestra valores máximo y mínimo.
