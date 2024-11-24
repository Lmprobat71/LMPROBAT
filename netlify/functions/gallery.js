const fs = require('fs');
const path = require('path');

exports.handler = async function (event, context) {
    const directoryPath = path.join(__dirname, '../../images/Galery');
    try {
        const files = fs.readdirSync(directoryPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        const imagePaths = files.map(file => `/images/Galery/${file}`);

        return {
            statusCode: 200,
            body: JSON.stringify(imagePaths),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur lors de la lecture du dossier' }),
        };
    }
};
