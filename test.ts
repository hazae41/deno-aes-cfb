import { Aes256Cfb } from "./mod.ts";

const secret = new TextEncoder().encode("gUkXp2s5v8x/A?D(G+KbPeShVmYq3t6w");
const iv = secret.slice(0, 16);

const cipher = new Aes256Cfb(secret, iv);
const decipher = new Aes256Cfb(secret, iv);

const data = new Uint8Array([1, 2, 3]);

cipher.encrypt(data);
console.log(data);

decipher.decrypt(data);
console.log(data);
