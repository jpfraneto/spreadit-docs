---
sidebar_position: 2
---

# Estructura

## ¿Cómo está construida la API de spreadit?

Puedes encontrar toda el código de la aplicación en el [repositorio público](https://www.github.com/jpfraneto/spreadit) de Github (anímate a colaborar!).

El stack tecnológico con el cual fue construida es el siguiente:

- Back end: [NodeJS](https://nodejs.org/en/) con [Express](https://expressjs.com/)
- Testeo: [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/)
- Hosting: [Heroku](https://www.heroku.com/)

Puedes acceder a la aplicación en el siguiente link [api.spreadit.pro](https://spreaditjpfs.herokuapp.com/).

Las rutas que están disponibles son las siguientes, todas usando <button>GET</button> requests:

- [/markets](./markets)
- [/markets/:market_id](./markets_id)
