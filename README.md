# node-soap-example
A simple SOAP Service and client using node-soap, express and crypto.

# Modules
## [Express](https://expressjs.com/)
Express is used to handle a simple GET request required for the client to access the WSDL.

## [SOAP](https://github.com/vpulim/node-soap)
node-soap module is used to connect web services through SOAP by handling XML HTTP POST requests that utilize the service.

## [Crypto](https://nodejs.org/api/crypto.html)
Crypto library provides tools for cryptography, used to hash given input.

# Run the service
```
npm run service
```
or
```
node hashService.js
```

# Run the client
```
npm run client
```
or
```
node client.js
```
