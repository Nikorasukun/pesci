var Db = require('./dbcrud');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next)=>{{
    console.log('Server is running...');
    next();
}})

router.route('/clienti').get(
    (request, response) => {
        Db.getCustomers(request).then(
            (data) => {
                response.json(data[0])
            }
        )
    }
)

router.route('/pesci').get(
  (request, response) => {
    Db.getPesci(request).then(
      (data) => {
        response.json(data[0])
      }
    )
  }
)

router.route('/clienti/:id').get(
    (request, response) => {
        Db.getCustomer(request.params.id)
        .then((data) => {
            response.json(data[0])
        })
    }
)

var port = process.env.PORT || 8089
app.listen(port)
console.log('APIs are listening on port ', port)
