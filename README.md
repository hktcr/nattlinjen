# Nattlinjen

Privat spelprototyp med åtta kapitel och 24 matematiska utmaningar. Alla berättelsepersoner och handlingar är fiktiva. Modellerna är inte verkliga säkerhetsbedömningar.

## Status

Detta är en bevarad B6-baslinje, inte ett godkänt slutligt gränssnitt. B6:s kortbaserade gränssnitt behöver omarbetas. Nytt arbete ska hållas på utvecklingsgren tills det har granskats. Verklig visuell mobil-, touch- och skärmläsarprövning är inte verifierad. DOM-tester är inte visuell eller pedagogisk effektprövning.

Källbaslinje: `deaf84079329563e1dcb5c22677332e86ba6f498`. Runtime och bildfiler är oförändrade. Historiska interna granskningsloggar, användartranskript och Sites-konfiguration ingår inte. Migreringen ändrar inte den befintliga privata Siten och publicerar ingen GitHub Pages-sida.

## Kör lokalt

Kräver Python 3. Ingen kompilering behövs.

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Öppna `http://127.0.0.1:8765`. Sparning sker i webbläsarens localStorage; data delas inte automatiskt mellan olika adresser. Spara inga känsliga uppgifter i spelet.

## Reproducerbara tester

Kräver Node.js 18 eller senare och npm. `jsdom` är låst till 26.1.0.

```sh
npm ci
npm test
```

Testerna omfattar prologens matematik/tillstånd, 24 stödflöden, helskärmslogik med testdubblar, CSS-struktur samt kampanjens scener och tillstånd i jsdom. De startar ingen riktig webbläsare. Genererade testresultat ignoreras av Git. Ingen CI-körning på GitHub är verifierad.

## Valfri statisk byggmapp

```sh
npm run build
```

Det kopierar endast runtime-filer till `dist/`; det publicerar ingenting. Servera projektroten eller `dist/` med valfri statisk server. Inga API-nycklar eller serverhemligheter krävs.
