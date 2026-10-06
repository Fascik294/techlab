// ===== KALKULATOR PODSIECI =====

// sprawdza czy tekst jest poprawnym adresem IPv4
// zwraca tablicę 4 liczb albo null gdy adres jest zły
function sprawdzIP(tekst) {
  var czesci = tekst.trim().split(".");

  if (czesci.length != 4) {
    return null;
  }

  var liczby = [];
  for (var i = 0; i < 4; i++) {
    // czesc musi składać się tylko z cyfr
    if (czesci[i] == "" || isNaN(czesci[i])) {
      return null;
    }
    var n = Number(czesci[i]);
    if (n < 0 || n > 255 || n != Math.floor(n)) {
      return null;
    }
    liczby.push(n);
  }
  return liczby;
}

function obliczPodsiec() {
  var blad = document.getElementById("bladPodsieci");
  var tabela = document.getElementById("wynikPodsieci");

  var ip = sprawdzIP(document.getElementById("ip").value);
  var prefiks = Number(document.getElementById("prefiks").value);

  tabela.innerHTML = "";
  blad.innerHTML = "";

  if (ip == null) {
    blad.innerHTML = "Zły adres IP. Wpisz cztery liczby 0-255 oddzielone kropkami.";
    return;
  }
  if (prefiks < 1 || prefiks > 30 || prefiks != Math.floor(prefiks)) {
    blad.innerHTML = "Prefiks musi być liczbą całkowitą od 1 do 30.";
    return;
  }

  var maska = [];
  var siec = [];
  var broadcast = [];

  // liczymy każdy oktet po kolei
  for (var i = 0; i < 4; i++) {
    // ile bitów maski wypada w tym oktecie (od 0 do 8)
    var bity = prefiks - i * 8;
    if (bity > 8) bity = 8;
    if (bity < 0) bity = 0;

    // maska oktetu, np. 2 bity -> 256 - 2^(8-2) = 192
    maska[i] = 256 - Math.pow(2, 8 - bity);

    // wielkość bloku, np. dla maski 192 blok ma 64 adresy
    var blok = 256 - maska[i];

    // adres sieci to największa wielokrotność bloku, która mieści się w adresie
    siec[i] = Math.floor(ip[i] / blok) * blok;
    broadcast[i] = siec[i] + blok - 1;
  }

  var pierwszy = siec.slice();
  pierwszy[3] = pierwszy[3] + 1;

  var ostatni = broadcast.slice();
  ostatni[3] = ostatni[3] - 1;

  var hosty = Math.pow(2, 32 - prefiks) - 2;

  tabela.innerHTML =
    "<tr><th>Adres sieci</th><td>" + siec.join(".") + "/" + prefiks + "</td></tr>" +
    "<tr><th>Maska</th><td>" + maska.join(".") + "</td></tr>" +
    "<tr><th>Broadcast</th><td>" + broadcast.join(".") + "</td></tr>" +
    "<tr><th>Pierwszy host</th><td>" + pierwszy.join(".") + "</td></tr>" +
    "<tr><th>Ostatni host</th><td>" + ostatni.join(".") + "</td></tr>" +
    "<tr><th>Liczba hostów</th><td>" + hosty + "</td></tr>";
}

document.getElementById("przyciskPodsieci").addEventListener("click", obliczPodsiec);
obliczPodsiec(); // żeby od razu był wynik dla wartości domyślnych


// ===== KONWERTER LICZB =====

