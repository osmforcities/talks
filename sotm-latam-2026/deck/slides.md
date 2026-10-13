---
theme: default
title: "OSM for Cities: Datos abiertos para planificación urbana en América Latina"
info: |
  State of the Map Latam 2026, Ciudad de México, 27-29 de octubre de 2026.
  Eje Experiencias de Uso. 20 minutos + preguntas.
author: Vitor George
# `provider: none`: Geist is self-hosted in public/fonts and declared with @font-face
# in styles/index.css. Fetching it from fonts.googleapis.com meant two third-party
# requests at render time: offline or blocked at the venue is a fallback font and a
# reflow mid-talk, and on the published web deck it is a Google request per visitor.
fonts:
  sans: Geist
  provider: none
highlighter: shiki
# View transitions: slides sharing a `view-transition-name` (the <Shot> tour) morph
# into each other, which reads as a camera move across one screenshot. Everything
# else gets a plain cross-fade. Proven in deck-review/zoom-proof.md on 2026-08-14.
transition: view-transition
# Pinned, not auto: a venue laptop in dark mode would otherwise flip Mermaid's
# palette to dark nodes while the CSS below stays light.
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
# Slide-level keys in the headmatter apply to the first slide only, which is what
# makes the cover dark. See `.slidev-layout.cover` in styles/index.css.
class: cover
drawings:
  persist: false
mdc: true
---

<div class="cover-page">

<div class="cover-meta cover-meta-plain">
<div class="cover-event">State of the Map Latam 2026 · Ciudad de México · 27–29 de octubre</div>
</div>

<div class="cover-head">

# OSM for Cities:<br>Datos abiertos para planificación urbana en América Latina

<div class="ramp" />

<div class="cover-byline">Vitor George</div>

</div>

</div>

<!--
- **BEAT**: Hola, soy Vitor. Esto es OSM for Cities: una plataforma para visualizar y monitorear datos a nivel de ciudad. Un proyecto experimental en el que trabajo desde hace algunos años, ahora en una versión renovada. Sigue siendo un prototipo, y presento su estado para recibir retroalimentación de la comunidad OSM.
- **CUES**: nombre · visualizar + monitorear datos de ciudad · experimental, algunos años, renovado · prototipo, aquí para retroalimentación
- **BRIDGE**: "Todo empieza con un trabajo que tuve en 2003..."
- **GUARD**: Decir "prototipo" en voz alta. Todo cae mejor cuando las expectativas están claras.
-->

---
section: Historias de datos desperdiciados
---

<div class="statement anchor-low">

# São Paulo, 2003

<div class="sub">Un anillo vial para sacar a los camiones de carga de las calles de la ciudad.</div>

</div>

<!--
- **BEAT**: En 2003 levanté estas vías a mano. Los datos murieron en un informe.
- **CUES**: practicante, consultora de transporte · anillo vial, camiones fuera de la ciudad · auto + chofer, avenida por avenida
- **BRIDGE**: "Siete años después, el mismo problema, otra ciudad..."
- **GUARD**: Solo plantear la escena; el remate viene en la diapositiva de OSM. Contarlo con calma.
-->

---

<div class="statement anchor-low">

# Ciudad de México, 2010

<div class="sub">Mapear paradas informales de autobús para planear rutas.</div>

</div>

<!--
- **BEAT**: 2010, Ciudad de México: las paradas no existían en ningún lado, solo en la memoria de los choferes. Las mapeamos; los datos se quedaron en el proyecto.
- **CUES**: otra consultora · sur de la ciudad · transporte informal, peseros · equipos de campo otra vez
- **BRIDGE**: "En esa época yo ya conocía OpenStreetMap..."
- **GUARD**: Decir "al menos en esa época". No afirmar que la Ciudad de México sigue así.
-->

---
section: Explorar datos de ciudad
---

<div class="statement anchor-low">

# OpenStreetMap, 2026

<div class="sub">¿Cualquier persona puede encontrar los datos de su ciudad?</div>

</div>

<!--
- **BEAT**: Tercera tarjeta: OSM hoy. En aquel entonces era joven, y parecía lo indicado para ciudades que no pueden mantener un equipo SIG. Ahora es maduro. Pero, ¿una persona no técnica puede encontrar los datos de su ciudad?
- **CUES**: primeros años, América Latina · sin equipo SIG permanente · maduro ahora · la pregunta, en voz alta
- **BRIDGE**: "El ecosistema alrededor de OSM hoy es muy rico..."
- **GUARD**: Dejar la pregunta en el aire. No responderla todavía.
-->

---

<div class="statement">

