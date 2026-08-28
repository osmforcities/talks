---
theme: default
title: "OSM for Cities: Breaking the data waste cycle"
info: |
  State of the Map 2026, Paris, 28-30 August 2026.
  User Experiences track. 20 minutes + Q&A.
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
<div class="cover-event">State of the Map 2026 · Paris · 28–30 August</div>
</div>

<div class="cover-head">

# OSM for Cities:<br>Breaking the data waste cycle

<div class="ramp" />

<div class="cover-byline">Vitor George</div>

</div>

</div>

<!--
- **BEAT**: Hi, I'm Vitor. This is OSM for Cities: a platform to visualize and track city-level data. An experimental project I've worked on for a few years, now in a refreshed version — still a prototype, and I'm presenting its state for OSM community feedback.
- **CUES**: name · visualize + track city data · experimental, a few years, refreshed · prototype, here for feedback
- **BRIDGE**: "It starts with a job I had in 2003..."
- **GUARD**: Say "prototype" out loud. Everything lands easier once expectations are set.
-->

---
section: Stories of data waste
---

<div class="statement anchor-low">

# São Paulo, 2003

<div class="sub">A ring road to take cargo trucks off the city's streets.</div>

</div>

<!--
- **BEAT**: In 2003 I surveyed these roads by hand. The data died in a report.
- **CUES**: intern, transport consultancy · ring road, trucks off city streets · car + driver, avenue by avenue
- **BRIDGE**: "Seven years later, same problem, different city..."
- **GUARD**: Just set the scene — the payoff comes on the OSM slide. Tell it calmly.
-->

---

<div class="statement anchor-low">

# Mexico City, 2010

<div class="sub">Mapping informal bus stops for route planning.</div>

</div>

<!--
- **BEAT**: 2010, Mexico City: the stops existed nowhere but in the drivers' memory. We mapped them; the data stayed in the project.
- **CUES**: another consultancy · south of the city · informal transport, peseros · field teams again
- **BRIDGE**: "At that time, I was already aware of OpenStreetMap..."
- **GUARD**: Say "at least at the time". Do not claim Mexico City is still like this.
-->

---
section: Browsing city data
---

<div class="statement anchor-low">

# OpenStreetMap, 2026

<div class="sub">Can anyone find their city's data?</div>

</div>

<!--
- **BEAT**: Third card: OSM today. It was young then, and it felt right for cities that cannot keep a GIS team. Now it is mature. But can a lay person find their city's data?
- **CUES**: early days, Latin America · no permanent GIS team · mature now · the question, out loud
- **BRIDGE**: "The ecosystem around OSM is now super rich..."
- **GUARD**: Let the question hang. Do not answer it yet.
-->

---

<div class="statement">

# A rich ecosystem, but a steep learning curve

<div class="sub">Quickly reaching a dataset still takes technical knowledge.</div>

</div>

<!--
- **BEAT**: The ecosystem is rich now. But quickly reaching a dataset still takes technical knowledge: preprocessing, and filtering to your own area.
- **CUES**: name them: HOT Export Tool, Overpass Turbo, ohsome, uMap, MapComplete · preprocessing · your own area
- **BRIDGE**: "I made a non-exhaustive table of the existing tools..."
- **GUARD**: Compliment the tools first — the gap is about audience, not quality.
-->

---

# How it compares

<div class="table-card">

| Tool | Audience | Updates | Built-in analysis |
| --- | --- | --- | --- |
| HOT Export Tool | GIS, humanitarian | On-demand export | No |
| Overpass Turbo / QuickOSM | Power users | Live query | No |
| ohsome | Researchers | Indicators over time | Yes |
| Geofabrik / BBBike | Developers | Daily files | No |
| osmnx / pyrosm | Researchers | Live query | No |
| MapComplete | Contributors | Live editing | No |
| Overture | Commercial / AI | Monthly release | No |
| **OSM for Cities** | **Non-technical users** | **Daily + email alerts** | **Yes** |

