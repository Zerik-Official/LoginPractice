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
      </section>

    </main>
  `

  return homeViewTemplate
}