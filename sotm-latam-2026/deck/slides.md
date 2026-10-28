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
section: Datos desperdiciados
---

<div class="statement anchor-low">

# São Paulo, 2003

<div class="sub">Un anillo vial para sacar los camiones de la ciudad.</div>
<div v-click class="sub story-step">Avenida por avenida: auto, chofer, planilla. Semanas levantando datos.</div>
<div v-click class="sub story-step">Y luego, un informe: los datos quedaron en un PDF. Nadie los volvió a usar.</div>

</div>

<style>
/* Story lines read as one paragraph revealed in steps, not three separate subs. */
.statement .story-step {
  margin-top: 0.75rem;
  /* Wider than the base 48ch so each step stays on one line. */
  max-width: 60ch;
}
</style>

<!--
- **BEAT**: En 2003 era practicante en una consultora de transporte. El proyecto: un anillo vial para sacar los camiones de carga de las calles de São Paulo. Mi trabajo era levantar las vías por donde podía pasar.

[click] Un auto, un chofer, y yo con una planilla. Recorríamos avenida por avenida, anotando carriles, anchos, restricciones. Semanas de trabajo.

[click] Todo terminó en un informe. Los datos quedaron dentro de un PDF, y nadie los volvió a usar. La próxima consultora que necesitara esas vías tendría que salir a levantarlas de nuevo.

- **CUES**: practicante, consultora de transporte · anillo vial · yo levantaba las vías → auto + chofer, planilla, avenida por avenida, semanas → informe, PDF, nadie los volvió a usar
- **BRIDGE**: "Hoy la historia es distinta..."
- **GUARD**: Contarlo con calma: es la historia que sostiene toda la charla. Detalles concretos, sin exagerar. Tono neutral: el trabajo se perdió, no culpar a nadie, nada de presupuesto ni de política. Pausa después de "nadie los volvió a usar".
-->

---
section: Explorar datos urbanos
---

<div class="statement anchor-low">

# Llega OpenStreetMap

<div class="sub">2008: lo descubrí y me di cuenta de su potencial. Todavía era joven, con pocas herramientas.</div>
<div v-click class="sub story-step">Hoy el ecosistema creció muchísimo.</div>
<div v-click class="sub story-step">Pero para alguien sin conocimientos técnicos, encontrar y seguir los datos de su ciudad todavía es difícil.</div>

</div>

<style>
/* Same stepped story as the São Paulo slide. */
.statement .story-step {
  margin-top: 0.75rem;
}
.statement .sub {
  max-width: 60ch;
  /* Two-line steps split evenly instead of leaving one word on the second line. */
  text-wrap: balance;
}
</style>

<!--
- **BEAT**: En 2008 descubrí OpenStreetMap y me di cuenta de su potencial: un mapa común, donde lo que alguien mapea una vez, cualquiera lo puede reutilizar. Justo lo que faltó en São Paulo. Pero todavía era joven, con pocas herramientas.

[click] Hoy el ecosistema creció muchísimo: hay herramientas para casi todo.

[click] Pero para alguien sin conocimientos técnicos, como una oficina municipal sin equipo SIG, encontrar los datos de su ciudad y seguir sus cambios todavía es difícil. La brecha ya no son los datos, es el acceso.

- **CUES**: 2008, lo descubrí · potencial: mapear una vez, reutilizar muchas · lo que faltó en São Paulo · joven, pocas herramientas → hoy, ecosistema rico → sin conocimientos técnicos: encontrar y seguir, todavía difícil
- **BRIDGE**: "Y ahí empecé a construir algo..."
- **GUARD**: Primero elogiar las herramientas: la brecha es de público, no de calidad. Las herramientas se nombran después, en la tabla comparativa. "Seguir" es la palabra clave: prepara la demo.
-->

---

<div class="statement anchor-low">

# OSM for Cities

