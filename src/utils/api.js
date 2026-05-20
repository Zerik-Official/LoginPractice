const BASE_URL = "http://localhost:3000/products";

export async function getProducts() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Error obteniendo productos");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function deleteProduct(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Error eliminando producto");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function createProduct(product) {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });
        if (!response.ok) throw new Error("Error creando producto");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function updateProduct(id, product) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });
        if (!response.ok) throw new Error("Error actualizando producto");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