# Un ecosistema rico, pero una curva de aprendizaje empinada

<div class="sub">Llegar rápido a un dataset todavía exige conocimiento técnico.</div>

</div>

<!--
- **BEAT**: El ecosistema hoy es rico. Pero llegar rápido a un dataset todavía exige conocimiento técnico: preprocesar y filtrar por tu propia área.
- **CUES**: nombrarlas: HOT Export Tool, Overpass Turbo, ohsome, uMap, MapComplete · preprocesamiento · tu propia área
- **BRIDGE**: "Armé una tabla, no exhaustiva, de las herramientas que existen..."
- **GUARD**: Primero elogiar las herramientas: la brecha es de público, no de calidad.
-->

---

# Cómo se compara

<div class="table-card">

| Herramienta | Público | Actualización | Análisis integrado |
| --- | --- | --- | --- |
| HOT Export Tool | SIG, humanitario | Exportación a demanda | No |
| Overpass Turbo / QuickOSM | Usuarios avanzados | Consulta en vivo | No |
| ohsome | Investigadores | Indicadores en el tiempo | Sí |
| Geofabrik / BBBike | Desarrolladores | Archivos diarios | No |
| osmnx / pyrosm | Investigadores | Consulta en vivo | No |
| MapComplete | Contribuidores | Edición en vivo | No |
| Overture | Comercial / IA | Versión mensual | No |
| **OSM for Cities** | **Público no técnico** | **Diaria + alertas por correo** | **Sí** |

</div>

<!--
- **BEAT**: La herramienta más cercana es HOT Export Tool. Esto no la reemplaza. La complementa.
- **CUES**: pregunta recurrente · unidad de trabajo, público, continuidad, análisis · "no soy experto en las demás"
- **BRIDGE**: "Sentía que funcionarios, urbanistas y comunidades locales todavía pasan por muchos pasos..."
- **GUARD**: Agradecer a las otras herramientas. Decirlo: puede que me falten cosas, y no las conozco todas a fondo.
-->

---
title: v0, un primer intento
section: Armar un stack
---

# v0, un primer intento

<div class="lede">Extractos diarios del archivo planet, guardados en un repositorio git.</div>

<div class="img-pair">
  <img src="/captures/2023-daily-extract.png" alt="" />
  <img src="/captures/2023-git-repo.png" alt="" />
</div>

<!--
- **BEAT**: Mi primer intento, la v0: un proceso diario recortaba cada ciudad brasileña del archivo planet, guardaba todo en un repositorio git, y encima había un tablero sencillo.
- **CUES**: extractos diarios, por ciudad · archivo planet · repo git, cities-of/brazil · tablero sencillo · frágil, sin camino hacia una interfaz
- **BRIDGE**: "Me di cuenta de que podía apoyarme en herramientas que ya existen..."
- **GUARD**: Decirlo claro: llegó a todo Brasil, todos los días. El problema era la fragilidad, no la ambición.
-->

---

<div class="statement">

# ¿Por qué no usar algo que ya existe?

<div class="sub">Overpass ya consulta OSM muy bien. El esfuerzo podía ir a la usabilidad.</div>

</div>

<!--
- **BEAT**: La reescritura empezó con una pregunta: ¿por qué mantener mi propio pipeline si Overpass ya consulta OSM muy bien? Que Overpass haga las consultas, y el esfuerzo va a la usabilidad.
- **CUES**: no reinventar la rueda · Overpass hace las consultas · el esfuerzo va a la usabilidad
- **BRIDGE**: "Entonces el stack hoy es simple..."
- **GUARD**: Reconocer a Overpass con calidez.
-->

---

<div class="diagram">
  <img class="diagram-svg" src="/v1-data-flow.svg" alt="Los datos de OSM fluyen por diffs minutales hacia Overpass, actualizaciones diarias hacia PostgreSQL, y de ahí al navegador y al correo del usuario" />
</div>

<div class="corner-copy">

# El flujo renovado

<div class="lede">Herramientas existentes hacen el trabajo pesado: los datos de OSM pasan por Overpass y Postgres hasta el navegador.</div>

</div>

<style>
/* The drawing is heavy top-right and empty bottom-left; title and copy sit in
   that empty corner, aligned to the layout padding. */
.corner-copy {
  position: absolute;
  left: 3.5rem;
  bottom: 4.5rem;
}
.corner-copy .lede {
  margin-top: 1rem;
}
.diagram {
  height: 100%;
}
</style>

