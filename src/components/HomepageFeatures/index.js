import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Durabilidad',
    description: (
      <>
        Al ser básicamente una representación digital, la duración de un bitcoin
        está asociada a la duración de los sistemas digitales de la humanidad.
      </>
    ),
  },
  {
    title: 'Portabilidad',
    description: (
      <>
        No hay un medio de transferencia económica que pueda mover el valor que
        mueve Bitcoin, con tan baja comisión asociada, en tan poco tiempo, y de
        forma completamente autónoma.
      </>
    ),
  },
  {
    title: 'Fungibilidad',
    description: <>Un bitcoin es idéntico a otro bitcoin.</>,
  },
  {
    title: 'Escasez',
    description: (
      <>El número de bitcoins existente es conocido y fijo (21 millones).</>
    ),
  },
  {
    title: 'Divisibilidad',
    description: (
      <>
        Un Bitcoin se puede dividir hasta su .00000001 parte (un satoshi). Al
        día de hoy un bitcoin cuesta alrededor de 20.000 dólares americanos, lo
        que quiere decir que un satoshi equivale a 0.0002 centavos de dólar.
      </>
    ),
  },
  {
    title: 'Reconocibilidad',
    description: (
      <>
        Capacidad que se tiene en la economía de poder intercambiar bienes y
        servicios con Bitcoin.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <h2 style={{ textAlign: 'center' }}>
          ¿Qué es el dinero?, ¿Cómo se relaciona esta pregunta a Bitcoin?
        </h2>
        <hr />
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
