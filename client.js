const soap = require('soap');
const url = 'http://localhost:3000/HashService?wsdl';
const args = {
    users: [
        {Id: 1, Name: 'John'},
        {Id: 2, Name: 'Jane'},
        {Id: 3, Name: 'Jack'},
    ]
};
soap.createClient(url, function (err, client) {
    client.Hash(args, function (err, result) {
        console.log(result);
    });
});
