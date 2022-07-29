---
sidebar_position: 4
---

# Market Por Identificador

Esta ruta se utiliza para obtener información específica de un mercado.

<button>GET</button> /api/markets/:market_id

```json
{
  "market_id": "BTC-CLP",
  "last_price": ["20691883.0", "CLP"],
  "min_ask": ["20794433.0", "CLP"],
  "max_bid": ["20691513.0", "CLP"],
  "volume": ["11.29658187", "BTC"],
  "price_variation_24h": "-0.0",
  "price_variation_7d": "0.01"
}
```

##### Explicación de las propiedades del objeto:

| Propiedad                                   | Tipo Elemento      | Descripción                                                      |
| ------------------------------------------- | ------------------ | ---------------------------------------------------------------- |
| <code><var>market_id</var></code>           | string             | Identificador del mercado consultado                             |
| <code><var>last_price</var></code>          | [amount, currency] | Precio de la última orden ejecutada                              |
| <code><var>min_ask</var></code>             | [amount, currency] | Menor precio de venta                                            |
| <code><var>max_bid</var></code>             | [amount, currency] | Máximo precio de compra                                          |
| <code><var>volume</var></code>              | [amount, currency] | Volumen transado en las últimas 24 horas                         |
| <code><var>price_variation_24h</var></code> | float              | Cuanto ha variado el precio en las últimas 24 horas (porcentaje) |
| <code><var>price_variation_7d</var></code>  | float              | Cuanto ha variado el precio el los últimos 7 días (porcentaje)   |

---
