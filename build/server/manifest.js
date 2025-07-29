const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BC6KXTW2.js",app:"_app/immutable/entry/app.BVtYt5mD.js",imports:["_app/immutable/entry/start.BC6KXTW2.js","_app/immutable/chunks/dRr7bCuq.js","_app/immutable/chunks/wncdI86k.js","_app/immutable/entry/app.BVtYt5mD.js","_app/immutable/chunks/wncdI86k.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-NIxyqfEC.js')),
			__memo(() => import('./chunks/1-CpI8vrOW.js')),
			__memo(() => import('./chunks/2-CD--iV8G.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
