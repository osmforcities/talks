---
theme: default
title: "OSM for Cities: City-level mobility data from OpenStreetMap"
info: |
  Open Transport Meetup, 11 November 2026.
  About 40 minutes + questions.
author: Vitor George
# `provider: none`: Geist is self-hosted in public/fonts and declared with @font-face
# in styles/index.css. Fetching it from fonts.googleapis.com meant two third-party
# requests at render time: offline or blocked is a fallback font and a reflow
# mid-talk, and on the published web deck it is a Google request per visitor.
fonts:
  sans: Geist
  provider: none
highlighter: shiki
# View transitions: slides sharing a `view-transition-name` (the <Shot> slides) morph
# into each other. Everything else gets a plain cross-fade.
transition: view-transition
# Pinned, not auto: a laptop in dark mode would otherwise flip Mermaid's
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
<div class="cover-event">Open Transport Meetup · 11 November 2026</div>
</div>

<div class="cover-head">

# OSM for Cities:<br>City-level mobility data from OpenStreetMap

<div class="ramp" />

<div class="cover-byline">Vitor George</div>

</div>

</div>

<!--
- **BEAT**: Hi, I'm Vitor. Thanks Holger for the invitation. This is OSM for Cities: a platform to browse and follow OpenStreetMap data city by city. It is an experimental project, still a prototype, and I'm here mostly for feedback from people who work with transport data.
- **CUES**: name · thanks Holger · browse + follow city data · experimental, prototype, here for feedback
- **BRIDGE**: "It starts with a job I had in 2003..."
- **GUARD**: Say "prototype" out loud. Everything lands easier once expectations are set. Plan: about 30 min core, 10 min mobility tour, then questions.
-->

---
section: Wasted data
---

<div class="statement anchor-low">

# São Paulo, 2003

<div class="sub">A ring road to take cargo trucks off the city's streets.</div>
<div v-click class="sub story-step">Avenue by avenue: a car, a driver, a spreadsheet. Weeks of surveying.</div>
<div v-click class="sub story-step">Then a report: the data ended up in a PDF. Nobody used it again.</div>

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
- **BEAT**: In 2003 I was an intern at a transport consultancy. The project: a ring road to take cargo trucks off the streets of São Paulo. My job was to survey the roads the trucks could use.

[click] A car, a driver, and me with a spreadsheet. Avenue by avenue, writing down lanes, widths, restrictions. Weeks of work.

[click] It all ended in a report. The data stayed inside a PDF, and nobody used it again. The next consultancy that needed those roads would have to survey them again.

- **CUES**: intern, transport consultancy · ring road · I surveyed the roads → car + driver, spreadsheet, avenue by avenue, weeks → report, PDF, nobody used it again
- **BRIDGE**: "Today the story is different..."
- **GUARD**: Tell it calmly: this story carries the whole talk, and this audience knows the situation first-hand. Neutral tone: the work was lost, nobody is to blame. Pause after "nobody used it again".
-->

---
section: Browsing city data
---

<div class="statement anchor-low">

# Then came OpenStreetMap

<div class="sub">2008: a young project with few tools, and clear potential.</div>
<div v-click class="sub story-step">Today the ecosystem around it is rich.</div>
<div v-click class="sub story-step">But without technical knowledge, finding and following a city's data is still hard.</div>

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
- **BEAT**: In 2008 I found OpenStreetMap and saw its potential: a common map, where what someone maps once, anyone can reuse. Exactly what was missing in São Paulo. But it was still young, with few tools.

[click] Today the ecosystem has grown a lot: there are tools for almost everything. Many people in this meetup build them.

[click] But for someone without technical knowledge, like a municipal office without a GIS team, finding the data of their city and following its changes is still hard. The gap is no longer the data, it is the access.

- **CUES**: 2008, found it · potential: map once, reuse many times · what São Paulo lacked · young, few tools → today, rich ecosystem → no technical knowledge: find and follow, still hard
- **BRIDGE**: "And that is where I started building something..."
- **GUARD**: Praise the tools first: the gap is about audience, not quality. "Follow" is the key word: it sets up the demo. If asked which tools: HOT Export Tool is the closest, Overpass Turbo and QuickOSM are for power users, ohsome for indicators over time, MapComplete for contributing.
-->

