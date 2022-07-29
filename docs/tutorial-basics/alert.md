---
sidebar_position: 6
---

# Alerta de Spread

Esta ruta se utiliza para guardar una alerta para spread de un mercado específico. Si es que no se proporciona un nombre de usuario, el sistema guardará la alerta con un usuario generado al azar. Para acceder a la información de la alerta, el usuario debe guardar el id asociado a su alerta guardada.

<button>POST</button> /api/spreads/alert

Request Payload:

```json
{
  "alert_price": 2222,
  "username": "detectorfledgling",
  "email": "jpfraneto@gmail.com",
  "price_comparer": "biggerThan",
  "triggering": true,
  "market": "btc-clp"
}
```

| Propiedad                              | Tipo Elemento | Descripción                                                                           |
| -------------------------------------- | ------------- | ------------------------------------------------------------------------------------- |
| <code><var>market</var></code>         | string        | Identificador del mercado                                                             |
| <code><var>alert_price</var></code>    | number        | Valor referencia del spread                                                           |
| <code><var>price_comparer</var></code> | string        | Condición para la alerta con respecto al spread: biggerThan, lessThan                 |
| <code><var>triggering</var></code>     | boolean       | Identificador si es que quieres guardar los eventos en los que se cumpla la condición |
| <code><var>username</var></code>       | string        | Nombre de usuario registrado donde se acumulan tus alertas                            |

Response Details:

```json
{
  "unique_username": "detectorfledgling",
  "success": true,
  "alert_id": "62e42a0a18462b893ec97252",
  "message": "Your alert was saved in the DB. You can only access it with this ID, so storec it somewhere safe!"
}
```

##### Explicación de las propiedades de la respuesta:

| Propiedad                               | Tipo Elemento | Descripción                                          |
| --------------------------------------- | ------------- | ---------------------------------------------------- |
| <code><var>unique_username</var></code> | string        | Usuario en el que queda guardada la alerta           |
| <code><var>success</var></code>         | boolean       | Identificador del éxito del guardado de la alerta    |
| <code><var>alert_id</var></code>        | string        | Identificador único de la alerta en la base de datos |
| <code><var>message</var></code>         | string        | Mensaje del servidor                                 |
