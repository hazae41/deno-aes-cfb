import { Aes256Cfb, Aes256Cfb8 } from "./mod.ts";

const encoder = new TextEncoder();
const secret = encoder.encode("gUkXp2s5v8x/A?D(G+KbPeShVmYq3t6w");
const iv = secret.slice(0, 16);

function test_cfb() {
  const cipher = new Aes256Cfb(secret, iv);
  const decipher = new Aes256Cfb(secret, iv);

  const data = new Uint8Array([1, 2, 3]);

  cipher.encrypt(data);
  decipher.decrypt(data);

  cipher.encrypt(data);
  decipher.decrypt(data);

  cipher.encrypt(data);
  decipher.decrypt(data);

  console.log(data);
}

function test_cfb8() {
  const cipher = new Aes256Cfb8(secret, iv);
  const decipher = new Aes256Cfb8(secret, iv);

  const data = new Uint8Array([1, 2, 3]);

  cipher.encrypt(data);
  decipher.decrypt(data);

  cipher.encrypt(data);
  decipher.decrypt(data);

  cipher.encrypt(data);
  decipher.decrypt(data);

  console.log(data);
}

test_cfb();
test_cfb8();
