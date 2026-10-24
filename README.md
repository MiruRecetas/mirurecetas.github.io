# MiruRecetas · Acceso web y fotogramas Hero

**MiruRecetas** es una web y aplicación instalable (PWA) de recetas, menús semanales, información nutricional, organización del cocinado y listas de compra.

- **Dirección raíz:** https://mirurecetas.github.io/
- **Aplicación y PWA:** https://mirurecetas.github.io/menu-anual-recetas/
- **Fotogramas de la Hero:** https://mirurecetas.github.io/assets/hero/

La dirección raíz redirige a la aplicación y conserva los parámetros y fragmentos de los enlaces compatibles. También ofrece un enlace de acceso cuando JavaScript no está disponible.

## Fotogramas de la Hero

Este repositorio aloja **722 WebP originales** en `assets/hero/`: 361 verticales (`vertical/001.webp` a `361.webp`) y 361 horizontales (`horizontal/001.webp` a `361.webp`), con un total de **97.313.082 bytes**. Su manifiesto de integridad es `assets/hero/fotogramas.sha256.json`, que incluye el tamaño y SHA-256 de cada archivo. Se incorporaron mediante la [PR #7](https://github.com/MiruRecetas/mirurecetas.github.io/pull/7), fusionada en `cdb4558699df66e88e22dbc3819cf168e7b84694`.

La web consume estos recursos desde `https://mirurecetas.github.io/assets/hero/`, sin trasladar la aplicación/PWA ni su service worker desde `/menu-anual-recetas/`. Este repositorio raíz **no** aloja datos culinarios, contratos privados, fuentes de desarrollo ni la PWA; su papel sigue siendo redirección y almacenamiento estático de las imágenes cinematográficas.

**Mantenimiento:** cualquier cambio de fotogramas debe conservar exactamente la correspondencia con su manifiesto y coordinarse con el código y la verificación de la fuente privada `MiruRecetas/mirurecetas-web-source`. Los cambios ordinarios de recetas, menús, Bring! y web se publican mediante GitHub Actions desde el repositorio privado hacia `menu-anual-recetas`; ese publicador **no** transporta los 722 fotogramas a este repositorio raíz.

**Pruebas:** [Actions del repositorio raíz](https://github.com/MiruRecetas/mirurecetas.github.io/actions), GitHub Pages, comprobación de rutas `/assets/hero/vertical/001.webp` y `/assets/hero/horizontal/361.webp`, contenido `image/webp` e integridad frente al manifiesto. La aplicación y sus controles se verifican en el repositorio privado.
