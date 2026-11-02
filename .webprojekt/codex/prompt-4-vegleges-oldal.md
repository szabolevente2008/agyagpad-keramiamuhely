Te egy senior frontend-fejlesztő és webdesigner vagy. A feladatod: a kiválasztott kezdőoldal-prototípusból (`koncepcio-1-a-mazproba.html`, „A mázpróba”) elkészíteni az Agyagpad kerámiaműhely végleges, többoldalas, statikus weboldalát. Ez egy tanfolyami vizsgamunka, amely élesben, Netlify-on fog futni.

## Előtte olvasd el
1. `design-system.md` (az arculat egyetlen forrása: színek, betűk, méretskála, formák, komponensek)
2. `.webprojekt/brief.md` (tények, árak, időpontok, márkahang, oldaltérkép szakaszokkal)
3. `koncepcio-1-a-mazproba.html` (a választott design: ennek a kinézetét, motívumát és szövegeit vidd tovább)
4. `.webprojekt/kepek.md` (használható Unsplash képek)
5. `.claude/skills/frontend-design/SKILL.md` (design-elvek)
6. `alapanyag/adatkezelesi-sablon.txt` (az adatkezelési tájékoztató kurzus-sablonja)
7. `terv/oldalterkep.png` és `terv/drotvaz-fooldal.png` (a jóváhagyott struktúra)

## Mit építs
Statikus HTML + saját CSS + kevés vanilla JavaScript. **Tailwind és más keretrendszer nélkül**, build-lépés nélkül (a Tailwind Play CDN lassítja a mobilos betöltést). Fájlok:

- `css/style.css`: az egész oldal stílusa. A `design-system.md` minden tokenje CSS-változóként a `:root`-ban, a komponensek csak ezeket használják. Vidd át a prototípus egyedi CSS-ét (mázpróba-lapok, szemcse, gombok, fejléc stb.), de rendezd: a sok egyedi px betűméret helyett a design-system betűméret-skáláját használd.
- `js/main.js`: mobilmenü, fejléc görgetéskor, a mázpróba nyitó mozzanat, GYIK lenyitás (lehet natív `<details>`), az űrlap tanfolyamtípusának előválasztása az URL `?tipus=` paraméteréből (`kostolo`, `kurzus`, `csapatepito`, `utalvany`), sütibanner és feltételes GA4-betöltés (lásd lent).
- `koncepciok.html`: a jelenlegi `index.html` (koncepció-navigátor) tartalma ide kerül át változatlanul, és kapjon `<meta name="robots" content="noindex">`-et. A három `koncepcio-*.html` maradjon meg, mindhárom kapjon `noindex`-et (csak ezt az egy sort add hozzájuk).
- `index.html`: Főoldal (a prototípus kezdőoldala, rendbe téve).
- `tanfolyamok.html`, `muhely.html`, `kapcsolat.html`: a brief oldaltérképe szerinti szakaszokkal.
- `koszonjuk.html`: az űrlap elküldése után; köszönet, mi történik ezután (Dóra 1–2 munkanapon belül válaszol e-mailben), vissza a főoldalra.
- `adatkezelesi-tajekoztato.html`: a kurzus-sablonból kitöltve az Agyagpadra (Fehér Dóra egyéni vállalkozó, kitalált adatok; tárhely: Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA, netlify.com; adatfeldolgozó: Netlify (űrlapok), Google Analytics csak hozzájárulással). Tartalmazza a jelentkezési űrlap adatkezelését (cél, jogalap, megőrzés), a sütiket és a GA4-et, valamint az érintetti jogokat és a NAIH elérhetőségét. Az üres sablonmezőket töltsd ki vagy hagyd el, ne maradjon kitöltetlen helyőrző.
- `404.html`: barátságos, márkahű hibaoldal linkekkel.
- `favicon.svg`: kis mázpróba-lap a márka színeivel.
- `robots.txt`, `sitemap.xml` (csak a négy fő oldal + adatkezelési), `netlify.toml` (publish = ".", 404 kezelés, cache-fejlécek a css/js/images mappára, biztonsági fejlécek: X-Content-Type-Options, Referrer-Policy, X-Frame-Options).

## Közös elemek minden oldalon
- Ugyanaz a fejléc (logó, Főoldal, Tanfolyamok, A műhely, Kapcsolat, mindig látható „Jelentkezem” gomb, az aktuális oldal jelölve `aria-current="page"`-dzsel) és lábléc (navigáció, cím, nyitvatartás, e-mail, telefon, „Adatkezelési tájékoztató”, „Sütibeállítások” gomb, ami újra megnyitja a bannert).
- Skip link, látható billentyűzetfókusz, `prefers-reduced-motion` tiszteletben tartása.
- Minden oldal alján (kivéve kapcsolat, köszönjük, adatkezelés, 404) záró CTA sáv.

