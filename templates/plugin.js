import { getFSXAModule } from "fsxa-pattern-library";

export default function (ctx, inject) {
  const fsxaModule = getFSXAModule(process.env.FSXA_MODE, {
    mode: "proxy",
    baseUrl: process.client ? "/api/fsxa" : "<%= options.appUrl %>/api/fsxa",
  });
  if (typeof ctx.store === "undefined") {
    throw new Error(
      "[FSXA-Module] Could not find Vuex-Store. Please initialize it.",
    );
  } else {
    ctx.store.registerModule("fsxa", {
      namespaced: true,
      ...fsxaModule,
    });
  }
}
