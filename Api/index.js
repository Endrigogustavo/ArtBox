const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const listEndpoints = require('express-list-endpoints');
const route = require('./Server/Routes/Routes');
const connetionBD = require('./Server/Database/MongoDB');

const app = express()
const port = 3030

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

connetionBD(); 

app.use('/', route)

app.listen(port, () => {
    console.log(`Servidor funcionando!!! ${port}!`)
     const endpoints = listEndpoints(app);
     console.log('Rotas disponíveis:');
     endpoints.forEach(endpoint => {
       console.log(`${endpoint.methods.join(', ')} ${endpoint.path}`);
     });
   
   }
   );