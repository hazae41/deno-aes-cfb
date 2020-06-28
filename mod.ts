export * from "./pkg/aescfb.js";
import init from "./pkg/aescfb.js";

export const name = "aescfb";

async function read(path: string) {
  const url = new URL(path, import.meta.url);

  if (url.protocol === "file:") {
    return await Deno.readFile(url);
  }

  const response = await fetch(url);
  return await response.arrayBuffer();
}

await init(read("./pkg/aescfb_bg.wasm"));
