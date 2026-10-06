// Pytania do quizu.
// odpowiedzi - lista możliwych odpowiedzi
// dobra - numer poprawnej odpowiedzi (liczymy od 0)
var pytania = [
  {
    tresc: "Ile hostów można zaadresować w sieci z prefiksem /26?",
    odpowiedzi: ["30", "62", "64", "126"],
    dobra: 1
  },
  {
    tresc: "Który protokół automatycznie nadaje komputerom adresy IP?",
    odpowiedzi: ["DNS", "FTP", "DHCP", "SMTP"],
    dobra: 2
  },
  {
    tresc: "Jaki jest domyślny port protokołu HTTPS?",
    odpowiedzi: ["21", "80", "443", "3389"],
    dobra: 2
  },
  {
    tresc: "Które urządzenie pracuje w warstwie sieciowej (3) modelu OSI?",
    odpowiedzi: ["Hub", "Router", "Repeater", "Karta sieciowa"],
    dobra: 1
  },
  {
    tresc: "Do czego służy serwer DNS?",
    odpowiedzi: [
      "do zamiany nazw domen na adresy IP",
      "do szyfrowania połączeń",
      "do wysyłania poczty",
      "do tworzenia kopii zapasowych"
    ],
    dobra: 0
  },
  {
    tresc: "Jaka jest maksymalna długość segmentu skrętki UTP w sieci Ethernet?",
    odpowiedzi: ["10 m", "50 m", "100 m", "500 m"],
    dobra: 2
  },
  {
    tresc: "Na czym polega macierz RAID 1?",
    odpowiedzi: [
      "na łączeniu dysków w jeden większy",
      "na lustrzanym odbiciu danych na dwóch dyskach",
      "na kompresji danych",
      "na szyfrowaniu dysku"
    ],
    dobra: 1
  },
  {
    tresc: "Co oznacza skrót SSD?",
    odpowiedzi: [
      "Super Speed Disk",
      "Serial System Drive",
      "Solid State Drive",
      "Static Storage Device"
    ],
    dobra: 2
  },
  {
    tresc: "Które polecenie w Linuksie wyświetla zawartość katalogu?",
    odpowiedzi: ["ls", "cd", "pwd", "mkdir"],
    dobra: 0
  },
  {
    tresc: "Które polecenie SQL służy do pobierania danych z tabeli?",
    odpowiedzi: ["INSERT", "UPDATE", "DELETE", "SELECT"],
    dobra: 3
  },
  {
    tresc: "Jaki znacznik HTML tworzy największy nagłówek?",
    odpowiedzi: ["<h1>", "<h6>", "<head>", "<title>"],
    dobra: 0
  },
  {
    tresc: "Czym jest phishing?",
    odpowiedzi: [
      "programem przyspieszającym komputer",
      "wyłudzaniem danych przez podszywanie się pod zaufaną instytucję",
      "rodzajem zapory sieciowej",
      "uszkodzeniem dysku twardego"
    ],
    dobra: 1
  }
];