<!--
- **BEAT**: El flujo renovado: OSM se replica cada minuto en una instancia dedicada de Overpass. Un cron actualiza los datasets existentes en Postgres; otro envía a los usuarios un reporte por correo cuando sus datasets cambian. La aplicación web muestra todo en el navegador.
- **CUES**: replicación minutal · Overpass dedicado, los públicos están saturados · cron de actualización de datasets · cron de reportes por correo · ambos leen/escriben en Postgres
- **BRIDGE**: "Y los datos fluyen de forma perezosa..."
- **GUARD**: Mantenerlo general. Nada de detalle de arquitectura; la sala no lo necesita.
-->

---

<div class="statement">

# Perezoso por defecto

<div class="sub">Solo los datasets que alguien sigue se actualizan a diario.</div>

</div>

<!--
- **BEAT**: La parte perezosa: abrir la página de un dataset lo consulta una vez. Seguirlo es lo que lo mantiene fresco. La atención decide qué se consulta, porque monitorear todo el planeta es inviable.
- **CUES**: abrir una página, se consulta una vez · seguir = actualización diaria · la atención decide · todo el planeta, inviable
- **BRIDGE**: "Y estos datasets se pueden observar en un panel..."
- **GUARD**: Esto responde la pregunta silenciosa de la sala: "¿¡consultan todo OSM a diario!?". Aterrizarlo, en un respiro, y luego las pantallas.
-->

---
title: El panel del dataset
section: Un tablero de ciudad
---

<Shot src="/captures/paris-bus-stops.jpeg" :vw="1600" :vh="1100" />

<div class="shot-cap">El panel del dataset: una página por dataset por ciudad.</div>

<!--
- **BEAT**: De aquí en adelante todo son pantallas reales, con París como ejemplo. El panel: ciudad, dataset, categoría, última edición, última actualización. Todo en una página.
- **CUES**: pantallas reales, París · categoría transporte · última edición · actualizado hace minutos · mapa al lado
- **BRIDGE**: "Empezando por lo que realmente hay en los datos..."
- **GUARD**: Esta es la página completa. Las siguientes diapositivas solo hacen zoom en ella. Decirlo, prepara el recorrido.
-->

---
title: Qué hay
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="24" :y="180" :w="336" :h="250" :vw="1600" :vh="1100" />

<div class="shot-cap">Conteos y longitudes, y qué tan reciente es la edición de cada elemento.</div>

<!--
- **BEAT**: Composición y frescura: lo que existe, en franjas según la última edición.
- **CUES**: nodos, vías, relaciones → GeoJSON · conteos y longitudes, p. ej. una red de ciclovías · franjas: 90 días, 1 año, 2 años, más antiguo
- **BRIDGE**: "Otro panel es el número de personas involucradas en el mapeo..."
- **GUARD**: Las franjas son un corte arbitrario mío. Decirlo.
-->

---
title: Quién lo mapea
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="24" :y="415" :w="336" :h="162" :vw="1600" :vh="1100" />

<div class="shot-cap">Quién mantiene vivos estos datos, contado a partir de la última edición de cada elemento.</div>

<!--
- **BEAT**: Número de mapeadores, derivado de la última edición de cada elemento, con las mismas franjas de antigüedad.
- **CUES**: número absoluto · solo la última edición, sin historial completo · mismas franjas, aplicadas a personas
- **BRIDGE**: "Por último, está el panel de etiquetas..."
- **GUARD**: Sin historial completo, los editores anteriores no aparecen. Decirlo. Anticipa lo que costó la reescritura.
-->

---
title: Etiquetas
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="24" :y="562" :w="336" :h="400" :vw="1600" :vh="1100" />

<div class="shot-cap">Etiquetas: cobertura crítica, accesibilidad, las más usadas.</div>

<!--
- **BEAT**: El panel de etiquetas da una idea de la completitud: cobertura crítica, accesibilidad, las más usadas.
- **CUES**: recomendadas por la wiki: operator, opening_hours · accesibilidad como cobertura transversal · las más usadas, patrones locales
- **BRIDGE**: "Además de leer el panel, hay algunas acciones que se pueden hacer..."
- **GUARD**: Aterrizarlo en un ejemplo concreto: un edificio con información de acceso en silla de ruedas.
-->

---
title: Guardar, descargar, compartir
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="8" :y="990" :w="368" :h="110" :vw="1600" :vh="1100" />

<div class="shot-cap">Guardar para seguirlo, descargar el GeoJSON o compartir la URL.</div>

<!--
- **BEAT**: Guardar para monitorear, y las ediciones llegan por correo. Descargar GeoJSON, compartir por URL. Los administradores pueden destacar un dataset o forzar una actualización.
- **CUES**: guardar = monitoreado, correo diario o semanal · descarga GeoJSON · compartir URL · admin: destacar, forzar actualización
- **BRIDGE**: "Sobre el mapa: al inicio muestra las ediciones recientes..."
- **GUARD**: Diapositiva rápida. No detenerse.
-->