</div>

<!--
- **BEAT**: The closest tool is HOT Export Tool. This is not a replacement. It is a complement.
- **CUES**: recurring question · unit of work, audience, ongoing, insight · "not an expert in the others" · ohsome API 2.0 launches at this SotM
- **BRIDGE**: "I felt that city officials, urban planners, local communities still go through many steps..."
- **GUARD**: Thank the other tools. Say it: I may have missed things and do not know them all deeply.
-->

---
title: v0, a first attempt
section: Building a stack
---

# v0, a first attempt

<div class="lede">Daily extracts from the planet file, stored in a git repository.</div>

<div class="img-pair">
  <img src="/captures/2023-daily-extract.png" alt="" />
  <img src="/captures/2023-git-repo.png" alt="" />
</div>

<!--
- **BEAT**: My first attempt, v0: a daily process sliced every Brazilian city out of the planet file, stored it all in a git repository, and a simple dashboard sat on top.
- **CUES**: daily extracts, per city · planet file · git repo, cities-of/brazil · simple dashboard · brittle, no interface path
- **BRIDGE**: "I realized that I could simply rely on existing tools..."
- **GUARD**: Say it plainly: it reached all of Brazil, daily. The problem was brittleness, not ambition.
-->

---

<div class="statement">

# Why not use something that exists?

<div class="sub">Overpass already queries OSM well. The effort could go into usability instead.</div>

</div>

<!--
- **BEAT**: The rewrite started with a question: why maintain my own pipeline when Overpass already queries OSM well? Let it do the querying, and put the effort into usability.
- **CUES**: no reinventing the wheel · Overpass does the querying · effort goes into usability
- **BRIDGE**: "So the stack today is simple..."
- **GUARD**: Credit Overpass warmly.
-->

---

<div class="diagram">
  <img class="diagram-svg" src="/v1-data-flow.svg" alt="OSM data flows via minutely diffs into Overpass, daily updates into PostgreSQL, then to the user's browser and email inbox" />
</div>

<div class="corner-copy">

# The refreshed workflow

<div class="lede">Existing tools do the heavy lifting: OSM data flows through Overpass and Postgres to the browser.</div>

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
- **BEAT**: The refreshed workflow: OSM replicates minutely into a dedicated Overpass instance. One cron job updates the existing datasets in Postgres; another emails users a report when their datasets change. The web app displays it all in the browser.
- **CUES**: minutely replication · dedicated Overpass, public ones are busy · dataset-update cron · email-report cron · both read/write Postgres
- **BRIDGE**: "And the data flows in a lazy way..."
- **GUARD**: Keep it generic. No architecture deep dive; the room does not need it.
-->

---

<div class="statement">

# Lazy by default

<div class="sub">Only datasets that people follow are updated daily.</div>

</div>

<!--
- **BEAT**: The lazy part: opening a dataset page fetches it once. Following it is what keeps it fresh — attention decides what gets queried, because monitoring the whole planet is unfeasible.
- **CUES**: open a page, it fetches once · follow = daily refresh · attention decides · whole planet unfeasible
- **BRIDGE**: "And these datasets can be observed in a panel..."
- **GUARD**: This answers the room's silent question — "you query all of OSM daily?!". Land it, one breath, then the screens.
-->

---
title: The dataset panel
section: A city dashboard
---

<Shot src="/captures/paris-bus-stops.jpeg" :vw="1600" :vh="1100" />

<div class="shot-cap">The dataset panel: one page per dataset per city.</div>

<!--
- **BEAT**: From here everything is a live screen, Paris as the example. The panel: city, dataset, category, last edit, last update. Everything on one page.
- **CUES**: live screens, Paris · transport category · last edited · updated minutes ago · map beside it
- **BRIDGE**: "Starting with what is actually in the data..."
- **GUARD**: This is the full page. The next slides only zoom into it. Say so, it sets up the tour.
-->

