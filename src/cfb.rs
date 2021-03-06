use wasm_bindgen::prelude::*;

use aes::Aes128;
use aes::Aes192;
use aes::Aes256;

use cfb_mode::stream_cipher::*;
use cfb_mode::Cfb;

#[wasm_bindgen]
pub struct Aes256Cfb {
  inner: Box<Cfb<Aes256>>,
}

#[wasm_bindgen]
impl Aes256Cfb {
  #[wasm_bindgen(constructor)]
  pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes256Cfb, JsValue> {
    assert!(secret.len() == 32, "Invalid secret length");
    assert!(iv.len() == 16, "Invalid IV length");
    let result = Cfb::<Aes256>::new_var(secret, iv);
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
pub struct Aes128Cfb {
  inner: Box<Cfb<Aes128>>,
}

#[wasm_bindgen]
impl Aes128Cfb {
  #[wasm_bindgen(constructor)]
  pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes128Cfb, JsValue> {
    assert!(secret.len() == 16, "Invalid secret length");
    assert!(iv.len() == 16, "Invalid IV length");
    let result = Cfb::<Aes128>::new_var(secret, iv);
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
pub struct Aes192Cfb {
  inner: Box<Cfb<Aes192>>,
}

#[wasm_bindgen]
impl Aes192Cfb {
  #[wasm_bindgen(constructor)]
  pub fn new(secret: &[u8], iv: &[u8]) -> Result<Aes192Cfb, JsValue> {
    assert!(secret.len() == 24, "Invalid secret length");
    assert!(iv.len() == 16, "Invalid IV length");
    let result = Cfb::<Aes192>::new_var(secret, iv);
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
