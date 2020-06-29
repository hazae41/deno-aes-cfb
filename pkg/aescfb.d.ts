/* tslint:disable */
/* eslint-disable */
/**
*/
export class Aes128Cfb {
  free(): void;
/**
* @param {Uint8Array} secret 
* @param {Uint8Array} iv 
*/
  constructor(secret: Uint8Array, iv: Uint8Array);
/**
* @param {Uint8Array} data 
*/
  encrypt(data: Uint8Array): void;
/**
* @param {Uint8Array} data 
*/
  decrypt(data: Uint8Array): void;
}
/**
*/
export class Aes128Cfb8 {
  free(): void;
/**
* @param {Uint8Array} secret 
* @param {Uint8Array} iv 
*/
  constructor(secret: Uint8Array, iv: Uint8Array);
/**
* @param {Uint8Array} data 
*/
  encrypt(data: Uint8Array): void;
/**
* @param {Uint8Array} data 
*/
  decrypt(data: Uint8Array): void;
}
/**
*/
export class Aes192Cfb {
  free(): void;
/**
* @param {Uint8Array} secret 
* @param {Uint8Array} iv 
*/
  constructor(secret: Uint8Array, iv: Uint8Array);
/**
* @param {Uint8Array} data 
*/
  encrypt(data: Uint8Array): void;
/**
* @param {Uint8Array} data 
*/
  decrypt(data: Uint8Array): void;
}
/**
*/
export class Aes192Cfb8 {
  free(): void;
/**
* @param {Uint8Array} secret 
* @param {Uint8Array} iv 
*/
  constructor(secret: Uint8Array, iv: Uint8Array);
/**
* @param {Uint8Array} data 
*/
  encrypt(data: Uint8Array): void;
/**
* @param {Uint8Array} data 
*/
  decrypt(data: Uint8Array): void;
}
/**
*/
export class Aes256Cfb {
  free(): void;
/**
* @param {Uint8Array} secret 
* @param {Uint8Array} iv 
*/
  constructor(secret: Uint8Array, iv: Uint8Array);
/**
* @param {Uint8Array} data 
*/
  encrypt(data: Uint8Array): void;
/**
* @param {Uint8Array} data 
*/
  decrypt(data: Uint8Array): void;
}
/**
*/
export class Aes256Cfb8 {
  free(): void;
/**
* @param {Uint8Array} secret 
* @param {Uint8Array} iv 
*/
  constructor(secret: Uint8Array, iv: Uint8Array);
/**
* @param {Uint8Array} data 
*/
  encrypt(data: Uint8Array): void;
/**
* @param {Uint8Array} data 
*/
  decrypt(data: Uint8Array): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_aes256cfb8_free: (a: number) => void;
  readonly aes256cfb8_new: (a: number, b: number, c: number, d: number) => number;
  readonly aes256cfb8_encrypt: (a: number, b: number, c: number) => void;
  readonly aes256cfb8_decrypt: (a: number, b: number, c: number) => void;
  readonly __wbg_aes128cfb8_free: (a: number) => void;
  readonly aes128cfb8_new: (a: number, b: number, c: number, d: number) => number;
  readonly aes128cfb8_encrypt: (a: number, b: number, c: number) => void;
  readonly aes128cfb8_decrypt: (a: number, b: number, c: number) => void;
  readonly __wbg_aes192cfb8_free: (a: number) => void;
  readonly aes192cfb8_new: (a: number, b: number, c: number, d: number) => number;
  readonly aes192cfb8_encrypt: (a: number, b: number, c: number) => void;
  readonly aes192cfb8_decrypt: (a: number, b: number, c: number) => void;
  readonly __wbg_aes256cfb_free: (a: number) => void;
  readonly aes256cfb_new: (a: number, b: number, c: number, d: number) => number;
  readonly aes256cfb_encrypt: (a: number, b: number, c: number) => void;
  readonly aes256cfb_decrypt: (a: number, b: number, c: number) => void;
  readonly __wbg_aes128cfb_free: (a: number) => void;
  readonly aes128cfb_new: (a: number, b: number, c: number, d: number) => number;
  readonly aes128cfb_encrypt: (a: number, b: number, c: number) => void;
  readonly aes128cfb_decrypt: (a: number, b: number, c: number) => void;
  readonly __wbg_aes192cfb_free: (a: number) => void;
  readonly aes192cfb_new: (a: number, b: number, c: number, d: number) => number;
  readonly aes192cfb_encrypt: (a: number, b: number, c: number) => void;
  readonly aes192cfb_decrypt: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        