---

<div class="statement anchor-low">

# OSM for Cities

<div class="sub">A city's OpenStreetMap data in the browser, with a simple interface.</div>
<div v-click class="sub story-step">Explore it on a map, download it, follow its changes.</div>
<div v-click class="sub story-step">Free and open source, for any city in the world.</div>

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
- **BEAT**: OSM for Cities puts the OpenStreetMap data of a city in the browser, with a simple interface. No GIS software, no query language.

[click] Each dataset can be explored on a map, downloaded, and saved to follow its changes by email.

[click] It is free and open source, and it works for any city that has a boundary in OSM.

- **CUES**: city data in the browser, simple interface → explore, download, follow changes → free, open source, any city
- **BRIDGE**: "Let me show you how it looks..."
- **GUARD**: Quick: one minute. No history of earlier versions, the talk is about the current platform.
-->

---
section: Tour
---

<div class="statement centered">

# A tour of the platform

<div class="sub">Karlsruhe: bus stops.</div>

</div>

<!--
- **BEAT**: Live, in the browser. Home → search "Karlsruhe" → city page → Mobility → bus stops → panel → map → color by a tag.
- **CUES**: 1. home, featured maps, no account needed · 2. search "Karlsruhe": Nominatim, one result per place, population from the boundary's own tag · 3. city page: facts and links, topics and categories with icons, each card with description, counts, last edit · 4. bus stops, about 590: what is there (counts, edit recency bands), who maps it (last edit only, no full history), tags: shelter, bench, tactile paving and lit above 90%, operator 82%, wheelchair 33% · 5. save = follow, changes by email · download GeoJSON · share URL · 6. map: opens on edit recency · 7. color by wheelchair: two thirds not yet checked · color by operator: "Verkehrsbetriebe Karlsruhe GmbH" 461, plus "VBK" and the name without "GmbH", the same operator written three ways
- **BACKUP**: if the search fails, paste the URL: osmforcities.org/en/area/62518/dataset/bus-stops
- **BRIDGE**: "Bus stops is one dataset. For this meetup I picked a few more on mobility..."
- **GUARD**: Overview pace: the panel is read, not explained row by row. The recency bands are my own arbitrary cut, say so. Present gaps and spelling variants as an invitation to map, never as a failure of the mappers. Mention the email in passing: saving asks for an email because updates need somewhere to go. Figures measured on 11 Nov 2026: read them off the screen, they drift.
-->

---
title: The city page
---

<Shot src="/captures/ka-area-mobility.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">The page of Karlsruhe, filtered by the mobility topic: 32 datasets in seven categories.</div>

<!--
- **BEAT**: Backup for the live tour. Every city has this page. Pick a topic, then a category, or search by name.
- **CUES**: topic mobility · categories: bicycle, bus, rail, road, traffic, walking · each card is one template
- **BRIDGE**: "Opening bus stops..."
-->

---
title: The dataset page
---

<Shot src="/captures/ka-bus-stops.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">Bus stops in Karlsruhe: counts, mappers, tag coverage, and the map colored by the age of the last edit.</div>

<!--
- **BEAT**: One page per dataset per city. Left: what is there and who maps it. Right: the map, by default colored by how recent the last edit is.
- **CUES**: 591 stops · 102 mappers · shelter, tactile paving, bench above 90% · wheelchair 33% · save, download GeoJSON, share
- **BRIDGE**: "The same stops, colored by another tag..."
-->

---
title: Bus stops by operator
---

<Shot src="/captures/ka-bus-operator.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">Bus stops by operator: "VBK" and two spellings of "Verkehrsbetriebe Karlsruhe" are the same company.</div>

