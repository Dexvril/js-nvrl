import { c as create_ssr_component } from './ssr-DlKedbjp.js';

const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n       // Kode script jika diperlukan\\n     <\/script>\\n\\n     <div class=\\"min-h-screen bg-gray-100\\">\\n       <slot />\\n     </div>\\n\\n     <style>\\n       @tailwind base;\\n       @tailwind components;\\n       @tailwind utilities;\\n     </style>"],"names":[],"mappings":"AASO,UAAU,IAAI,CACd,UAAU,UAAU,CACpB,UAAU,SAAS"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="min-h-screen bg-gray-100">${slots.default ? slots.default({}) : ``} </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BX7vXX5R.js.map