<div class="sub">2023: un prototipo para seguir los datos de cada ciudad.</div>
<div v-click class="sub story-step">2025: lo empecé a reescribir desde cero.</div>
<div v-click class="sub story-step">Hoy: los datos de tu ciudad en el navegador, con una interfaz simple.</div>

</div>

<style>
/* Same stepped story as the São Paulo slide. */
.statement .story-step {
  margin-top: 0.75rem;
}
.statement .sub {
  max-width: 60ch;
  text-wrap: balance;
}
</style>

<!--
- **BEAT**: En 2023 empecé a prototipar una forma de seguir los datos de OSM ciudad por ciudad. Llegó a cubrir todo Brasil, todos los días, pero era frágil.

[click] En 2025 lo empecé a reescribir desde cero, apoyándome en herramientas que ya existen.

[click] Hoy: los datos de tu ciudad en el navegador, con una interfaz simple, para explorarlos y seguir sus cambios. Les muestro.

- **CUES**: 2023, prototipo, seguir datos por ciudad · todo Brasil, frágil → 2025, reescritura desde cero → hoy: en el navegador, interfaz simple, explorar y seguir
- **BRIDGE**: "Les muestro cómo se ve hoy..."
- **GUARD**: Rápido: la historia técnica de la v0 viene después, en la parte de cómo está hecho. Aquí solo las fechas y la idea.
-->

---
section: Recorrido
---

<div class="statement centered">

# Un recorrido por la plataforma

<div class="sub">Ciudad de México: paradas de autobús.</div>

</div>

<!--
- **BEAT**: En vivo, en el navegador. Portada → buscar "Ciudad de México" → paradas de autobús → panel → mapa → colorear por operador.
- **CUES**: 1. portada, mapas destacados · 2. buscar "Ciudad de México" · 3. página de la ciudad, filtrar transporte, paradas de autobús · 4. panel: qué hay, quién lo mapea, etiquetas, guardar · 5. mapa: antigüedad por defecto · 6. colorear por operador: acercar al centro, RTP y "Red de Transporte de Pasajeros" son el mismo
- **SALIDA**: Demo bien → volver al deck, `g` 16 Enter (Plantillas para planificar), saltar 6-15. Falla (sin red, más de 10 s cargando) → volver al deck y seguir con →: las diapositivas 6-15 son la misma demo en capturas.
- **BACKUP**: si la búsqueda falla, pegar la URL: osmforcities.org/es/area/17483459/dataset/bus-stops
- **BRIDGE**: "Paradas de autobús es una plantilla entre más de 200..." (o, si falló: "Lo mismo, en capturas. Empezando por la búsqueda...")
- **GUARD**: Vista general, rápida: el panel se lee, no se explica fila por fila. Mencionar de paso el correo: guardar pide un correo porque las actualizaciones necesitan a dónde llegar.
-->

---
title: La portada
---

<Shot src="/captures/home-es.jpeg" :vw="1600" :vh="1000" />

<div class="shot-cap">La portada: un mapa destacado y, arriba, la búsqueda para encontrar tu ciudad.</div>

<!--
- **BEAT**: La portada de osmforcities.org, sin iniciar sesión. Un mapa destacado, que va cambiando, y arriba la búsqueda.
- **CUES**: sin cuenta para explorar · mapa destacado, con su tarjeta · la búsqueda arriba
- **BRIDGE**: "Busquemos la Ciudad de México..."
- **GUARD**: Rápido. Es la puerta de entrada, no hay nada que explicar.
-->

---
title: Buscar una ciudad
---

<Shot src="/captures/search-mexico.jpeg" :x="330" :y="0" :w="512" :h="320" :vw="1600" :vh="1000" />

<div class="shot-cap">La búsqueda usa Nominatim: un resultado por lugar, con estado, país y población.</div>

