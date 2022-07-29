---
sidebar_position: 4
---

# Spreads

Esta ruta es para obtener la información de todos los spreads de los mercados que están disponibles en Buda.com.

La respuesta es un objeto con la propiedad spreads, que es un array donde cada elemento es un mercado particular, que cuenta con las siguientes propiedades:

<button>GET</button> /api/spreads

```json
{
  "spreads": [
    {
      "id": "BTC-CLP",
      "spread": [ "214000", "CLP"],
      "volume": ["20.35711754", "BTC"]
    },
    {
      "id": "BTC-COP",
      "spread": ["2292239", "COP"],
      "volume": ["4.6773817", "BTC"]
    }, ...
  ]
}
```

##### Explicación de las propiedades de cada spread:

| Propiedad                      | Tipo Elemento      | Descripción                             |
| ------------------------------ | ------------------ | --------------------------------------- |
| <code><var>id</var></code>     | string             | Identificador del mercado               |
| <code><var>spread</var></code> | [number, currency] | Valor del spread en la moneda de cambio |
| <code><var>volume</var></code> | [number, currency] | Volumen transado de la moneda           |