---
title: What is there
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="24" :y="180" :w="336" :h="250" :vw="1600" :vh="1100" />

<div class="shot-cap">Counts and lengths, and how recently each element was edited.</div>

<!--
- **BEAT**: Composition and freshness: what exists, in bands by last edit.
- **CUES**: nodes, ways, relations → GeoJSON · counts and lengths, e.g. a cycleway system · bands: 90 days, 1 year, 2 years, older
- **BRIDGE**: "Another panel is the number of people involved in the mapping..."
- **GUARD**: The bands are my own arbitrary cut. Say so.
-->

---
title: Who maps it
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="24" :y="415" :w="336" :h="162" :vw="1600" :vh="1100" />

<div class="shot-cap">Who keeps this data alive, counted from each element's last edit.</div>

<!--
- **BEAT**: Mapper count, derived from the last edit on each element, with the same recency bands.
- **CUES**: absolute number · last edit only, no full history · same bands, applied to people
- **BRIDGE**: "Finally, there is the tags panel..."
- **GUARD**: No full history, so older editors do not show. Say it. It previews what the rewrite cost.
-->

---
title: Tags
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="24" :y="562" :w="336" :h="400" :vw="1600" :vh="1100" />

<div class="shot-cap">Tags: critical coverage, accessibility, most-used.</div>

<!--
- **BEAT**: The tags panel is an insight into completeness: critical coverage, accessibility, most-used.
- **CUES**: wiki-recommended: operator, opening hours · accessibility as transversal coverage · most-used, local patterns
- **BRIDGE**: "Beyond reading the panel, there are a few actions the user can take..."
- **GUARD**: Ground it in one concrete example: a building carrying wheelchair information.
-->

---
title: Save, download, share
---

<Shot src="/captures/paris-bus-stops.jpeg" :x="8" :y="990" :w="368" :h="110" :vw="1600" :vh="1100" />

<div class="shot-cap">Save to follow it, download the GeoJSON, or share the URL.</div>

<!--
- **BEAT**: Save to monitor, and edits arrive by email. Download GeoJSON, share by URL. Admins can feature a dataset or force an update.
- **CUES**: save = monitored, email daily or weekly · GeoJSON download · URL share · admin: feature, force update
- **BRIDGE**: "About the map: initially it shows the recent edits..."
- **GUARD**: Quick slide. Do not dwell.
-->

---
title: The map, alive and filterable
---

<Shot src="/captures/paris-bus-recency.jpeg" :vw="1316" :vh="824" />

<div class="shot-cap">The map, colored by recency of edits: the default view.</div>

<!--
- **BEAT**: The map opens colored by recency of edits, the default: how alive the data is. Then it can be colored by the critical-coverage tags.
- **CUES**: recency is the default · how alive the data is · then color by coverage tags
- **BRIDGE**: "For example, wheelchair access on bus stops..."
- **GUARD**: "Alive" is the word to land: the map is the heartbeat, not decoration.
-->

---
title: Bus stops by wheelchair access
---

<Shot src="/captures/paris-bus-wheelchair.jpeg" :vw="1316" :vh="824" />

<div class="shot-cap">Bus stops by wheelchair access: accessibility, stop by stop.</div>

<!--
- **BEAT**: The same map, colored by wheelchair access: which stops are accessible, which are not, and where nobody checked yet.
- **CUES**: yes 1,005 · no 1,171 · missing 584 · accessibility as transversal coverage
- **BRIDGE**: "Another example, on a line dataset..."
- **GUARD**: One concrete reading, then move: a wheelchair user can see which stops work for them.
-->

---
title: Cycleways by smoothness
---

<Shot src="/captures/paris-cycleways-smoothness.jpeg" :vw="1316" :vh="824" />

<div class="shot-cap">Cycleways by smoothness: most segments carry no value yet.</div>

