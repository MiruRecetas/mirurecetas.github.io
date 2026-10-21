# MiruRecetas · Sincronización documental previa a la reorganización

**Versión 1.0 · 21/10/2026.** Encargo actual: alinear Markdown de GitHub con las 18 fuentes ya verificadas del proyecto. No ejecutar privatización, migración ni cambios funcionales.

## AS IS

Entrada pública y redirección de la raíz a /menu-anual-recetas/. No es una segunda copia del producto ni su generador.

Rama base auditada: `main`, SHA `b2bc01a929c2a9ae98136c8a1542b7e5c174a533`. La línea base de los nueve repositorios no había cambiado respecto a la auditoría del 21/10. Los SHA deben comprobarse de nuevo antes de una intervención posterior.

## Fuentes y precedencia

Las decisiones explícitas vigentes de la usuaria delimitan la operación autorizada. El código, contratos y datos reales determinan qué está implementado. Los informes históricos no se reescriben ni invalidan una decisión posterior. La arquitectura futura no se presenta como desplegada.

El [espejo completo de fuentes](https://github.com/MiruRecetas/motor-precios/blob/main/docs/fuentes-proyecto/README.md) permanece en motor-precios, privado; requiere acceso al repositorio. El documento de entrada es Índice, gobierno y manifiesto v2.0. Se consultan además el protocolo de su rol, AS IS, Actions, economía y TO BE según corresponda. El ZIP de marca sigue en el proyecto y los recursos publicados se preservan.

## Triggers y puerta de integración

pull_request a main activa Validar acceso raíz, contents:read. El proceso Pages administrado se ejecutó tras el commit documental b2bc01a. **No fusionar esta PR documental mientras no haya un procedimiento de publicación autorizado.** No cambiar la redirección, configuración Pages ni workflows.

Solo Markdown en el diff. Antes de fusionar: comprobar main vivo, lista real de cambios, eventos y scripts transitivos; CI aplicable, permisos y ausencia de publicación. Si cambia la base o un workflow, repetir la revisión. No modificar triggers, secretos o protecciones ni desactivar controles para hacer pasar una PR.

## TO BE

Fuentes y desarrollo privados → construcción y validación privadas → publicación controlada de artefactos mínimos → web/PWA públicas. Conservar URL de producto, fotos, marca, datos, raciones, temporizador, nutrición, costes, Bring!, menús, instalación/offline y reversión. Extraer el generador sin adaptar QA, rutas de fuentes y fixtures históricos rompería dependencias.

## PENDIENTE

La migración requiere encargo separado, revisión de permisos/configuración, tratamiento de URL técnicas ya públicas e historial, licencias, publicación con control de concurrencia y reversión. Las pruebas físicas solo son válidas en el alcance expresamente comunicado. No inferir privacidad del HTML/CSS/JS enviado al navegador.

## Historial

21/10/2026: reconciliación de textos, enlaces al espejo privado y revisión de triggers. Los informes y datos históricos se conservan. El estado de fusión/CI de esta sincronización se registra en la PR y en el acta final, no se presupone por este archivo.
