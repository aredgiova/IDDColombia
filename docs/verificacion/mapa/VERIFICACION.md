# Verificación del mapa del hero

Fecha de trabajo: 16 de octubre de 2026, America/Bogota.

- `npm run lint`: correcto, sin advertencias.
- `npm run typecheck`: correcto.
- `npm run build`: correcto tras los ajustes finales; incluye comprobación TypeScript. Home estática y directorio con parámetros renderizado en servidor.
- Vista previa de producción: http://127.0.0.1:3002/.
- Selección de los 33 territorios: selector, título y radio seleccionado coinciden en todos los casos. Evidencia en `interacciones.json`.
- Clic sobre Casanare: muestra estado sin fichas, sin afirmar ausencia de iglesias.
- Teclado: flecha desde Casanare selecciona Cauca; Fin selecciona Vichada.
- Atlántico: 3 fichas y aproximadamente 63 miembros reportados en 2 fichas, sin fecha de corte.
- Enlace «Ver iglesias»: abre `/iglesias?departamento=08`, con tres registros. Filtrar Soledad deja dos; cambiar a Cauca reinicia ciudad y deja dos; limpiar recupera diez.
- Sin desbordamiento horizontal en 320, 390, 768, 1024 y 1440 px; evidencia en `responsive.json`. Archipiélago seleccionado también comprobado a 320 px.
- Tras navegar Home → directorio → Home, los enlaces de dirección conservan borde superior y padding superior de 0; el bloque del hero conserva su borde de 1 px y padding móvil de 22 px.
- Sin errores o advertencias de consola en las interacciones observadas.
- Revisión visual independiente: `REVISION-FINAL.md`; capturas finales de escritorio, móvil y archipiélago en esta carpeta.

No se ejecutó una auditoría completa con lector de pantalla. No se publicó el cambio en el dominio institucional. El directorio es parcial; los datos públicos no permiten ofrecer totales nacionales vigentes de iglesias o miembros.