<!--
- **BEAT**: Para encontrar una ciudad usamos Nominatim, el buscador de OSM. Cada resultado es un límite administrativo de OSM: ciudad, estado o país. Pedimos también sus etiquetas extra, y de ahí sale la población: es la etiqueta `population` del propio límite en OSM. Si la etiqueta no existe, no se muestra.
- **CUES**: Nominatim = buscador de OSM · resultado = relación de límite administrativo · «México»: la ciudad, el estado, el país · población = etiqueta `population`, vía extratags · estado y país vienen de la dirección del resultado · un resultado por lugar: antes París salía dos veces
- **BRIDGE**: "Se abre la página de la ciudad, con sus datasets por categoría..."
- **GUARD**: No prometer población en todas las ciudades: solo aparece si está etiquetada en OSM. Si preguntan: hay que escribir el nombre casi completo, Nominatim no está hecho para autocompletar.
-->

---
title: La página de la ciudad
---

<Shot src="/captures/cdmx-area-transport.jpeg" :vw="1600" :vh="1000" />

<div class="shot-cap">La página de la Ciudad de México, filtrada por la categoría de transporte: 26 datasets.</div>

<!--
- **BEAT**: La página de la Ciudad de México: todos sus datasets, por categoría. Filtrando por transporte: 26, desde accesos de metro hasta corredores de autobús. Elijo paradas de autobús.
- **CUES**: 22 categorías en la barra lateral · solo transporte: 26 datasets · cada tarjeta: elementos, mapeadores, última edición · paradas de autobús, la primera
- **BRIDGE**: "Al elegir un dataset, se abre su panel..."
- **GUARD**: No leer la cuadrícula en voz alta. Señalar la tarjeta de paradas y seguir.
-->

---
title: El panel del dataset
---

<Shot src="/captures/cdmx-bus-stops.jpeg" :vw="1600" :vh="1100" />

<div class="shot-cap">El panel del dataset: una página para cada dataset en cada ciudad.</div>

<!--
- **BEAT**: Las mismas pantallas de la demo, ahora una por una, con la Ciudad de México como ejemplo: paradas de autobús. El panel: ciudad, dataset, categoría, última edición, última actualización. Todo en una página.
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
- **BRIDGE**: "Por ejemplo, coloreado según el operador..."
- **GUARD**: "Vivo" es la palabra que hay que aterrizar: el mapa es el pulso, no decoración.
-->

---
title: Paradas según operador
---

<Shot src="/captures/cdmx-bus-operator.jpeg" :vw="1216" :vh="759" />

<div class="shot-cap">Paradas según operador: «RTP» y «Red de Transporte de Pasajeros» son el mismo.</div>

<!--
- **BEAT**: El mismo mapa, coloreado según el operador. Se ven las rutas: RTP, el Trolebús, Metrobús, los transportes eléctricos. Y se ve algo más: el mismo operador escrito de dos formas, "RTP" y "Red de Transporte de Pasajeros". Lo mismo con Servicio de Transportes Eléctricos, con y sin "de la Ciudad de México".
- **CUES**: 65% tiene operador · Red de Transporte de Pasajeros 438 + RTP 26 · STE 312 + 115 · gris = sin dato, 664 · unificar nombres = tarea para un mapatón
- **BRIDGE**: "Paradas de autobús es una plantilla entre más de 200..."
- **GUARD**: Presentarlo como invitación a mapear, nunca como falla de los mapeadores. Si preguntan por accesibilidad: el panel de etiquetas mostró silla de ruedas en 2%, el mismo mapa se puede colorear por ese dato.
-->

---
section: Para qué sirve
---

<div class="statement">

# Plantillas para planificar

<div class="sub">Más de 200 plantillas, cada una responde una pregunta.</div>
<div v-click class="sub use-step"><strong>Infraestructura:</strong> ¿las aceras y las ciclovías tienen superficie e iluminación?</div>
<div v-click class="sub use-step"><strong>Servicios:</strong> ¿dónde están las escuelas, clínicas y farmacias, y dónde faltan?</div>
<div v-click class="sub use-step"><strong>Mapeo comunitario:</strong> ¿qué falta mapear? Una tarea para un mapatón.</div>
<div v-click class="sub use-step"><strong>Cambios:</strong> guardar un dataset y recibir por correo lo que cambia.</div>

