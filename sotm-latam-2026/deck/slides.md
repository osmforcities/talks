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
- **GUARD**: Decir "prototipo" en voz alta. Todo se recibe mejor cuando las expectativas están claras.
-->

---
section: Historias de datos desperdiciados
---

<div class="statement anchor-low">

# São Paulo, 2003

<div class="sub">Un anillo vial para sacar a los camiones de carga de las calles de la ciudad.</div>

</div>

<!--
- **BEAT**: En 2003 levanté estas vías a mano. Los datos quedaron enterrados en un informe.
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
- **BEAT**: 2010, aquí en la Ciudad de México: las paradas no existían en ningún lado, solo en la memoria de los choferes. Las mapeamos; los datos se quedaron en el proyecto.
- **CUES**: otra consultora · sur de la ciudad · transporte informal, peseros · equipos de campo otra vez · esta sala conoce esta historia mejor que yo: decirlo
- **BRIDGE**: "En esa época yo ya conocía OpenStreetMap..."
- **GUARD**: Decir "al menos en esa época". No afirmar que la Ciudad de México sigue así.
-->

---
section: Explorar datos urbanos
---

<div class="statement anchor-low">

# OpenStreetMap, 2026

<div class="sub">¿Cualquier persona puede encontrar los datos de su ciudad?</div>

</div>

<!--
- **BEAT**: Tercera tarjeta: OSM hoy. En aquel entonces era joven, y parecía lo indicado para ciudades que no pueden mantener un equipo SIG. Ahora es maduro. Pero ¿una persona no técnica puede encontrar los datos de su ciudad?
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

# Comparación con otras herramientas

<div class="table-card">

| Herramienta | Público | Actualización | Análisis integrado |
| --- | --- | --- | --- |
| HOT Export Tool | Equipos SIG y humanitarios | Exportación bajo demanda | No |
| Overpass Turbo / QuickOSM | Usuarios avanzados | Consulta en vivo | No |
| ohsome | Investigadores | Indicadores históricos | Sí |
| Geofabrik / BBBike | Desarrolladores | Extractos diarios | No |
| osmnx / pyrosm | Investigadores | Consulta en vivo | No |
| MapComplete | Mapeadores | Edición en vivo | No |
| Overture | Comercial / IA | Publicación mensual | No |
| **OSM for Cities** | **Público no técnico** | **Diaria + alertas por correo** | **Sí** |

</div>

<!--
- **BEAT**: La herramienta más cercana es HOT Export Tool. Esto no la reemplaza. La complementa.
- **CUES**: pregunta recurrente · unidad de trabajo, público, continuidad, análisis · "no soy experto en las demás"
- **BRIDGE**: "Sentía que funcionarios, urbanistas y comunidades locales todavía tenían que dar demasiados pasos..."
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
- **BEAT**: Mi primer intento, la v0: un proceso diario recortaba cada ciudad brasileña del archivo planet, guardaba todo en un repositorio git, y sobre eso funcionaba un tablero sencillo.
- **CUES**: extractos diarios, por ciudad · archivo planet · repo git, cities-of/brazil · tablero sencillo · frágil, sin camino hacia una interfaz
- **BRIDGE**: "Me di cuenta de que podía apoyarme en herramientas que ya existen..."
- **GUARD**: Decirlo claro: llegó a cubrir todo Brasil, todos los días. El problema era la fragilidad, no la ambición.
-->

---

<div class="statement">

# ¿Por qué no usar algo que ya existe?

<div class="sub">Overpass ya resuelve muy bien las consultas a OSM. El esfuerzo podía dedicarse a la usabilidad.</div>

</div>

<!--
- **BEAT**: La reescritura empezó con una pregunta: ¿por qué mantener mi propio pipeline si Overpass ya resuelve muy bien las consultas a OSM? Que Overpass haga las consultas y que el esfuerzo vaya a la usabilidad.
- **CUES**: no reinventar la rueda · Overpass hace las consultas · el esfuerzo va a la usabilidad
- **BRIDGE**: "Entonces el stack hoy es simple..."
- **GUARD**: Reconocer a Overpass con calidez.
-->

---

<div class="diagram">
  <img class="diagram-svg" src="/v1-data-flow.svg" alt="Los datos de OSM fluyen por diffs por minuto hacia Overpass, luego mediante actualizaciones diarias hacia PostgreSQL, y de ahí al navegador y al correo del usuario" />
</div>

<div class="corner-copy">

# El flujo renovado

