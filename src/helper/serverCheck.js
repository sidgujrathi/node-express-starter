const fs = require('fs');

module.exports = () => {
  // Check if .env file exists or not
  if (!fs.existsSync('./.env')) {
    console.error('ERROR: Please provode .env file before starting server');
    process.exit(0);
  };
};