---
title: El mapa, vivo y filtrable
---

<Shot src="/captures/paris-bus-recency.jpeg" :vw="1316" :vh="824" />

<div class="shot-cap">El mapa, coloreado por antigüedad de las ediciones: la vista por defecto.</div>

<!--
- **BEAT**: El mapa abre coloreado por antigüedad de las ediciones, por defecto: qué tan vivos están los datos. Luego se puede colorear por las etiquetas de cobertura crítica.
- **CUES**: antigüedad es la vista por defecto · qué tan vivos están los datos · luego colorear por etiquetas de cobertura
- **BRIDGE**: "Por ejemplo, accesibilidad en silla de ruedas en paradas de autobús..."
- **GUARD**: "Vivo" es la palabra que hay que aterrizar: el mapa es el pulso, no decoración.
-->

---
title: Paradas por acceso en silla de ruedas
---

<Shot src="/captures/paris-bus-wheelchair.jpeg" :vw="1316" :vh="824" />

<div class="shot-cap">Paradas de autobús por acceso en silla de ruedas: accesibilidad, parada por parada.</div>

<!--
- **BEAT**: El mismo mapa, coloreado por acceso en silla de ruedas: qué paradas son accesibles, cuáles no, y dónde nadie lo ha verificado todavía.
- **CUES**: sí 1,005 · no 1,171 · sin dato 584 · accesibilidad como cobertura transversal
- **BRIDGE**: "Otro ejemplo, en un dataset de líneas..."
- **GUARD**: Una lectura concreta, y seguir: una persona en silla de ruedas puede ver qué paradas le sirven.
-->

---
title: Ciclovías por regularidad
---

<Shot src="/captures/paris-cycleways-smoothness.jpeg" :vw="1316" :vh="824" />

<div class="shot-cap">Ciclovías por regularidad de la superficie: la mayoría de los tramos todavía no tiene valor.</div>

<!--
- **BEAT**: Ciclovías coloreadas por regularidad de la superficie. La mayoría de los tramos todavía no tiene la etiqueta smoothness, y el mapa muestra ese faltante de un vistazo.
- **CUES**: líneas, no puntos · cobertura de smoothness 35% · faltan 3,511 de 5.4 mil · un mapa de lo que falta mapear
- **BRIDGE**: "Entonces, ¿qué más se puede consultar?..."
- **GUARD**: Presentar los datos faltantes como una invitación a mapear, nunca como una falla de los mapeadores.
-->

---
section: Alrededor de la plataforma
---

<div class="statement">

# ¿Qué más se puede consultar?

<div class="sub">Más de 200 plantillas, basadas en la wiki de OSM.</div>

</div>

<!--
- **BEAT**: Paradas de autobús y ciclovías fueron dos ejemplos. Más de 200 plantillas basadas en la wiki funcionan igual, organizadas por categoría, evolucionando con la forma en que la comunidad mapea.
- **CUES**: dos ejemplos hasta ahora · escuelas, hospitales, semáforos · sigue la wiki · el esquema sigue evolucionando
- **BRIDGE**: "De vuelta en la página de París, filtrando por categoría..."
- **GUARD**: Advertirlo en voz alta: que una plantilla esté listada no significa que la ciudad tenga esos datos: refugios de montaña en ciudades del desierto.
-->

---
title: La categoría transporte
---

<Shot src="/captures/paris-area-transport.jpeg" :vw="1600" :vh="1000" />

<div class="shot-cap">La página del área de París, filtrada por la categoría transporte: 25 datasets.</div>

<!--
- **BEAT**: La página del área de París, filtrada por transporte: 25 datasets, desde estacionamientos de bicicletas hasta túneles, cada uno con su propia página como las que acabamos de ver.
- **CUES**: 22 categorías en la barra lateral · solo transporte: 25 datasets · etiquetas visibles en cada tarjeta
- **BRIDGE**: "Y detrás de cada una de estas tarjetas no hay más que esto..."
- **GUARD**: No leer la cuadrícula en voz alta. Señalar dos o tres tarjetas y seguir.
-->

---

# Una plantilla es una consulta de Overpass

<div class="lede">Definida en una línea de YAML, resuelta por ciudad: el id del área es lo único que cambia.</div>

<pre class="query query-yml">- ["bus-stops", "<span class="query-hl">highway=bus_stop</span>", "transport", "Bus"]</pre>

<div class="query-pair">

