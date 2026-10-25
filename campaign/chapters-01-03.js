'use strict';
(() => {
const chapters = [
  {
    "id": "K01",
    "title": "En lykta utan station",
    "place": "Rännan",
    "intro": [
      "Från verkstadsdörren syns Rännan. På andra sidan vattnet står en färjearbetare vid landfästet. Den fasta linan syns. I förgrunden har Lea lagt sitt hopfällbara verktygsställ på en bänk. Handtaget fälls ned, men spärren stannar halvvägs. Hon provar igen med mindre kraft. Den klickar inte.",
      "Lea: ”Den fungerar när jag visar den för mig själv.”",
      "Amra, från dörren: ”Då får du väl sluta titta.”",
      "Lea: ”Jag har provat.”",
      "Amra: ”Magasinet på andra stranden tömdes i går. Jag lagade den här innan de skickade över den.”",
      "Hon öppnar lådan. Lyktan är lagad med en mörk metallremsa som inte riktigt matchar resten. Under handtaget sitter tre olika verkstadsmärken. Adresskortet är gulnat: ”Station Noll. Till det gemensamma bordet.” Ingen aktuell mottagare eller leveransdag står angiven.",
      "Frågor vid lyktan:\n- ”Var ligger Station Noll?” Amra: ”Det vet jag inte. Kortet är gammalt. Jag känner märket från Kajverkstaden, och de arbetar fortfarande i Sundby.”\n- ”Vem skickade den?” Amra: ”Magasinsförvaltaren. I förteckningen står att den förvarats där sedan den sista verkstadsdagen. Inget namn på mottagaren.”\n- ”Ska vi verkligen lämna den där?” Amra: ”Inte till en adress vi inte har kontrollerat. Vi frågar under materialresan. Annars tar vi hem den.”",
      "Lea visar ett katalogblad: ”Det här märket finns i min gamla katalog också. Verkstadsdagar med handledning. I den nya finns sidan inte kvar.”",
      "Amra: ”Då har vi två frågor. Vem som kan ta emot lyktan, och vem som fortfarande kan ge råd. Inte två svar.”",
      "Journalen: Vi vet att lyktan kommer från det avvecklade magasinet. Det gamla kortet nämner Station Noll. Kajverkstaden har en aktuell adress. Vi vet inte om stationen finns kvar eller vem som kan ta emot lyktan."
    ],
    "tasks": [
      {
        "id": "K01-U01",
        "title": "Tre beställningar",
        "story": [
          "Amra: ”Lyktan får följa med vår vanliga materialtur. Men först måste verkstäderna få rätt beställningar. Här är alla tjugofyra putspaket.”",
          "Lea: ”Och inget av dem ska ner i min verktygslåda. Den är redan full av saker som nästan fungerar.”"
        ],
        "prompt": "Det finns 24 odelbara putspaket. Rännan har beställt 3/8 av alla 24. Kajverkstaden har beställt 1/4 av samma 24. Strandverkstaden ska få resten. Fördela alla paket och kontrollera att varje beställning stämmer.",
        "help": [
          "Vi ska fylla tre beställningar ur samma 24 paket. Börja med Rännan.",
          "Rännan vill ha 3/8 av 24. Kaj vill ha 1/4 av samma 24. Strand får resten.",
          "Här är 24 markörer i åtta lika stora grupper. Räkna hur många paket en grupp innehåller.",
          "Markera tre av de åtta grupperna för Rännan. Hur många åttondelar motsvarar en fjärdedel för Kaj?",
          "Räkna paketen i Rännans markering och skriv antalet. Markera sedan Kajverkstadens andel av den ursprungliga mängden och skriv det antalet.",
          "För återstående paket till Strand och skriv antalet. Addera alla tre mottagarnas antal. Kontrollera både att summan är 24 och att varje beställning fått rätt andel."
        ],
        "after": [
          "Amra: ”Då kan mottagarna känna igen sin beställning utan att behöva räkna om vår röra.”",
          "Lea skriver mottagarnamn på tre buntkort. Journalen får antal och beställningsbevis. Nästa uppgift använder just dessa mängder."
        ],
        "sourceNotes": "manus_R4_01.md K01 U01; manus_R4_10_hjalptext.md K01-U01",
        "explain": [
          {
            "id": "F01",
            "title": "Del av en hel mängd",
            "text": "En bråkdel anger lika stora delar av samma hela mängd. I 2/3 är tre antalet lika delar och två antalet delar vi tar. Om det finns 18 föremål blir en tredjedel 18/3 = 6. Två tredjedelar blir 2 · 6 = 12. Kontrollera vilken hel mängd bråket gäller innan du räknar. Resten är hela mängden minus det som redan fördelats."
          }
        ]
      },
      {
        "id": "K01-U02",
        "title": "Lådorna som faktiskt går att packa",
        "story": [
          "Lea lägger ett paket snett i en transportlåda. Locket går inte ned. Hon vänder paketet och tittar på de två tomma platserna.",
          "Lea: ”Vi kan inte beställa större lådor i efterhand. De här ska med färjan.”",
          "Amra: ”Gör packplanen ovanifrån. Ett lager, inget ovanpå ett annat. Sedan räknar vi lådorna.”"
        ],
        "prompt": "Varje paket är en exakt rektangel 10 × 20 modell-cm. Varje lådas användbara botten är 30 × 20 modell-cm. Packa tre paket i ett lager, helt innanför lådan, utan överlappande inre ytor. Kanter får röra varandra. Paketen ska ligga parallellt med lådans kanter och får vridas ett kvarts varv. Alla lådor till samma mottagare ska använda denna packning. Hur många lådor behövs för Rännans 9, Kajverkstadens 6 och Strandverkstadens 9 paket?",
        "help": [
          "Vi behöver först en packning som ryms. Sedan kan vi räkna lådorna.",
          "Lådan är 30 gånger 20. Paketen är 10 gånger 20. De får vridas, men inte överlappa eller gå utanför.",
          "Se de tre 10 cm breda remsorna som ett möjligt stöd. Du får också hitta en annan giltig packning. Välj ett paket och dess orientering.",
          "Pröva att lägga paketets 20 cm långa sida längs lådans 20 cm långa sida. Hur mycket av bredden använder det då?",
          "Placera första paketet med nedre vänstra hörnet (0,0) och långsidan uppåt om du vill följa denna väg. Placera sedan de andra två. Kontrollera alla kanter och eventuella överlapp.",
          "Packningen rymmer tre paket. Nu byter vi till antal lådor: dela Rännans 9 paket i grupper om 3 och skriv antalet grupper. Gör samma sak för Kajverkstadens 6 och Strands 9. Kontrollera att lådorna innehåller rätt antal paket för varje mottagare."
        ],
        "after": [
          "Amra: ”Tre lådor stannar här i Rännan. Fem går vidare. Lyktan har en egen låda, och de två verktygslådorna är redan märkta. Vår reselast blir åtta lådor.”",
          "Reselast: Kajverkstaden 2 putslådor, hämtas av Jun vid Vågbrottet; Strandverkstaden 3 putslådor; lykta 1; verktygslådor 2. Totalt 8. Rännans 3 lokala lådor ingår inte i reselasten."
        ],
        "sourceNotes": "manus_R4_01.md K01 U02; manus_R4_10_hjalptext.md K01-U02",
        "explain": [
          {
            "id": "F03",
            "title": "Koordinater och rektanglar",
            "text": "I ett koordinatpar (x,y) kommer vågrätt läge först och lodrätt sedan. Här ökar x åt höger och y uppåt. Punkten (2,1) ligger två steg åt höger och ett upp från origo. En rektangel med nedre vänstra hörn (2,1), bredd 3 och höjd 2 når till x=5 och y=3. Två rektanglar får beröra kanter om uppgiften tillåter det, men deras inre ytor får inte ligga ovanpå varandra."
          },
          {
            "id": "F04",
            "title": "Area och omkrets",
            "text": "Area beskriver ytan. En rektangel med sidor 5 m och 2 m har area 5 · 2 = 10 m². Omkrets beskriver ytterkanten: 5 + 2 + 5 + 2 = 14 m. Om du lägger ihop delars areor kan du ändå råka överlappa dem. Därför behöver en packning både rätt yta och en giltig placering."
          }
        ]
      },
      {
        "id": "K01-U03",
        "title": "Avgång utan brådska",
        "story": [
          "Ivo kommer med en anteckningsbok och en karta som fortfarande luktar tryckfärg.",
          "Ivo: ”Färjan avgår tio femton. Jag har skiljt avgången från tiden vi behöver vara där.”",
          "Lea: ”Hur långt före?”",
          "Ivo vänder kortet. ”Det står här. Vi behöver räkna tillbaka hela vägen, inte bara sista promenaden.”",
          "Amra lägger fram den aktuella turlistan. ”Avgång. Nu bestämmer vi när vi börjar, så vi inte behöver springa med lådorna.”"
        ],
        "prompt": "Lokalbåten avgår 10.15. Innan dess behöver laget gå till lastgården, 10 minuter, lämna Rännans lådor, 15 minuter, och gå vidare till bryggan, 20 minuter. Delarna sker i den ordningen och utan överlapp. Laget ska vara på bryggan minst 5 minuter före avgång. Vilken är den senaste starttiden från verkstaden? Visa också ankomsttiden till bryggan.",
        "help": [
          "Vi söker den senaste start som fortfarande ger den begärda marginalen.",
          "Färjan avgår 10.15. Du behöver 5 minuters marginal samt delarna 10 minuter, 15 minuter och 20 minuter.",
          "På tidsremsan finns avgången och tomma block för delarna. Börja vid avgången och lägg marginalen före den.",
          "Räkna bakåt: först marginalen, sedan sista promenaden, överlämningen och första promenaden.",
          "Skriv senaste tid vid bryggan efter att marginalen dragits bort. Dra därefter bort varje deltid, en i taget.",
          "Skriv starttiden. Kontrollera genom att gå framåt från den tiden genom alla tre delarna. Slutar du vid bryggan med minst 5 minuter kvar, och skulle en senare start bryta marginalen?"
        ],
        "after": [
          "Ivo: ”Jag skriver både avgång och vår ankomst. Två ord kostar mindre än en missad båt.”",
          "Lea ställer sitt verktygsställ i den egna väskan. Hon stoppar inte ned det i en godslåda. Amra: ”Fråga Kajverkstaden om märket. Och om ingen vet, så skriv det också.”"
        ],
        "sourceNotes": "manus_R4_01.md K01 U03; manus_R4_10_hjalptext.md K01-U03",
        "explain": [
          {
            "id": "F06",
            "title": "Klocka och villkorad tid",
            "text": "En timme är 60 minuter. 1,25 timmar är 1 timme och 0,25 · 60 = 15 minuter. Det är inte 1 timme och 25 minuter. När en resa har väntan läggs den tiden också till. Om en båt går klockan 10.00 men du når bryggan 10.05 kan du inte använda den avgången i planen. En beräknad ankomst gäller bara modellens villkor."
          }
        ]
      }
    ],
    "outro": [
      "På lokalbåten håller Ivo upp kartan. En liten symbol vid Vågbrottet bär texten Station Noll. I ortförteckningen finns ingen sådan rad. Ivo: ”Den finns här. Och inte här.” Lea: ”Vi börjar med någon som vet hur kartan blev till.”",
      "Båten går mot Lindvik, en redan planerad omlastningsplats på materialresan. Åtta reselådor följer med."
    ]
  },
  {
    "id": "K02",
    "title": "Kartan som lovade för mycket",
    "place": "Lindvik",
    "intro": [
      "Lindvik ligger i en sluttning. Ateljéns stora dörr står öppen mot lastgården. På ett bord ligger en gammal originalkarta; på ett annat ligger Ivos renritade arbetskopia. Oda slipar en penna med kniv men lägger undan den när laget kommer.",
      "Ivo lägger två daterade blad bredvid varandra. ”Boden står här på det äldre och här på det nyare. Det är inte strandlinjen som har flyttat.”",
      "Oda: ”Du hittade flyttnoteringen.”",
      "Ivo: ”På baksidan. Jag tog med den också.”",
      "Han vänder upp båda sidornas uppgifter så laget kan se sambandet. Oda nickar och flyttar undan sin tomma kopieringsram.",
      "Laget visar kortet till Station Noll. Oda: ”Symbolen finns på mitt original, men jag har inte varit där. Mina underlag kom från arbetskajens ritningar. Jag kan hjälpa er skilja det jag ritade från det jag bara fick uppgift om.”",
      "Hon pekar ut två samtidiga behov. Materialet måste föras genom lastgården till den båt som går vidare till Sundby. Och den skadade kartkopian behöver kompletteras från originalet innan laget använder den för att tolka lyktans adress. Hon erbjuder tillgång till originalet nu; hon kräver inga uppgifter som betalning för information."
    ],
    "tasks": [
      {
        "id": "K02-U01",
        "title": "Vägen genom lastgården",
        "story": [
          "Gårdsarbetaren rullar fram en skyddspappsrulle märkt 20 m. Golvet i den täckta lastgården har nyligen ytbehandlats och den av de två tillåtna bärgångarna som laget använder ska skyddas där vagnen rullar.",
          "Oda: ”Vi behöver täcka hela den väg vi väljer med den här rullen. Båda gångarna är lika breda som pappen; inga överlapp eller ändtillägg behövs i räkneplanen. Vi har tjugo meter. Vilken väg räcker den till?”",
          "En vuxen har redan bedömt gångarna som lämpliga. Du beräknar bara täcklängd, inte golvets torktid eller säkerhet."
        ],
        "prompt": "Två godkända vägar går mellan samma lastplatser. På modellkartan är väg A 3,0 modell-cm och väg B 4,8 modell-cm. Skalan är 1:500. Rullen innehåller 20 m skyddspapp och hela vald gång ska täckas. Ingen längd förloras i skarvar i modellen. Hur lång är varje väg i modellens verklighetsmått? Välj en väg som uppfyller villkoret.",
        "help": [
          "Vi ska välja en gång som hela pappsrullen räcker till.",
          "Rullen är 20 m. Kartans vägar är 3,0 och 4,8 modell-cm i skala 1:500.",
          "Fyll omvandlingsraden modell-cm, centimeter och meter. Enheterna hjälper dig att hålla isär stegen.",
          "Multiplicera varje kartmått med 500 för att få centimeter. Dela sedan med 100 för att få meter.",
          "Pröva först sambandet på en separat 2 cm-sträcka: hur många centimeter och meter blir det? Använd sedan samma metod på väg A och B.",
          "Skriv båda verkliga längderna. Jämför var och en med 20 m. Välj en väg som kan täckas helt utan att lägga till papp som inte finns."
        ],
        "after": [
          "15 m skyddspapp läggs längs A och 5 m blir kvar på rullen. En vuxen ordnar utläggningen. Ivo skriver 5 m vid skalstrecket och viker kartan så skalan förblir synlig."
        ],
        "sourceNotes": "manus_R4_02.md K02 U01; manus_R4_10_hjalptext.md K02-U01",
        "explain": [
          {
            "id": "F02",
            "title": "Skala och enhet",
            "text": "Skala 1:100 betyder att en längd i modellen motsvarar 100 gånger samma längdenhet i föremålet. 2 cm på en sådan ritning motsvarar 200 cm, alltså 2 m. Multiplikationen byter inte enhet av sig själv. Hundra centimeter är en meter. Om du jämför två kartor använder du varje kartas egen skala. Likadana beräknade längder visar förenlighet, inte ensamma att dokumenten handlar om samma plats."
          }
        ]
      },
      {
        "id": "K02-U02",
        "title": "Hitta rätt hylla utan att flytta lagret",
        "story": [
          "På lastgården finns flera likadana förrådsplatser. Gårdsarbetaren ger laget ett positionskort för vagnens remmar. Kortet beskriver vägen till utrustningen.",
          "Gårdsarbetaren: ”Börja vid grinden här. Remstället ligger fyra rutor åt höger och tre upp på översikten. Ni kan gå runt hyllorna från båda håll. Välj den väg ni vill använda.”"
        ],
        "prompt": "Rutnätets x-axel går åt höger och y-axeln uppåt. Varje steg mellan intilliggande punkter är 1 modell-m. Grinden är G=(0,0). Målet ligger 4 steg åt höger och 3 steg uppåt från G. Markera målets koordinater och för laget dit längs en av de två öppna gångarna: väg C via (4,0) eller väg D via (0,3). Markera den gång du använder och ange dess längd. Du behöver inte beräkna den andra gången för att hämta remmarna.",
        "help": [
          "Vi ska hitta målplatsen och faktiskt välja en öppen gång dit.",
          "Starten är (0,0). Målet ligger fyra steg åt höger och tre upp. x kommer först, y sedan.",
          "På rutnätet visar det separata exemplet (2,1) två steg åt höger och ett upp. Markera nu uppgiftens mål, inte exemplet.",
          "Utgå från grinden. Följ uppgiftens fyra högersteg och tre uppåtsteg och läs slutpunktens koordinater.",
          "Välj väg C via (4,0) eller väg D via (0,3). Markera start, mellanpunkt och mål i den ordningen.",
          "Räkna längden på de två delarna av din valda gång och addera dem. Skriv längden och använd vägen för att gå till remstället. Du behöver inte räkna en extra väg för att hämta remmarna."
        ],
        "after": [
          "Vid den valda målpunkten hämtar Lea remmarna med gårdsarbetaren. ”Här var de. Vi tar tillbaka dem med vagnen”, säger hon.",
          "Remmarna läggs i vagnens fasta utrustning. Den valda vägen bevaras på kartan."
        ],
        "sourceNotes": "manus_R4_02.md K02 U02; manus_R4_10_hjalptext.md K02-U02",
        "explain": [
          {
            "id": "F03",
            "title": "Koordinater och rektanglar",
            "text": "I ett koordinatpar (x,y) kommer vågrätt läge först och lodrätt sedan. Här ökar x åt höger och y uppåt. Punkten (2,1) ligger två steg åt höger och ett upp från origo. En rektangel med nedre vänstra hörn (2,1), bredd 3 och höjd 2 når till x=5 och y=3. Två rektanglar får beröra kanter om uppgiften tillåter det, men deras inre ytor får inte ligga ovanpå varandra."
          }
        ]
      },
      {
        "id": "K02-U03",
        "title": "Två kartor av samma sträcka",
        "story": [
          "Tillbaka vid kartbordet lägger Ivo sin kopia på originalet. Strandlinjerna möts inte.",
          "Ivo markerar ateljén och bryggan på båda bladen. ”Samma platser, olika skalor. Vi ska förstora kopian om vi vill föra över originalets ram på rätt plats.”",
          "Oda lägger fram ett genomskinligt kopieringsark. ”Då behöver vi en faktor och en kontroll av måtten.”",
          "Under originalets stationssymbol finns en liten ram för datum och tid. På kopian finns bara symbolen. De namngivna punkterna på kartorna är samma platser.",
          "”Kan vi få arbetskajsritningarna nu?” Oda: ”Ja. Här är de. Jag visar vilket blad som är källan till symbolen.”"
        ],
        "prompt": "På originalkarta O är samma markerade sträcka 7,5 modell-cm i skala 1:200. På kopia K är den 3,0 modell-cm i skala 1:500. Beräkna sträckans längd i meter från vardera karta. Kan båda kartorna visa samma sträcka? Ange längdfaktorn för att förstora K så att markeringen får samma längd som på O. Välj därefter vilken observation som säkert kan föras till journalen: 1. Station Noll är en permanent ö. 2. Originalets stationssymbol har ett datum-/tidsfält som saknas på kopian. 3. Station Noll har aldrig funnits.",
        "help": [
          "Vi ska göra kopians markering lika lång som originalets för att kunna föra över ramen.",
          "O har 7,5 cm i skala 1:200. K har 3,0 cm i skala 1:500. Använd rätt skala för varje blad.",
          "Fyll en rad för O och en för K: kartmått, skalfaktor, verkliga centimeter och verkliga meter.",
          "Kontrollera först att beräkningarna är förenliga med samma verkliga längd. Beräkna därefter O:s kartlängd delad med K:s kartlängd för förstoringens faktor.",
          "Multiplicera 7,5 med 200 och byt enhet till meter. Gör sedan motsvarande med 3,0 och 500. Skriv båda resultaten.",
          "Skriv längdfaktorn O/K och kontrollera att den förstorar K, inte krymper det. Välj sedan journalobservationen som beskriver det synliga datumfältet. Längdlikheten ensam bevisar inte vad stationen var."
        ],
        "after": [
          "Ivo: ”Jag tog bort fältet när jag renritade. Jag trodde det var tomt och onödigt.”",
          "Oda: ”Nu kan du lägga tillbaka det och skriva vad du inte vet. Det är bättre än en prydlig gissning.”",
          "”En kaj kan också ha öppettider.” Oda: ”Ja. Tidsfältet räcker inte för att välja mellan en fast plats och något tillfälligt.”",
          "”Kan stationen ha flyttat?” Oda: ”Det är en möjlig fråga. Arbetskajens ritningar kan visa mer än den här symbolen.”",
          "Kopieringsarket används för att återföra ramen till rätt läge på arbetskopian. Ivo skriver ”tid okänd”. Journalen skiljer observationen från en ännu obekräftad hypotes. Arbetskajsritningarna finns med."
        ],
        "sourceNotes": "manus_R4_02.md K02 U03; manus_R4_10_hjalptext.md K02-U03",
        "explain": [
          {
            "id": "F02",
            "title": "Skala och enhet",
            "text": "Skala 1:100 betyder att en längd i modellen motsvarar 100 gånger samma längdenhet i föremålet. 2 cm på en sådan ritning motsvarar 200 cm, alltså 2 m. Multiplikationen byter inte enhet av sig själv. Hundra centimeter är en meter. Om du jämför två kartor använder du varje kartas egen skala. Likadana beräknade längder visar förenlighet, inte ensamma att dokumenten handlar om samma plats."
          }
        ]
      }
    ],
    "outro": [
      "Materialresan går vidare till Sundby, där färjan mot Vågbrottet och Lervik avgår. De åtta reselådorna, vagnens remmar och den kompletterade kartan följer med."
    ]
  },
  {
    "id": "K03",
    "title": "Två färjor ett val",
    "place": "Sundby",
    "intro": [
      "Sundby har två färjelägen bredvid varandra. Selas färja A har en bred lastlucka. Bos färja B har ett mindre däck men plats för dagens last. Båda färjeägarna hjälper sina passagerare.",
      "Bo: ”Åtta lådor? Ja, de ryms. Vågbrottet är på vår vanliga tur.”",
      "Sela: ”Min tur går också dit. Jämför hela priset. Inte bara den stora siffran överst.”",
      "Lea: ”Det var ovanligt hjälpsamt sagt av någon som vill sälja en resa.”",
      "Sela: ”Jag vill att folk kommer tillbaka.”",
      "Laget lämnar inte Kajverkstadens material här ännu. Verkstadens beställning ska med till ett gemensamt arbetsärende vid Vågbrottet och mottagaren möter dem där. Det står på det ursprungliga buntkortet. Sundby är färjeplatsen, inte leveranspunkten. Alla åtta reselådor är därför fortfarande med.",
      "Kajverkstadens representant Jun visar sitt arbetskort: ”Vi har de här verktygen, men ingen plats att visa arbetet för nya lärlingar. Jag ska se över vår gamla märkta däckdel vid Vågbrottet. Ni får följa med och se ritningarna medan vi kontrollerar vår utrustning.”"
    ],
    "tasks": [
      {
        "id": "K03-U01",
        "title": "Vad resan kostar",
        "story": [
          "Sela: ”Jag har en större grundkostnad och lägre pris per låda. Bo har tvärtom. Vi har skrivit allt på tavlorna.”"
        ],
        "prompt": "Dagens last är 8 lådor. Färja A kostar 120 mynt plus 8 mynt för varje låda. Färja B kostar 30 mynt plus 14 mynt för varje låda. Båda kan ta hela lasten till samma plats; alla andra villkor i denna jämförelse är lika. Alla avgifter ingår. Beräkna båda totalpriserna, välj lägsta kostnaden och ange skillnaden.",
        "help": [
          "Vi ska jämföra hela priset för just dagens åtta lådor.",
          "A har 120 i grundkostnad och 8 per låda. B har 30 i grundkostnad och 14 per låda.",
          "Använd två rader med grundkostnad, antal, pris per låda och total. Lägg inte grundkostnaden i varje låda.",
          "Multiplicera lådantal med lådpris och lägg till grundkostnaden, för båda färjorna.",
          "Skriv en färjas lådavgift först och lägg sedan till dess grundkostnad. Upprepa för den andra.",
          "Välj det lägre totalpriset. Dra det lägre från det högre och skriv hur många mynt billigare valet är. Kontrollera att du jämför samma åtta lådor."
        ],
        "after": [
          "Bo: ”Då tar vi lasten. Sela får den stora lasten nästa gång om den passar hennes pris bättre.”"
        ],
        "sourceNotes": "manus_R4_03.md K03 U01; manus_R4_10_hjalptext.md K03-U01",
        "explain": [
          {
            "id": "F05",
            "title": "Decimaler, enhetspris och hela förpackningar",
            "text": "Ett enhetspris eller en förbrukning anger mängd för en enhet. Om 10 m² behöver 0,2 liter per m² blir mängden 10 · 0,2 = 2 liter. Om burkarna är 1,5 liter räcker en burk inte, men två ger 3 liter. Minsta hela antal är två och 1 liter blir över i modellen. Avrunda inte förbrukningen först och låtsas att det är samma mängd."
          }
        ]
      },
      {
        "id": "K03-U02",
        "title": "Lasten på modellen",
        "story": [
          "Bo har redan bekräftat att båten kan transportera lasten. Han ansvarar för verklig lastning och säkerhet. Du får göra en ovanifrånplan som håller de två lådorna med ömtåliga mätverktyg åtkomliga vid nästa stopp. Det är ett arbetsordningsproblem, inte ett stabilitetsprov för en båt.",
          "Bo: ”Jag sköter förtöjning och vikt. På den här modellen behöver vi bara se vilka lådor vi kommer åt först. De med M ska vara närmast luckan.”",
          "Bo visar verktygslådornas utfällbara sidobrickor: ”Vi öppnar en verktygslåda åt gången. De andra låga lådorna ryms under brickan, men lyktans höga låda gör det inte. Rita den därför inte precis vid en sida av en verktygslåda.” Planmodellen anger att en utfälld bricka täcker den sidoangränsande cellens inre men inte en hörncell. Bo kontrollerar den verkliga passningen; modellen är ett förenklat åtkomstunderlag."
        ],
        "prompt": "Modellens lastyta har 4 kolumner och 2 rader med lika stora platser. Varje låda upptar exakt en plats. Luckan ligger längs hela den nedre kanten; raden närmast den heter rad 1, den bortre rad 2. Kolumnerna heter 1–4 från vänster. Placera alla åtta lådor en gång vardera: M1, M2, L, K1, K2, S1, S2, S3. M1 och M2 ska ligga i rad 1. Lyktlådan L ska inte ha gemensam sida med M1 eller M2. Hörnkontakt är tillåten. De övriga lådorna får ligga på valfri ledig plats. Inga lådor staplas.",
        "help": [
          "Börja med lådorna som har särskilda villkor: M1, M2 och L.",
          "M1 och M2 ska stå i främre raden. Den höga L-lådan får inte stå i en sidoangränsande cell till någon M-låda, där sidobrickan behöver plats.",
          "Välj en cell och läs vilka celler som delar sida med den. Hörnceller listas separat och räknas inte som sidogrannar.",
          "Pröva två M-platser i främre raden. Vilka platser återstår för L utan gemensam sida med någon av dem?",
          "Om du vill följa en konkret start, placera M1 i (1,1). Välj själv M2:s plats och markera sidogrannarna till båda.",
          "Placera L på en tillåten ledig plats. Fyll övriga platser med K1, K2, S1, S2 och S3. Kontrollera att varje ID finns exakt en gång. Om en tillåten L-plats redan upptas av en annan låda, flytta den andra lådan till en ledig plats eller välj ett uttryckligt byte. Hjälpen visar vilka verkliga celler som är tillåtna och vilka som är upptagna."
        ],
        "after": [
          "Lea: ”Nu ser jag vilken låda jag inte ska ställa mig framför.”",
          "Bo lastar enligt arbetsordningen efter sin egen säkerhetskontroll."
        ],
        "sourceNotes": "manus_R4_03.md K03 U02; manus_R4_10_hjalptext.md K03-U02",
        "explain": [
          {
            "id": "F03",
            "title": "Koordinater och rektanglar",
            "text": "I ett koordinatpar (x,y) kommer vågrätt läge först och lodrätt sedan. Här ökar x åt höger och y uppåt. Punkten (2,1) ligger två steg åt höger och ett upp från origo. En rektangel med nedre vänstra hörn (2,1), bredd 3 och höjd 2 når till x=5 och y=3. Två rektanglar får beröra kanter om uppgiften tillåter det, men deras inre ytor får inte ligga ovanpå varandra."
          }
        ]
      },
      {
        "id": "K03-U03",
        "title": "Ett rimligt ankomstbesked",
        "story": [
          "Jun skickar ett arbetsbud till kollegan vid Vågbrottet. Han vill ge ett planerat klockslag men inte lova att väder och lastning alltid följer en skolmodell.",
          "Jun: ”Skriv vad vår plan säger och vad den bygger på. Inte bara en säker tid.”",
          "Bo lägger fram ett färdkort: ”För just räkneplanen använder vi tolv kilometer och åtta kilometer i timmen. Jag avgör sedan hur vi faktiskt kör.”"
        ],
        "prompt": "Den planerade sträckan är 12 km. I modellen håller båten konstant 8 km/h hela sträckan, utan stopp. Avgången i planen är 12.00. Beräkna restiden i timmar samt minuter och det planerade ankomstklockslaget.",
        "help": [
          "Vi behöver restid och ett besked som inte lovar mer än modellen visar.",
          "Sträckan är 12 km, hastigheten 8 km/h, starten 12.00 och modellen har inga stopp.",
          "På sträckremsan motsvarar första 8 km en timme. Markera den återstående delen av 12 km.",
          "Dela sträckan med hastigheten för tid i timmar. Gör sedan om timdelen till minuter.",
          "Räkna först en hel timme och därefter hur stor del av en timme den återstående sträckan kräver. Omvandla med 60 minuter per timme.",
          "Skriv tiden i timmar och minuter. Lägg minuterna till 12.00 och skriv ankomst. Välj budtexten som uttryckligen behåller modellens villkor."
        ],
        "after": [
          "Jun läser det färdiga budet och nickar. ”Det där går att arbeta efter. Om planen ändras skickar vi ett nytt besked.”",
          "Under färden visar Lea den kärvande spärren för Jun. Han provar den försiktigt, lämnar tillbaka den och säger: ”Den går fri när den är öppen. När du fäller ihop den flyttar sig hålet.”",
          "Lea ritar två lägen i sin bok. Hon har fått en observation, inte en färdig reparation."
        ],
        "sourceNotes": "manus_R4_03.md K03 U03; manus_R4_10_hjalptext.md K03-U03",
        "explain": [
          {
            "id": "F06",
            "title": "Klocka och villkorad tid",
            "text": "En timme är 60 minuter. 1,25 timmar är 1 timme och 0,25 · 60 = 15 minuter. Det är inte 1 timme och 25 minuter. När en resa har väntan läggs den tiden också till. Om en båt går klockan 10.00 men du når bryggan 10.05 kan du inte använda den avgången i planen. En beräknad ankomst gäller bara modellens villkor."
          }
        ]
      }
    ],
    "outro": [
      "Vågbrottets låga skydd syns. Ivo jämför med symbolen på kartan. ”Jag väntade mig något högre.” Lea: ”Det kanske är på andra sidan.”",
      "Kajens öppna yta ligger framför dem. Alla åtta lådor finns ännu med. K1 och K2 ska lämnas till Jun vid ankomsten."
    ]
  }
];
const task=id=>chapters.flatMap(c=>c.tasks).find(t=>t.id===id);
const num=(id,label,unit)=>({id,label,type:'number',unit,step:'any'});
const sel=(id,label,options)=>({id,label,type:'select',options:options.map(x=>typeof x==='string'?{value:x,label:x}:x)});
const time=(id,label)=>({id,label,type:'time'});
const fail=(message,field)=>({ok:false,message,field});
const pass=()=>({ok:true,message:'Alla delar uppfyller villkoren. Välj Använd min lösning.'});
const example=(answers,ok=true)=>({answers,ok});
// Exact decimal/fraction coordinates: SVG rounding must never affect acceptance.
const packRational=value=>{
 const text=String(value??'').trim().replace(',','.');
 const decimal=v=>{const m=/^([+-]?)(?:(\d+)(?:\.(\d*))?|\.(\d+))$/.exec(v);if(!m)return null;const frac=m[3]??m[4]??'';return [BigInt((m[1]==='-'?'-':'')+(m[2]||'0')+frac),10n**BigInt(frac.length)];};
 const parts=text.split('/');if(parts.length>2)return null;let a=decimal(parts[0]);if(!a)return null;if(parts.length===2){const b=decimal(parts[1]);if(!b||b[0]===0n)return null;a=[a[0]*b[1],a[1]*b[0]];}return a[1]<0n?[-a[0],-a[1]]:a;
};
const packQ=n=>[BigInt(n),1n],packAdd=(a,b)=>[a[0]*b[1]+b[0]*a[1],a[1]*b[1]],packLt=(a,b)=>a[0]*b[1]<b[0]*a[1],packEq=(a,b)=>a[0]*b[1]===b[0]*a[1];
const packText=a=>a[0]%a[1]===0n?String(a[0]/a[1]):`${a[0]}/${a[1]}`;

const strings=o=>Object.fromEntries(Object.entries(o).map(([k,v])=>[k,String(v)]));
function exact(a,expected){for(const [k,v,msg] of expected){if(N(a[k])!==v)return fail(msg,k);}return null;}
function svg(w,h,body){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 ${w+8} ${h+10}" role="img" aria-label="Modell av din placering"><rect x="0" y="0" width="${w}" height="${h}" fill="#f5f1de" stroke="#263c45" stroke-width=".25"/>${body}</svg>`;}
{
const t=task('K01-U01');t.fields=[num('rannan','Rännan','paket'),num('kaj','Kajverkstaden','paket'),num('strand','Strandverkstaden','paket')];
t.validate=a=>{const v=t.fields.map(f=>N(a[f.id]));for(let i=0;i<3;i++)if(v[i]===null||!Number.isInteger(v[i])||v[i]<0||v[i]>24)return fail('Ange ett helt antal odelbara paket mellan 0 och 24.',t.fields[i].id);const sum=v.reduce((a,b)=>a+b,0);if(sum!==24)return fail(`Dina lådor innehåller tillsammans ${sum} paket. Vi har 24. Vilka paket saknas eller har räknats två gånger?`);return exact(a,[['rannan',9,'Rännans beställning är tre åttondelar av hela mängden. Kontrollera hur många som finns i en åttondel.'],['kaj',6,'Kajverkstadens fjärdedel gäller också de första 24, inte det som ligger kvar efter Rännan.'],['strand',9,'Strandverkstaden ska få resten av de ursprungliga 24.']])||pass();};
t.examples=[example({rannan:'9',kaj:'6',strand:'9'}),example({rannan:'9,0',kaj:'6.00',strand:'9.0'}),example({rannan:'8',kaj:'8',strand:'8'},false),example({rannan:'9',kaj:'6',strand:'8'},false)];
}
{
const t=task('K01-U02');t.prompt+=' Origo är nedre vänstra hörnet. x går åt höger (0–30), y uppåt (0–20). Orientering 0: bredd 10, höjd 20. Orientering 90: bredd 20, höjd 10.';
t.fields=[1,2,3].flatMap(i=>[num(`p${i}x`,`Paket ${i}: x`,'modell-cm'),num(`p${i}y`,`Paket ${i}: y`,'modell-cm'),sel(`p${i}o`,`Paket ${i}: orientering`,[{value:'0',label:'0°: bredd 10, höjd 20'},{value:'90',label:'90°: bredd 20, höjd 10'}])]).concat([num('rannan','Rännan','lådor'),num('kaj','Kajverkstaden','lådor'),num('strand','Strandverkstaden','lådor'),num('total','Alla putslådor','lådor')]);
const rects=a=>[1,2,3].map(i=>{let x=N(a[`p${i}x`]),y=N(a[`p${i}y`]),o=N(a[`p${i}o`]);return {i,x,y,o,w:o===0?10:20,h:o===0?20:10};});
t.validate=a=>{const rs=[];for(const i of [1,2,3]){const x=packRational(a[`p${i}x`]),y=packRational(a[`p${i}y`]),o=packRational(a[`p${i}o`]);if(!x||!y||!o||(!packEq(o,packQ(0))&&!packEq(o,packQ(90))))return fail(`Fyll paket ${i}:s båda koordinater och orientering.`,`p${i}x`);const horizontal=packEq(o,packQ(90));const r={i,x,y,right:packAdd(x,packQ(horizontal?20:10)),top:packAdd(y,packQ(horizontal?10:20))};for(const [bad,msg,field] of [[packLt(x,packQ(0)),`vänsterkant x = ${packText(x)} ligger under 0`,'x'],[packLt(packQ(30),r.right),`högerkant x = ${packText(r.right)} ligger över 30`,'x'],[packLt(y,packQ(0)),`nederkant y = ${packText(y)} ligger under 0`,'y'],[packLt(packQ(20),r.top),`överkant y = ${packText(r.top)} ligger över 20`,'y']])if(bad)return fail(`Paket ${i}:s ${msg}.`,`p${i}${field}`);rs.push(r);}
for(let i=0;i<3;i++)for(let j=i+1;j<3;j++){const r=rs[i],s=rs[j];if(packLt(r.x,s.right)&&packLt(s.x,r.right)&&packLt(r.y,s.top)&&packLt(s.y,r.top))return fail(`Paket ${r.i} och ${s.i} använder samma del av bottnen. Välj ett av dem och flytta det.`);}
for(const [id,label,n] of [['rannan','Rännan',9],['kaj','Kajverkstaden',6],['strand','Strandverkstaden',9]]){let v=N(a[id]);if(v===null||!Number.isInteger(v)||v<0)return fail('Ange ett helt antal lådor.',id);if(v*3!==n)return fail(`${label} ska ha ${n} paket. Dina ${v} lådor med tre i varje ger ${v*3}.`,id);}
if(N(a.total)!==8)return fail('Addera alla tre mottagarnas antal putslådor. Detta är inte samma lista som reselasten.','total');return pass();};
t.diagram=a=>svg(30,20,rects(a).filter(r=>r.x!==null&&r.y!==null&&[0,90].includes(r.o)&&Math.abs(r.x)<1000&&Math.abs(r.y)<1000).map(r=>`<rect x="${r.x}" y="${20-r.y-r.h}" width="${r.w}" height="${r.h}" fill="#8dc7c2" fill-opacity=".6" stroke="#164d56" stroke-width=".3"/><text x="${r.x+r.w/2}" y="${20-r.y-r.h/2}" text-anchor="middle" font-size="2">P${r.i}</text>`).join('')+'<text x="0" y="23" font-size="2">x: 0–30 • y: 0–20 modell-cm</text>');
const a=strings({p1x:0,p1y:0,p1o:0,p2x:10,p2y:0,p2o:0,p3x:20,p3y:0,p3o:0,rannan:3,kaj:2,strand:3,total:8});const b={...a,p1o:'90',p2x:'0',p2y:'10',p2o:'90'};
t.examples=[example(a),example(b),example({...a,p3x:'20.0001'},false),example({...a,p3x:'20.000000000000000000001'},false),example({...a,p2x:'9.999999999999999999999'},false),example({...a,p1y:'-0.000000000000000000001'},false),example({...a,p1o:'0.000000000000000000001'},false),example({...a,p2x:'9'},false),example({...a,rannan:'2'},false)];
}
{
const t=task('K01-U03');t.fields=[time('start','Senaste start från verkstaden'),time('arrival','Ankomst till bryggan')];t.validate=a=>{const s=T(a.start),v=T(a.arrival);if(s===null)return fail('Skriv start som klockslag, till exempel HH:MM. Decimaltimmar är inte klockslag.','start');if(v===null)return fail('Ange ett giltigt ankomstklockslag.','arrival');if(s<565)return fail('Den starten kan ge mer marginal, men frågan gäller den senaste möjliga starten.','start');if(s>565)return fail(`Resan tar 45 minuter. Med den starten blir marginalen mindre än fem minuter.`,'start');if(v!==s+45)return fail('Gå framåt från starten genom 10, 15 och 20 minuter.','arrival');return pass();};t.examples=[example({start:'09:25',arrival:'10:10'}),example({start:'9.25',arrival:'10.10'}),example({start:'09:20',arrival:'10:05'},false),example({start:'09:30',arrival:'10:15'},false)];
}
{
const t=task('K02-U01');t.fields=[num('a','Väg A:s verkliga längd'),sel('aUnit','Enhet för A',['m','cm']),num('b','Väg B:s verkliga längd'),sel('bUnit','Enhet för B',['m','cm']),sel('route','Vald väg',['A','B'])];t.validate=a=>{for(const [id,n] of [['a',15],['b',24]]){if(!['m','cm'].includes(a[id+'Unit']))return fail('Välj längdenhet.',id+'Unit');if(N(a[id])===null||N(a[id])/(a[id+'Unit']==='cm'?100:1)!==n)return fail('Multiplicera kartlängden med 500. Enheten är då centimeter. Kontrollera sedan enhetsbytet.',id);}if(a.route!=='A')return fail('B är 24 m. Planens högsta längd är 20 m. Vilken väg kan täckas helt?','route');return pass();};t.examples=[example({a:'15',aUnit:'m',b:'24',bUnit:'m',route:'A'}),example({a:'1500',aUnit:'cm',b:'2400',bUnit:'cm',route:'A'}),example({a:'1500',aUnit:'m',b:'24',bUnit:'m',route:'A'},false),example({a:'15',aUnit:'m',b:'24',bUnit:'m',route:'B'},false)];
}
{
const t=task('K02-U02');t.fields=[num('x','Målets x-koordinat'),num('y','Målets y-koordinat'),sel('route','Välj och använd gång',[{value:'C',label:'C: (0,0) → (4,0) → ditt mål'},{value:'D',label:'D: (0,0) → (0,3) → ditt mål'}]),num('length','Den valda gångens längd','modell-m')];t.validate=a=>exact(a,[['x',4,'Första talet anger steg åt höger från grinden.'],['y',3,'Andra talet anger steg uppåt.'],['length',7,'De öppna gångarna går längs två sidor, inte på diagonalen. Lägg ihop din valda gångs två delar.']])||(!['C','D'].includes(a.route)?fail('Välj en av de två öppna gångarna.','route'):pass());t.examples=['C','D'].map(route=>example({x:'4',y:'3',route,length:'7'})).concat([example({x:'3',y:'4',route:'C',length:'7'},false),example({x:'4',y:'3',route:'D',length:'5'},false)]);
t.diagram=a=>{const x=N(a.x),y=N(a.y);let b='';for(let i=0;i<=5;i++)b+=`<path d="M${i*10} 0V50 M0 ${i*10}H50" stroke="#bbc7c9" stroke-width=".3"/><text x="${i*10}" y="53" font-size="2">${i}</text><text x="-3" y="${50-i*10}" font-size="2">${i}</text>`;b+='<text x="0" y="57" font-size="2">Grind G=(0,0). x åt höger, y uppåt.</text>';if(x!==null&&y!==null&&x>=0&&x<=5&&y>=0&&y<=5){const via=a.route==='C'?'40,50':a.route==='D'?'0,20':null;if(via)b+=`<polyline points="0,50 ${via} ${x*10},${50-y*10}" fill="none" stroke="#146976" stroke-width="1"/>`;b+=`<circle cx="${x*10}" cy="${50-y*10}" r="1.4" fill="#9d3d39"/>`;}return svg(50,50,b);};
}
{
const t=task('K02-U03');t.fields=[num('o','Längd från original O','m'),num('k','Längd från kopia K','m'),sel('same','Är samma verkliga längd förenlig med båda?',[{value:'yes',label:'Ja'},{value:'no',label:'Nej'}]),num('factor','Förstoringsfaktor O/K'),sel('observation','Belagd journalobservation',[{value:'1',label:'Station Noll är en permanent ö.'},{value:'2',label:'Originalets stationssymbol har ett datum-/tidsfält som saknas på kopian.'},{value:'3',label:'Station Noll har aldrig funnits.'}])];t.validate=a=>exact(a,[['o',15,'Använd O:s egen skala 1:200 och byt centimeter till meter.'],['k',15,'Använd K:s egen skala 1:500 och byt centimeter till meter.'],['factor',2.5,'Jämför originalets markering med kopians: O/K. Faktorn ska förstora K.']])||(a.same!=='yes'?fail('Jämför de två beräknade verkliga längderna.','same'):a.observation!=='2'?fail('Det synliga fältet visar en skillnad mellan dokumenten. Det berättar inte ensamt om stationen är en ö eller aldrig funnits.','observation'):pass());const a={o:'15',k:'15',same:'yes',factor:'2,5',observation:'2'};t.examples=[example(a),example({...a,factor:'2.50',o:'15,0'}),example({...a,factor:'0.4'},false),example({...a,observation:'1'},false)];
}
{
const t=task('K03-U01');t.fields=[num('a','Färja A totalt','mynt'),num('b','Färja B totalt','mynt'),sel('choice','Billigast för åtta lådor',['A','B']),num('difference','Hur många mynt billigare?','mynt')];t.table={headers:['Färja','Grundkostnad','Antal lådor','Pris per låda'],rows:[['A','120 mynt','8','8 mynt'],['B','30 mynt','8','14 mynt']]};t.validate=a=>exact(a,[['a',184,'A:s lådavgifter ska läggas till grundkostnaden 120 en gång.'],['b',142,'B:s åtta lådavgifter ska läggas till grundkostnaden 30 en gång.'],['difference',42,'Ange det positiva avståndet mellan de två totalpriserna.']])||(a.choice!=='B'?fail('Jämför hela priset för just åtta lådor, inte bara lådpriset.','choice'):pass());const a={a:'184',b:'142',choice:'B',difference:'42'};t.examples=[example(a),example({...a,a:'184,0',difference:'42.00'}),example({...a,a:'64'},false),example({...a,choice:'A'},false)];
}
{
const t=task('K03-U02'),ids=['M1','M2','L','K1','K2','S1','S2','S3'];t.fields=ids.flatMap(id=>[num(id+'c',`${id}: kolumn (1–4)`),num(id+'r',`${id}: rad (1–2)`)]);
t.validate=a=>{const pos={};const used=new Map();for(const id of ids){const cq=packRational(a[id+'c']),rq=packRational(a[id+'r']);const c=cq&&cq[0]%cq[1]===0n?Number(cq[0]/cq[1]):null,r=rq&&rq[0]%rq[1]===0n?Number(rq[0]/rq[1]):null;if(!Number.isInteger(c)||c<1||c>4)return fail(`${id} behöver en kolumn 1–4.`,id+'c');if(!Number.isInteger(r)||r<1||r>2)return fail(`${id} behöver en rad 1–2.`,id+'r');const key=c+','+r;if(used.has(key))return fail(`${id} och ${used.get(key)} står båda i (${key}). Varje plats rymmer en låda.`,id+'c');used.set(key,id);pos[id]=[c,r];}for(const id of ['M1','M2']){if(pos[id][1]!==1)return fail(`${id} ligger bakom den främre raden. Vilket villkor gäller lådorna som ska tas fram först?`,id+'r');if(Math.abs(pos.L[0]-pos[id][0])+Math.abs(pos.L[1]-pos[id][1])===1)return fail(`L och ${id} delar sidan mellan (${pos.L.join(',')}) och (${pos[id].join(',')}). Den höga lyktlådan hindrar sidobrickan här. Hörnkontakt är tillåten.`,'Lc');}return pass();};
t.diagram=a=>{let b='';for(let c=1;c<=4;c++)for(let r=1;r<=2;r++){const here=ids.filter(id=>N(a[id+'c'])===c&&N(a[id+'r'])===r);b+=`<rect x="${(c-1)*12}" y="${(2-r)*12}" width="12" height="12" fill="none" stroke="#526c70" stroke-width=".3"/><text x="${(c-1)*12+6}" y="${(2-r)*12+5}" text-anchor="middle" font-size="2">(${c},${r})</text><text x="${(c-1)*12+6}" y="${(2-r)*12+9}" text-anchor="middle" font-size="2">${here.join(' / ')}</text>`;}return svg(48,24,b+'<text x="24" y="28" text-anchor="middle" font-size="2.5">LUCKA • rad 1 närmast</text>');};
const make=rows=>{const a={};rows.forEach((row,r)=>row.forEach((id,c)=>{a[id+'c']=String(c+1);a[id+'r']=String(r+1);}));return a;};const a=make([['M1','M2','K1','K2'],['S1','S2','S3','L']]);const b=make([['K1','M2','M1','K2'],['L','S1','S2','S3']]);t.examples=[example(a),example(b),example({...a,Lc:'1'},false),example({...a,M1r:'2'},false),example({...a,S1c:'2'},false),example({...a,M1c:'1.000000000000000000001'},false)];
t.neighbors=a=>{const result=[];for(const id of ['M1','M2']){const c=N(a[id+'c']),r=N(a[id+'r']);if(Number.isInteger(c)&&c>=1&&c<=4&&Number.isInteger(r)&&r>=1&&r<=2){const adjacent=[];for(let x=1;x<=4;x++)for(let y=1;y<=2;y++)if(Math.abs(c-x)+Math.abs(r-y)===1)adjacent.push(`(${x},${y})`);result.push(`${id} i (${c},${r}) delar sida med ${adjacent.join(', ')}.`);}}return result;};
}
{
const t=task('K03-U03');t.fields=[num('hours','Restid i timmar','h'),num('minutes','Samma restid i minuter','min'),time('arrival','Planerad ankomst'),sel('message','Välj budtext',[{value:'A',label:'Vi kommer säkert vid den beräknade ankomsttiden oavsett stopp.'},{value:'B',label:'Modellen ger den beräknade ankomsttiden om avgången blir 12.00 och färden följer de givna villkoren.'},{value:'C',label:'Vi behöver inte nämna några villkor eftersom en beräkning alltid är ett löfte.'}])];
t.stageReady=a=>N(a.hours)===1.5&&N(a.minutes)===90&&T(a.arrival)===810;t.stageMessage='Beräkningen stämmer. Välj nu ett bud som behåller modellens villkor.';t.fields[3].visibleWhen=(a,context)=>Boolean(context&&context.stageChecked&&t.stageReady(a));
t.validate=a=>exact(a,[['hours',1.5,'Dela sträckan 12 km med hastigheten 8 km/h för tid i timmar.'],['minutes',90,'En timme har 60 minuter. Gör om hela restiden till minuter.']])||(T(a.arrival)!==810?fail('Lägg restidens minuter till avgången 12.00. Använd ett giltigt klockslag.','arrival'):a.message!=='B'?fail('Modellen försummar stopp. Välj budtexten som uttryckligen behåller modellens villkor.','message'):pass());const a={hours:'1,5',minutes:'90',arrival:'13:30',message:'B'};t.examples=[example(a),example({...a,hours:'1.50',arrival:'13.30'}),example({...a,minutes:'65'},false),example({...a,message:'A'},false),example({...a,arrival:'12.90'},false)];
}

// Direct source access is independent of all mathematical task receipts.
chapters[1].choices = [
  {id:'inspect-oda-original',label:'Får vi se originalets stationssymbol redan nu?',reply:[
    'Oda lägger fram originalet bredvid Ivos kopia. Under originalets stationssymbol finns en ram för datum och tid. På kopian finns bara symbolen.',
    'Oda: ”Symbolen finns på mitt original, men jag har inte varit där. Mina underlag kom från arbetskajens ritningar.”',
    'Journalobservation: originalets stationssymbol har ett datum-/tidsfält som saknas på kopian. Det säger inte ensamt om stationen var en fast plats eller något tillfälligt.'
  ]},
  {id:'ask-oda-drawings-early',label:'Kan vi få arbetskajsritningarna nu?',reply:[
    'Oda: ”Ja. Här är de. Jag visar vilket blad som är källan till symbolen.”',
    'Oda visar också originalet: under stationssymbolen finns en ram för datum och tid. På Ivos kopia finns bara symbolen.',
    'Ni har kopiorna av arbetskajsritningarna. Journalen bevarar tidsfältsobservationen som en observation, inte som ett bevis för vad Station Noll var.'
  ]}
];
const mapTask=task('K02-U03');
mapTask.story=mapTask.story.filter(p=>!p.startsWith('”Kan vi få arbetskajsritningarna nu?”'));
const mapAfter=mapTask.after.map(p=>p.replace(' Arbetskajsritningarna finns med.',''));
mapTask.after=context=>[...mapAfter, context?.events?.['ask-oda-drawings-early']
  ? 'Oda: ”Ni har redan kopiorna. Jag visar vilket blad som är källan till symbolen.”'
  : 'Oda lämnar över kopiorna av arbetskajsritningarna: ”Här är de. Jag visar vilket blad som är källan till symbolen.”'];

globalThis.NATTLINJEN_PARTS = [...(globalThis.NATTLINJEN_PARTS || []), ...chapters];
})();
