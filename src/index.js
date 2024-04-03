const { exec } = require('child_process');

var port = process.env.PORT || 3001;

// Ejecutar un script de npm usando exec
exec(`mockoon-cli start --data ./src/data.json --port ${port}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Resultado: ${stdout}`);
});