function przeliczLiczbe() {
  var blad = document.getElementById("bladLiczby");
  var tabela = document.getElementById("wynikLiczby");

  var tekst = document.getElementById("liczba").value.trim();
  var system = Number(document.getElementById("system").value);

  tabela.innerHTML = "";
  blad.innerHTML = "";

  if (tekst == "") {
    blad.innerHTML = "Wpisz jakąś liczbę.";
    return;
  }

  // sprawdzamy każdy znak - czy wolno go użyć w tym systemie
  // np. w binarnym wolno tylko 0 i 1, w szesnastkowym cyfry i litery a-f
  var dozwolone = "0123456789abcdef".substring(0, system);
  var male = tekst.toLowerCase();
  for (var i = 0; i < male.length; i++) {
    if (dozwolone.indexOf(male[i]) == -1) {
      blad.innerHTML = "Ta liczba nie pasuje do wybranego systemu (zły znak: " + tekst[i] + ").";
      return;
    }
  }

  // parseInt zamienia tekst na liczbę w podanym systemie
  var wartosc = parseInt(tekst, system);

  tabela.innerHTML =
    "<tr><th>Dziesiętnie (10)</th><td>" + wartosc.toString(10) + "</td></tr>" +
    "<tr><th>Binarnie (2)</th><td>" + wartosc.toString(2) + "</td></tr>" +
    "<tr><th>Ósemkowo (8)</th><td>" + wartosc.toString(8) + "</td></tr>" +
    "<tr><th>Szesnastkowo (16)</th><td>" + wartosc.toString(16).toUpperCase() + "</td></tr>";
}

document.getElementById("przyciskLiczby").addEventListener("click", przeliczLiczbe);
przeliczLiczbe();


// ===== QUIZ =====

// wyświetla wszystkie pytania na stronie
function pokazPytania() {
  var html = "";

  for (var i = 0; i < pytania.length; i++) {
    html += "<div class='pytanie' id='pytanie" + i + "'>";
    html += "<p>" + (i + 1) + ". " + pytania[i].tresc.replace(/</g, "&lt;") + "</p>";

    for (var j = 0; j < pytania[i].odpowiedzi.length; j++) {
      html += "<label>";
      html += "<input type='radio' name='p" + i + "' value='" + j + "'> ";
      html += pytania[i].odpowiedzi[j].replace(/</g, "&lt;");
      html += "</label>";
    }

    html += "<div class='ocena'></div>";
    html += "</div>";
  }

  document.getElementById("pytania").innerHTML = html;
}

function sprawdzQuiz() {
  var punkty = 0;
  var bezOdpowiedzi = 0;

  for (var i = 0; i < pytania.length; i++) {
    var zaznaczona = document.querySelector("input[name='p" + i + "']:checked");
    var ocena = document.querySelector("#pytanie" + i + " .ocena");
    var poprawna = pytania[i].odpowiedzi[pytania[i].dobra].replace(/</g, "&lt;");

    if (zaznaczona == null) {
      bezOdpowiedzi++;
      ocena.className = "ocena zle";
      ocena.innerHTML = "Brak odpowiedzi. Poprawna: " + poprawna;
    } else if (Number(zaznaczona.value) == pytania[i].dobra) {
      punkty++;
      ocena.className = "ocena dobrze";
      ocena.innerHTML = "Dobrze!";
    } else {
      ocena.className = "ocena zle";
      ocena.innerHTML = "Źle. Poprawna odpowiedź: " + poprawna;
    }
  }

  var procent = Math.round(punkty / pytania.length * 100);
  var komentarz;
  if (procent >= 90) {
    komentarz = "Świetnie, jesteś gotowy na egzamin!";
  } else if (procent >= 60) {
    komentarz = "Nieźle, ale warto jeszcze powtórzyć kilka tematów.";
  } else {
    komentarz = "Trzeba jeszcze pouczyć się materiału.";
  }

  var wynik = document.getElementById("wynikQuiz");
  wynik.innerHTML = "Twój wynik: <b>" + punkty + " / " + pytania.length + "</b> (" + procent + "%). " + komentarz;
  if (bezOdpowiedzi > 0) {
    wynik.innerHTML += "<br>Pytania bez odpowiedzi: " + bezOdpowiedzi;
  }
}

pokazPytania();
document.getElementById("przyciskQuiz").addEventListener("click", sprawdzQuiz);
