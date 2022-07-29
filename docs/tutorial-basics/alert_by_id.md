---
sidebar_position: 7
---

# Alerta por Identificador

Esta ruta se usa para obtener información acerca de la alerta que el usuario guardó. Para acceder a ella es necesario contar con el id de la alerta, que fue incluido en la respuesta al guardarla en primera instancia.

<button>GET</button> /api/spreads/alert/:alert_id

Request Payload:

Response Details:

```json
{
  "_id": "62e42e0a0d9ed615723774e3",
  "alert_price": 2222,
  "price_comparer": "biggerThan",
  "triggering": true,
  "market": "btc-clp",
  "username": "detectorfledgling",
  "triggered": [
    {
      "timestamp": 1659121167912,
      "alert": true,
      "targetSpread": 2222,
      "comparer": "biggerThan",
      "spread": 177679,
      "username": "detectorfledgling"
    },
    {
      "timestamp": 1659121197857,
      "alert": true,
      "targetSpread": 2222,
      "comparer": "biggerThan",
      "spread": 176067,
      "username": "detectorfledgling"
    },
    {
      "timestamp": 1659121227918,
      "alert": true,
      "targetSpread": 2222,
      "comparer": "biggerThan",
      "spread": 175100,
      "username": "detectorfledgling"
    },
    {
      "timestamp": 1659121257941,
      "alert": true,
      "targetSpread": 2222,
      "comparer": "biggerThan",
      "spread": 174377,
      "username": "detectorfledgling"
    }, ...
  ]
}
```

##### Explicación de las propiedades de la respuesta:

| Propiedad                              | Tipo Elemento | Descripción                                                        |
| -------------------------------------- | ------------- | ------------------------------------------------------------------ |
| <code><var>market</var></code>         | string        | Mercado de criptomonedas                                           |
| <code><var>\_id</var></code>           | string        | Identificador único de la alerta en la base de datos               |
| <code><var>alert_price</var></code>    | number        | Valor de alerta del spread                                         |
| <code><var>price_comparer</var></code> | string        | Comparador del valor de la alerta con respecto a el valor base     |
| <code><var>triggering</var></code>     | boolean       | Indicador si la alerta está activa o no                            |
| <code><var>username</var></code>       | string        | Usuario de referencia de la alerta                                 |
| <code><var>triggered</var></code>      | array         | Arreglo con la información de cada vez que la alerta fue disparada |
