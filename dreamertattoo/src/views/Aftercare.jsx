import styles from "./Aftercare.module.css";
const aftercareList = [
  "Aspettare 4 ore prima di levare il bendaggio",
  "Lavarsi sempre accuratamente le mani prima di toccare il tattoo",
  "Distribuire un sottile strato di crema (consigliata BEPANTHENOL, la trovi in farmacia)",
  "Nei successivi 15giorni continuare ad applicare la crema ogni 3 ore circa",
  "Lavare una volta al giorno con un sapone intimo neutro",
  "Asciugare senza strofinare, tamponando con un asciugamano pulito e morbido",
  "Indossare indumenti di cotone",
  "Non grattare o staccare mai le croste della cicatrizzazione",
  "Evitare di andare in piscina, mare, palestra",
  "Evitare l’esposizione al sole, il contatto con la polvere, peli di animale, profumi, shampoo",
  "Nel tempo mantenere una corretta idratazione",
  "Una buona riuscita del vostro tatuaggio dipende molto da un attenta cura",
  "Dopo 15 giorni è tassativa una visita di controllo guarigione dal vostro tatuatore, e non esitare a chiamarlo per ogni eventuale chiarimento",
];

const Aftercare = () => {
  return (
    <main className={styles.containerAftercare}>
      <div className={styles.wrapperAftercare}>
        <h2 className={styles.aftercareTitle}>Cura del vostro tattoo</h2>
        <ol>
          {aftercareList.map((aftercareItem) => (
            <li key={aftercareItem} className={styles.aftercareItem}>
              {aftercareItem}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Aftercare;