<div class="lede">Las herramientas existentes hacen el trabajo pesado: los datos de OSM pasan por Overpass y PostgreSQL hasta el navegador.</div>

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
- **BEAT**: El flujo renovado: OSM se replica cada minuto en una instancia dedicada de Overpass. Un cron actualiza los datasets existentes en PostgreSQL; otro envía a los usuarios un reporte por correo cuando sus datasets cambian. La aplicación web muestra todo en el navegador.
- **CUES**: replicación por minuto · Overpass dedicado, los públicos están saturados · cron de actualización de datasets · cron de reportes por correo · ambos leen/escriben en PostgreSQL
- **BRIDGE**: "¿Por qué una instancia propia? Porque Overpass tiene mala fama..."
- **GUARD**: Mantenerlo general. Nada de detalle de arquitectura; la sala no lo necesita.
-->

---

<div class="statement">

# ¿Overpass es poco confiable?

<div class="sub">La mala fama viene sobre todo de los servidores públicos saturados. Con una instancia propia, el mismo software responde bien.</div>

</div>

<!--
- **BEAT**: Mucha gente cree que Overpass es inestable: errores 429, timeouts, consultas que fallan. Casi siempre es el servidor público, que recibe alrededor de un millón de consultas por día y hoy está por encima de su capacidad, en gran parte por bots. Nuestra instancia dedicada está casi ociosa: sin errores, la mayoría de las respuestas en menos de un segundo, datos con un minuto de retraso.
- **CUES**: 429 y 504 = política de carga, no bugs · servidor público: ~1M consultas/día, la wiki dice "no esperes alta confiabilidad" · el manual recomienda instancia propia a usuarios intensivos · la nuestra: CPU ~99% ociosa, cero 429/504, p95 < 1 s, ~1 min de retraso
- **BRIDGE**: "Y aun con espacio de sobra, los datos fluyen de forma perezosa..."
- **GUARD**: Decir "sobre todo", no "nunca es el software": hay bugs reales (memoria con `[date]`, `meta` lento). Las cifras propias son de los logs recientes, no un SLA. Sin specs del servidor. Agradecer a quienes operan las instancias públicas, no culparlos. Si preguntan: usamos la versión estándar 0.7.62, todas nuestras consultas piden `meta` y aun así responden en menos de un segundo; desde 2025 casi todo el trabajo del mantenedor es contra bots (cuotas, listas negras).
-->

---

<div class="statement">

# Perezoso por defecto

<div class="sub">Solo los datasets que alguien sigue se actualizan a diario.</div>

</div>

<!--
- **BEAT**: La parte perezosa: al abrir la página de un dataset, se consulta una sola vez. Guardarlo es lo que lo mantiene actualizado. La atención decide qué se consulta, porque monitorear todo el planeta es inviable.
- **CUES**: abrir una página, se consulta una vez · guardar = actualización diaria · la atención decide · todo el planeta, inviable
- **BRIDGE**: "Y estos datasets se pueden observar en un panel..."
- **GUARD**: Esto responde la pregunta silenciosa de la sala: "¿¡consultan todo OSM a diario!?". Aterrizarlo rápido, y luego las pantallas.
-->

---
title: El panel del dataset
section: Un tablero de ciudad
---

<Shot src="/captures/cdmx-bus-stops.jpeg" :vw="1600" :vh="1100" />

<div class="shot-cap">El panel del dataset: una página para cada dataset en cada ciudad.</div>

<!--
- **BEAT**: De aquí en adelante todo son pantallas reales, con la Ciudad de México como ejemplo: paradas de autobús. El panel: ciudad, dataset, categoría, última edición, última actualización. Todo en una página.
- **CUES**: pantallas reales, CDMX · paradas de autobús · editado hace días · actualizado hace segundos · mapa al lado
- **BRIDGE**: "Empezando por lo que realmente hay en los datos..."
- **GUARD**: Esta es la página completa. Las siguientes diapositivas solo hacen zoom en ella. Decirlo prepara el recorrido.
-->

---
title: Qué hay
---

<Shot src="/captures/cdmx-bus-stops.jpeg" :x="24" :y="180" :w="336" :h="250" :vw="1600" :vh="1100" />

<div class="shot-cap">Conteos y longitudes, y qué tan reciente es la edición de cada elemento.</div>

<!--
- **BEAT**: Composición y antigüedad: lo que existe, en franjas según la última edición.
- **CUES**: nodos, vías, relaciones → GeoJSON · 1,861 paradas, casi todas puntos · franjas: 90 días, 1 año, 2 años, más de 2 años · 27% editado en los últimos 90 días, casi la mitad hace más de 2 años
- **BRIDGE**: "Otro panel es el número de personas involucradas en el mapeo..."
- **GUARD**: Las franjas son un corte arbitrario mío. Decirlo.
-->

