import { openDB } from 'https://cdn.jsdelivr.net/npm/idb@8/+esm';

async function addProduct() {
    const dbpromise = await openDB('market', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('products')) {
                db.createObjectStore('products', { keyPath: 'prdId' });
            }
        }
    });

    const items = dbpromise.transaction('products', 'readwrite');

    await Promise.all([
        items.store.add({
            prdId: 1,
            name: 'product-1',
            price: 100
        }),
       items.store.add({
            prdId: 2,
            name: 'product-2',
            price: 500
        }),
       items.store.add({
            prdId: 3,
            name: 'product-3',
            price: 300
        })
    ]);

    await items.done;
    console.log('Products added successfully');
}

async function getProduct() {
    const dbpromise = await openDB('market', 1);
    const myProduct = await dbpromise.get('products', 1);
    console.dir(myProduct);
}

async function updateProduct() {
    const dbpromise = await openDB('market', 1);
    const items = dbpromise.transaction('products', 'readwrite');
    const product = await tx.store.get(1);
    if (product) {
        product.name = 'updated-product';
        product.price = 200;
        await tx.store.put(product);
        console.log('Product updated successfully');
    } 
}

async function deleteProduct() {
    const dbpromise = await openDB('market', 1);
    const tx = dbpromise.transaction('products', 'readwrite');
    const product = await tx.store.get(1);
    if (product) {
        await tx.store.delete(1);
        console.log('Product deleted successfully');
    }
}

window.addProduct = addProduct;
window.getProduct = getProduct;
window.updateProduct = updateProduct;
window.deleteProduct = deleteProduct;