<!--
- **BEAT**: Coloring by a tag shows data quality at a glance: one operator under three spellings, and about a hundred stops with no operator.
- **CUES**: 461 with the full name · VBK 6 · a second spelling 4 · not specified 106 · this is a to-do list for local mappers
- **BRIDGE**: "Bus stops is one template. These are the mobility ones..."
-->

---
section: Mobility
---

# Mobility templates

<div class="lede">32 templates on transit, streets, cycling and walking. Each one is a dataset for any city.</div>

<div class="tpl-grid">
<div><h4>Public transit</h4>Public transit<br>Bus stops<br>Railway stations<br>Tram stops<br>Subway entrances<br>Transit platforms<br>Ferry terminals<br>Taxi ranks</div>
<div><h4>Networks</h4>Rail tracks<br>Busways<br>Bus lanes<br>Streets and roads<br>Bridge outlines<br>Tunnels</div>
<div><h4>Cycling</h4>Cycling infrastructure<br>Cycleways<br>Cycle lanes<br>Bicycle parking<br>Bicycle rental</div>
<div><h4>Walking</h4>Footways and paths<br>Car-free paths<br>Streets with sidewalks<br>Crossings<br>Steps<br>Curbs</div>
<div><h4>Traffic and parking</h4>Parking<br>EV charging<br>Fuel<br>Traffic signs<br>Traffic signals<br>Speed cameras<br>Traffic calming</div>
</div>

<div style="margin-top: 1.25rem; font-size: 1.15rem; color: var(--ofc-accent)">Reworked recently. If a tag, a name or a grouping looks off, feedback is welcome.</div>

<!--
- **BEAT**: For this meetup, the mobility part of the catalogue: 32 templates. Every name here is a dataset that exists for any city, built from the tags the OSM wiki and the iD presets document. The next slides open five groups, with Karlsruhe live next to them.
- **CUES**: five groups · transit stops and stations · networks as lines: rail, bus priority, streets · cycling · walking and accessibility: sidewalks, crossings, steps, curbs · traffic and parking · names and one-line descriptions exist in English, German, French, Spanish and Portuguese
- **BRIDGE**: "Starting with public transit..."
- **ASK**: The templates went through a refactor in the last weeks: new topics, parent templates, new names and descriptions, some templates dropped or merged. This audience knows transport tagging well. Ask them directly: if a tag, a name or a grouping seems off on any of the next slides, interrupt or write it in the chat.
- **GUARD**: Do not read the grid aloud. Say what this is not: OSM infrastructure data. No timetables, no GTFS, no routing, no real-time. It complements those. No template for route relations (bus or tram lines) yet: if asked, it is a good candidate, say so.
-->

---
title: Public transit
---

# Public transit

<div class="lede">One parent dataset for the multimodal picture, and one dataset per kind of stop.</div>

<div class="table-card plain">

| Template | OSM tags | Views on the map |
| --- | --- | --- |
| Public transit | all five below | |
| Bus stops | `highway=bus_stop` | shelter, bench, lit, tactile paving, wheelchair, operator |
| Railway stations | `railway=station` | station type, wheelchair, operator, network |
| Tram stops | `railway=tram_stop` | |
| Subway entrances | `railway=subway_entrance` | wheelchair |
| Transit platforms | `public_transport=platform` | tactile paving, wheelchair, shelter, bench, lit |

</div>

<!--
- **BEAT**: Public transit is a parent template: the union of five tags, for the multimodal picture. Each child is its own dataset, with its own views. A view is a tag the map can be colored and filtered by. Every dataset also has the edit recency view.
- **CUES**: live, Karlsruhe public transit, about 1,340 · tactile paving 81%, shelter 78%, wheelchair 51% · open transit platforms or bus stops and color by wheelchair · views are curated per template from the wiki, kept even when coverage is low, because the gap is the message
- **BRIDGE**: "Stops are points. The networks are lines, starting with bus priority..."
- **GUARD**: Stops with no views listed still open on edit recency. `public_transport=stop_position` is not included: platforms are where passengers wait. If asked about PTv2 stop areas or route relations: not covered yet.
-->

---
title: Public transit in Karlsruhe
---

