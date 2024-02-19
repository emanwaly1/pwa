import { openDB } from "https://cdn.jsdelivr.net/npm/idb@8/+esm";

alert("sdjiodfhvioh");


async function addProduct() {
    const dbpromise = await openDB("ecommerce", 3, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("products")) {
          db.createObjectStore("products", { keyPath: "id" });
        }
      },
    });
  
    var items = dbpromise.transaction("products", "readwrite");
    Promise.all([
      items.store.add({
        id: 1,
        name: "product 1",
        price: 400,
      }),
     items.store.add({
        id: 2,
        name: "product 2",
        price: 23984,
      }),
    ]);
  }
  async function getProduct(){
    const dbpromise = await openDB("ecommerce", 3);
    var myProduct=await dbpromise.get('products',1)
    console.dir(myProduct)

}

async function getAllProduct(){
    const dbpromise = await openDB("ecommerce", 3);
    var allProducts=await dbpromise.getAll('products');
    console.dir(allProducts)

}

window.addProduct = addProduct;
window.getProduct = getProduct;

window.getAllProduct=getAllProduct;
