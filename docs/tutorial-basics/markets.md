---
sidebar_position: 3
---

# Markets

Esta ruta es para obtener la información de todos los mercados que están disponibles en Buda.com.

La respuesta es un objeto con la propiedad markets, que es un array donde cada elemento es un mercado particular, que cuenta con las siguientes propiedades:

<button>GET</button> /markets

```json
{
  "markets": [
    {
      "id": "BTC-CLP",
      "name": "btc-clp",
      "base_currency": "BTC",
      "quote_currency": "CLP",
      "minimum_order_amount": ["0.00002", "BTC"],
      "taker_fee": "0.8",
      "maker_fee": "0.4"
    },
    {
      "id": "BTC-COP",
      "name": "btc-cop",
      "base_currency": "BTC",
      "quote_currency": "COP",
      "minimum_order_amount": ["0.00002", "BTC"],
      "taker_fee": "0.8",
      "maker_fee": "0.4"
    }, ...
  ]
}
```

##### Explicación de las propiedades de cada mercado:

| Propiedad                                     | Tipo Elemento      | Descripción                                         |
| --------------------------------------------- | ------------------ | --------------------------------------------------- |
| <code><var>id</var></code>                    | number             | Identificador del mercado                           |
| <code><var>name</var></code>                  | number             | Nombre del mercado el cual corresponde al market_id |
| <code><var>base_currency</var></code>         | string             | Moneda de cambio                                    |
| <code><var>quote_currency</var></code>        | string             | Moneda de pago                                      |
| <code><var>minimum_order_ammount</var></code> | [amount, currency] | Tamaño de orden mínimo aceptado                     |
| <code><var>taker_fee</var></code>             | string             | Tarifa pagada por una orden taker                   |
| <code><var>maker_fee</var></code>             | string             | Tarifa pagada por una orden maker                   |
