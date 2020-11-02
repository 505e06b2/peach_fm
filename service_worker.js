self.addEventListener("install", (e) => {
	e.waitUntil((async () => {
		return (await caches.open("peach_fm")).addAll([
			"index.html",
			"manifest.webmanifest",
			"peach_fm.ogg",
		])
	})());
	console.log("[SW] Installation complete");
});

self.addEventListener("fetch", (e) => {
	const request_url = new URL(e.request.url);

	/*
	if(navigator.onLine) {
		e.respondWith((async () => {
			const response = await fetch(e.request);
			if(request_url.hostname === location.hostname) {
				console.log("[SW] Updated cache for ", request_url.pathname);
				(await caches.open("peach_fm")).put(e.request, response.clone());
			}
			return response;
		})());
		return;
	}*/

	/*
	console.log("[SW] Using cache for", request_url.pathname);
	e.respondWith((async () => await caches.match(e.request))());
	*/
});
