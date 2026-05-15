export default function productCard(productInfo) {

    const { id, name, description, category, stock, price } = productInfo;

    let available =
        stock > 3
            ? "bg-emerald-500/20 text-emerald-400"
            : stock > 0
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-red-500/20 text-red-400";

    const productCardTemplate = `
        <article class="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">

            <div class="flex items-start justify-between mb-4">
                <div>
                    <h2 class="text-xl font-bold">${name}</h2>
                    <p class="text-zinc-400 text-sm">Categoría: ${category}</p>
                </div>

                <span class="${available} text-xs px-3 py-1 rounded-full">
                    ${stock > 0 ? `${stock} disponibles` : "Sin stock"}
                </span>
            </div>

            <p class="text-zinc-300 text-sm mb-5">
                ${description}
            </p>

            <div class="flex items-center justify-between">
                <span class="text-2xl font-bold">$${price}</span>

                <div class="flex gap-2">
                    <button
                        data-id="${id}"
                        class="edit-btn bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all active:scale-95">
                        Editar
                    </button>

                    <button
                        data-id="${id}"
                        data-delete="true"
                        class="bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 rounded-lg transition-all active:scale-95">
                        Eliminar
                    </button>
                </div>
            </div>

        </article>
    `
    return productCardTemplate;
}