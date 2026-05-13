export default function loginView(appContainer) {
    const loginViewTemplate = `
    <main class="min-h-screen flex items-center justify-center p-4">
      <section class="form-login w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">

        <div class="text-center mb-6">
          <h1 class="text-white text-2xl font-bold tracking-tight">Bienvenido</h1>
          <p class="text-zinc-400 text-sm mt-2">Ingresa tus credenciales para continuar</p>
        </div>

        <div id="error-message" class="hidden flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-400 text-sm py-3 px-4 rounded-xl mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>Usuario o contraseña incorrectos</span>
        </div>

        <div id="success-message" class="hidden flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-sm py-3 px-4 rounded-xl mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>¡Acceso concedido! Redirigiendo...</span>
        </div>

        <form class="form-inner flex flex-col gap-5" id="form-login">

          <div class="flex flex-col gap-2">
            <label for="username" class="text-zinc-300 text-sm font-medium">
              Nombre de usuario<span class="text-white ml-1">*</span>
            </label>
            <input type="text" name="username" placeholder="CarlosQ" required minlength="4" maxlength="20"
              class="bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white/30 transition-all">
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-zinc-300 text-sm font-medium">
              Contraseña<span class="text-white ml-1">*</span>
            </label>
            <input type="password" name="password" placeholder="••••••••" required minlength="4" maxlength="20"
              class="bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white/30 transition-all">
          </div>

          <button type="submit"
            class="mt-2 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200">
            Iniciar Sesión
          </button>

        </form>

        <div class="mt-6 text-center">
          <a href="#" class="text-zinc-500 text-xs hover:text-white transition-colors">¿Olvidaste tu contraseña?</a>
        </div>

      </section>
    </main>
    `
    return loginViewTemplate
}