<Shot src="/captures/ka-public-transit.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">Public transit in Karlsruhe: bus stops, tram stops, stations and platforms in one dataset.</div>

<!--
- **BEAT**: The parent dataset: all stop types together, about 1,300 features.
- **CUES**: points, lines and areas, because platforms are mapped as ways · 165 mappers
- **BRIDGE**: "For buses on the street..."
-->

---
title: Bus priority
---

# Bus priority

<div class="lede">Segregated corridors and on-street lanes. Older and newer tagging schemes are counted together.</div>

<div class="table-card plain">

| Template | OSM tags | Views on the map |
| --- | --- | --- |
| Busways | `highway=busway` | surface |
| Bus lanes | `busway=lane`, also `:left` `:right` `:both` | |
| | `lanes:bus=*`, also `:forward` `:backward` | |
| | `bus:lanes=*`, also `:forward` `:backward` | |

</div>

<!--
- **BEAT**: Two templates. Busways are the segregated corridors, bus rapid transit. Bus lanes are lanes on ordinary streets, and there the tagging has changed over time: the `busway=lane` scheme is deprecated but still holds most of the data, so the template counts it together with `lanes:bus` and `bus:lanes`.
- **CUES**: Karlsruhe has only about 30 segments, a tram city: one sentence, do not open it · for bus lanes at scale: São Paulo or Bogotá, if time allows · no views yet on bus lanes
- **BRIDGE**: "Karlsruhe is better known for rail..."
- **GUARD**: Tagging schemes are a sensitive topic: describe what the template counts, take no side on which scheme is right. Suggestions on this query are welcome, this audience knows it better than I do.
-->

---
title: Rail tracks
---

# Rail tracks

<div class="lede">One template for tram, subway, light rail and mainline tracks, with four views.</div>

<div class="table-card plain">

| View on the map | OSM tag | What it separates |
| --- | --- | --- |
| Rail type | `railway=*` | tram, subway, light rail, mainline rail |
| Electrification | `electrified=*` | overhead line, third rail, not electrified |
| Usage | `usage=*` | main lines, branch lines, industrial tracks |
| Service track | `service=*` | yards, sidings, spurs, crossovers |

</div>

<!--
- **BEAT**: Rail tracks complements the stops: the network itself. Four railway values in one dataset. Templates can choose their opening view, and this one opens on track type instead of edit recency.
- **CUES**: live, Karlsruhe rail tracks, about 2,900 segments · tram 1,465, rail 1,279, light rail 179: the tram-train city · electrified 98% · usage and service show yards, sidings, main lines
- **BRIDGE**: "On the map..."
- **GUARD**: Segments are OSM ways, not kilometres: the panel shows length too, read it off the screen. Disused and abandoned tracks are not included. In a metropolis this dataset can hit the size limit today.
-->

---
title: Rail tracks in Karlsruhe
---

<Shot src="/captures/ka-rail-tracks.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">Rail tracks in Karlsruhe, colored by type: tram, mainline rail, light rail.</div>

<!--
- **BEAT**: The map opens colored by track type. Karlsruhe is a good example: trams in the city, mainline rail around it, and light rail where the tram-train changes network.
- **CUES**: 525 km of track · electrification tagged on 98% · other views: electrification, usage, service track
- **BRIDGE**: "The same tracks, by electrification..."
-->

---
title: Rail tracks by electrification
---

<Shot src="/captures/ka-rail-electrified.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">The same tracks by electrification: overhead line almost everywhere.</div>

<!--
- **BEAT**: Same dataset, another view. Blue is overhead line, orange is not electrified.
- **CUES**: overhead line 2,520 · no 336 · "yes" without a system 3 · not specified 64
-->

---
title: Rail tracks by usage
---

<Shot src="/captures/ka-rail-usage.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">By usage: main lines, branch lines and industrial tracks. Trams carry no usage tag and stay grey.</div>

<!--
- **BEAT**: Usage only applies to the heavy rail network, so the tram network fades to grey: "not specified" is expected here, not a gap.
- **CUES**: main line 468 · industrial 196 · branch line 104 · military 8
-->