</div>

<style>
.statement .use-step {
  margin-top: 0.75rem;
}
.statement .sub {
  max-width: 60ch;
  text-wrap: balance;
}
.statement .use-step strong {
  color: var(--ofc-accent);
}
</style>

<!--
- **BEAT**: Paradas de autobús es una plantilla entre más de 200, todas basadas en la wiki. Cada una responde una pregunta concreta sobre la ciudad. Son los cuatro usos que propuse en el resumen de la charla.
- **CUES**: [click] infraestructura: aceras, ciclovías, calles, con superficie e iluminación · [click] servicios: escuelas, clínicas, farmacias, dónde hay y dónde no · [click] mapeo comunitario: el panel de etiquetas dice qué falta, el 2% de silla de ruedas, el operador escrito de dos formas · [click] cambios: guardar y recibir el correo
- **BRIDGE**: "Y no es solo planificación urbana..."
- **GUARD**: La plataforma muestra dónde están las cosas, no calcula distancias ni cobertura: decir "en el mapa se ve dónde faltan". Advertir que una plantilla listada no garantiza datos en la ciudad, por ejemplo refugios de montaña en ciudades del desierto.
-->

---

<div class="statement">

# Más allá de la planificación urbana

<div class="sub">Los mismos datos sirven para otras preguntas.</div>
<div v-click class="sub use-step"><strong>Salud pública:</strong> en una epidemia, los edificios muestran dónde vive la gente, y las clínicas y farmacias, dónde atenderla.</div>
<div v-click class="sub use-step"><strong>Emergencias:</strong> estaciones de bomberos, ambulancias, hidrantes y desfibriladores.</div>
<div v-click class="sub use-step"><strong>Investigación y periodismo:</strong> comparar ciudades, seguir aperturas y cierres.</div>

</div>

<style>
.statement .use-step {
  margin-top: 0.75rem;
}
.statement .sub {
  max-width: 60ch;
  text-wrap: balance;
}
.statement .use-step strong {
  color: var(--ofc-accent);
}
</style>

<!--
- **BEAT**: Yo empecé pensando en planificación urbana, pero en París la gente preguntó por otros usos que no había imaginado. Los mismos datos responden otras preguntas.
- **CUES**: [click] salud pública: ayer, charla sobre DHIS2, la plataforma de los ministerios de salud para seguir epidemias, con un ejemplo de Santa Lucía · los edificios dicen dónde vive la gente, campañas casa por casa · Santa Lucía tiene 68,500 edificios en OSM · clínicas, puestos de salud, farmacias, laboratorios · [click] emergencias: bomberos, ambulancias, hidrantes, desfibriladores · [click] investigación y periodismo: comparar ciudades, aperturas y cierres
- **BRIDGE**: "Ahora, para quien quiera saber cómo está hecho: tres problemas técnicos..."
- **GUARD**: Los edificios llegan con las vector tiles, que muestro al final: no decir que ya están disponibles. No decir que DHIS2 usa OSM for Cities: solo que el caso de uso es el mismo. Si preguntan por puntos de reunión, sirenas o refugios: todavía no hay plantillas, están en un ticket. Si preguntan por daños después de un sismo o una inundación: está planeado sobre los edificios, todavía no.
-->

---
section: Cómo funciona
---

<div class="statement">

# ¿Cómo funciona por dentro?

<div class="sub">Tres problemas técnicos.</div>
<div v-click class="sub use-step"><strong>Cobertura global:</strong> cualquier ciudad del planeta, sin descargar el planeta.</div>
<div v-click class="sub use-step"><strong>Actualizaciones:</strong> datos al día, sin consultar todo, todos los días.</div>
<div v-click class="sub use-step"><strong>Mapas rápidos:</strong> ciudades grandes, sin colgar el navegador.</div>

