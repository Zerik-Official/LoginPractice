export function editProductModal(product = {}) {
  return `
    <div id="edit-product-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div class="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-bold text-white">Editar producto</h2>
            <p class="text-zinc-400 text-sm">Modifica la información del producto</p>
          </div>
          <button id="close-edit-modal" class="text-zinc-400 hover:text-white text-xl transition-all">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form id="edit-product-form" class="space-y-4">
          <div>
            <label class="block text-sm mb-2 text-zinc-300">Nombre</label>
            <input type="text" id="edit-name" value="${product.name || ""}"
              class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div>
            <label class="block text-sm mb-2 text-zinc-300">Categoría</label>
            <input type="text" id="edit-category" value="${product.category || ""}"
              class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm mb-2 text-zinc-300">Precio</label>
              <input type="number" id="edit-price" value="${product.price ?? ""}"
                class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <div>
              <label class="block text-sm mb-2 text-zinc-300">Stock</label>
              <input type="number" id="edit-stock" value="${product.stock ?? ""}"
                class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
            </div>
          </div>
          <div>
            <label class="block text-sm mb-2 text-zinc-300">Descripción</label>
            <textarea id="edit-description" rows="4"
              class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20 resize-none"
            >${product.description || ""}</textarea>
          </div>
          <div class="flex justify-end gap-3 pt-4">
            <button type="button" id="cancel-edit-btn" class="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl font-medium transition-all active:scale-95">
              Cancelar
            </button>
            <button type="submit" class="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-xl font-semibold transition-all active:scale-95">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>`
}

export function createProductModal() {
  return `
    <div id="create-product-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div class="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-bold text-white">Crear producto</h2>
            <p class="text-zinc-400 text-sm">Añade un nuevo producto al catálogo</p>
          </div>
          <button id="close-create-modal" class="text-zinc-400 hover:text-white text-xl transition-all">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form id="create-product-form" class="space-y-4">
          <div>
            <label class="block text-sm mb-2 text-zinc-300">Nombre</label>
            <input type="text" id="create-name" required
              class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div>
            <label class="block text-sm mb-2 text-zinc-300">Categoría</label>
            <input type="text" id="create-category" required
              class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm mb-2 text-zinc-300">Precio</label>
              <input type="number" id="create-price" required min="0"
                class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <div>
              <label class="block text-sm mb-2 text-zinc-300">Stock</label>
              <input type="number" id="create-stock" required min="0"
                class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20" />
            </div>
          </div>
          <div>
            <label class="block text-sm mb-2 text-zinc-300">Descripción</label>
            <textarea id="create-description" rows="4"
              class="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20 resize-none"></textarea>
          </div>
          <div class="flex justify-end gap-3 pt-4">
            <button type="button" id="cancel-create-btn" class="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl font-medium transition-all active:scale-95">
              Cancelar
            </button>
            <button type="submit" class="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-xl font-semibold transition-all active:scale-95">
              Crear producto
            </button>
          </div>
        </form>
      </div>
    </div>`
}

export function confirmModal({
  type = "confirm",
  title = "Confirmar acción",
  message = "¿Deseas continuar?"
}) {
  const config = {
    delete: {
      icon: "fa-trash",
      iconStyle: "bg-red-500/20 text-red-400",
      buttonStyle: "bg-red-500 hover:bg-red-600",
      buttonText: "Eliminar"
    },
    save: {
      icon: "fa-floppy-disk",
      iconStyle: "bg-emerald-500/20 text-emerald-400",
      buttonStyle: "bg-emerald-500 hover:bg-emerald-600",
      buttonText: "Guardar"
    },
    confirm: {
      icon: "fa-circle-check",
      iconStyle: "bg-blue-500/20 text-blue-400",
      buttonStyle: "bg-blue-500 hover:bg-blue-600",
      buttonText: "Confirmar"
    }
  }

  const current = config[type] || config.confirm

  return new Promise((resolve) => {
    const modal = document.createElement("div")
    modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    modal.innerHTML = `
      <div class="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div class="flex flex-col items-center text-center">
          <div class="w-20 h-20 rounded-full flex items-center justify-center mb-5 ${current.iconStyle}">
            <i class="fa-solid ${current.icon} text-3xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2">${title}</h2>
          <p class="text-zinc-400 mb-8">${message}</p>
          <div class="flex items-center gap-3 w-full">
            <button id="confirm-cancel-btn" class="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-medium transition-all active:scale-95">
              Cancelar
            </button>
            <button id="confirm-accept-btn" class="flex-1 py-3 rounded-xl font-semibold transition-all active:scale-95 ${current.buttonStyle}">
              ${current.buttonText}
            </button>
          </div>
        </div>
      </div>`
    document.body.appendChild(modal)
    modal.querySelector("#confirm-cancel-btn").addEventListener("click", () => { modal.remove(); resolve(false) })
    modal.querySelector("#confirm-accept-btn").addEventListener("click", () => { modal.remove(); resolve(true) })
  })
}