---
title: Rail tracks by service
---

<Shot src="/captures/ka-rail-service.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">By service: yards, spurs, sidings and crossovers stand out from the running lines.</div>

<!--
- **BEAT**: The service view highlights everything that is not a running line: yards, depots and station tracks.
- **CUES**: yard 643 · spur 251 · siding 180 · crossover 84
- **BRIDGE**: "Now cycling..."
- **GUARD**: The legend shows one raw value, turning_loop, without a readable label. If someone notices: yes, noted.
-->

---
title: Cycling
---

# Cycling

<div class="lede">Separate cycleways and the lanes tagged on streets are different objects in OSM. One parent dataset shows both.</div>

<div class="table-card plain">

| Template | OSM tags | Views on the map |
| --- | --- | --- |
| Cycling infrastructure | both below | lit |
| Cycleways | `highway=cycleway` | surface, lit, one-way, smoothness |
| Cycle lanes | `cycleway=lane` `track` `shared_lane` `share_busway` `opposite_lane` `opposite_track` | lit |
| | also on `cycleway:left` `:right` `:both` | |

</div>

<!--
- **BEAT**: A cycleway drawn as its own line and a lane tagged on a street are two different things in OSM, and counting only the first undercounts a city's network. Cycle lanes lists explicit values on purpose: `cycleway=no` and `cycleway=separate` are mapped absences, so a wildcard would count streets that have no lane.
- **CUES**: live, Karlsruhe cycling infrastructure · about 630 separate cycleways, about 1,330 street segments with lanes or tracks: twice as many · cycleways: surface 97%, lit 79%, smoothness 47% · on lanes, surface and one-way describe the street, not the lane, so they are not offered as views
- **BRIDGE**: "On the map..."
- **GUARD**: Counts are segments, not kilometres. Do not rank cities on this slide. `bicycle=designated` paths and cycle routes (relations) are not included.
-->

---
title: Cycling infrastructure in Karlsruhe
---

<Shot src="/captures/ka-cycling.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">Cycling infrastructure in Karlsruhe: cycleways and the lanes tagged on streets, 112 km in one dataset.</div>

<!--
- **BEAT**: The parent dataset: separate cycleways plus lanes and tracks tagged on the street itself.
- **CUES**: 112 km · 185 mappers · lit tagged on 92%
- **BRIDGE**: "And where the trip ends..."
-->

---
title: At the kerb
---

# At the kerb

<div class="lede">Where a trip starts or ends: bike parking, bike sharing and charging.</div>

<div class="table-card plain">

| Template | OSM tags | Views on the map |
| --- | --- | --- |
| Bicycle parking | `amenity=bicycle_parking` | type, covered, capacity, access, fee |
| Bicycle rental | `amenity=bicycle_rental` | type, operator, network, capacity |
| EV charging | `amenity=charging_station` | capacity, operator, access, fee |
| Parking | `amenity=parking`, `amenity=parking_space` | type, access, fee, capacity, surface |
| Taxi ranks | `amenity=taxi` | capacity, operator |

</div>

<!--
- **BEAT**: The last group, live in Karlsruhe: bike parking, bike sharing and charging. Point datasets with attributes that matter for planning: how many spaces, covered or not, who operates it, free or paid.
- **CUES**: bike parking, about 2,370: type 95%, covered 95%, capacity 87%, opens colored by type · rental: 27, mostly KVV.nextbike, operator written two ways · EV charging: 191, operator 87%, fee 51%, access 48%
- **EXTRA**: if time allows: streets and roads opening on "Road type", car-free paths.
- **BRIDGE**: "Mobility is one topic among several..."
- **GUARD**: Capacity is a number, not a category: the map view for it is basic today. Big-city line datasets (roads, rail in a metropolis) can hit the size limit today: if a page says the dataset is too large, say so plainly and bridge to the fast-maps part. Only show datasets rehearsed on production.
-->

---
title: Bicycle parking in Karlsruhe
---

