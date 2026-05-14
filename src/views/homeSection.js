export default function homeView(appContainer) {
  const homeViewTemplate = `
    <main class="min-h-screen bg-zinc-950 text-white p-6">

      <header class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold">Productos</h1>
          <p class="text-zinc-400 text-sm mt-1">
            Administra tus productos fácilmente
          </p>
        </div>

        <button
          id="logout-btn"
          class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition-all active:scale-95"
        >
          Cerrar sesión
        </button>
      </header>

      <section class="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          id="search-input"
          placeholder="Buscar producto..."
          class="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20 placeholder:text-zinc-500"
        />

        <button
          id="search-btn"
          class="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-all active:scale-95"
        >
          Buscar
        </button>
      </section>

      <section
        id="products-container"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >

        <article class="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">

          <div class="flex items-start justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Laptop Gamer</h2>
              <p class="text-zinc-400 text-sm">Categoría: Tecnología</p>
            </div>

            <span class="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full">
              Disponible
            </span>
          </div>

          <p class="text-zinc-300 text-sm mb-5">
            Laptop de alto rendimiento con RTX y 16GB RAM.
          </p>

          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold">$1200</span>

            <div class="flex gap-2">
              <button
                class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all active:scale-95"
              >
                Editar
              </button>

              <button
                class="bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 rounded-lg transition-all active:scale-95"
              >
                Eliminar
              </button>
            </div>
          </div>

        </article>

        <article class="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">

          <div class="flex items-start justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Audífonos Bluetooth</h2>
              <p class="text-zinc-400 text-sm">Categoría: Audio</p>
            </div>

            <span class="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full">
              Disponible
            </span>
          </div>

          <p class="text-zinc-300 text-sm mb-5">
            Sonido envolvente y batería de larga duración.
          </p>

          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold">$80</span>

            <div class="flex gap-2">
              <button
                class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all active:scale-95"
              >
                Editar
              </button>

              <button
                class="bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 rounded-lg transition-all active:scale-95"
              >
                Eliminar
              </button>
            </div>
          </div>

        </article>

        <article class="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">

          <div class="flex items-start justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Smartphone Pro</h2>
              <p class="text-zinc-400 text-sm">Categoría: Móviles</p>
            </div>

            <span class="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">
              Poco stock
            </span>
          </div>

          <p class="text-zinc-300 text-sm mb-5">
            Pantalla AMOLED y cámara de alta resolución.
          </p>

          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold">$950</span>

            <div class="flex gap-2">
              <button
                class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all active:scale-95"
              >
                Editar
              </button>

              <button
                class="bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 rounded-lg transition-all active:scale-95"
              >
                Eliminar
              </button>
            </div>
          </div>

        </article>

      </section>

    </main>
  `

  return homeViewTemplate
}