</div>

<style>
.statement .use-step {
  margin-top: 0.75rem;
}
.statement .sub {
  max-width: 60ch;
  text-wrap: balance;
}
.statement .use-step strong {
  color: var(--ofc-accent);
}
</style>

<!--
- **BEAT**: Ahora, para quien quiera saber cómo está hecho. Una plataforma así tiene que resolver tres problemas técnicos.
- **CUES**: [click] cobertura global: cualquier ciudad, sin bajar el planet entero · [click] actualizaciones: al día, sin consultar todo OSM a diario · [click] mapas rápidos: ciudades grandes en el navegador
- **BRIDGE**: "Empiezo por la cobertura. La primera versión..."
- **GUARD**: Rápido: es el índice. Los detalles vienen en cada parte.
-->

---
title: "Antes: una copia propia del planeta"
section: Cobertura global
---

# Antes: una copia propia del planeta

<div class="lede">v0 (2023): un planet propio, actualizado por minuto. Cada día, recortar Brasil y cada ciudad. Un GeoJSON por tema, en git.</div>

<img class="v0-shot" src="/captures/2023-git-repo.png" alt="El repositorio cities-of/brazil en git, con el archivo brazil/sp/sao-paulo/library.geojson" />

<style>
.lede {
  text-wrap: balance;
}
/* Portrait capture: crop to the repo header, path and first lines of GeoJSON. */
.v0-shot {
  display: block;
  width: 640px;
  height: 430px;
  margin: 1.5rem auto 0;
  object-fit: cover;
  object-position: center 12%;
  border-radius: 12px;
}
</style>

<!--
- **BEAT**: La v0, de 2023: mantenía mi propia copia del planeta, actualizada cada minuto. Cada día recortaba Brasil, y de ahí cada ciudad, y guardaba un GeoJSON por tema en un repositorio git. La idea ya estaba: un archivo por ciudad y por tema, y el historial de git mostraba los cambios. Lo que no escalaba era el motor: un pipeline propio, frágil, y solo para un país.
- **CUES**: planet propio, diffs por minuto · recorte diario: Brasil, luego cada ciudad · brazil/sp/sao-paulo/library.geojson: ciudad + tema · git = historial de cambios · la idea sobrevivió, el motor no
- **BRIDGE**: "Entonces me pregunté: ¿por qué mantener esto yo?..."
- **GUARD**: El problema era la fragilidad y la escala, no la ambición.
-->

---

<div class="statement">

# Ahora: Overpass

<div class="sub">Mantiene el planeta al minuto y responde cualquier consulta, sin un pipeline propio.</div>
<div v-click class="sub story-step">¿Poco confiable? La mala fama viene sobre todo de los servidores públicos saturados.</div>
<div v-click class="sub story-step">Con una instancia dedicada, el mismo software responde bien.</div>

</div>

<style>
.statement .story-step {
  margin-top: 0.75rem;
}
.statement .sub {
  max-width: 60ch;
  text-wrap: balance;
}
</style>

<!--
- **BEAT**: ¿Por qué mantener mi propio pipeline si Overpass ya resuelve muy bien las consultas a OSM? Overpass también guarda una copia del planeta actualizada por minuto, pero es software maduro de la comunidad OSM, que indexa los datos y responde cualquier consulta. Que Overpass consulte, y que mi esfuerzo vaya a la usabilidad.

[click] Mucha gente cree que Overpass es inestable: errores 429, timeouts, consultas que fallan. Casi siempre es el servidor público, que recibe alrededor de un millón de consultas por día y hoy está por encima de su capacidad, en gran parte por bots.

[click] Nuestra instancia dedicada está casi ociosa: sin errores de carga, datos con un minuto de retraso.

