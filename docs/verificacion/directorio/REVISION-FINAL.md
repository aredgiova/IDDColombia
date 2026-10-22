disposition: ship

Revisión independiente del código y las seis capturas iniciales, actualizada exclusivamente para el filtro Departamento y su preselección por URL con las cuatro capturas renovadas de escritorio y móvil. Sin navegador, cambios de UI ni un nuevo barrido general. No hay comp aprobada ni QUALITY BAR nuevo: el encargo es una extensión del sistema existente. Las pruebas funcionales se toman del registro del constructor, sin repetirlas; el constructor confirma la nueva compilación aprobada.

## persistence

Pass. PRODUCT.md registra el alcance y ambos públicos; DESIGN.md conserva la identidad vigente. DIRECTORIO-BRIEF.md fija el modo Operate y justifica el reflujo móvil. El contrato de la extensión /iglesias está registrado en `src/app/layout.tsx`; `rutas-http.json` confirma que permanece en el HTML servido de la ruta dinámica, tanto sin filtro como con `?departamento=19`. El registro verifica respuestas 200 con diez y dos fichas, alias 308 y sitemap 200. La fuente y las normalizaciones editoriales están documentadas en DIRECTORIO-CONTENIDO.md; los diez registros mantienen identificadores independientes.

## fidelity

| Elemento | Evaluación | Evidencia |
| --- | --- | --- |
| TYPE | match | Manrope, títulos de peso alto, jerarquía y colores coherentes con DESIGN.md; el título conduce a la tarea. |
| MATERIAL | match | Fotografía real de Cúcuta, logo institucional, superficies blancas y azul pálido; sin material físico simulado. |
| Orden y composición | match | Introducción breve, búsqueda, departamento y ciudad antes del listado; filas abiertas de ubicación, reuniones y contacto. Los tres controles conservan etiquetas, altura y alineación consistentes. |
| Móvil | adaptation | Una columna y fotografía secundaria omitida, decisión explícita del brief para priorizar la consulta. La captura completa conserva todos los datos y acciones. |
| Datos y contactos | match | Diez fichas; Piendamó y Soledad mantienen sus dos registros. Santa Marta conserva el correo publicado como texto con indicación de confirmación. |
| Estados | match | Contador, filtro activo, limpieza y recuperación sin coincidencias visibles. Código e `interacciones.json` confirman el singular «1 congregación encontrada». |
| Departamento y URL | match | El selector actualiza las ciudades disponibles y restablece la selección de ciudad al cambiar. `departamentos.json` registra Cauca: 2, Atlántico: 3, Amazonas: 0 con mensaje contextual y preselección `?departamento=19`: 2. El código valida el parámetro y conserva el restablecimiento general con retorno de foco. |
| Contrato y alcance | match | La extensión sirve a visitantes y miembros con la identidad existente; no introduce claims, coordenadas inferidas ni otra identidad. La navegación, el contenido y los controles siguen el modo Operate. |

## ceiling

Reached para esta extensión. El acabado utiliza los recursos propios del sistema: fotografía documental, azul institucional, separación por líneas y tipografía consistente. No falta un recurso visual requerido por el encargo. Los avisos del detector sobre tamaños compactos corresponden a valores explícitos del directorio y una rampa documental resumida; las capturas no muestran una consecuencia material de legibilidad. La evidencia responsive inicial registra 320, 375, 768, 1024 y 1440 px sin desbordamiento. La revisión localizada confirma tres controles legibles y apilados en móvil; `departamentos.json` registra 375 px sin desbordamiento tras añadir Departamento.

## material_fixes

Ninguna P1/P2 identificada en la evidencia revisada. La extensión por departamento no introduce regresiones materiales visibles en las cuatro capturas actualizadas.

## keep

Conservar las filas abiertas, la búsqueda tolerante a tildes, los registros distintos por congregación, la fotografía auténtica y el tratamiento explícito de datos pendientes de confirmación.
