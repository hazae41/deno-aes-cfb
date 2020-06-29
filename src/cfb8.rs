use wasm_bindgen::prelude::*;

use aes::Aes128;
use aes::Aes192;
use aes::Aes256;

use cfb8::stream_cipher::*;
use cfb8::Cfb8;

#[wasm_bindgen]
pub struct Aes256Cfb8 {
    inner: Box<Cfb8<Aes256>>,
}

#[wasm_bindgen]
impl Aes256Cfb8 {
    #[wasm_bindgen(constructor)]
    pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes256Cfb8, JsValue> {
        let result = Cfb8::<Aes256>::new_var(secret, iv);
        let cipher = result.map_err(|e| JsValue::from(&format!("{}", e)))?;
        let inner = Box::new(cipher);
        Ok(Self { inner })
    }

    pub fn encrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
    pub fn decrypt(&mut self, data: &mut [u8]) {
        self.inner.decrypt(data);
    }
}

#[wasm_bindgen]
pub struct Aes128Cfb8 {
    inner: Box<Cfb8<Aes128>>,
}

#[wasm_bindgen]
impl Aes128Cfb8 {
    #[wasm_bindgen(constructor)]
    pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes128Cfb8, JsValue> {
        let result = Cfb8::<Aes128>::new_var(secret, iv);
        let cipher = result.map_err(|e| JsValue::from(&format!("{}", e)))?;
        let inner = Box::new(cipher);
        Ok(Self { inner })
    }

    pub fn encrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
    pub fn decrypt(&mut self, data: &mut [u8]) {
        self.inner.decrypt(data);
    }
}

#[wasm_bindgen]
pub struct Aes192Cfb8 {
    inner: Box<Cfb8<Aes192>>,
}

#[wasm_bindgen]
impl Aes192Cfb8 {
    #[wasm_bindgen(constructor)]
    pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes192Cfb8, JsValue> {
        let result = Cfb8::<Aes192>::new_var(secret, iv);
        let cipher = result.map_err(|e| JsValue::from(&format!("{}", e)))?;
        let inner = Box::new(cipher);
        Ok(Self { inner })
    }

    pub fn encrypt(&mut self, data: &mut [u8]) {
        self.inner.encrypt(data);
    }
    pub fn decrypt(&mut self, data: &mut [u8]) {
        self.inner.decrypt(data);
    }
}
