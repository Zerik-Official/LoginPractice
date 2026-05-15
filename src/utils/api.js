const BASE_URL = "http://localhost:3000/products";

export async function getProducts() {

    try {

        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error("Error obteniendo productos");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return [];
    }
}

export async function deleteProduct(id) {

    try {

        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Error eliminando producto");
        }

        return true;

    } catch (error) {

        console.error(error);

        return false;
    }
}