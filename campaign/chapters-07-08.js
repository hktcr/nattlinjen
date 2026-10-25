'use strict';
(()=>{
const chapters = [
  {
    "id": "K07",
    "title": "En dag som får plats",
    "place": "Ombord på Sömmen vid Lervik",
    "intro": [
      "Bordet på Sömmen rymmer nu tre verkliga underlag i fiktionen: verkstädernas tidsbesked, transportpriser och en plan över den tänkta arbetsytan. Neri och Jun har bekräftat att de vill genomföra en enda provdag om planen håller. Neri lägger fram de redan visade fartygsbeskeden och det valda passet från kapitel 6. Planbordet står fortfarande ombord på Sömmen vid Lervik. Den planerade verkstadsdagen ska däremot hållas vid Vågbrottet; laget har ännu inte rest dit för provdagen.",
      "Neri: ”Vi har en dag och vi vet vilka som kommer. Nu återstår transportbudgeten, borden och arbetsgången.” Räkneuppgifterna ersätter inte deras samtycke.",
      "Jun lägger fram det uppdaterade underhållskortet från kapitel 4: ”Mått, sammanläggning och mängdplan gjorde att vi kunde avsluta det redan planerade underhållet. Nu har vi kontrollerat delarna på riktigt också.” Berättelsen visar Juns daterade arbetskvitto i fiktionen. Detta är en senare vuxen kontroll och färdigställt arbete, inte en säkerhetsattest från elevens räknesvar.",
      "Neri: ”Vi har en dag då vi kan. Nu behöver vi kunna säga vad den kostar och hur människorna ska arbeta.”",
      "Lea: ”Och vad som händer med min ställning?”",
      "Neri: ”Den är ett av arbetena, inte inträdesbiljetten. Du kan visa hur du upptäckte felet även om den inte är färdig.”",
      "Ivo har ritat en karta med ett stort tomt fält under platsen. Han skriver ”gäller den valda provdagen” och lämnar utrymme för villkoren. Lea väntar på en ursäkt eller förklaring. Han fortsätter bara rita. Hon lägger sin skiss bredvid."
    ],
    "tasks": [
      {
        "id": "K07-U01",
        "title": "Den större lasten",
        "story": [
          "Det här är en NY transport av 18 materialkollin för verkstadsdagen, inte de åtta lådorna från resan i kapitel 3. De tidigare leveranserna är avslutade och räknas inte igen. Sela och Bo har bekräftat samma prisformler för denna nya transport, och båda kan nu ta hela denna last på likvärdiga villkor. Ingen extrapolering av kapacitet antas utan besked. Deras daterade pris- och kapacitetskort ligger på bordet. Sela och Bo är inte närvarande här: deras följande repliker återges som skrivna råd på respektive kort, med valbar uppläsning och tydlig avsändare. Ingen direktförbindelse eller ny resa antyds.",
          "Lea: ”Bo var billigast förra gången.”",
          "Ivo pekar på Selas skrivna råd och läser: ”Jämförelsen för åtta lådor gäller inte automatiskt en ny last. Skriv dagens antal på översta raden.”"
        ],
        "prompt": "Den nya lasten är 18 kollin. Färja A kostar 120 mynt +8 mynt per kolli. Färja B kostar 30 mynt +14 mynt per kolli. Dessutom kostar annat material 60 mynt oavsett färja. Hela budgeten är 330 mynt. Beräkna totalen inklusive material för båda alternativen. Välj ett alternativ som ryms och ange hur mycket som återstår eller saknas i respektive fall.",
        "help": [
          "Vi ska välja en transport för 18 nya kollin och hålla hela planen inom 330 mynt.",
          "Använd båda färjornas grundpris och kollipris. Materialets 60 mynt gäller oavsett färja.",
          "Se tre kostnadsdelar per alternativ: grundavgift, kolliavgift och annat material.",
          "Räkna transporten med 18, lägg till 60 och jämför totalen med 330.",
          "Skriv båda totalerna. För varje alternativ välj först om pengar återstår eller saknas och beräkna sedan skillnaden.",
          "Välj det alternativ som ryms. Kontrollera att du inte använder det gamla antalet 8 eller en extra kassa som ingen beslutat om."
        ],
        "sourceNotes": [
          "manus_R4_07.md K07-U01",
          "manus_R4_10_hjalptext.md K07-U01"
        ],
        "explanations": [
          {
            "id": "F05",
            "title": "Decimaler, enhetspris och hela förpackningar",
            "text": "Ett enhetspris eller en förbrukning anger mängd för en enhet. Om 10 m² behöver 0,2 liter per m² blir mängden 10 · 0,2 = 2 liter. Om burkarna är 1,5 liter räcker en burk inte, men två ger 3 liter. Minsta hela antal är två och 1 liter blir över i modellen. Avrunda inte förbrukningen först och låtsas att det är samma mängd."
          }
        ]
      },
      {
        "id": "K07-U02",
        "title": "Bord utan att stänga mitten",
        "story": [
          "Neri visar en ritning för planering av fyra arbetsbord. Vuxna ansvarar senare för faktisk arbetsmiljö, tillgänglighet, väder, förtöjning och säkerhet. Den förenklade uppgiften kontrollerar bara angivna geometriska villkor.",
          "Jun: ”Det räcker inte att det finns många kvadratmeter kvar om vi har lagt dem på fel ställe.”"
        ],
        "prompt": "Planområdet är 6 m × 4 m, med x från 0 till 6 åt höger och y från 0 till 4 uppåt. Fyra bord är vardera 2 m × 1 m. Alla fyra ska placeras helt inom området utan inre överlapp. Mittremsan 1<y<3 ska vara helt fri från bord. Bord får beröra remsans gränser y=1 och y=3, men inte gå in i remsan. Borden får vridas ett kvarts varv. Lägg en giltig plan och beräkna sammanlagd bordsyta och kvarvarande obelagd yta.",
        "help": [
          "Fyra bord ska rymmas utan att täcka mittremsan.",
          "Varje bord är 2 gånger 1. Området är 6 gånger 4. Remsan 1<y<3 ska vara fri.",
          "Se de två tillåtna banden: 0 till 1 och 3 till 4. Kanter får möta gränsen, men bord får inte gå in i mitten.",
          "Välj den bordsorientering som ryms i ett 1 m högt band. Prova sedan platser utan överlapp.",
          "Placera alla fyra bord. Läs varje bords exakta kanter och kontrollera dem mot området, mittremsan och de andra borden.",
          "Beräkna fyra bord tillsammans i m². Dra ytan från hela området för obelagd yta. Kontrollera placeringen separat; rätt area ensam räcker inte."
        ],
        "sourceNotes": [
          "manus_R4_07.md K07-U02",
          "manus_R4_10_hjalptext.md K07-U02"
        ],
        "explanations": [
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
        "id": "K07-U03",
        "title": "Alla ska få prova allt",
        "story": [
          "Verkstadsdagen har tre stationer: Mät, Modell och Pröva. Tolv deltagare delas i tre fasta grupper med fyra i varje. Gruppernas namn är Grön, Rund och Rand; namn och symbol används tillsammans så färgseende inte krävs. Inga verkliga elevnamn registreras. Varje station rymmer exakt en grupp per runda."
        ],
        "prompt": "Planera tre rundor så att varje grupp besöker varje station exakt en gång. Ingen station får ha två grupper samtidigt och ingen grupp får vara på två stationer samtidigt. Varje runda är 20 minuter. Det är 5 minuters byte mellan runda 1 och 2 samt mellan runda 2 och 3, men inget byte efter sista rundan. Beräkna total tid för rundor och byten. Det gemensamma passet är 120 minuter; 10 minuter reserveras för början och 10 för avslut. Hur mycket oplanerad tid återstår?",
        "help": [
          "Varje grupp ska få besöka alla tre stationer, en per runda.",
          "Tre rundor är 20 minuter var. Det finns två byten på 5 minuter, plus början 10 och avslut 10 inom 120.",
          "Använd tabellen med rundor som rader och grupper som kolumner. Varje cell innehåller en station.",
          "Ge grupperna olika stationer i första rundan. Byt sedan så ingen grupp upprepar en station.",
          "Kontrollera varje rad och varje gruppkolumn. Räkna därefter rundornas minuter och de två bytesmellanrummen.",
          "Skriv rundor plus byten. Dra också av början och avslut från 120 för att få oplanerad tid. Kontrollera att du inte har lagt ett tredje byte efter sista rundan."
        ],
        "sourceNotes": [
          "manus_R4_07.md K07-U03",
          "manus_R4_10_hjalptext.md K07-U03"
        ],
        "explanations": [
          {
            "id": "F12",
            "title": "Bråk, procent och parallella arbeten",
            "text": "Om 6 av 8 arbeten är genomförda är andelen 6/8=3/4. Procent betyder hundradelar: 3/4 · 100 = 75 %. Täljaren och nämnaren måste räkna samma sorts saker. Andel personer är inte automatiskt samma som andel arbeten.\n\nOm 5 av 6 arbeten är genomförda räknar vi 5/6 · 100 = 83,333… %. Till en decimal i procenttalet behåller vi först tiondelen, 83,3, och tittar på nästa siffra. Den är 3, så svaret blir 83,3 %. Om nästa siffra är 0–4 behålls tiondelen; om den är 5–9 ökas tiondelen med ett steg. Exempelvis avrundas 62,75 % till 62,8 %. Behåll bråket eller räknarens fulla värde fram till sista avrundningen: börja inte med att avrunda 5/6 till 0,8.\n\nTvå personer kan arbeta 10 minuter var samtidigt på olika platser. Det ger 20 deltagarminuter men bara 10 minuter på klockan. Samma person kan däremot inte vara på två stationer samtidigt. Ett schema måste kontrollera både personernas och platsernas tid."
          }
        ]
      }
    ],
    "outro": []
  },
  {
    "id": "K08",
    "title": "Det första datumet",
    "place": "Vågbrottet",
    "intro": [
      "Den valda dagen kommer. Om spelaren valde B börjar passet 10.00; om C börjar det 13.00. Vuxna har kontrollerat verklig utrustning, väder, förtöjning och arbetsmiljö inom fiktionen. Detta sker som en namngiven handling av Neri och kollegorna, inte som en slutsats från elevens geometri. Den nya materialleveransen 18 kollin är mottagen. Den tidigare resans lådor blandas inte med den.",
      "De fyra borden följer elevens giltiga plan, inte en ny standardplacering. Stationsskyltarna följer elevens rotationstabell. Lyktan hänger på ett redan befintligt säkert fäste som en vuxen kontrollerat. Ingen elev behöver konstruera upphängningen.",
      "Lea har lagt sin ställning under bordet.",
      "Neri: ”Varför gömmer du den?”",
      "Lea: ”Jag vet fortfarande inte om den fungerar i alla lägen.”",
      "Neri: ”Då är det vad du visar. Den gamla skissen, den nya modellen och vad du faktiskt har provat.”",
      "Ivo vänder en skylt så att en besökare kan läsa datumet från kajen. Han förklarar vägen utan att först få en rättelse av någon annan. ”Du behöver inte hitta en byggnad. Du är framme.”"
    ],
    "tasks": [
      {
        "id": "K08-U01",
        "title": "En rad för allas skisser",
        "story": [
          "Vid stationen Modell ska tolv skisskort få varsin kvadratisk plats i en sammanhängande rad av pappersremsor. Två grannrutor delar sin gemensamma sida. Remsorna är lika långa och varje remsa täcker exakt en rutsida. Överlapp i hörn påverkar inte antalet i denna modell. Konstruktionen är en plan pappersmodell, inte en bärande ram.",
          "Lea: ”Vi kan räkna varje bit. Men om någon vill lägga till fler kort är en regel bra att ha.”"
        ],
        "prompt": "En ruta behöver 4 remsor. När en ny ruta läggs direkt bredvid den förra delas en sida. Bygg eller rita rader med 1, 2 och 3 rutor och fyll antalet remsor. Skriv en regel för n rutor i en enda rak sammanhängande rad, där n är ett positivt heltal, och motivera regeln med hur många remsor den första rutan respektive varje ny ruta kräver. Hur många remsor behövs för 12 rutor? Det finns 40 remsor. Hur många blir över?",
        "help": [
          "Vi ska bygga en rak rad där grannrutorna delar sida.",
          "Första rutan har 4 remsor. Varje följande delar en av sina sidor med raden.",
          "Jämför modellerna med 1, 2 och 3 rutor. Markera bara de remsor som tillkommer när en ruta läggs till.",
          "Utgå från 4 och lägg till samma antal för var och en av de n−1 följande rutorna.",
          "Fyll tabellen för 1, 2 och 3. Skriv regeln med första rutan och tilläggen, och kontrollera den mot tabellen.",
          "Använd regeln för 12 rutor. Dra behovet från 40 för att få resterande remsor. Välj motiveringen som visar varför varje ny ruta behöver samma antal nya remsor."
        ],
        "sourceNotes": [
          "manus_R4_08.md K08-U01",
          "manus_R4_10_hjalptext.md K08-U01"
        ],
        "explanations": [
          {
            "id": "F11",
            "title": "Regel, gräns och minsta värde",
            "text": "En regel behöver säga vad den gäller för. Om en rad börjar med 2 delar och varje nytt steg lägger till 4, blir antalet efter n steg 2+4n när n räknar tilläggen. Om n i stället räknar alla figurer måste regeln ändras. Läs vad bokstaven betyder.\n\nMinst 0,7 betyder 0,7 eller större. Ett värde på 0,7 är alltså tillåtet, men 0,6 är mindre än gränsen. Om varje prov måste klara en miniminivå behöver du kontrollera det minsta provvärdet, inte bara medelvärdet."
          }
        ]
      },
      {
        "id": "K08-U02",
        "title": "Ett försök är inte alla lägen",
        "story": [
          "Lea och Neri har gjort tre pappersmodeller A, B och C av spärrens placering. Neri har mätt frigång vid fyra provlägen; värdena lämnas som givna exakta modellvärden. Positivt värde betyder mellanrum, 0 beröring och negativt värde överlapp i den plana modellen. Den slutliga mekanismens hållfasthet och alla mellanliggande lägen är inte undersökta av denna tabell."
        ],
        "prompt": "Provkravet är minst 0,5 mm frigång i vart och ett av de fyra angivna provlägena 0°, 30°, 60° och 90°. Modell A har 2,0; 1,0; −0,5; 1,0 mm. Modell B har 1,0; 0,8; 0,5; 0,7 mm. Modell C har 0,5; 0,2; 0,4; 0,8 mm. Ange minsta värdet för varje modell. Välj den modell som uppfyller kravet vid alla fyra provlägen. Välj sedan en korrekt slutsats: A. Modellen är säker och fungerar i alla vinklar. B. Modellen uppfyller frigångskravet i de fyra undersökta lägena; övriga lägen och verklig funktion måste fortfarande prövas. C. Ett högt medelvärde räcker även om ett provläge understiger kravet.",
        "help": [
          "Vi ska välja en modell som når miniminivån i varje angivet provläge, inte den som har högst genomsnitt.",
          "Kravet är minst 0,5 mm. Exakt 0,5 är tillåtet. Negativt betyder överlapp i modellen.",
          "Lägg radens värden på tallinjen och markera det minsta. Gör detta för A, B och C.",
          "Jämför varje minimum med 0,5 och kontrollera också alla fyra värden i den valda raden.",
          "Skriv de tre minima och välj modellen som klarar alla fyra provpunkter.",
          "Välj slutsatsen som begränsas till de undersökta lägena. Kontrollera att texten inte lovar verklig säkerhet eller alla mellanliggande vinklar."
        ],
        "sourceNotes": [
          "manus_R4_08.md K08-U02",
          "manus_R4_10_hjalptext.md K08-U02"
        ],
        "explanations": [
          {
            "id": "F11",
            "title": "Regel, gräns och minsta värde",
            "text": "En regel behöver säga vad den gäller för. Om en rad börjar med 2 delar och varje nytt steg lägger till 4, blir antalet efter n steg 2+4n när n räknar tilläggen. Om n i stället räknar alla figurer måste regeln ändras. Läs vad bokstaven betyder.\n\nMinst 0,7 betyder 0,7 eller större. Ett värde på 0,7 är alltså tillåtet, men 0,6 är mindre än gränsen. Om varje prov måste klara en miniminivå behöver du kontrollera det minsta provvärdet, inte bara medelvärdet."
          }
        ]
      },
      {
        "id": "K08-U03",
        "title": "Tid för dem som inte är klara",
        "story": [
          "Efter de tre planerade rundorna återstår de 30 minuter som laget lämnade oplanerade. Neri vill använda dem till fortsatt arbete, inte till att skynda bort dem som behöver mer tid. Tolv fiktiva deltagare har varit med, inga verkliga elevuppgifter registreras.",
          "Neri: ”Vi räknar vad som återstår och gör plats för det. Genomfört med stöd räknas som genomfört, men säger inte att någon kan allt själv.”",
          "Planens 15 minuter är givna modellvärden, inte en allmän uppskattning av hur snabbt barn lär sig. Om verkligt stöd kräver mer tid behöver planen ändras; ingen timer tvingar spelaren eller en fiktiv deltagare att skynda."
        ],
        "prompt": "Nio deltagare har gjort tre stationsarbeten var, två har gjort två var och en har gjort ett. Alla ska kunna göra tre. Hur många arbeten är genomförda och hur många återstår? I den återstående planmodellen kräver varje kvarvarande arbete 15 minuter. P behöver Mät, Q behöver Modell och R behöver både Mät och Pröva. Varje station kan stödja en deltagare åt gången. En person kan bara göra ett arbete åt gången. Planera de kvarvarande arbetena i två 15-minuterspass inom de 30 minuter som finns. Ange också hur stor andel av de 36 möjliga arbetena som var genomförda före stödpassen, som förkortat bråk och procent avrundad till en decimal.",
        "help": [
          "Vi ska räkna det som är klart och göra plats för de kvarvarande arbetena, utan dubbelbokningar.",
          "Nio gjorde tre var, två gjorde två och en gjorde ett. P behöver Mät, Q behöver Modell och R behöver Mät och Pröva. Varje kvarvarande arbete tar 15 minuter i planmodellen.",
          "Fyll delsummorna för genomförda arbeten och jämför med 12 gånger 3. Se sedan två tomma 15-minuterspass med en plats per station.",
          "Börja schemat med R:s två arbeten i olika pass. Lägg sedan P och Q på deras behövda stationer när de är lediga.",
          "Kontrollera varje person och varje station i varje pass. Skriv antal genomförda och kvarvarande arbeten. Kontrollera att alla fyra kvarvarande arbeten finns exakt en gång i planen.",
          "Sätt den ursprungliga genomförda mängden över den möjliga mängden 36. Förkorta bråket, gör om till procent och avrunda till en decimal. Kontrollera sedan att båda passen tillsammans ryms inom 30 minuter."
        ],
        "sourceNotes": [
          "manus_R4_08.md K08-U03",
          "manus_R4_10_hjalptext.md K08-U03"
        ],
        "explanations": [
          {
            "id": "F12",
            "title": "Bråk, procent och parallella arbeten",
            "text": "Om 6 av 8 arbeten är genomförda är andelen 6/8=3/4. Procent betyder hundradelar: 3/4 · 100 = 75 %. Täljaren och nämnaren måste räkna samma sorts saker. Andel personer är inte automatiskt samma som andel arbeten.\n\nOm 5 av 6 arbeten är genomförda räknar vi 5/6 · 100 = 83,333… %. Till en decimal i procenttalet behåller vi först tiondelen, 83,3, och tittar på nästa siffra. Den är 3, så svaret blir 83,3 %. Om nästa siffra är 0–4 behålls tiondelen; om den är 5–9 ökas tiondelen med ett steg. Exempelvis avrundas 62,75 % till 62,8 %. Behåll bråket eller räknarens fulla värde fram till sista avrundningen: börja inte med att avrunda 5/6 till 0,8.\n\nTvå personer kan arbeta 10 minuter var samtidigt på olika platser. Det ger 20 deltagarminuter men bara 10 minuter på klockan. Samma person kan däremot inte vara på två stationer samtidigt. Ett schema måste kontrollera både personernas och platsernas tid."
          }
        ]
      }
    ],
    "outro": [
      "Besökaren Mira stannar vid Leas två skisser. ”Varför har du behållit den där som inte fungerade?”",
      "Lea: ”För att jag bara hade ritat den öppen. Där såg hålen ut att passa. När jag ritade det stängda läget såg jag vad jag hade missat.”",
      "Mira: ”Och den nya fungerar?”",
      "Lea vrider fram provtabellen. ”B klarade de här fyra lägena. Jag ska fortfarande undersöka mellanlägena. Annars skulle jag göra samma sak igen, fast med en snyggare skiss.”",
      "Mira: ”Kan du visa hur ni mätte?”",
      "Lea flyttar fram skissen utan att titta på Neri för att få slutet på meningen. ”Ja. Vi börjar med vad punkterna betyder.”",
      "Neri går till nästa arbetsbord. Lea behöver inte låtsas vara färdig för att kunna dela det hon faktiskt har förstått. Det är hennes personliga framsteg; spelet lovar inte en färdig mekanism eller en garanterad lärlingsplats.",
      "Lea och Ivo packar tillbaka lagets verktyg i M1 och M2 för hemresan. Neri behåller den uttryckligen mottagna lyktan för verkstädernas framtida bruk. Samma föremåls-ID:n finns kvar; inga kopior skapas av slutbilden.",
      "Bordet töms långsamt. En besökare lämnar kvar en fråga på ett kort: ”Kan vi prova det här igen?” Neri lägger kortet bredvid kalendern, men skriver inget datum ännu.",
      "Lea: ”Ska jag lämna ställningen här?”",
      "Neri: ”Ta med den. Fortsätt rita vad som händer mellan lägena. När vi har bestämt en ny träff kan du visa nästa försök.”",
      "Lea: ”Inte bara den färdiga?”",
      "Neri: ”Inte bara den färdiga.”",
      "Ivo visar sin nya karta. Station Noll står fortfarande vid Vågbrottet, men inte som ett odaterat märke som kan misstas för en permanent byggnad. Den är markerad med datumet för den här dagen, tre fartygsnamn och ett fält märkt ”nästa möte: ännu inte bestämt”. Han har inte suddat ut den gamla kartan; den ligger som källa bakom.",
      "Amra får ett brev inom fiktionen. Neri har skrivit: ”Lyktan användes. Verkstäderna möttes en dag. Nästa gång är inte bestämd ännu.” Ingen verklig sändning sker.",
      "Tre fartyg i kvällsljus, människor som bär undan sitt arbete och lyktan som lyser vid ett vanligt arbetsbord. Leas två skisser ligger bredvid varandra. Den andra har fler mått, men också en ny fråga."
    ]
  }
];
const num=(id,label,unit)=>({id,label,type:'number',...(unit?{unit}:{})});
const txt=(id,label)=>({id,label,type:'text'});
const sel=(id,label,choices)=>({id,label,type:'select',options:choices.map(x=>typeof x==='string'?{value:x,label:x}:x)});
const yes=()=>({ok:true,message:'Din lösning uppfyller uppgiftens villkor. Välj Använd min lösning om du vill göra den till lagets plan.'});
const no=(message,field)=>({ok:false,message,field});
const checkNumbers=(a,values)=>{for(const [key,value] of Object.entries(values))if(N(a[key])!==value)return no('Kontrollera '+key+': fyll i det efterfrågade talet med rätt enhet.',key);return null;};
const [c7,c8]=chapters; const [budget,boards,rotation]=c7.tasks; const [strips,models,support]=c8.tasks;
for(const ch of chapters) for(const task of ch.tasks){task.explain=task.explanations;delete task.explanations;}
budget.fields=[num('totalA','A: total inklusive material','mynt'),sel('statusA','A jämfört med budgeten',['återstår','saknas']),num('differenceA','A: belopp som återstår eller saknas','mynt'),num('totalB','B: total inklusive material','mynt'),sel('statusB','B jämfört med budgeten',['återstår','saknas']),num('differenceB','B: belopp som återstår eller saknas','mynt'),sel('choice','Transport inom budgeten',['A','B'])];
budget.table={headers:['Alternativ','Grundavgift','Per kolli','Antal nya kollin','Övrigt material','Budget'],rows:[['A','120','8','18','60','330'],['B','30','14','18','60','330']]};
budget.validate=a=>{if(N(a.totalA)===264)return no('Det är transporten. Materialets 60 mynt ska också ingå.','totalA');const e=checkNumbers(a,{totalA:324,differenceA:6,totalB:342,differenceB:12});if(e)return e;if(a.statusA!=='återstår')return no('Jämför A:s total med budgeten 330.','statusA');if(a.statusB!=='saknas')return no('Beräkningen visar ett underskott. Använd ”saknas 12” så planen inte kan missförstås.','statusB');if(a.choice!=='A')return no('Vid åtta kollin var B billigare. Här är antalet 18, och ingen extra kassa finns.','choice');return yes();};
budget.after=['Neri godkänner transport A för den nya leveransen med 18 kollin. 324 av 330 fiktiva mynt reserveras en gång; 6 återstår. Inget verkligt konto debiteras.','Den tidigare resans åtta lådor transporterades med B. Den avslutade resan ändras inte.'];
const budgetGood={totalA:'324',statusA:'återstår',differenceA:'6',totalB:'342',statusB:'saknas',differenceB:'12',choice:'A'};
budget.examples=[{answers:budgetGood,ok:true},{answers:{...budgetGood,totalA:'264'},ok:false},{answers:{...budgetGood,statusB:'återstår'},ok:false}];
// Coordinates are compared as exact rationals, never rounded SVG positions.
const rational=value=>{const s=String(value??'').trim().replace('−','-').replace(',','.');let m;if(s.length>300)return null;if((m=s.match(/^([+-]?\d+)\/([+]?[1-9]\d*)$/)))return [BigInt(m[1]),BigInt(m[2])];if((m=s.match(/^([+-]?)(\d+)(?:\.(\d+))?$/))){const d=m[3]||'';return [BigInt((m[1]==='-'?'-':'')+m[2]+d),10n**BigInt(d.length)];}return null;};
const r=(v)=>[BigInt(v),1n],add=(a,b)=>[a[0]*b[1]+b[0]*a[1],a[1]*b[1]],lt=(a,b)=>a[0]*b[1]<b[0]*a[1];
const overlap=(a,b)=>lt(a.x,b.right)&&lt(b.x,a.right)&&lt(a.y,b.top)&&lt(b.y,a.top);
boards.fields=['A','B','C','D'].flatMap(id=>[txt(id+'x',`Bord ${id}: nedre vänstra x (m; decimal eller bråk)`),txt(id+'y',`Bord ${id}: nedre vänstra y (m; decimal eller bråk)`),sel(id+'orientation',`Bord ${id}: bredd × höjd`,[{value:'horizontal',label:'2 m × 1 m'},{value:'vertical',label:'1 m × 2 m'}])]).concat([num('tableArea','Sammanlagd bordsyta','m²'),num('freeArea','Obelagd yta','m²')]);
boards.validate=a=>{const placed=[];for(const id of ['A','B','C','D']){const x=rational(a[id+'x']),y=rational(a[id+'y']);if(!x||!y)return no(`Bord ${id}: ange ändliga decimaler eller bråk p/q med heltal och positiv nämnare.`,!x?id+'x':id+'y');const o=a[id+'orientation'];if(!['horizontal','vertical'].includes(o))return no(`Välj orientering för bord ${id}.`,id+'orientation');const b={id,x,y,right:add(x,r(o==='horizontal'?2:1)),top:add(y,r(o==='horizontal'?1:2))};if(lt(x,r(0))||lt(y,r(0))||lt(r(6),b.right)||lt(r(4),b.top))return no(`Bord ${id} ligger inte helt inom 6 m × 4 m.`,id+'x');if(lt(y,r(3))&&lt(r(1),b.top))return no(`Bord ${id} går in i den fria mittremsan 1<y<3.`,id+'y');for(const other of placed)if(overlap(b,other))return no(`Bord ${id} och ${other.id} överlappar i sina inre ytor.`,id+'x');placed.push(b);}return checkNumbers(a,{tableArea:8,freeArea:16})||yes();};
boards.diagram=a=>{let svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -0.5 8 5.5" role="img" aria-label="Din bordsplan: x åt höger, y uppåt. Skrafferad mittremsa ska vara fri."><defs><pattern id="forbidden78" width="0.15" height="0.15" patternUnits="userSpaceOnUse"><path d="M0 0L.15 .15" stroke="#8c6f55" stroke-width=".02"/></pattern></defs><rect width="6" height="4" fill="#faf5e6" stroke="#333" stroke-width=".03"/><rect y="1" width="6" height="2" fill="url(#forbidden78)"/><text x="3" y="2" text-anchor="middle" font-size=".24">Mittremsan ska vara fri</text>';for(const id of ['A','B','C','D']){const xr=rational(a[id+'x']),yr=rational(a[id+'y']);if(!xr||!yr||!['horizontal','vertical'].includes(a[id+'orientation']))continue;const x=Number(xr[0])/Number(xr[1]),y=Number(yr[0])/Number(yr[1]),w=a[id+'orientation']==='horizontal'?2:1,h=3-w;if(!Number.isFinite(x)||!Number.isFinite(y)||Math.abs(x)>10||Math.abs(y)>10)continue;svg+=`<rect x="${x}" y="${4-y-h}" width="${w}" height="${h}" fill="#b5d9d1" stroke="#173f43" stroke-width=".035"/><text x="${x+w/2}" y="${4-y-h/2}" text-anchor="middle" font-size=".25">${id}</text>`;}return svg+'<text x="0" y="4.4" font-size=".23">(0,0)</text><text x="5.5" y="4.4" font-size=".23">x=6</text><text x="-.8" y="0" font-size=".23">y=4</text></svg>';};
boards.after=['Neri lägger planen i sitt verklighetskontrollunderlag: ”Nu vet vi vad ritningen säger. På plats kontrollerar vi resten.”','Planen uppfyller de givna geometriska villkoren. Vuxna ansvarar fortfarande för faktisk arbetsmiljö, tillgänglighet, väder, förtöjning och säkerhet.'];
const boardGood={Ax:'0',Ay:'0',Aorientation:'horizontal',Bx:'2',By:'0',Borientation:'horizontal',Cx:'0',Cy:'3',Corientation:'horizontal',Dx:'2',Dy:'3',Dorientation:'horizontal',tableArea:'8',freeArea:'16'};
boards.examples=[{answers:boardGood,ok:true},{answers:{...boardGood,Ax:'0,5',Bx:'5/2',Cx:'4',Cy:'0',Dx:'3/2',Dy:'3'},ok:false},{answers:{...boardGood,Ax:'0,5',Bx:'5/2',Cx:'1/3',Dx:'7/3'},ok:true},{answers:{...boardGood,Cx:'4',Cy:'0',Dx:'1/2',Dy:'3'},ok:true},{answers:{...boardGood,Ax:'1/0'},ok:false},{answers:{...boardGood,Ay:'1'},ok:false},{answers:{...boardGood,Bx:'1.99999999999999999999999999999'},ok:false}];
const stationNames=['Mät','Modell','Pröva'],groups=['Grön','Rund','Rand'];
rotation.fields=[1,2,3].flatMap(round=>groups.map((g,index)=>sel(`r${round}g${index}`,`Runda ${round}, ${g}`,stationNames))).concat([num('roundMinutes','Rundornas sammanlagda tid','minuter'),num('changeMinutes','Bytenas sammanlagda tid','minuter'),num('totalMinutes','Rundor och byten tillsammans','minuter'),num('remainingMinutes','Oplanerad tid efter början och avslut','minuter')]);
rotation.validate=(a,context={})=>{for(let round=1;round<=3;round++){const row=groups.map((_,i)=>a[`r${round}g${i}`]);if(row.some(x=>!stationNames.includes(x)))return no(`Välj station för alla grupper i runda ${round}.`,`r${round}g0`);if(new Set(row).size!==3)return no(`Två grupper behöver samma station samtidigt i runda ${round}.`,`r${round}g0`);}for(let g=0;g<3;g++){const visits=[1,2,3].map(round=>a[`r${round}g${g}`]);if(new Set(visits).size!==3){const repeated=visits.find((v,i)=>visits.indexOf(v)!==i);const missing=stationNames.filter(s=>!visits.includes(s));return no(`${groups[g]} har redan varit på ${repeated} och saknar ${missing.join(' och ')}.`,`r2g${g}`);}}if(N(a.totalMinutes)===75)return no('Du har räknat tre byten. Hur många mellanrum finns mellan tre rundor?','totalMinutes');if(N(a.remainingMinutes)===50)return no('Början och avslut tar också tid i passet.','remainingMinutes');const e=checkNumbers(a,{roundMinutes:60,changeMinutes:10,totalMinutes:70,remainingMinutes:30});if(e)return e;const d=context.chosenDay;if(!d||!((d.day==='B'&&T(d.start)===600&&T(d.end)===720)||(d.day==='C'&&T(d.start)===780&&T(d.end)===900)))return no('Ett använt eller förberett pass från kapitel 6 behövs: B 10–12 eller C 13–15.');if(!context.receipts?.['K07-U01']||!context.receipts?.['K07-U02'])return no('Använd först lösningarna för den nya transporten och bordsplanen. Inbjudan kräver hela planpaketet.');return yes();};
rotation.after=['Rotationstabellen och tidsplanen läggs i planpaketet. Varje grupp har fyra deltagare; varje station tar en grupp per runda. De 30 oplanerade minuterna är utrymme för stöd och pauser, inte ett löfte om hur snabbt alla blir klara.'];
const rotationGood={r1g0:'Mät',r1g1:'Modell',r1g2:'Pröva',r2g0:'Modell',r2g1:'Pröva',r2g2:'Mät',r3g0:'Pröva',r3g1:'Mät',r3g2:'Modell',roundMinutes:'60',changeMinutes:'10',totalMinutes:'70',remainingMinutes:'30'};
const rotationContext={chosenDay:{day:'B',start:'10:00',end:'12:00'},receipts:{'K07-U01':{answers:budgetGood},'K07-U02':{answers:boardGood}}};
rotation.examples=[{answers:rotationGood,context:rotationContext,ok:true},{answers:{...rotationGood,r1g0:'Modell'},context:rotationContext,ok:false},{answers:{...rotationGood,r2g0:'Mät',r2g1:'Modell',r2g2:'Pröva'},context:rotationContext,ok:false},{answers:rotationGood,context:{...rotationContext,chosenDay:{day:'C',start:'13:00',end:'15:00'}},ok:true},{answers:rotationGood,context:{},ok:false}];
c7.confirmation={title:'Neri bekräftar en provdag',text:'Det använda planpaketet är klart. Neri läser igenom det och bekräftar en enda provdag på det sparade passet B 10–12 eller C 13–15. Inbjudan gäller vad besökarna kan få prova, inte ett obegränsat åtagande. All kommunikation är fiktion.',button:'Visa Neris bekräftelse',eventId:'K07-provdag-bekraftad',after:['Neri bekräftar provdagen och inbjudan registreras en gång inom berättelsen för det valda passet. Ingen verklig kontakt sker.','Ivo skriver på kartan: ”Station Noll. Verkstäderna möts här den valda dagen. Fråga efter nästa datum.”','Lea: ”Du lämnade en ruta tom.” Ivo: ”Nästa datum. Det har ingen bestämt.”']};
strips.fields=[num('one','Remsor för 1 ruta','remsor'),num('two','Remsor för 2 rutor','remsor'),num('three','Remsor för 3 rutor','remsor'),sel('rule','Regel när n är ett positivt heltal: antal rutor i en rak sammanhängande rad',[{value:'3n+1',label:'3n + 1'},{value:'4+3(n-1)',label:'4 + 3(n − 1)'},{value:'4n',label:'4n'},{value:'3n',label:'3n'}]),sel('reason','Varför gäller regeln?',[{value:'shared',label:'Första rutan behöver 4; var och en av n−1 nya rutor delar en sida och behöver 3 nya remsor.'},{value:'separate',label:'Varje ruta behöver 4 nya remsor, även den gemensamma sidan.'},{value:'examples',label:'Tre exempel bevisar alla formler som ger dessa tal.'}]),num('twelve','Remsor för 12 rutor','remsor'),num('left','Kvar av 40 remsor','remsor')];
strips.validate=a=>{if(N(a.twelve)===48)return no('Det räcker till tolv separata fyrkanter. Här delar grannrutor en sida.','twelve');if(N(a.twelve)===36)return no('Tre per ruta missar att den första behöver en extra ytterkant.','twelve');const e=checkNumbers(a,{one:4,two:7,three:10,twelve:37,left:3});if(e)return e;if(!['3n+1','4+3(n-1)'].includes(a.rule))return no('Första rutan behöver fyra remsor. Varje ny ruta delar en sida. Välj en regel som gäller för alla positiva heltal n.','rule');if(a.reason!=='shared')return no('Motivera med första rutans fyra och varje följande rutas tre nya remsor. Några exempel räcker inte ensamma.','reason');return yes();};
strips.after=['De tolv kortplatserna byggs i fiktionen med 37 remsor. Tre remsor läggs tillbaka, en gång när lösningen används.','Skisskorten visar påbörjade arbeten, inte enbart perfekta produkter. Lea tar fram både sin gamla och nya spärrskiss.'];
const stripsGood={one:'4',two:'7',three:'10',rule:'3n+1',reason:'shared',twelve:'37',left:'3'};
strips.examples=[{answers:stripsGood,ok:true},{answers:{...stripsGood,rule:'4+3(n-1)'},ok:true},{answers:{...stripsGood,reason:'examples'},ok:false},{answers:{...stripsGood,twelve:'48'},ok:false}];
models.fields=[num('minA','Modell A: minsta frigång','mm'),num('minB','Modell B: minsta frigång','mm'),num('minC','Modell C: minsta frigång','mm'),sel('model','Modell som klarar alla fyra provlägen',['A','B','C']),sel('conclusion','Slutsats',[{value:'A',label:'Modellen är säker och fungerar i alla vinklar.'},{value:'B',label:'Modellen uppfyller frigångskravet i de fyra undersökta lägena; övriga lägen och verklig funktion måste fortfarande prövas.'},{value:'C',label:'Ett högt medelvärde räcker även om ett provläge understiger kravet.'}])];
models.table={headers:['Modell','0°','30°','60°','90°'],rows:[['A','2,0 mm','1,0 mm','−0,5 mm','1,0 mm'],['B','1,0 mm','0,8 mm','0,5 mm','0,7 mm'],['C','0,5 mm','0,2 mm','0,4 mm','0,8 mm']]};
models.validate=a=>{const e=checkNumbers(a,{minA:-0.5,minB:0.5,minC:0.2});if(e)return e;if(a.model!=='B')return no('Kravet gäller varje provläge. Minst 0,5 inkluderar exakt 0,5. Positivt men mindre än 0,5 räcker inte.','model');if(a.conclusion!=='B')return no('Tabellen innehåller bara fyra vinklar och en plan modell. Den prövar inte alla lägen eller verklig hållfasthet.','conclusion');return yes();};
models.after=['Lea: ”B är den vi ska prova vidare. Inte den jag kan säga är färdig.”','Neri: ”Precis.”'];
const modelsGood={minA:'-0,5',minB:'0,5',minC:'0,2',model:'B',conclusion:'B'};
models.examples=[{answers:modelsGood,ok:true},{answers:{...modelsGood,minA:'0.5'},ok:false},{answers:{...modelsGood,conclusion:'A'},ok:false}];
support.fields=[num('completed','Genomförda arbeten före stödpassen','arbeten'),num('possible','Möjliga arbeten totalt','arbeten'),num('remaining','Återstående arbeten','arbeten'),num('numerator','Förkortad andel: täljare'),num('denominator','Förkortad andel: nämnare'),num('percent','Andel före stödet, avrundad till en decimal','%'),sel('P_Mat','P behöver Mät: välj pass',['1','2']),sel('Q_Modell','Q behöver Modell: välj pass',['1','2']),sel('R_Mat','R behöver Mät: välj pass',['1','2']),sel('R_Prova','R behöver Pröva: välj pass',['1','2']),num('passes','Minsta antal 15-minuterspass','pass'),num('minutes','Stödpassen tillsammans på klockan','minuter')];
support.table={headers:['Deltagare / grupp','Redan genomfört / kvarvarande behov'],rows:[['9 deltagare','3 stationsarbeten var genomförda'],['2 deltagare','2 stationsarbeten var genomförda'],['1 deltagare','1 stationsarbete genomfört'],['P','Behöver Mät'],['Q','Behöver Modell'],['R','Behöver Mät och Pröva']]};
support.validate=a=>{if(N(a.completed)===12)return no('Det är antalet personer, inte arbeten.','completed');if(N(a.completed)===27)return no('Det räknar bara de nio som redan gjort tre var.','completed');if(N(a.numerator)===32&&N(a.denominator)===36)return no('32/36 är rätt andel. Förkorta bråket.','numerator');if(N(a.percent)===88.8)return no('Nästa decimal är 8. Hur ska en decimal avrundas?','percent');if(N(a.minutes)===60)return no('Det är summan av deltagarnas arbetstid. Vilka arbeten kan ske samtidigt på olika stationer?','minutes');const e=checkNumbers(a,{completed:32,possible:36,remaining:4,numerator:8,denominator:9,percent:88.9,passes:2,minutes:30});if(e)return e;for(const key of ['P_Mat','Q_Modell','R_Mat','R_Prova'])if(!['1','2'].includes(a[key]))return no('Välj pass 1 eller 2 för varje kvarvarande arbete.',key);if(a.R_Mat===a.R_Prova)return no('R skulle behöva vara på två stationer samtidigt.','R_Prova');if(a.P_Mat===a.R_Mat)return no(`P och R behöver Mät i pass ${a.P_Mat}, men stationen har plats för en.`,'P_Mat');return yes();};
support.afterSteps=[{id:'K08-stodpass-1',title:'Första stödpassets 15 minuter',text:'De arbeten du lade i pass 1 genomförs nu med Neris stöd på sina stationer. Ingen behöver vara på två platser samtidigt.'},{id:'K08-stodpass-2',title:'Andra stödpassets 15 minuter',text:'De återstående arbeten du lade i pass 2 genomförs med stöd. P, Q och R har nu fått plats för alla fyra kvarvarande arbetsmoment.'}];
support.after=['Journalen visar 32 av 36 genomförda arbeten före stödet och 36 av 36 efter de två genomförda stödpassen i berättelsen. Genomfört med stöd betyder inte att någon kan allt själv.','Människor har fått plats i planen. När en besökare frågar Lea om ställningen har hon tid att visa hur hon arbetar.'];
const supportGood={completed:'32',possible:'36',remaining:'4',numerator:'8',denominator:'9',percent:'88,9',P_Mat:'1',Q_Modell:'1',R_Mat:'2',R_Prova:'1',passes:'2',minutes:'30'};
support.examples=[{answers:supportGood,ok:true},{answers:{...supportGood,P_Mat:'2',R_Mat:'1',R_Prova:'2',Q_Modell:'2'},ok:true},{answers:{...supportGood,R_Prova:'2'},ok:false},{answers:{...supportGood,P_Mat:'2'},ok:false},{answers:{...supportGood,numerator:'32',denominator:'36'},ok:false},{answers:{...supportGood,percent:'88.8'},ok:false}];
c8.endingChoices=[{id:'found',label:'Vi hittade den',response:'Lea: ”Och den var inte den sortens plats jag trodde.”'},{id:'made',label:'Vi var med och gjorde den',response:'Lea: ”En dag i alla fall. Det är mer än en skylt.”'},{id:'next',label:'Nu vet vi vad vi ska fråga nästa gång',response:'Lea: ”Och jag har en skiss att ta med.”'}];
for (const choice of c8.endingChoices) { choice.reply=[choice.response]; delete choice.response; }
const opening=c8.intro;
c8.intro=context=>opening.map((paragraph,index)=>index===0?paragraph.replace('Om spelaren valde B börjar passet 10.00; om C börjar det 13.00.',`Ditt sparade pass är dag ${context?.chosenDay?.day||'B'}, ${context?.chosenDay?.start||'10:00'}–${context?.chosenDay?.end||'12:00'}.`):paragraph);
const supportSteps=support.afterSteps;
support.afterSteps=context=>supportSteps.map((step,index)=>{const answers=context?.receipts?.['K08-U03']?.answers||{};const jobs=[['P_Mat','P–Mät'],['Q_Modell','Q–Modell'],['R_Mat','R–Mät'],['R_Prova','R–Pröva']].filter(([key])=>answers[key]===String(index+1)).map(([,label])=>label);return {...step,text:[`Din använda plan för pass ${index+1}: ${jobs.join(', ')}.`,step.text]};});
const confirmationAfter=c7.confirmation.after;
c7.confirmation.after=context=>[`Inbjudan inom berättelsen: en provdag på dag ${context?.chosenDay?.day||'—'}, ${context?.chosenDay?.start||'—'}–${context?.chosenDay?.end||'—'}. Besökarna får prova Mät, Modell och Pröva enligt den använda rotationen.`,...confirmationAfter];
const ending=c8.outro;
c8.outro=context=>[...ending,Object.keys(context?.receipts||{}).filter(id=>/^K0[1-8]-U0[1-3]$/.test(id)).length===24?'Första berättelsen är genomförd. 24 utmaningar har använda lösningar i denna genomspelning.':'Du har nått berättelsens slut i undervisningsläge. Journalen visar vilka utmaningar som faktiskt har använda lösningar.','Ingen kunskapsnivå, effekt eller betyg utdelas automatiskt. Nästa möte är ännu inte bestämt.'];
globalThis.NATTLINJEN_PARTS=[...(globalThis.NATTLINJEN_PARTS||[]),...chapters];
})();
