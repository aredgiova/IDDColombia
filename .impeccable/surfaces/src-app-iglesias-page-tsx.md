---
version: 1
slug: "src-app-iglesias-page-tsx"
primary_target: "src/app/iglesias/page.tsx"
related_targets: ["src/components/churches/church-directory.tsx","src/app/iglesias/directory.css"]
---

# Directorio de iglesias · /iglesias

Modo: Operate. Extensión de la web institucional existente. La tarea consiste en encontrar una congregación, consultar horarios y establecer contacto. Fuente solicitada expresamente: https://www.iglesiadedioscolombia.com/iglesiasdedios.

Se conserva DESIGN.md: Manrope, blanco, azul, fotografía auténtica y superficies abiertas. Composición derivada de los datos: introducción breve con fotografía real de Cúcuta, búsqueda y filtros por departamento y ciudad, listado de filas con ubicación, contactos pastorales, reuniones y enlaces. En móvil, una columna y búsqueda antes de resultados; se omite la fotografía secundaria para priorizar la consulta. La historia se consulta mediante detalles nativos.

La dirección existente y el encargo preciso determinan la extensión. No se abre una nueva selección estética, ni se afirma una comp generada/aprobada. No se añade geolocalización, un mapa con coordenadas inferidas, autenticación o persistencia.

Estados: todas las congregaciones, búsqueda sin distinción de tildes/mayúsculas, selección de departamento y ciudad, filtros combinados, sin coincidencias, territorio sin fichas publicadas, restablecer filtros, historia abierta/cerrada, correo pendiente de confirmación. Los enlaces del mapa del hero cargan el filtro inicial con `?departamento=<código>`; solo se aceptan códigos de los 33 territorios. Al cambiar de departamento se restablece la ciudad y se ofrecen únicamente las ciudades con fichas en ese territorio. «Limpiar filtros» recupera las diez fichas y devuelve el foco a la búsqueda.

Datos: diez registros y ocho ciudades; preservar registros distintos de Piendamó y Soledad. Horarios/contactos son los publicados; confirmarlos antes de visitar. No corregir el dominio de correo de Santa Marta por inferencia. La fuente es un listado parcial, no una cifra nacional. Las búsquedas en Maps usan dirección publicada y ciudad, no una ubicación verificada.

Verificación: contenido fiel, enlaces internos desde Home/header/footer, /iglesiasdedios redirige a /iglesias, metadata propia, sitemap, teclado, búsqueda y filtros en móvil/escritorio, no desbordamiento. Comprobar la llegada desde el mapa con Atlántico (tres fichas), el cambio a Cauca (dos) y la limpieza de filtros (diez). Cierre con revisión independiente y registro del sistema vigente; sin cambiar la identidad global.
