---
sidebar_position: 5
---

# Spread Por Identificador

Esta ruta se utiliza para obtener información específica del spread de un mercado.

<button>GET</button> /api/spreads/:marketid

```json
{
  "id": "BTC-COP",
  "spread": ["1276573", "COP"],
  "volume": ["4.6979131", "BTC"]
}
```

##### Explicación de las propiedades de cada mercado:

| Propiedad                      | Tipo Elemento      | Descripción                             |
| ------------------------------ | ------------------ | --------------------------------------- |
| <code><var>id</var></code>     | string             | Identificador del mercado               |
| <code><var>spread</var></code> | [number, currency] | Valor del spread en la moneda de cambio |
| <code><var>volume</var></code> | [number, currency] | Volumen transado de la moneda           |
