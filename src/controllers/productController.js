import productCard from "../components/product.card.js";
import { getProducts, deleteProduct, createProduct, updateProduct } from "../utils/api.js";
import { confirmModal, editProductModal, createProductModal } from "../components/modals.js";

export async function productController() {
    const productContainer = document.getElementById("products-container");
    const products = await getProducts();
    renderProducts(products, productContainer);
    addDeleteEvents();
    addEditEvents();
    addSearchEvents();
    addCreateEvent();
}

function renderProducts(products, container) {
    container.innerHTML = products.map(product => productCard(product)).join("");
}

async function addDeleteEvents() {
    const deleteButtons = document.querySelectorAll("[data-delete]");
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

function addEditEvents() {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(button => {
        button.addEventListener("click", async () => {
            const id = button.dataset.id;
            const products = await getProducts();
            const product = products.find(p => p.id === id);
            if (!product) return;

            const wrapper = document.createElement("div");
            wrapper.innerHTML = editProductModal(product);
            document.body.appendChild(wrapper);

            const modal = document.getElementById("edit-product-modal");
            const form = document.getElementById("edit-product-form");

            document.getElementById("close-edit-modal").addEventListener("click", () => modal.remove());
            document.getElementById("cancel-edit-btn").addEventListener("click", () => modal.remove());

            form.addEventListener("submit", async (e) => {
                e.preventDefault();
                const updated = {
                    id: product.id,
                    name: document.getElementById("edit-name").value,
                    category: document.getElementById("edit-category").value,
                    price: Number(document.getElementById("edit-price").value),
                    stock: Number(document.getElementById("edit-stock").value),
                    description: document.getElementById("edit-description").value
                };
                const confirm = await confirmModal({
                    type: "save",
                    title: "Guardar cambios",
                    message: "¿Deseas guardar los cambios realizados?"
                });
                if (!confirm) return;
                const result = await updateProduct(id, updated);
                if (result) {
                    modal.remove();
                    productController();
                }
            });
        });
    });
}

function addSearchEvents() {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    async function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const allProducts = await getProducts();
        const filtered = allProducts.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
        const container = document.getElementById("products-container");
        renderProducts(filtered, container);
        addDeleteEvents();
        addEditEvents();
    }

    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") handleSearch();
    });
}

function addCreateEvent() {
    const createBtn = document.getElementById("create-product-btn");
    if (!createBtn) return;

    createBtn.addEventListener("click", () => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = createProductModal();
        document.body.appendChild(wrapper);

        const modal = document.getElementById("create-product-modal");
        const form = document.getElementById("create-product-form");

        document.getElementById("close-create-modal").addEventListener("click", () => modal.remove());
        document.getElementById("cancel-create-btn").addEventListener("click", () => modal.remove());

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const newProduct = {
                name: document.getElementById("create-name").value,
                category: document.getElementById("create-category").value,
                price: Number(document.getElementById("create-price").value),
                stock: Number(document.getElementById("create-stock").value),
                description: document.getElementById("create-description").value
            };
            const confirm = await confirmModal({
                type: "save",
                title: "Crear producto",
                message: "¿Deseas añadir este producto al catálogo?"
            });
            if (!confirm) return;
            const result = await createProduct(newProduct);
            if (result) {
                modal.remove();
                productController();
            }
        });
    });
}
