use wasm_bindgen::prelude::*;

use aes::Aes128;
use aes::Aes192;
use aes::Aes256;

use cfb_mode::stream_cipher::NewStreamCipher;
use cfb_mode::stream_cipher::StreamCipher;
use cfb_mode::Cfb;

#[wasm_bindgen]
pub struct Aes256Cfb {
    inner: Box<Cfb<Aes256>>,
}

#[wasm_bindgen]
impl Aes256Cfb {
    #[wasm_bindgen(constructor)]
    pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes256Cfb, JsValue> {
        match Cfb::<Aes256>::new_var(secret, iv) {
            Ok(cipher) => {
                let inner = Box::new(cipher);
                Ok(Self { inner })
            }
            Err(error) => {
                let msg = format!("{}", error);
                Err(JsValue::from_str(&msg))
            }
        }
    }

    pub fn encrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
    pub fn decrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
}

#[wasm_bindgen]
pub struct Aes128Cfb {
    inner: Box<Cfb<Aes128>>,
}

#[wasm_bindgen]
impl Aes128Cfb {
    #[wasm_bindgen(constructor)]
    pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes128Cfb, JsValue> {
        match Cfb::<Aes128>::new_var(secret, iv) {
            Ok(cipher) => {
                let inner = Box::new(cipher);
                Ok(Self { inner })
            }
            Err(error) => {
                let msg = format!("{}", error);
                Err(JsValue::from_str(&msg))
            }
        }
    }

    pub fn encrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
    pub fn decrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
}

#[wasm_bindgen]
pub struct Aes192Cfb {
    inner: Box<Cfb<Aes192>>,
}

#[wasm_bindgen]
impl Aes192Cfb {
    #[wasm_bindgen(constructor)]
    pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes192Cfb, JsValue> {
        match Cfb::<Aes192>::new_var(secret, iv) {
            Ok(cipher) => {
                let inner = Box::new(cipher);
                Ok(Self { inner })
            }
            Err(error) => {
                let msg = format!("{}", error);
                Err(JsValue::from_str(&msg))
            }
        }
    }

    pub fn encrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
    pub fn decrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
}