---
title: Quién lo mapea
---

<Shot src="/captures/cdmx-bus-stops.jpeg" :x="24" :y="415" :w="336" :h="162" :vw="1600" :vh="1100" />

<div class="shot-cap">Quién mantiene vivos estos datos, según la última edición de cada elemento.</div>

<!--
- **BEAT**: Número de mapeadores, derivado de la última edición de cada elemento, con las mismas franjas de antigüedad.
- **CUES**: 132 mapeadores · solo la última edición, sin historial completo · mismas franjas, aplicadas a personas · 14 activos en los últimos 90 días
- **BRIDGE**: "Por último, está el panel de etiquetas..."
- **GUARD**: Sin historial completo, los editores anteriores no aparecen. Decirlo. Anticipa lo que costó la reescritura.
-->

---
title: Etiquetas
---

<Shot src="/captures/cdmx-bus-stops.jpeg" :x="24" :y="562" :w="336" :h="400" :vw="1600" :vh="1100" />

<div class="shot-cap">Etiquetas: cobertura crítica, accesibilidad, las más usadas.</div>

<!--
- **BEAT**: El panel de etiquetas da una idea de la completitud: cobertura crítica, accesibilidad, las más usadas.
- **CUES**: recomendadas por la wiki · operador 65%, marquesina 34% · silla de ruedas 2% · las más usadas, patrones locales: network 70%
- **BRIDGE**: "Además de leer el panel, hay algunas acciones que se pueden hacer..."
- **GUARD**: "Cobertura crítica" es el texto de la interfaz; decirlo como "las etiquetas clave". Aterrizarlo en un ejemplo concreto: una parada con información de acceso en silla de ruedas.
-->

---
title: Guardar, descargar, compartir
---

<Shot src="/captures/cdmx-bus-stops.jpeg" :x="8" :y="990" :w="368" :h="110" :vw="1600" :vh="1100" />

<div class="shot-cap">Guardar para seguirlo, descargar el GeoJSON o compartir la URL.</div>

<!--
- **BEAT**: Guardarlo para seguirlo, y las ediciones llegan por correo. Descargar GeoJSON, compartir por URL. Los administradores pueden destacar un dataset o forzar una actualización.
- **CUES**: guardar = seguido, correo diario o semanal · descarga GeoJSON · compartir URL · admin: destacar, forzar actualización
- **BRIDGE**: "Sobre el mapa: al inicio muestra las ediciones recientes..."
- **GUARD**: Diapositiva rápida. No detenerse.
-->

---
title: El mapa, vivo y filtrable
---

<Shot src="/captures/cdmx-bus-recency.jpeg" :vw="1216" :vh="759" />

<div class="shot-cap">El mapa, coloreado según la antigüedad de las ediciones: la vista por defecto.</div>

<!--
- **BEAT**: El mapa abre coloreado según la antigüedad de las ediciones, por defecto: qué tan vivos están los datos. Luego se puede colorear según las etiquetas clave.
- **CUES**: antigüedad es la vista por defecto · 317 paradas editadas en la última semana · se nota dónde alguien mapeó hace poco: las rutas del poniente
- **BRIDGE**: "Por ejemplo, accesibilidad en silla de ruedas en paradas de autobús..."
- **GUARD**: "Vivo" es la palabra que hay que aterrizar: el mapa es el pulso, no decoración.
-->

---
title: Paradas según acceso en silla de ruedas
---

<Shot src="/captures/cdmx-bus-wheelchair.jpeg" :vw="1216" :vh="759" />

<div class="shot-cap">Paradas de autobús según acceso en silla de ruedas: casi ninguna tiene el dato.</div>

<!--
- **BEAT**: El mismo mapa, coloreado según acceso en silla de ruedas. Casi todo es gris: de 1,861 paradas, solo unas 40 tienen el dato.
- **CUES**: sí 34 · no 5 · limitado 2 · sin dato 1,830 · cobertura 2% · en París era 79%
- **BRIDGE**: "Otro ejemplo, en un dataset de líneas..."
- **GUARD**: Presentarlo como invitación a mapear, nunca como falla de los mapeadores. El gris es un mapa de trabajo pendiente: una tarde de mapatón lo cambia.
-->

---
title: Ciclovías según regularidad
---