- **CUES**: ¿por qué no usar algo que ya existe? · planeta al minuto + índice + consultas · mi esfuerzo: la usabilidad → 429 y 504 = política de carga, no bugs · público: ~1M consultas/día, la wiki dice "no esperes alta confiabilidad" · el manual recomienda instancia propia a usuarios intensivos → la nuestra: CPU ~99% ociosa, cero 429/504, ~1 min de retraso
- **BRIDGE**: "Con Overpass, una plantilla es solo una consulta..."
- **GUARD**: Reconocer a Overpass con calidez. Decir "sobre todo", no "nunca es el software": hay bugs reales (memoria con `[date]`, `meta` lento). Las cifras propias son de los logs recientes, no un SLA. Sin specs del servidor. Agradecer a quienes operan las instancias públicas, no culparlos. Si preguntan: usamos la versión estándar 0.7.62, y todas nuestras consultas piden `meta`; desde 2025 casi todo el trabajo del mantenedor es contra bots (cuotas, listas negras).
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
- **BEAT**: Cada plantilla es una línea de YAML, compilada en una consulta de Overpass. Solo cambia el ID de la relación de la ciudad. Por eso la cobertura es global: cualquier ciudad, cualquier plantilla, sin descargar nada antes.
- **CUES**: una línea de YAML · rel 17483459 = Ciudad de México · la misma consulta, cualquier ciudad · node+way+relation a propósito: muestra la mezcla de geometrías
- **BRIDGE**: "Eso es la cobertura. Segundo problema: las actualizaciones. Y no se consulta todo, todo el tiempo..."
- **GUARD**: Ser honesto: todavía no se puede copiar esta consulta desde la interfaz. Es una de las ideas pendientes del proyecto. "Cualquier ciudad" quiere decir cualquier ciudad con un límite administrativo en OSM: la búsqueda solo ofrece esos.
-->

---
section: Actualizaciones
---

<div class="diagram">
  <img class="diagram-svg" src="/v1-data-flow.svg" alt="Los datos de OSM fluyen por diffs por minuto hacia Overpass, luego mediante actualizaciones diarias hacia PostgreSQL, y de ahí al navegador y al correo del usuario" />
</div>

<div class="corner-copy">

# Solo se actualiza lo que alguien guarda

<div class="lede">Abrir un dataset lo consulta una vez. Guardarlo lo suma a la actualización diaria, y los cambios llegan por correo.</div>

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
- **BEAT**: Monitorear todo el planeta, todos los días, es inviable. Entonces la atención decide: al abrir la página de un dataset, se consulta una sola vez; guardarlo es lo que lo mantiene actualizado. El flujo: OSM se replica cada minuto en nuestro Overpass. Un cron actualiza a diario los datasets guardados en PostgreSQL; otro envía a los usuarios un reporte por correo cuando sus datasets cambian.
- **CUES**: todo el planeta a diario, inviable · abrir = una consulta · guardar = actualización diaria · la atención decide → replicación por minuto · cron diario: solo guardados · cron de reportes por correo · ambos leen/escriben en PostgreSQL
- **BRIDGE**: "Tercer problema: mapas rápidos. Hoy, los datasets pesados no caben..."
- **GUARD**: Esto responde la pregunta silenciosa de la sala: "¿¡consultan todo OSM a diario!?". Mantener el diagrama general, sin detalle de arquitectura.
-->

---
section: Mapas rápidos
---

<div class="statement">

# Mapas rápidos

<div class="sub">Hoy: todo el GeoJSON viaja dentro de la página. Los edificios de una ciudad grande no caben.</div>
<div v-click class="sub story-step">Próximamente: vector tiles, generadas junto a Overpass. El navegador descarga solo lo que está a la vista.</div>

</div>

<style>
.statement .story-step {
  margin-top: 0.75rem;
}
.statement .sub {
  max-width: 60ch;
  text-wrap: balance;
}
</style>

<!--
- **BEAT**: El límite de hoy: la página carga el dataset completo como GeoJSON. Para paradas de autobús, perfecto. Para edificios o calles de una ciudad grande, son cientos de miles de elementos y el navegador no aguanta. Por eso hoy no ofrecemos edificios.

