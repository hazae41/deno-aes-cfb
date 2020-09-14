export {
  Aes128Cfb,
  Aes128Cfb8,
  Aes192Cfb,
  Aes192Cfb8,
  Aes256Cfb,
  Aes256Cfb8,
} from "./pkg/aescfb.js";

import init, { main } from "./pkg/aescfb.js";

async function read(path: string) {
  const url = new URL(path, import.meta.url);

  if (url.protocol === "file:") {
    return await Deno.readFile(url);
  }

  const res = await fetch(url);
  return await res.arrayBuffer();
}

await init(read("./pkg/aescfb_bg.wasm"));

main();
