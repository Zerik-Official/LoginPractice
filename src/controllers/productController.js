import productCard from "../components/product.card.js";
import { getProducts, deleteProduct } from "../utils/api.js";
import { confirmModal } from "../components/modals.js";

export async function productController() {

    const productContainer = document.getElementById("products-container");

    const products = await getProducts();

    productContainer.innerHTML = products
        .map(product => productCard(product))
        .join("");

    addDeleteEvents();
}

async function addDeleteEvents() {

    const deleteButtons =
        document.querySelectorAll("[data-delete]");

    deleteButtons.forEach(button => {

        button.addEventListener("click", async () => {

            const id = button.dataset.id;

            const confirm = await confirmModal({
                type: "delete",
                title: "Eliminar producto",
                message: "Esta acción no se puede deshacer"
            });

            if (!confirm) return;

            const deleted = await deleteProduct(id);

            if (deleted) {
                productController();
            }
        });
    });
}