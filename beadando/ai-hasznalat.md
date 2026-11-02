# AI-használat: Agyagpad kerámiaműhely

**Eszközök:** Claude Code (Claude Opus 5.5) a tervezéshez, a koordináláshoz, az ellenőrzéshez és az élesítéshez; OpenAI Codex CLI a weboldal-kód megírásához; a kurzus `tervezes`, `generalas` és `frontend-design` skilljei; Unsplash (stock fotók); GitHub és Netlify.

## Munkafolyamat

1. **Brief.** A kiadott `brief-1-keramia.md` tényeiből indultam. A `/tervezes` skill interjút készített velem: én döntöttem a fő üzenetről (kis csoport, mindig Dóra tanít, minden benne van az árban), az árakról és időpontokról (az AI javasolt életszerű értékeket, én hagytam jóvá), a gombokról („Jelentkezem”, „Utalványt adnék”), és arról, hogy ne legyenek kitalált vélemények. Ebből lett a `.webprojekt/brief.md` oldaltérképpel.
2. **Struktúra.** A briefből az AI elkészítette az oldaltérképet és a főoldal drótvázát (`terv/oldalterkep.png`, `terv/drotvaz-fooldal.png`). Átnéztem, ez lett a jóváhagyott szerkezet.
3. **Arculat és változatok.** A `/generalas` skill három eltérő designirányt dolgozott ki (színek, betűk, elrendezés). Képeket az Unsplashről válogattunk egy próbalapon. A Codex párhuzamosan megépítette a három kezdőoldalt. Mindhármat végignéztem, és az 1. irányt („A mázpróba”) választottam. Ebből készült a `design-system.md` (színek, betűk, méretskála, formák), ezt kapta meg az AI minden további lépéshez.
4. **Végleges oldal.** A Codex a választott prototípusból, a briefből és a design systemből megépítette a négy fő oldalt és a kiegészítő oldalakat saját CSS-sel, Tailwind nélkül. Benne van a Netlify-űrlap, az adatkezelési tájékoztató (a kurzus sablonjából), a sütibanner és a SEO-alapok.
5. **Javítások.** Claude automatikusan ellenőrizte mind a 7 oldalt mobil, tablet és asztali méretben (vízszintes kilógás, címsorok, képek, szövegszabályok), és képernyőképeken is átnézte. Mobilon a nyitócím a kép elé került, kisebb lett a fejléc gombja, és élesítés után kiderült egy hiba az űrlap legördülő listájában (hiányzott a „Kóstoló”), ezt is javítottuk.
6. **Élesítés.** Git-verziókövetés minden lépésnél, nyilvános GitHub-repó, Netlify GitHubról automatikus frissítéssel, űrlapfelismerés bekapcsolva, próbaüzenet elküldve és megérkezett.

## Mit adtam az AI-nak kiindulásnak
A kiadott brief tényei, a saját döntéseim az interjúban, a választott designirány, a `design-system.md`, a válogatott képlista és a szövegszabályok (tegeződés, nincs kitalált vélemény, nincs ígéret, amit egy valódi műhely nem vállalna). Az AI-nak adott utasítások a `.webprojekt/codex/` mappában olvashatók.

## Amit én csináltam
Minden döntés az enyém volt: a pozicionálás, az árak jóváhagyása, a designirány kiválasztása, a struktúra elfogadása és a szövegek átnézése. Az AI javasolt és épített, én válogattam, ellenőriztem és javíttattam.
