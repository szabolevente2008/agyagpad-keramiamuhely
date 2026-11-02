# Agyagpad design system

A választott irány: **1. „A mázpróba”** (`koncepcio-1-a-mazproba.html`). A keramikusok kis agyaglapokra próbálják ki a mázakat; ezek a mázpróba-lapok adják az oldal visszatérő motívumát. Ez a fájl az arculat egyetlen forrása: az AI és az ember is ebből dolgozik, a CSS-ben (`css/style.css`) ezek az értékek CSS-változóként (`:root`) szerepelnek, a komponensekben nincs ettől eltérő szín, betű vagy méret.

## Hangulat
Meleg, kézműves, földközeli, kicsit játékos. Kőagyag alap, rajta élénk mázszínek. Egy kevés szabálytalanság (enyhén elforgatott lapok, nem egyforma sarkok), de rendezett rács. Nem steril, nem luxus, nem zsúfolt.

## Színek

| Token | Név | Hex | Mire |
|-------|-----|-----|------|
| `--color-primary` | Szeladon (mélyzöld máz) | `#3F6B57` | elsődleges gomb, kiemelt sáv, linkek |
| `--color-secondary` | Okker máz | `#C08A3E` | másodlagos kiemelés, mázpróba-lap |
| `--color-accent` | Kobalt máz | `#34508C` | harmadik mázszín, fókuszkeret |
| `--color-bg` | Kőagyag | `#E9E4DA` | oldal háttere |
| `--color-surface` | Nyers agyag | `#DCD5C7` | kártyák, váltakozó szakaszok |
| `--color-chalk` | Kréta | `#F4EFE4` | világos felületek, űrlapmezők |
| `--color-celadon-light` | Halvány szeladon | `#B7C9B4` | lap-változat, kiemelés sötét alapon |
| `--color-ochre-light` | Halvány okker | `#DAB578` | lap-változat, fókusz sötét alapon |
| `--color-text` | Vas | `#2B2722` | szöveg |
| `--color-muted` | Agyagszürke | `#6E665C` | másodlagos szöveg, feliratok |
| `--color-line` | Vonal | `rgba(43,39,34,.2)` | elválasztók, keretek |

Kontraszt: a szöveg (`#2B2722`) kőagyagon és krétán is AA feletti; fehér szöveg a szeladon és a kobalt alapon AA feletti. Okker alapon sötét szöveg legyen, ne fehér.

## Betűk
- **Címek, gombok, navigáció:** Bricolage Grotesque (Google Fonts, 300–800, opsz 12–96), tartalék: `system-ui, sans-serif`
- **Folyószöveg:** Literata (Google Fonts, 300–700 + dőlt 400), tartalék: `Georgia, serif`
- Mindkettő támogatja a magyar ékezeteket (latin-ext).

### Betűméret-skála (`clamp`, mobiltól asztaliig)
| Token | Méret | Használat |
|-------|-------|-----------|
| `--fs-display` | `clamp(3.4rem, 6.7vw, 6.6rem)` | főoldali nyitócím (h1) |
| `--fs-h1` | `clamp(2.6rem, 5vw, 4.6rem)` | aloldalak h1 |
| `--fs-h2` | `clamp(2.1rem, 4vw, 3.8rem)` | szakaszcímek |
| `--fs-h3` | `clamp(1.5rem, 2.2vw, 2.1rem)` | kártyacímek |
| `--fs-lead` | `clamp(1.1rem, 1.3vw, 1.3rem)` | bevezető bekezdés |
| `--fs-body` | `1rem` (16 px) | folyószöveg, sormagasság 1.75 |
| `--fs-small` | `0.875rem` | feliratok, megjegyzések |
| `--fs-xs` | `0.75rem` | lap-címkék |

Címek: Bricolage Grotesque 650–750, negatív betűköz (`-0.045em` a nagy címeknél), sormagasság 0.95–1.05, `text-wrap: balance`. Folyószöveg sorhossza legfeljebb kb. 65 karakter.

## Térköz és rács
- Oldalmargó: `--page-gutter: clamp(22px, 4.3vw, 80px)`, tartalom max. szélesség 1440 px.
- Szakaszok közti térköz: `--space-section: clamp(72px, 10vw, 150px)`.
- Belső térközök 8 px-es lépésekben (8, 16, 24, 32, 48, 64).

## Formák, árnyékok, mozgás
- **Mázpróba-lap (motívum):** szabálytalan sarkok, pl. `border-radius: 13px 8px 18px 9px`; enyhe elforgatás (`rotate(-2deg … 2deg)`), alul „csurgatott” máz-szél (SVG vagy `box-shadow: inset 0 -8px 0`), kicsi lyuk a lap tetején (felakasztáshoz). Előfordul: logó, nyitó rész mázpróba-táblája, tanfolyamkártyák, tények, gombok sarkai, lábléc.
- **Gomb:** `min-height: 54px`, `border-radius: 7px 5px 9px 5px`, elsődleges: szeladon alap, kréta szöveg; másodlagos: átlátszó alap, vas színű keret.
- **Árnyék:** egyetlen, meleg árnyék: `--shadow-tile: 4px 12px 24px rgba(75,62,43,.09)`.
- **Mozgás:** `--ease-spring: cubic-bezier(.2,.8,.25,1.3)`, hover 250–350 ms. Egy megkomponált nyitó mozzanat (a mázpróba-lapok sorban „felakadnak”), egyébként visszafogott. `prefers-reduced-motion` esetén nincs animáció.
- **Textúra:** nagyon halvány szemcse a háttéren (SVG zaj, kb. 15% átlátszóság).

## Komponensek
- Fejléc: szöveges logó kis mázpróba-lappal, navigáció (Főoldal, Tanfolyamok, A műhely, Kapcsolat), mindig látható „Jelentkezem” gomb; mobilon „Menü” gomb, teljes képernyős menü.
- Tanfolyamkártya: mázszínű lap (szeladon / okker / kobalt), időtartam, ár, rövid leírás, gomb.
- Tény-lap: rövid nagy szám vagy szó + egy mondat.
- Záró CTA sáv: szeladon alap, kréta szöveg.
- Lábléc: sötét (vas) alap, navigáció, cím, nyitvatartás, adatkezelési link.
- Űrlap: kréta mezők, vonal színű keret, 3 px kobalt fókuszkeret, hibaüzenet szövegesen.

## Szöveg
Tegező, meleg, egyszerű mondatok. Nincs gondolatjel írásjelként (nagykötőjel csak tartományban: 10–18). Magyar idézőjel: „…”. Nincsenek kitalált vélemények.
