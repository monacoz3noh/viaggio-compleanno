/* ============================================================
   CONFIG.JS — L'UNICO FILE DA MODIFICARE
   Cambia solo i testi tra "virgolette". Non toccare virgole,
   parentesi e i simboli { } [ ].
   ============================================================ */
const CONFIG = {

  // DEBUG: true = mostra una barra per saltare a una fermata.
  // (Puoi anche aprire il sito con ?debug=1 alla fine dell'indirizzo)
  debug: false,

  nome: "Davide",
  soprannome: "Dottò",
  eta: 28,

  // Testi verdi del terminale iniziale (nessuna password: dopo l'ultima riga parte l'esperienza)
  bootLines: [
    "SYSTEM BOOT...",
    "ATM MEMORY TRANSPORT SYSTEM",
    "INITIALIZING...",
    "DRIVER IDENTIFIED: {nome}",
    "LOADING MEMORIES...",
    "SYSTEM READY."
  ],

  // Targhetta in cabina (in alto a destra, sul vetro)
  targhetta: "sij carut' Antò?",

  // Leva di trazione: "giu" = si tira verso di sé (come nella foto: TRAZ. verso il macchinista),
  // "su" = si spinge in avanti.
  levaTrazione: "giu",

  // Scritta a led gialli sul frontale del treno (scena della porta cabina)
  frontDisplay: "VIAGGIO DEL DOTTO'",

  // Deposito (partenza)
  deposito: { name: "Cologno Nord", nick: "Inizio" },

  // Le 6 fermate. Per ogni fermata puoi aggiungere (facoltativi):
  //   images: ["assets/images/f1.jpg"]   -> una o più foto
  //   video:  "assets/videos/f1.mp4"     -> un video (max 25 MB)
  //   audio:  "assets/audio/f1.mp3"      -> annuncio registrato da te
  //   announce: "testo annuncio"         -> altrimenti usa quello standard
  //   message: "il tuo messaggio"
  stations: [
    { name: "Piola",         nick: "ITIS",             message: "", 	video: "https://monacoz3noh.github.io/viaggio-compleanno/assets/f1.mp4"},
    { name: "Porta Genova",  nick: "Mini",             message: "", 	video: "https://monacoz3noh.github.io/viaggio-compleanno/assets/f2.mp4"},
    { name: "Garibaldi FS",  nick: "Caorle",           message: "", 	video: "https://monacoz3noh.github.io/viaggio-compleanno/assets/f3.mp4"},
    { name: "Centrale FS",   nick: "Casa Elia",        message: "", 	video: "https://monacoz3noh.github.io/viaggio-compleanno/assets/f4.mp4"},
    { name: "Famagosta",     nick: "Napoli Centrale",  message: "", 	video: "https://monacoz3noh.github.io/viaggio-compleanno/assets/f5.mp4"},
    { name: "Assago",        nick: "Fine della Corsa", message: "" }   // ultima fermata (capolinea: niente video)
  ],

  // Annuncio standard ({name} = nome della fermata)
  announceTpl: "Fermata {name}. Attenzione, apertura porte.",
  // Annuncio dell'ultima fermata (capolinea)
  announceLast: "{name}. Capolinea. Si prega di scendere dal treno.",

  // Durata (secondi) del montaggio di ogni fermata, se non indichi un video
  // (se indichi un video, le porte si chiudono quando il video sta per finire)
  durata: 10,
  // Secondi in cui compare il soprannome su fondo nero prima del montaggio
  titleSec: 2.5,

  // Sequenza di avviamento (SIMULAZIONE ludica, non procedura reale).
  // L'ultimo passo è sempre il comando di partenza.
  // Ogni passo indica quale comando della cabina va premuto (el) e il suono (snd).
  // el possibili: kn1 (chiave a destra), lt (tasto bianco PROVA), bg (verde SISTEMA),
  //               fari (giallo FARI), bw (giallo PORTE), ba (ambra MODALITÀ), lev (leva)
  // once:true = si fa solo alla prima partenza (poi il treno resta acceso)
  // opt:true  = passo che sparisce dalle ripartenze successive se accorcia è true
  steps: [
    { label: "ALIMENTAZIONE",       el: "kn1",  snd: "hum",   once: true, msg: "ALIMENTAZIONE INSERITA" },
    { label: "PROVA LAMPADE",       el: "lt",   snd: "lamps", once: true, msg: "PANNELLO OK" },
    { label: "ATTIVA SISTEMA",      el: "bg",   snd: "compr", once: true, msg: "SISTEMA ATTIVO" },
    { label: "ACCENDI I FARI",      el: "fari", snd: "relay", once: true, msg: "FARI ACCESI" },
    { label: "CONSENSO PORTE",      el: "bw",   snd: "relay", msg: "PORTE CHIUSE" },
    { label: "MODALITÀ RICORDI",    el: "ba",   snd: "relay", opt: true, msg: "MODALITÀ VIRTUALE" },
    { label: "LEVA: TRAZIONE",      el: "lev",  snd: "whine", msg: "AUTORIZZAZIONE ALLA PARTENZA" }
  ],

  // Spegnimento all'ultima fermata (lo fa il festeggiato, nell'ordine indicato)
  spegni: [
    { label: "DISATTIVA SISTEMA", el: "bg",  snd: "relay", msg: "SISTEMA DISATTIVATO" },
    { label: "GIRA LA CHIAVE",    el: "kn1", snd: "hum",   msg: "ALIMENTAZIONE OFF" }
  ],

  // Pulsanti della consolle (scritta gialla sotto ciascuno). Le scritte dei pulsanti
  // senza id sono SOLO decorative e inventate: cambiale come vuoi.
  // c = colore: y giallo, r rosso, g verde, a ambra, w bianco
  pulsantiAlto: [
    { label: "EMERG.", c: "r", mush: true }, { label: "PROVA", c: "w", id: "lt" },
    { label: "RIPETI", c: "w" }, { label: "AUX", c: "w" }
  ],
  pulsanti: [
    { label: "LUCI CAB.", c: "y" }, { label: "ALLARME", c: "r" }, { label: "SISTEMA", c: "g", id: "bg" }, { label: "VENTIL.", c: "w" },
    { label: "MODALITÀ", c: "a", id: "ba" }, { label: "PORTE", c: "y", id: "bw" }, { label: "TERGIC.", c: "w" }, { label: "AUX 1", c: "w" },
    { label: "FARI", c: "y", id: "fari" }, { label: "RADIO", c: "w" }, { label: "AUX 2", c: "w" }, { label: "EMERG.", c: "r", mush: true }
  ],
  // true = la procedura si accorcia a ogni fermata; false = sempre completa
  accorcia: true,
  readyText: "SISTEMI PRONTI",

  // Durata del tragitto tra due fermate (secondi)
  travelSec: 6,

  // Testi finali
  fineTitolo: "VIAGGIO COMPLETATO",
  fineTesto: [
    "DESTINAZIONE RAGGIUNTA.",
    "Grazie per aver viaggiato attraverso tutti questi ricordi.",
    "Ma questa non è la fine.",
    "La tua prossima destinazione è proprio davanti a te."
  ],
  fineBuonCompleanno: "BUON COMPLEANNO, {soprannome}.",
  fineScendi: "SCENDI DALLA CABINA",
  fineRegalo: "ORA PUOI SCENDERE. IL TUO REGALO TI ASPETTA."
};
