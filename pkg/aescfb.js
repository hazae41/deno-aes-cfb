import { name } from "../mod.ts";

let wasm;

let cachedTextDecoder = new TextDecoder(
  "utf-8",
  { ignoreBOM: true, fatal: true },
);

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (
    cachegetUint8Memory0 === null ||
    cachegetUint8Memory0.buffer !== wasm.memory.buffer
  ) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];

  heap[idx] = obj;
  return idx;
}

function getObject(idx) {
  return heap[idx];
}

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
/**
*/
export class Aes128Cfb {
  static __wrap(ptr) {
    const obj = Object.create(Aes128Cfb.prototype);
    obj.ptr = ptr;

    return obj;
  }

  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_aes128cfb_free(ptr);
  }
  /**
    * @param {Uint8Array} secret
    * @param {Uint8Array} iv
    */
  constructor(secret, iv) {
    var ptr0 = passArray8ToWasm0(secret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(iv, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.aes128cfb_new(ptr0, len0, ptr1, len1);
    return Aes128Cfb.__wrap(ret);
  }
  /**
    * @param {Uint8Array} data
    */
  encrypt(data) {
    try {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.aes128cfb_decrypt(this.ptr, ptr0, len0);
    } finally {
      data.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
      wasm.__wbindgen_free(ptr0, len0 * 1);
    }
  }
  /**
    * @param {Uint8Array} data
    */
  decrypt(data) {
    try {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.aes128cfb_decrypt(this.ptr, ptr0, len0);
    } finally {
      data.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
      wasm.__wbindgen_free(ptr0, len0 * 1);
    }
  }
}
/**
*/
export class Aes192Cfb {
  static __wrap(ptr) {
    const obj = Object.create(Aes192Cfb.prototype);
    obj.ptr = ptr;

    return obj;
  }

  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_aes192cfb_free(ptr);
  }
  /**
    * @param {Uint8Array} secret
    * @param {Uint8Array} iv
    */
  constructor(secret, iv) {
    var ptr0 = passArray8ToWasm0(secret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(iv, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.aes192cfb_new(ptr0, len0, ptr1, len1);
    return Aes192Cfb.__wrap(ret);
  }
  /**
    * @param {Uint8Array} data
    */
  encrypt(data) {
    try {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.aes192cfb_decrypt(this.ptr, ptr0, len0);
    } finally {
      data.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
      wasm.__wbindgen_free(ptr0, len0 * 1);
    }
  }
  /**
    * @param {Uint8Array} data
    */
  decrypt(data) {
    try {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.aes192cfb_decrypt(this.ptr, ptr0, len0);
    } finally {
      data.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
      wasm.__wbindgen_free(ptr0, len0 * 1);
    }
  }
}
/**
*/
export class Aes256Cfb {
  static __wrap(ptr) {
    const obj = Object.create(Aes256Cfb.prototype);
    obj.ptr = ptr;

    return obj;
  }

  free() {
    const ptr = this.ptr;
    this.ptr = 0;

    wasm.__wbg_aes256cfb_free(ptr);
  }
  /**
    * @param {Uint8Array} secret
    * @param {Uint8Array} iv
    */
  constructor(secret, iv) {
    var ptr0 = passArray8ToWasm0(secret, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(iv, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.aes256cfb_new(ptr0, len0, ptr1, len1);
    return Aes256Cfb.__wrap(ret);
  }
  /**
    * @param {Uint8Array} data
    */
  encrypt(data) {
    try {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.aes256cfb_decrypt(this.ptr, ptr0, len0);
    } finally {
      data.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
      wasm.__wbindgen_free(ptr0, len0 * 1);
    }
  }
  /**
    * @param {Uint8Array} data
    */
  decrypt(data) {
    try {
      var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.aes256cfb_decrypt(this.ptr, ptr0, len0);
    } finally {
      data.set(getUint8Memory0().subarray(ptr0 / 1, ptr0 / 1 + len0));
      wasm.__wbindgen_free(ptr0, len0 * 1);
    }
  }
}

async function load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get("Content-Type") != "application/wasm") {
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e,
          );
        } else {
          throw e;
        }
      }
    }

    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);

    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
}

async function init(input) {
  if (typeof input === "undefined") {
    input = import.meta.url.replace(/\.js$/, "_bg.wasm");
  }
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_throw = function (arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_rethrow = function (arg0) {
    throw takeObject(arg0);
  };

  if (
    typeof input === "string" ||
    (typeof Request === "function" && input instanceof Request) ||
    (typeof URL === "function" && input instanceof URL)
  ) {
    input = fetch(input);
  }

  const { instance, module } = await load(await input, imports);

  wasm = instance.exports;
  init.__wbindgen_wasm_module = module;

  return wasm;
}

export default init;