<Shot src="/captures/cdmx-cycleways-smoothness.jpeg" :vw="1216" :vh="759" />

<div class="shot-cap">Ciclovías según la regularidad de la superficie: 9 de cada 10 tramos no tienen el dato.</div>

<!--
- **BEAT**: Ciclovías coloreadas según la regularidad de la superficie. Casi ningún tramo tiene la etiqueta smoothness, y el mapa lo muestra de un vistazo.
- **CUES**: líneas, no puntos · 542 tramos, 82 km · smoothness 10% · 489 de 542 sin dato · un mapa de lo que falta mapear
- **BRIDGE**: "Entonces, ¿qué más se puede consultar?..."
- **GUARD**: La plantilla cuenta solo highway=cycleway. Muchas ciclovías de la ciudad están mapeadas como carril sobre la calle (cycleway=lane), así que no decir que la CDMX tiene solo 82 km de ciclovías.
-->

---
section: Más sobre la plataforma
---

<div class="statement">

# ¿Qué más se puede consultar?

<div class="sub">Más de 200 plantillas basadas en la wiki de OSM.</div>

</div>

<!--
- **BEAT**: Paradas de autobús y ciclovías fueron dos ejemplos. Más de 200 plantillas basadas en la wiki funcionan igual, organizadas por categoría, y evolucionan a la par de cómo mapea la comunidad.
- **CUES**: dos ejemplos hasta ahora · escuelas, hospitales, semáforos · sigue la wiki · el esquema sigue evolucionando
- **BRIDGE**: "De vuelta en la página de la Ciudad de México, filtrando por categoría..."
- **GUARD**: Advertirlo en voz alta: que una plantilla esté listada no significa que la ciudad tenga esos datos, por ejemplo refugios de montaña en ciudades del desierto.
-->

---
title: La categoría de transporte
---

<Shot src="/captures/cdmx-area-transport.jpeg" :vw="1600" :vh="1000" />

<div class="shot-cap">La página de la Ciudad de México, filtrada por la categoría de transporte: 26 datasets.</div>

<!--
- **BEAT**: La página de la Ciudad de México, filtrada por transporte: 26 datasets, desde accesos de metro hasta corredores de autobús, cada uno con su propia página como las que acabamos de ver.
- **CUES**: 22 categorías en la barra lateral · solo transporte: 26 datasets · etiquetas visibles en cada tarjeta
- **BRIDGE**: "Y detrás de cada una de estas tarjetas no hay más que esto..."
- **GUARD**: No leer la cuadrícula en voz alta. Señalar dos o tres tarjetas y seguir.
-->

---

# Una plantilla es una consulta de Overpass

<div class="lede">Definida en una línea de YAML y aplicada a cada ciudad: el ID del área es lo único que cambia.</div>

<pre class="query query-yml">- ["bus-stops", "<span class="query-hl">highway=bus_stop</span>", "transport", "Bus", "public-transit"]</pre>

<div class="query-pair">

<img class="query-card" src="/captures/cdmx-bus-stops-card.jpeg" alt="La tarjeta «Paradas de autobús» en la página de la Ciudad de México" />

<span class="query-eq">=</span>

<pre class="query">[out:json][timeout:25];
rel(<span class="query-hl">17483459</span>);
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
- **BEAT**: Cada plantilla es una línea de YAML, compilada en una consulta de Overpass. Solo cambia el ID de la relación de la ciudad.
- **CUES**: una línea de YAML · rel 17483459 = Ciudad de México · la misma consulta, cualquier ciudad · node+way+relation a propósito: muestra la mezcla de geometrías
- **BRIDGE**: "Eso es todo en diapositivas; ahora veámoslo en movimiento..."
- **GUARD**: Ser honesto: todavía no se puede copiar esta consulta desde la interfaz. Es una de las ideas pendientes del proyecto.
-->

---
section: Demo
---

<div class="statement centered">

# Demo

</div>

<!--
- **BEAT**: Un recorrido grabado, narrado en vivo: abrir osmforcities.org sin iniciar sesión → los mapas destacados en la portada → la página Explorar y lo que lista → buscar Ciudad de México → paradas de autobús → las mismas funciones que acabamos de ver, esta vez en movimiento.
- **CUES**: sin iniciar sesión, navegador anónimo · mapas destacados · página Explorar · buscar la ciudad · paradas de autobús · pasada rápida por las funciones del panel
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
- **GUARD**: Esta es la invitación: bajar el ritmo, levantar la mirada. Nunca "¿alguna pregunta?": invita al silencio. Ser generoso con todos los demás proyectos.
-->
