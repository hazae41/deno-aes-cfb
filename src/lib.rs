use std::panic::PanicInfo;
use wasm_bindgen::prelude::*;

mod cfb;
mod cfb8;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = console)]
  fn error(msg: &str);
}

fn hook(info: &PanicInfo) {
  error(&info.to_string());
}

#[wasm_bindgen]
pub fn main() {
  std::panic::set_hook(Box::new(hook));
}