## Tartalom és szöveg
- Tegező, meleg, egyszerű hang (a prototípus szövegei jó kiindulás). A brief tényeiből dolgozz; amit kitalálsz, legyen életszerű, és ne ígérj olyat, amit egy valódi műhely nem vállalna.
- Árak és időpontok pontosan: kóstoló 3 óra, 19 900 Ft/fő, szombaton és vasárnap 10:00–13:00 és 15:00–18:00; kezdő kurzus 4 alkalom × 3 óra, heti egy este (kedd vagy csütörtök 18:00–21:00), 69 000 Ft/fő; csapatépítő 6 főig 129 000 Ft, hétköznap, egyeztetett időpontban, 3 óra. Mindegyik max. 6 fő. Az árban benne van az agyag, a máz, két égetés, kötény és eszközök; a kész darab két hét múlva elvihető. Utalvány bármelyik tanfolyamra, 1 évig érvényes. Műhelybolt: csütörtöktől vasárnapig 10–18.
- Kitalált elérhetőség: Agyagpad, 2000 Szentendre, Fazekas köz 4. (udvari műhely); hello@agyagpad.hu; +36 30 555 0142. Megközelítés: H5-ös HÉV Szentendre végállomás, onnan kb. 10 perc séta; autóval parkolás a Duna-korzónál. Egy rövid, látható megjegyzés a láblécben: „Az Agyagpad kitalált vállalkozás, vizsgamunka.”
- Tanfolyamok oldal GYIK (6–8 kérdés): kell-e tapasztalat, mit vegyek fel, mi van, ha nem sikerül, mikor vihetem el, lemondás (pl. 72 órával előtte díjmentes), jöhet-e gyerek (12 év felett felnőttel), akadálymentesség (az udvari műhely földszintes, egy küszöb van).
- **Nincsenek kitalált vélemények.** Nincs lorem ipsum.
- Ne használj gondolatjelet (— vagy –) írásjelként; nagykötőjel csak tartományban, szóköz nélkül (10–18). Magyar idézőjel: „…”. Ezres tagolás nem törő szóközzel: 19&nbsp;900&nbsp;Ft.

## Jelentkezési űrlap (Netlify Forms), `kapcsolat.html#jelentkezes`
- `<form name="jelentkezes" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/koszonjuk.html">`, rejtett `<input type="hidden" name="form-name" value="jelentkezes">`, rejtett honeypot mező.
- Mezők: név (kötelező), e-mail (kötelező), telefon (nem kötelező), tanfolyam típusa (select: Kóstoló / Kezdő kurzus / Csapatépítő / Ajándékutalvány / Egyéb kérdés; kötelező), létszám (szám, 1–6, csapatépítőnél max. 6), kívánt időpont (szabad szöveg, pl. „november 15., szombat délelőtt”), üzenet, adatkezelési hozzájárulás jelölőnégyzet (kötelező, link a tájékoztatóra).
- Minden mezőnek látható `<label>`-je van, a hibák szövegesen jelennek meg (natív HTML5 validáció elég, de legyen olvasható magyar hibaüzenet).
- Térkép: OpenStreetMap beágyazás (iframe, `loading="lazy"`, `title`), Szentendre belváros (kb. 47.6694, 19.0756), mellette szöveges megközelítés. A cím kitalált, ezért a jelölő a belvárosra mutasson.

## SEO
- Oldalanként egyedi `<title>` (max. ~60 karakter) és `meta description` (max. ~155 karakter), egy `<h1>`, logikus h2/h3 hierarchia, `lang="hu"`.
- Kanonikus URL és Open Graph (og:title, og:description, og:image egy Unsplash képpel, og:locale hu_HU) a `https://agyagpad-szentendre.netlify.app/` alapcímre.
- Főoldalon JSON-LD strukturált adat (`LocalBusiness`, név, cím, telefon, nyitvatartás csütörtök–vasárnap 10:00–18:00).
- Képek: csak a `kepek.md` Unsplash ID-i, `https://images.unsplash.com/<ID>?auto=format&fit=crop&fm=webp&q=75&w=800` és `w=1600` `srcset`-tel és `sizes`-szal, `width`/`height` attribútummal (ne ugráljon az elrendezés), magyar `alt` szöveggel; a hajtás alatti képek `loading="lazy" decoding="async"`, a főoldali nyitókép `fetchpriority="high"`.

## Sütibanner és GA4 (Google Consent Mode v2)
- A `js/main.js` elején egy konstans: `const GA_MEASUREMENT_ID = '';` (később kerül bele a valódi `G-…` azonosító).
- Alapértelmezett hozzájárulás: minden `denied`. A Google tag (`gtag.js`) **csak elfogadás után** töltődik be dinamikusan, és csak ha a `GA_MEASUREMENT_ID` nem üres.
- Banner: rövid szöveg, „Elfogadom” és „Csak a szükségeseket” gomb egyenrangú megjelenéssel, link az adatkezelési tájékoztatóra. A döntést `localStorage`-ban tárold (try/catch). A lábléc „Sütibeállítások” gombja újra megnyitja.
- Ha a `GA_MEASUREMENT_ID` üres, a banner akkor is működjön (a választás mentődik), csak GA nem töltődik.

## Minőség
- Mobil (375 px), tablet (768 px) és asztali (1440 px) nézetben is rendezett legyen; **sehol ne legyen vízszintes görgetés** (ellenőrizd a széles elemeket, elforgatott lapokat, negatív margókat; a `body`/`html` `overflow-x: clip` nem helyettesíti a javítást).
- Szöveg és háttér kontrasztja legalább WCAG AA.
- Nincs konzolhiba. A linkek mind működnek (relatív útvonalak, pl. `tanfolyamok.html`).
- Ne nyúlj a `.webprojekt/`, `alapanyag/`, `terv/`, `.claude/` mappákhoz és a `design-system.md`-hez. Ne commitolj.

## Kimenet
A végén írd le röviden magyarul: milyen fájlokat hoztál létre/módosítottál, mit ellenőriztél, és mi maradt nyitva.
