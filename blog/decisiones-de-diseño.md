---
slug: decisiones-de-diseño
title: ¿Por qué hice las cosas como las hice?
authors: [jpfraneto]
tags: [bitcoin]
---

# Decisiones de Diseño del Proyecto

1. Tener una variable global en el servidor donde están disponibles los valores de los spreads y que se fetchean cada 10 segundos (para no sobrecargar el servidor de la API de Buda): Va a ser muy importante tener esta variable global a la hora de evaluar las distintas alertas, ya que si es que llamara para calcular los spreads cada vez que se evaluara una determinada alerta, se volvería loco. Lo importante es tener esta información disponible ubicuamente (10 segundos es harto tiempo, pero es lo que hay), para poder comparar con las distintas alertas y a partir de ello enviar los mensajes a los usuarios para los cuales se cumpla una alerta).
