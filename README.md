## Beskrivande statistik

***
###OBS! OBS! OBS!
- Detta är en **obligatorisk** och **examinerande** uppgift som **du ska lösa helt på egen hand**.
- Du måste göra **regelbundna "commits" och "pushes"** av koden till ditt repositorium för uppgiften för att kursledningen ska kunna följa ditt arbetet med uppgiften.
- Du ska kunna förklara alla konstruktioner och satser som din lösning av uppgiften innehåller.  
***

Beskrivande statistik (eller *deskriptiv statistik*; eng. "*descriptive statistics*") är ett sätt att reducera stora datamängder för att presentera en sammanfattning av datamängden.

Din uppgift är att slutföra implementationen av metoden `analyze(data)` i filen `statistics.js`. Metoden ska reducera datamängden i form av en array med tal (värden av typen `Number`) som skickas till metoden och returnera ett objekt med egenskaper för max- och minvärden, variationsbredd, medelvärde, median samt typvärde, [http://www.matteboken.se/lektioner/matte-1/sannolikhet-och-statistik/medelvarde-median-typvarde-och-variationsbredd](http://www.matteboken.se/lektioner/matte-1/sannolikhet-och-statistik/medelvarde-median-typvarde-och-variationsbredd).

- Anropas metoden med argumentet `[ 4, 8, 2, 4, 5 ]` ska metoden returnera objeket  `{ max: 8, mean: 4.6, median: 4, min: 2, mode: [ 4 ], range: 6 }`.

- Anropas metoden med argumentet `[ 4, 2, 6, 1, 3, 7, 5, 3, 7 ]` ska metoden returnera objeket  `{ max: 7, mean: 4.222222222222222, median: 4, min: 1, mode: [ 3, 7 ], range: 6  }`.

- Anropas metoden med ett argument som inte är en array ska ett undantag av typen `TypeError` kastas. 

- Anropas metoden med ett argument som en tom array ska ett undantag av typen `Error` kastas.

- Argumentet får inte modifieras på något sätt av metoden, d.v.s. arrayen som skickas som argument till metoden ska vara opåverkad efter att metoden returnerat.  

> max (maxvärde), mean (medelvärde), median (median), min (minvärde), mode (typvärde), range (variationsbredd)

Skriva inte all kod som krävs för att lösa problemet i metoden `analyze()`. Se till att dela upp lösning av problemet i lämpliga funktioner du själv skapar och som metoden `analyze()` kan anropa.
