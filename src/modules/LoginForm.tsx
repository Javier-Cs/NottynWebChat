import { useState } from "react";

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* Botón abrir modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          text-white
          bg-green-600
          hover:bg-green-700
          focus:ring-1
          shadow-sm
          font-medium
          rounded-md
          text-sm
          px-6
          py-2
          focus:outline-none
          transition
        "
      >
        Iniciar Sesión
      </button>

      {/* Modal */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/50
            backdrop-blur-sm
            px-4
          "
        >
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-2xl
              bg-white dark:bg-zinc-900
              shadow-2xl
              border border-zinc-200 dark:border-zinc-700
              p-7
            "
          >
            {/* Cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-4 right-4
                text-zinc-500
                hover:text-zinc-900
                dark:hover:text-white
                transition
              "
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-7 text-center">
              <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
                {isLogin ? "Bienvenido" : "Crear Cuenta"}
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                {isLogin
                  ? "Inicia sesión en Nottyn"
                  : "Regístrate para continuar"}
              </p>
            </div>

            {/* FORM LOGIN */}
            {isLogin ? (
              <form className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="
                      w-full
                      rounded-lg
                      border border-zinc-300
                      dark:border-zinc-700
                      bg-white dark:bg-zinc-800
                      px-4 py-3
                      text-sm
                      text-zinc-900 dark:text-white
                      outline-none
                      focus:ring-2
                      focus:ring-green-500
                      transition
                    "
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Contraseña
                  </label>

                  <input
                    type="password"
                    placeholder="********"
                    className="
                      w-full
                      rounded-lg
                      border border-zinc-300
                      dark:border-zinc-700
                      bg-white dark:bg-zinc-800
                      px-4 py-3
                      text-sm
                      text-zinc-900 dark:text-white
                      outline-none
                      focus:ring-2
                      focus:ring-green-500
                      transition
                    "
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="
                    w-full
                    rounded-lg
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    font-medium
                    py-3
                    transition
                    shadow-md
                  "
                >
                  Iniciar Sesión
                </button>
              </form>
            ) : (
              /* FORM REGISTER */
              <form className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="
                      w-full
                      rounded-lg
                      border border-zinc-300
                      dark:border-zinc-700
                      bg-white dark:bg-zinc-800
                      px-4 py-3
                      text-sm
                      text-zinc-900 dark:text-white
                      outline-none
                      focus:ring-2
                      focus:ring-green-500
                      transition
                    "
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Contraseña
                  </label>

                  <input
                    type="password"
                    placeholder="********"
                    className="
                      w-full
                      rounded-lg
                      border border-zinc-300
                      dark:border-zinc-700
                      bg-white dark:bg-zinc-800
                      px-4 py-3
                      text-sm
                      text-zinc-900 dark:text-white
                      outline-none
                      focus:ring-2
                      focus:ring-green-500
                      transition
                    "
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    Confirmar contraseña
                  </label>

                  <input
                    type="password"
                    placeholder="********"
                    className="
                      w-full
                      rounded-lg
                      border border-zinc-300
                      dark:border-zinc-700
                      bg-white dark:bg-zinc-800
                      px-4 py-3
                      text-sm
                      text-zinc-900 dark:text-white
                      outline-none
                      focus:ring-2
                      focus:ring-green-500
                      transition
                    "
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="
                    w-full
                    rounded-lg
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-medium
                    py-3
                    transition
                    shadow-md
                  "
                >
                  Crear Cuenta
                </button>
              </form>
            )}

            {/* Switch */}
            <div className="mt-6 text-center">
              {isLogin ? (
                <p className="text-sm text-zinc-500">
                  ¿No tienes cuenta?
                  <button
                    onClick={() => setIsLogin(false)}
                    className="
                      ml-1
                      text-green-600
                      hover:underline
                      font-medium
                    "
                  >
                    Crear cuenta
                  </button>
                </p>
              ) : (
                <p className="text-sm text-zinc-500">
                  ¿Ya tienes cuenta?
                  <button
                    onClick={() => setIsLogin(true)}
                    className="
                      ml-1
                      text-blue-600
                      hover:underline
                      font-medium
                    "
                  >
                    Iniciar sesión
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}