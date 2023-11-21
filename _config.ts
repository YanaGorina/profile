import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
// import favicon from "lume/plugins/favicon.ts";
import jsx from "lume/plugins/jsx.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
  location: new URL("https://yanagorina.github.io/profile/"),
});

site.use(esbuild());
// site.use(favicon());
site.use(jsx());
site.use(jsx_preact());
site.use(tailwindcss());
site.use(postcss());
site.copy("images");

export default site;
