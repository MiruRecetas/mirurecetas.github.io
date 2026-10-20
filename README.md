> **Estado comprobado (20/10/2026).** Este repositorio público se limita a la entrada/redirección de la URL raíz; la web/PWA y sus publicaciones permanecen en `menu-anual-recetas`. La futura separación entre desarrollo privado y artefactos web públicos no se ha realizado y no autoriza cambiar esta redirección, el origen ni las rutas de la PWA.

---

# MiruRecetas · Dirección corta

Entrada pública: https://mirurecetas.github.io/

Redirige automáticamente a https://mirurecetas.github.io/menu-anual-recetas/.
El repositorio de contenido y desarrollo sigue siendo [menu-anual-recetas](https://github.com/MiruRecetas/menu-anual-recetas).

GitHub Pages publica la raíz de `main`. Se mantiene una sola copia de recetas,
menús y fotografías. La redirección conserva parámetros y fragmento con JavaScript,
usa meta refresh sin JavaScript y ofrece un enlace alternativo.

La PR ejecuta una comprobación de navegador en móvil, tablet y escritorio,
con y sin JavaScript, hasta abrir la web pública real.


## Futura landing y mantenimiento

Este repositorio es el lugar recomendado para una landing independiente en la dirección raíz. Actualmente solo existe la redirección; la landing aún no está implementada. Cuando se solicite, sustituir aquí `index.html` por esa portada con enlaces a la aplicación, y adaptar `tests/redirect.cjs` y su workflow para verificar la nueva navegación.

Mantener recetas, menús, nutrición, fotografías y generador en `menu-anual-recetas`: no copiar la aplicación ni migrar sus rutas por un cambio de portada. El modelo en `hosting/github-pages-root/` de aquel repositorio no sincroniza automáticamente este sitio.

Editar mediante rama y PR, esperar **Validar acceso raíz**, fusionar y comprobar **pages build and deployment**. Verificar la página pública real, no solo el commit. Los seis casos actuales prueban la redirección con y sin JavaScript y conservación de parámetros/fragmento cuando JavaScript está activo. Los cambios solo de README no requieren modificar HTML.

Protocolo del equipo web: [MANTENIMIENTO-DISENO-WEB.md](https://github.com/MiruRecetas/menu-anual-recetas/blob/main/docs/MANTENIMIENTO-DISENO-WEB.md). Revisar ambos main antes de cambios relacionados y conservar las autorizaciones y responsabilidades del proyecto.