<Shot src="/captures/ka-bicycle-parking.jpeg" :vw="1200" :vh="757" />

<div class="shot-cap">Bicycle parking in Karlsruhe, colored by type: stands, wall loops, racks, sheds, lockers.</div>

<!--
- **BEAT**: About 2,400 places to park a bicycle, colored by the type of parking.
- **CUES**: type and covered tagged on 95% · capacity 87% · wall loops 420: the ones that bend wheels · other views: covered, capacity, access, fee
- **BRIDGE**: "So what is this for?"
-->

---
section: What it is for
---

<div class="statement">

# Templates for planning

<div class="sub">More than 200 templates, each one answers a question.</div>
<div v-click class="sub use-step"><strong>Infrastructure:</strong> do sidewalks and cycleways carry surface and lighting?</div>
<div v-click class="sub use-step"><strong>Services:</strong> where are the schools, clinics and pharmacies, and where are they missing?</div>
<div v-click class="sub use-step"><strong>Community mapping:</strong> what is left to map? A task for a mapathon.</div>
<div v-click class="sub use-step"><strong>Changes:</strong> save a dataset and get what changes by email.</div>

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
- **BEAT**: The mobility datasets are a few templates among more than 200, all based on the OSM wiki and the iD presets. Each one answers a concrete question about the city.
- **CUES**: [click] infrastructure: sidewalks, cycleways, streets, with surface and lighting · [click] services: schools, clinics, pharmacies, where they are and where not · [click] community mapping: the tags panel says what is missing · [click] changes: save and get the email
- **BRIDGE**: "And it is not only urban planning..."
- **GUARD**: The platform shows where things are, it does not compute distances or coverage: say "the map shows where they are missing". A listed template does not guarantee data in the city, for example alpine huts in a desert city.
-->

---

<div class="statement">

# Beyond urban planning

<div class="sub">The same data answers other questions.</div>
<div v-click class="sub use-step"><strong>Public health:</strong> in an outbreak, buildings show where people live, and clinics and pharmacies where to treat them.</div>
<div v-click class="sub use-step"><strong>Emergencies:</strong> fire stations, ambulance stations, hydrants and defibrillators.</div>
<div v-click class="sub use-step"><strong>Research and journalism:</strong> compare cities, follow openings and closures.</div>

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
- **BEAT**: I started with urban planning in mind, but at State of the Map in Paris and in Mexico City people asked about uses I had not imagined. The same data answers other questions.
- **CUES**: [click] public health: buildings say where people live, door-to-door campaigns · clinics, health posts, pharmacies, laboratories · [click] emergencies: fire, ambulance, hydrants, defibrillators, and since this month disaster-preparedness templates · [click] research and journalism: compare cities, openings and closures
- **BRIDGE**: "Now, for those who want to know how it is built: three technical problems..."
- **GUARD**: Buildings arrive with the vector tiles shown at the end: do not say they are available on production yet. Quick slide for this audience, do not dwell.
-->

---
section: How it works
---

<div class="statement">

# How does it work inside?

<div class="sub">Three technical problems.</div>
<div v-click class="sub use-step"><strong>Global coverage:</strong> any city on the planet, without downloading the planet.</div>
<div v-click class="sub use-step"><strong>Updates:</strong> fresh data, without querying everything, every day.</div>
<div v-click class="sub use-step"><strong>Fast maps:</strong> big cities, without freezing the browser.</div>

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
- **BEAT**: Now, for those who want to know how it is built. A platform like this has to solve three technical problems.
- **CUES**: [click] global coverage: any city, without fetching the whole planet file · [click] updates: fresh, without querying all of OSM daily · [click] fast maps: big cities in the browser
- **BRIDGE**: "Starting with coverage..."
- **GUARD**: Quick: this is the index. Details come in each part. This audience is technical, so this part can go a little deeper than at the conferences.
-->

---
title: "Global coverage: Overpass"
section: Global coverage
---

<div class="statement">

# Global coverage: Overpass

