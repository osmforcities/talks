// Mermaid defaults are blue and rounded; these match styles/index.css so the two
// process diagrams read as part of the deck rather than as pasted-in output.
// (Slidev's defineMermaidSetup is an identity helper for typing only — skipping it
// avoids pulling in @slidev/types for no runtime gain.)
export default () => ({
  theme: "base",
  fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif",
  themeVariables: {
    primaryColor: "#edf6eb",
    primaryTextColor: "#171717",
    primaryBorderColor: "#57814c",
    lineColor: "#82bf71",
    secondaryColor: "#ffffff",
    tertiaryColor: "#ffffff",
    // Edge labels render as white boxes on the dark olive ground (--ofc-ground),
    // and their text color ignores textColor — keep diagrams label-free, but if a
    // label is ever needed this kills the white box at least.
    edgeLabelBackground: "#1a2b17",
    // The diagram renders in a shadow root, so styles/index.css cannot resize it —
    // this is the only lever. 20px grows the natural graph width to ~1115px against
    // the 1168px column; 21px overshoots it.
    fontSize: "20px",
  },
  flowchart: {
    curve: "basis",
    padding: 12,
  },
});