<!--
- **BEAT**: Cycleways colored by surface smoothness. Most segments carry no smoothness tag yet, and the map shows that gap at a glance.
- **CUES**: lines, not points · smoothness coverage 35% · missing 3,511 of 5.4k · a map of what is left to map
- **BRIDGE**: "So what else can be queried?..."
- **GUARD**: Frame missing data as an invitation to map, never as a failure of the mappers.
-->

---
section: Around the platform
---

<div class="statement">

# What else can be queried?

<div class="sub">200+ templates, based on the OSM wiki.</div>

</div>

<!--
- **BEAT**: Bus stops and cycleways were two examples. 200+ wiki-based templates work the same way, categorized, evolving with how the community maps.
- **CUES**: two examples so far · schools, hospitals, traffic lights · follows the wiki · schema keeps evolving
- **BRIDGE**: "Back on the Paris page, filtering by category..."
- **GUARD**: Caveat out loud: a listed template does not mean the city has that data: alpine huts in desert cities.
-->

---
title: The transport category
---

<Shot src="/captures/paris-area-transport.jpeg" :vw="1600" :vh="1000" />

<div class="shot-cap">The Paris area page, filtered to the transport category: 25 datasets.</div>

<!--
- **BEAT**: The Paris area page, filtered to transport: 25 datasets, from bicycle parking to tunnels, each with its own page like the ones we just saw.
- **CUES**: 22 categories in the sidebar · transport alone: 25 datasets · tags shown on each card
- **BRIDGE**: "And behind each of these cards there is nothing more than this..."
- **GUARD**: Do not read the grid aloud. Point at two or three cards and move.
-->

---

# A template is one Overpass query

<div class="lede">Defined in one line of YAML, resolved per city: the area id is the only thing that changes.</div>

<pre class="query query-yml">- ["bus-stops", "<span class="query-hl">highway=bus_stop</span>", "transport", "Bus"]</pre>

<div class="query-pair">

<img class="query-card" src="/captures/paris-bus-stops-card.jpeg" alt="The Bus Stops card on the Paris area page" />

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
- **BEAT**: Every template is one line of YAML, compiled into one Overpass query — only the city's relation id changes.
- **CUES**: one YAML line · rel 71525 = Paris · same query, any city · node+way+relation on purpose: shows the geometry mix
- **BRIDGE**: "That is everything on slides — now let me show it moving..."
- **GUARD**: Honest line: you cannot copy this out of the interface yet — it is one of the roadmap candidates the closing ask points at.
-->

---
section: Demo
---

<div class="statement centered">

# Demo

</div>

<!--
- **BEAT**: A recorded tour, narrated live: open osmforcities.org unsigned → the featured maps on the home page → the explore page and what it lists → search a city → bus stops → the same features we just saw, this time moving.
- **CUES**: unsigned, anonymous browser · featured maps · explore page · search the city · bus stops · quick pass over the panel features
- **BRIDGE**: "So that is the platform working. Which brings me to the invitation..."
- **GUARD**: Repetition with the screenshot tour is fine — this time it is the real thing moving, and quickly. Mention the email gate in passing: creating datasets asks for an email because updates need somewhere to go.
-->

---
class: cover
section: Community feedback
---

<div class="cover-page">

<div class="cover-head cover-head-split">

<div>

# How would you use it?

<div class="ramp" />

<div class="cover-tagline">Use cases, bugs, questions — all welcome.</div>

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
- **BEAT**: The ask, then the thanks: try it, send feedback — especially people working on local urban planning or public facilities. Then hand over: "What questions do you have?"
- **CUES**: solve a real problem · urban planning, public facilities · open source, GitHub · takeaway stays up all Q&A · HOT overlap = themed GeoJSON download, and that is where it ends · jump back to the compare slide if needed
- **BRIDGE**: none. This is the end.
- **GUARD**: This is the ask — slow down, look up. Never "any questions?": it invites a silent room. Be generous about every other project.
-->