<div class="sub">Overpass keeps the planet up to date by the minute and answers any query, so there is no planet file to process.</div>
<div v-click class="sub story-step">Unreliable? The reputation comes mostly from overloaded public servers.</div>
<div v-click class="sub story-step">On a dedicated instance, the same software responds well.</div>

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
- **BEAT**: Covering any city without downloading and processing the planet: Overpass already does that part. It keeps a copy of the planet updated by the minute, it is mature software from the OSM community, and it indexes the data and answers any query. Let Overpass do the querying, and let my effort go into usability.

[click] Many people think Overpass is unstable: 429 errors, timeouts, failing queries. Almost always that is a public server, shared by everyone and often at capacity.

[click] A dedicated instance does not carry that shared load, and the same software responds well.

- **CUES**: why not use what exists? · planet by the minute + index + queries · my effort: usability → 429 and 504 = load policy, not bugs · public servers: shared, often at capacity, heavy users are pointed to their own instance → dedicated: same software, no shared load
- **BRIDGE**: "With Overpass, a template is just a query..."
- **GUARD**: Credit Overpass warmly. Say "mostly", not "never the software": there are real bugs. No figures, no server specs. Thank the people who run the public instances, do not blame them. If asked: standard release, and every query asks for `meta`.
-->

---

# A template is one Overpass query

<div class="lede">Defined in one line of YAML and applied to each city: the area id is the only thing that changes.</div>

<pre class="query query-yml">- ["bus-stops", "<span class="query-hl">highway=bus_stop</span>", "bus", "bus_with_destination_display", "public-transit"]</pre>

<pre class="query query-ql">[out:json][timeout:25];
rel(<span class="query-hl">62518</span>);
map_to_area -> .searchArea;
(
  node[<span class="query-hl">"highway"="bus_stop"</span>](area.searchArea);
  way[<span class="query-hl">"highway"="bus_stop"</span>](area.searchArea);
  relation[<span class="query-hl">"highway"="bus_stop"</span>](area.searchArea);
);
out geom meta;</pre>

