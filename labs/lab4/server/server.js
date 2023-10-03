const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { StatusCodes } = require('http-status-codes');

(function () {
  const port = 8080;
  const server = express();

  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };

  server.use(cors(corsOptions));
  server.use(express.json());

  server.listen(port, () => {
    console.log('salad bar REST Server is listening on port ' + port);
  });

  function getDetails(req, res, next, kind) {
    const obj = inventory[req.params.name];
    if (obj) {
      if (obj[kind]) {
        res.json(obj);
      } else {
        const ingredientKind =
          obj.foundation ? 'foundation' :
            obj.extra ? 'extra' :
              obj.protein ? 'protein' :
                obj.dressing ? 'dressing' :
                  'unknown'

        res.set('Content-Type', 'text/plain');
        res.status(StatusCodes.NOT_FOUND)
          .send(`Unknown ${kind}: ${req.params.name}. Did you mean /${ingredientKind}/${req.params.name}`);
      }
    } else {
      res.set('Content-Type', 'text/plain');
      res.status(StatusCodes.NOT_FOUND)
        .send(`Unknown ${kind}: ${req.params.name}`);
    }
  }

  function handleOrder(req, res, next) {
    try {
      if (!req.is('application/json')) {
        throw {
          httpStatus: StatusCodes.BAD_REQUEST,
          errorMessage: 'content-type is not json'
        };
      } else if (!Array.isArray(req.body)) {
        throw {
          httpStatus: StatusCodes.BAD_REQUEST,
          errorMessage: 'Type check faild. Type of body must be array, but is ' + typeof req.body
        };
      } else {
        const order = {
          status: 'confirmed',
          timestamp: new Date(),
          uuid: uuidv4(),
          price: 0,
          order: req.body
        };
        order.price = req.body.reduce(((acc, salad, index) => getSaladPrice(salad, index) + acc), 0);
        res.json(order);
      }
    } catch (e) {
      res.set('Content-Type', 'text/plain');
      res.status(e?.httpStatus || StatusCodes.INTERNAL_SERVER_ERROR)
        .send(e?.errorMessage || `Internal server error. An exception was thown while processing the request.\nmessage: ${e?.toString()} \nstack trace: ${e.stack}`
        );
    }
  }

  function getSaladPrice(list, saladIndex) {
    if (!(Array.isArray(list))) {
      throw {
        httpStatus: StatusCodes.BAD_REQUEST,
        errorMessage: `Typecheck failed. A salad must be an array, but salad with index ${saladIndex} have type ${typeof list}.`,
      };
    }
    return list.reduce(((acc, ingredient, ingrIndex) => acc + getIngredientPrice(ingredient, saladIndex, ingrIndex)), 0);
  }

  function getIngredientPrice(ingredient, saladIndex, ingrIndex) {
    if (typeof ingredient !== 'string') {
      throw {
        httpStatus: StatusCodes.BAD_REQUEST,
        errorMessage: `Typecheck failed. Ingredients must be strings but in salad with index ${saladIndex} ingredient with index ${ingrIndex} have type ${typeof ingredient}.`
      }
    }
    return inventory[ingredient]?.price || (_ => {
      throw {
        httpStatus: StatusCodes.NOT_FOUND,
        errorMessage: `Unknown ingredient: "${ingredient}" found while processing salad index ${saladIndex}, ingredient index${ingrIndex}.`
      };
    })();
  }
  function getList(req, res, next, kind) {
    let list = Object.keys(inventory).filter(name => inventory[name][kind]);
    res.json(list);
  }

  function addInventoryListener(server, kind) {
    server.get('/' + kind + 's', (req, res, next) => getList(req, res, next, kind));
    server.get('/' + kind + 's/', (req, res, next) => getList(req, res, next, kind));
    server.get('/' + kind + 's/:name', (req, res, next) => getDetails(req, res, next, kind));
  }

  addInventoryListener(server, 'foundation');
  addInventoryListener(server, 'protein');
  addInventoryListener(server, 'extra');
  addInventoryListener(server, 'dressing');
  server.post('/orders/', handleOrder);
  server.get("/", (req, res, next) =>
    res.json({ try: req.hostname + ":" + port + req.originalUrl + "foundations" })
  );

  const inventory = {
    Sallad: { price: 10, foundation: true, vegan: true },
    Pasta: { price: 10, foundation: true, gluten: true },
    'Sallad + Pasta': { price: 10, foundation: true, gluten: true },
    'Sallad + Matvete': { price: 10, foundation: true, vegan: true, gluten: true },
    'Sallad + Glasnudlar': { price: 10, foundation: true, gluten: true },
    'Sallad + Quinoa': { price: 10, foundation: true, vegan: true },

    'Kycklingfilé': { price: 10, protein: true },
    'Rökt kalkonfilé': { price: 10, protein: true },
    'Norsk fjordlax': { price: 30, protein: true },
    'Handskalade räkor från Smögen': { price: 40, protein: true },
    'Pulled beef från Sverige': { price: 15, protein: true },
    'Marinerad bönmix': { price: 10, protein: true, vegan: true },

    Avocado: { price: 10, extra: true, vegan: true },
    Bacon: { price: 10, extra: true },
    'Böngroddar': { price: 5, extra: true, vegan: true },
    'Cashewnötter': { price: 5, extra: true, vegan: true },
    'Chèvreost': { price: 15, extra: true, lactose: true },
    Fetaost: { price: 5, extra: true, lactose: true },
    'Färsk koriander': { price: 10, extra: true, vegan: true },
    Gurka: { price: 5, extra: true, vegan: true },
    'Inlagd lök': { price: 5, extra: true, vegan: true },
    Jalapeno: { price: 5, extra: true, vegan: true },
    'Krossade jordnötter': { price: 5, extra: true, vegan: true },
    Krutonger: { price: 5, extra: true, gluten: true },
    'Körsbärstomater': { price: 5, extra: true, vegan: true },
    Lime: { price: 5, extra: true, vegan: true },
    Majs: { price: 5, extra: true, vegan: true },
    Oliver: { price: 5, extra: true, vegan: true },
    Paprika: { price: 5, extra: true, vegan: true },
    Parmesan: { price: 5, extra: true, lactose: true },
    'Rivna morötter': { price: 5, extra: true, vegan: true },
    'Rostade sesamfrön': { price: 5, extra: true, vegan: true },
    Ruccola: { price: 5, extra: true, vegan: true },
    'Rödlök': { price: 5, extra: true, vegan: true },
    'Sojabönor': { price: 5, extra: true, vegan: true },
    'Soltorkad tomat': { price: 5, extra: true, vegan: true },
    Tomat: { price: 5, extra: true, vegan: true },
    'Valnötter': { price: 5, extra: true, vegan: true },
    'Ägg': { price: 5, extra: true },

    Ceasardressing: { price: 5, dressing: true, lactose: true },
    Dillmayo: { price: 5, dressing: true },
    Honungsdijon: { price: 5, dressing: true, vegan: true },
    Kimchimayo: { price: 5, dressing: true },
    Pesto: { price: 5, dressing: true, lactose: true },
    Rhodeisland: { price: 5, dressing: true, lactose: true },
    'Rostad aioli': { price: 5, dressing: true },
    'Soyavinägrett': { price: 5, dressing: true, vegan: true },
    'Örtvinägrett': { price: 5, dressing: true, vegan: true },
  };
})();