[click] La versión 2: un servicio nuevo, al lado de nuestro Overpass, consulta los datos y genera un archivo PMTiles por dataset con tippecanoe. La app sirve ese archivo estático y el navegador pide solo los tiles visibles.

- **CUES**: GeoJSON completo dentro de la página · edificios, calles, banquetas: lo que más pide la comunidad · hoy hay un tope de tamaño → un PMTiles por dataset · tippecanoe · archivos estáticos, sin servidor de tiles · antigüedad y filtros se conservan
- **BRIDGE**: "Así se ven los edificios de Santa Lucía..."
- **GUARD**: Sin detalles del servidor. Si preguntan por tiles globales (OpenFreeMap, Protomaps): no traen la fecha de edición por elemento, y sin eso no hay mapa de antigüedad. Si piden números: en una prueba interna, los edificios de Ámsterdam en GeoJSON pesaban 124 MB y ocupaban 1.2 GB de memoria; el tope impide que eso pase en producción.
-->

---
title: Edificios de Santa Lucía
---

<Shot src="/captures/v2-saint-lucia-buildings.jpeg" :vw="1600" :vh="1000" />

<div class="shot-cap">Próximamente: los 68,500 edificios de Santa Lucía, coloreados por tipo.</div>

<!--
- **BEAT**: Santa Lucía, la del ejemplo de DHIS2: 68,500 edificios, desde vector tiles, con el mismo panel de siempre. Coloreados por tipo: casas, escuelas, iglesias, comercios. Es lo que pedía la charla de salud: dónde vive la gente.
- **CUES**: 68.5k edificios · 915 mapeadores · por tipo: casas 13 mil, escuelas, iglesias · "Sí" = building=yes, sin tipo: 54 mil, trabajo para mapear
- **BRIDGE**: "Y aquí es donde necesito su ayuda..."
- **GUARD**: Captura de la versión en desarrollo, no de producción. Decir "próximamente", sin fecha. Si preguntan cuándo: "en las próximas semanas, ya está en pruebas". Si preguntan por ciudades más grandes: los datasets grandes se generan en segundo plano y la app avisa por correo cuando el mapa está listo; São Paulo, con 2.1 millones de edificios, funciona. Lo que no cabe se rechaza con un mensaje claro. Ciudades enteras sí; áreas metropolitanas o estados no son el objetivo.
-->

---
class: cover
section: Preguntas y comentarios
---

<div class="cover-page">

<div class="cover-head cover-head-split">

<div>

# ¿Cómo lo usarías?

<div class="ramp" />

<div class="cover-tagline">1. Busca tu municipio.<br>2. Guarda un dataset y recibe los cambios por correo.<br>3. Descárgalo y ábrelo en QGIS.<br><br>Gratis y de código abierto. Casos de uso, bugs, preguntas: todo es bienvenido.</div>

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
- **BEAT**: La invitación, y luego el agradecimiento: pruébenlo, envíen retroalimentación, sobre todo quienes trabajan en planificación urbana local o equipamientos públicos. Si trabajas en un municipio: busca tu ciudad hoy y guarda un dataset. Luego pasar la palabra: "¿Qué preguntas tienen?"
- **CUES**: resolver un problema real · planificación urbana, equipamientos públicos · código abierto, GitHub · el cierre queda en pantalla durante todas las preguntas · coincidencia con HOT = descarga GeoJSON temática, y ahí termina · si preguntan por otras herramientas: HOT Export Tool es la más cercana, esto no la reemplaza, la complementa; Overpass Turbo y QuickOSM son para usuarios avanzados, esto es para quien no es técnico
- **BRIDGE**: ninguno. Este es el final.
- **GUARD**: Esta es la invitación: bajar el ritmo, levantar la mirada. Nunca "¿alguna pregunta?": invita al silencio. Ser generoso con todos los demás proyectos.
-->