<style>
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
  font-size: 0.9rem;
}
.query-ql {
  margin: 1.5rem auto 0;
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
- **BEAT**: Every template is one line of YAML, compiled into an Overpass query. Only the id of the city's relation changes. That is why coverage is global: any city, any template, with nothing downloaded beforehand.
- **CUES**: one YAML line: id, tags, category, icon, parent · rel 62518 = Karlsruhe · same query, any city · node+way+relation on purpose: shows the geometry mix · several tags joined with `;` make a union, as in public transit and bus lanes
- **BRIDGE**: "That is coverage. Second problem: updates. And not everything is queried, all the time..."
- **GUARD**: Honest line: the query cannot be copied from the interface yet. "Any city" means any place with an administrative boundary in OSM: the search only offers those. The templates file is open in the repository, and suggestions for mobility templates are welcome.
-->

---
section: Updates
---

<div class="diagram">
  <img class="diagram-svg" src="/v1-data-flow.svg" alt="OSM data flows via minutely diffs into Overpass, daily updates into PostgreSQL, then to the user's browser and email inbox" />
</div>

<div class="corner-copy">

# Only what someone saves is updated

<div class="lede">Opening a dataset queries it once. Saving it adds it to the daily update, and changes arrive by email.</div>

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
- **BEAT**: Monitoring the whole planet, every day, is not feasible. So attention decides: opening a dataset page queries it once; saving it is what keeps it fresh. The flow: OSM replicates every minute into our Overpass. One cron job updates the saved datasets in PostgreSQL daily; another emails users a report when their datasets change.
- **CUES**: whole planet daily, not feasible · open = one query · save = daily update · attention decides → minutely replication · daily cron: saved only · email report cron · both read/write PostgreSQL
- **BRIDGE**: "Third problem: fast maps. Today, heavy datasets do not fit..."
- **GUARD**: This answers the silent question: "you query all of OSM daily?!". Keep the diagram general, no architecture detail.
-->

---
section: Fast maps
---

<div class="statement">

# Fast maps

<div class="sub">Today: the whole GeoJSON travels inside the page. The streets of a big city do not fit.</div>
<div v-click class="sub story-step">Coming soon: vector tiles, built next to Overpass. The browser downloads only what is in view.</div>

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
- **BEAT**: Today's limit: the page loads the whole dataset as GeoJSON. For bus stops, perfect. For the buildings or streets of a big city, that is hundreds of thousands of elements and the browser cannot cope. That is why some big-city datasets say "too large" today.

[click] Version 2: a new service, next to our Overpass, queries the data and builds one PMTiles file per dataset with tippecanoe. The app serves that static file and the browser asks only for the visible tiles.

- **CUES**: full GeoJSON inside the page · buildings, streets, sidewalks: what the community asks for most · a size limit today → one PMTiles per dataset · tippecanoe · static files, no tile server · recency and filters are kept · the tiler is its own open repository
- **BRIDGE**: "This is how the streets of Berlin look..."
- **GUARD**: No server details. If asked about global tiles (OpenFreeMap, Protomaps): they do not carry the edit date per element, and without it there is no recency map. Say "coming soon", no date.
-->

---
title: Streets of Berlin by road type
---

<Shot src="/captures/v2-berlin-streets-road-type.jpeg" :vw="1600" :vh="1100" />

<div class="shot-cap">Coming soon: the 88,000 street segments of Berlin, colored by road type. Development build.</div>

<!--
- **BEAT**: Every street in Berlin, from vector tiles, with the same panel as always. Colored by road type: the hierarchy of the network, from motorways to living streets. A dataset this size does not fit in the page today.
- **CUES**: 88.3k segments · 6,127 km · 813 mappers · residential 51 thousand, secondary 16 thousand, tertiary 10 thousand, primary 5 thousand · other views: speed limit (tagged on 95%, mostly 30 and 50), surface, lit, sidewalk
- **BRIDGE**: "And this is where I need your help..."
- **GUARD**: Capture from a development build, not production. Counts are OSM segments, not kilometres per speed limit. If asked when: "soon, it is in testing", no date. If asked about bigger cities: big datasets are built in the background and the app sends an email when the map is ready. What does not fit is refused with a clear message. Whole cities yes; metropolitan regions or states are not the goal. For this audience: this is what unlocks road and rail networks of big cities.
-->

---
class: cover
section: Questions and feedback
---

<div class="cover-page">

<div class="cover-head cover-head-split">

<div>

# How would you use it?

<div class="ramp" />

<div class="cover-tagline">1. Search for your city.<br>2. Save a dataset and get the changes by email.<br>3. Download it and open it in QGIS.<br><br>Free and open source. Use cases, bugs, questions: all welcome.</div>

</div>

<div class="cover-qr-grid">

<div class="cover-qr">
  <img src="/qr-osmforcities.svg" alt="QR code linking to osmforcities.org" />
  <span><strong>try it</strong><br>osmforcities.org</span>
</div>

</div>

</div>

<div class="cover-meta">
<div class="cover-speaker">Vitor George<span class="cover-handle"><span class="ident"><simple-icons-openstreetmap /> vgeorge</span><span class="ident"><simple-icons-mastodon /> @vgeorge@en.osm.town</span><span class="ident"><simple-icons-linkedin /> vitorgeorge</span></span></div>
<div class="cover-credit">Supported by Development Seed <span class="heart">&hearts;</span></div>
</div>

</div>

<!--
- **BEAT**: The ask, then the thanks: try it, send feedback, especially people working with transport and mobility data. Which mobility templates are missing? Which attributes matter for your work? Then hand over: "What questions do you have?"
- **CUES**: solve a real problem · missing mobility templates, missing attributes · open source, GitHub · the slide stays up during all questions · asked before, not built yet: custom areas (upload a polygon and follow it), an API with tokens, contributions per mapper · other tools: HOT Export Tool is the closest and this complements it; Overpass Turbo and QuickOSM are for power users
- **BRIDGE**: none. This is the end.
- **GUARD**: This is the ask: slow down, look up. Never "any questions?": it invites silence. Be generous about every other project.
-->
