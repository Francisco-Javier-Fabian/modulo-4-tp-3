# 🧠 Proyecto Nuevo - Sprint 3  

## 🚀 Tecnologías utilizadas

- ⚛️ **React** — Biblioteca para construir interfaces de usuario.
- ⚡ **Vite** — Herramienta de desarrollo rápida para proyectos modernos.
- 🎨 **TailwindCSS** — Framework de estilos utilitario.
- 🎵 **Bootstrap Icons** — Íconos vectoriales listos para usar.
- 🧹 **ESLint** — Linter para mantener código limpio y coherente.

## 🧩 Funcionalidades del Proyecto
- Muestra un listado de libros en la pantalla principal.
- Se pueden agregar y quitar las libros a una CardSidebar desde la pantalla principal.
- Se puede acceder a la CardSidebar desde el botón en la pantalla principal.
- Muestra las libros guardadas en un modal.
- Permite quitar las libros guardadas desde el modal.
- Mantiene el listado de libros guardadas aunque se recargue o se cierre la página.

## 📁 Estructura de Carpetas

/S2-TP
├── /public/assets/...
│   └── ...
├── /src
│   ├── /api
│   │   └── products.json     #  Info de productos
│   ├── /components
│   │   ├── ProductList.jsx           #  Muestra los productos disponibles en inicio
│   │   ├── ProductCard.jsx           #  Diseño de la Card para los productos en inicio
│   │   ├── CartSidebar.jsx           #  Muestra los productos en el carrito con cantidad y total
│   │   ├── ProductCardSidebar.jsx    #  Diseño de la Card para los productos en el sidebar
│   │   ├── EmptyCart.jsx             #  Diseño para mostrar msj "Carrito vacío"
│   │   ├── Header.jsx                #  Contiene el botón para "Carrito" y "Tema Claro/Oscuro"
│   │   ├── Footer.jsx
│   │   └── ThemeButton.jsx      # Botón para cambiar el tema
│   ├── context
│   │   ├── CartContext.jsx      # Maneja el estado global del carrito
│   │   ├── ThemeContext.jsx     # Maneja el tema claro/oscuro
│   ├── /hooks
│   │   ├── useCart           #  Manejo de lógica del carrito
│   │   └── useTheme          #  Manejo de lógica del tema claro/oscuro
│   ├── App.jsx     #  Componente principal
│   ├── main.jsx    #  Renderiza la aplicación
│   └── index.css

