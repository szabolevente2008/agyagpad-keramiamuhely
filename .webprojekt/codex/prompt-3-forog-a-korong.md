Te egy prémium ügynökség senior webdesignere vagy. Egyetlen fájlt készítesz: `koncepcio-3-forog-a-korong.html` (a projekt gyökerében). Más fájlhoz NE nyúlj (különösen a többi koncepcio-*.html-hez és az index.html-hez), és ne commitolj.

## Előtte olvasd el
1. `.claude/skills/frontend-design/SKILL.md` (design-elvek, ezeket kövesd)
2. `.webprojekt/brief.md` (a teljes brand brief: tények, árak, időpontok, hang, oldaltérkép)
3. `.webprojekt/iranyok.json` → KIZÁRÓLAG a(z) 3. irányt („Forog a korong”) valósítsd meg
4. `.webprojekt/kepek.md` (Unsplash képek ID-vel és javasolt hellyel, csak ezeket használd)
5. `.claude/skills/generalas/references/subagent-utasitas.md` (a minőségi mérce és a kötelező szekciók, az alábbi eltérésekkel)

## A küldetésed
Építs kezdőoldal-prototípust a(z) 3. irányhoz („Forog a korong”) az Agyagpad kerámiaműhelynek. Kész érzetű dizájn, személyiséggel, nem sablon és nem beszínezett drótváz.

Az irány: Merészebb, plakátszerű irány. A hero egy nagy, lassan forgó kör (a korong), köré íródik a fő mondat. A kör visszatér a navigációban, a lépéseknél és a gombokon. Rózsás agyag háttér, oxidvörös, mélybarna és szilvakék máz, egy sötét invertált szakasszal.
Miért illik: A 25–45 éves városi közönségnek frissebb, grafikusabb hatású, de földszínű marad.

## Eltérések a subagent-utasitas.md-től (ezek az erősebbek)
- **Tegeződj** a szövegekben: a brief márkahangja kifejezetten tegező, meleg, kicsit játékos, mintha Dóra beszélne a műhely ajtajában.
- **Nincsenek kitalált vélemények.** A „társadalmi bizonyíték” helyett tények: max. 6 fő, mindig Dóra tanít, az árban benne van az agyag, a máz és két égetés, nem kell tapasztalat, a kész darab két hét múlva elvihető. A „portfólió” a kész kerámiadarabok (bögrék, tálak, tányérok).
- A kezdőoldal szekciói a brief „Kezdőoldal szekció-bontás” táblázatát kövessék (hero, így megy egy alkalom, tanfolyamok röviden, miért az Agyagpad, műhely és Dóra, ajándék, Szentendre, záró CTA, footer).
- Árak és időpontok pontosan a briefből: kóstoló 3 óra, 19 900 Ft/fő; kezdő kurzus 4 × 3 óra, 69 000 Ft/fő; csapatépítő 6 főig 129 000 Ft. Bolt: csütörtöktől vasárnapig 10–18.
- Gombok: elsődleges „Jelentkezem” (href="kapcsolat.html#jelentkezes"), másodlagos „Utalványt adnék” (href="kapcsolat.html?tipus=utalvany#jelentkezes"). A navigáció linkjei: index.html (Főoldal), tanfolyamok.html, muhely.html, kapcsolat.html (ezek még nem léteznek, ez rendben van). A fejlécben legyen mindig látható „Jelentkezem” gomb.
- Kitalált elérhetőség: Agyagpad, 2000 Szentendre, Fazekas köz 4. (udvari műhely); hello@agyagpad.hu; +36 30 555 0142. Megközelítés: H5-ös HÉV Szentendre végállomás, onnan kb. 10 perc séta.
- Logó: szöveges „Agyagpad” logó, az irány motívumával.
- A design-elveknél a frontend-design SKILL.md az irányadó: kerüld a generált oldalak árulkodó jeleit (csupa nagybetűs felcímke minden szekció fölött, középső ponttal összefűzött meta-sorok, „→” a gombok végén, egyetlen kiemelt szó minden címsorban, minden szekción ugyanaz a fade-up). Inkább egy jól megkomponált nyitó mozzanat és a márka motívuma, mint szétszórt effektek. Tartsd tiszteletben a `prefers-reduced-motion` beállítást, és legyen látható billentyűzetfókusz.
- Ne használj gondolatjelet (— vagy –) írásjelként a szövegekben; nagykötőjel csak tartományban, szóköz nélkül (10–18, 2–3 hét). Magyar idézőjelek: „…”.
- Mobilon (375 px) is tökéletes legyen: ne lógjon ki semmi vízszintesen, a menü legyen átgondolt.

## A <head> sablon (pontosan ezzel kezdődjön a fájl)
```html
<!doctype html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Korongozó tanfolyamok kezdőknek Szentendrén, legfeljebb 6 fős csoportban. Az árban benne van az agyag, a máz és két égetés.">
  <title>Forog a korong | Agyagpad kerámiaműhely, Szentendre</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300..800&family=Figtree:ital,wght@0,300..700;1,400&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'brand-primary':   'var(--color-brand-primary)',
            'brand-secondary': 'var(--color-brand-secondary)',
            'brand-accent':    'var(--color-brand-accent)',
            'brand-bg':        'var(--color-brand-bg)',
            'brand-surface':   'var(--color-brand-surface)',
            'brand-text':      'var(--color-brand-text)',
            'brand-muted':     'var(--color-brand-muted)',
          },
          fontFamily: {
            heading: 'var(--font-heading)',
            body:    'var(--font-body)',
          },
        },
      },
    };
  </script>
  <style>
    :root {
      --color-brand-primary:   #8E3B26;
      --color-brand-secondary: #3B2A22;
      --color-brand-accent:    #4B4E7A;
      --color-brand-bg:        #F1DCCF;
      --color-brand-surface:   #E8C9B7;
      --color-brand-text:      #2E211C;
      --color-brand-muted:     #7B5E52;
      --font-heading: 'Unbounded', system-ui, sans-serif;
      --font-body:    'Figtree', system-ui, sans-serif;
    }
    body {
      background: var(--color-brand-bg);
      color: var(--color-brand-text);
      font-family: var(--font-body);
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
    }
  </style>
</head>
```

## Kimenet
Egyetlen önálló fájl: `koncepcio-3-forog-a-korong.html` (HTML + inline <style> + <script> a </body> előtt, Tailwind Play CDN). A végén írd le röviden magyarul, mit építettél (motívum, szekciók, animációk), és mit ellenőriztél.
