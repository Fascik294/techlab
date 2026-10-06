# TechLab

Prosta strona z narzędziami dla technika informatyka. Projekt szkolny napisany w HTML, CSS i JavaScript, bez żadnych bibliotek.

**Strona online:** https://fascik294.github.io/techlab/

## Co jest na stronie

- **Kalkulator podsieci IPv4:** po wpisaniu adresu IP i prefiksu liczy adres sieci, maskę, broadcast, pierwszy i ostatni host oraz liczbę hostów.
- **Konwerter systemów liczbowych:** zamienia liczby między systemem dziesiętnym, binarnym, ósemkowym i szesnastkowym.
- **Tabela portów:** najważniejsze numery portów i protokoły (HTTP, HTTPS, SSH, DNS, DHCP i inne).
- **Quiz:** 12 pytań z sieci, sprzętu, systemów, SQL, HTML i bezpieczeństwa. Po kliknięciu „Sprawdź wynik” pokazuje punkty i poprawne odpowiedzi.

## Jak uruchomić

1. Pobierz wszystkie pliki do jednego folderu.
2. Otwórz plik `index.html` w przeglądarce.

Strona działa bez internetu i bez serwera.

## Pliki

| Plik | Do czego służy |
|------|----------------|
| `index.html` | struktura strony |
| `style.css` | wygląd |
| `app.js` | kalkulator, konwerter i quiz |
| `pytania.js` | lista pytań do quizu |

## Jak dodać własne pytanie do quizu

W pliku `pytania.js` skopiuj jeden blok pytania, zmień treść i odpowiedzi, a w polu `dobra` wpisz numer poprawnej odpowiedzi (liczymy od 0).

## Czego się nauczyłem

- jak liczy się adresy sieci i broadcast metodą wielkości bloku,
- jak zamieniać liczby między systemami liczbowymi,
- jak w JavaScripcie odczytywać dane z formularza i wyświetlać wynik na stronie.
