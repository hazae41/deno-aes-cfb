# AES-CFB encryption for Deno

WebAssembly powered AES-CFB encryption for Deno, written in Rust.

## Usage

    deno cache https://deno.land/x/deno-aes-cfb/mod.ts


```typescript
import { Aes256Cfb } from "./mod.ts";
// Aes256Cfb, Aes128Cfb, Aes192Cfb are supported

const secret = new TextEncoder().encode("gUkXp2s5v8x/A?D(G+KbPeShVmYq3t6w");
const iv = secret.slice(0, 16);
// secret and iv are both Uint8Arrays

const cipher = new Aes256Cfb(secret, iv);
const decipher = new Aes256Cfb(secret, iv);

const data = new Uint8Array([1, 2, 3]);

cipher.encrypt(data);
console.log(data);

decipher.decrypt(data);
console.log(data);
```

## Test

    deno run --allow-net https://deno.land/x/deno-aes-cfb/test.ts

## Building

- Install wasm-pack
  
      cargo install wasm-pack

- Build

      wasm-pack build --target web --release

- Add `import name from "../mod.ts";` to `pkg/aescfb.js`