<img class="query-card" src="/captures/paris-bus-stops-card.jpeg" alt="La tarjeta Bus Stops en la página del área de París" />

<span class="query-eq">=</span>

<pre class="query">[out:json][timeout:25];
rel(<span class="query-hl">71525</span>);
map_to_area -> .searchArea;
(
  node[<span class="query-hl">"highway"="bus_stop"</span>](area.searchArea);
  way[<span class="query-hl">"highway"="bus_stop"</span>](area.searchArea);
  relation[<span class="query-hl">"highway"="bus_stop"</span>](area.searchArea);
);
out geom meta;</pre>

</div>

<style>
.query-pair {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.75rem;
}
.query-card {
  width: 310px;
  border-radius: 12px;
}
.query-eq {
  font-size: 3rem;
  font-weight: 700;
  color: var(--ofc-accent);
}
.query {
  width: fit-content;
  margin: 0;
  padding: 1.6rem 2.2rem;
  background: var(--ofc-paper);
  color: #171717;
  border-radius: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.05rem;
  line-height: 1.6;
}
.query-yml {
  margin: 2rem auto 0;
  padding: 0.9rem 1.6rem;
}
.query-hl {
  padding: 0 0.35em;
  border-radius: 6px;
  background: #edf6eb;
  color: #2f5427;
  font-weight: 700;
}
</style>

<!--
- **BEAT**: Cada plantilla es una línea de YAML, compilada en una consulta de Overpass. Solo cambia el id de la relación de la ciudad.
- **CUES**: una línea de YAML · rel 71525 = París · la misma consulta, cualquier ciudad · node+way+relation a propósito: muestra la mezcla de geometrías
- **BRIDGE**: "Eso es todo en diapositivas; ahora veámoslo en movimiento..."
- **GUARD**: Línea honesta: todavía no se puede copiar esto desde la interfaz. Es uno de los candidatos del roadmap a los que apunta el cierre.
-->

---
section: Demo
---

<div class="statement centered">

# Demo

</div>

<!--
- **BEAT**: Un recorrido grabado, narrado en vivo: abrir osmforcities.org sin sesión → los mapas destacados en la portada → la página de explorar y lo que lista → buscar una ciudad → paradas de autobús → las mismas funciones que acabamos de ver, esta vez en movimiento.
- **CUES**: sin sesión, navegador anónimo · mapas destacados · página de explorar · buscar la ciudad · paradas de autobús · pasada rápida por las funciones del panel
- **BRIDGE**: "Así funciona la plataforma. Lo que me lleva a la invitación..."
- **GUARD**: Repetir el recorrido de capturas está bien: esta vez es lo real en movimiento, y rápido. Mencionar de paso el registro por correo: crear datasets pide un correo porque las actualizaciones necesitan a dónde llegar.
-->

---
class: cover
section: Retroalimentación de la comunidad
---

<div class="cover-page">

<div class="cover-head cover-head-split">

<div>

# ¿Cómo lo usarías?

<div class="ramp" />

<div class="cover-tagline">Casos de uso, bugs, preguntas: todo es bienvenido.</div>

</div>

<div class="cover-qr-grid">

<div class="cover-qr">
  <img src="/qr-osmforcities.svg" alt="Código QR con enlace a osmforcities.org" />
  <span><strong>pruébalo</strong><br>osmforcities.org</span>
</div>

</div>

</div>

<div class="cover-meta">
<div class="cover-speaker">Vitor George<span class="cover-handle"><span class="ident"><simple-icons-openstreetmap /> vgeorge</span><span class="ident"><simple-icons-mastodon /> @vgeorge@en.osm.town</span><span class="ident"><simple-icons-linkedin /> vitorgeorge</span></span></div>
<div class="cover-credit">Con el apoyo de Development Seed <span class="heart">&hearts;</span></div>
</div>

</div>

<!--
- **BEAT**: La invitación, y luego el agradecimiento: pruébenlo, envíen retroalimentación, sobre todo quienes trabajan en planificación urbana local o equipamientos públicos. Luego pasar la palabra: "¿Qué preguntas tienen?"
- **CUES**: resolver un problema real · planificación urbana, equipamientos públicos · código abierto, GitHub · el cierre queda en pantalla durante todas las preguntas · coincidencia con HOT = descarga GeoJSON temática, y ahí termina · volver a la tabla comparativa si hace falta
- **BRIDGE**: ninguno. Este es el final.
- **GUARD**: Esta es la invitación: bajar el ritmo, levantar la mirada. Nunca "¿alguna pregunta?": invita a una sala en silencio. Ser generoso con todos los demás proyectos.
-->
