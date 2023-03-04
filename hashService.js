require('dotenv').config();
const xml = require('fs').readFileSync('service.wsdl', 'utf8');
const soap = require('soap');
const crypto = require('crypto');

const service = {
    HashService: {
        HashServiceSOAP: {
            Hash: (request) => {
                const idHashPairs = [];
                request.users.forEach(user => {
                    const mash = user.Id + user.Name + process.env.SECRET;
                    const hash = crypto.createHash('sha256').update(mash).digest('hex');
                    idHashPairs.push({Id: user.Id, Hash: hash});
                    console.log(`Hashed ${user.Id} with ${hash}`);
                });
                return {hashResponse: idHashPairs};
            },
        }
    }
};

const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 3000, function () {
    const host = server.address().address;
    const port = process.env.PORT || 3000;

    console.log(`Service is listening at http://${host}:${port}`);

    // serve the wsdl
    app.get('/HashService?wsdl', function (req, res) {
        res.set('Content-Type', 'text/xml');
        res.send(xml);
    });

    // serve the soap api
    soap.listen(app, '/HashService', service, xml);
});