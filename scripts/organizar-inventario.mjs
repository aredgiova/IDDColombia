import { readFile, writeFile } from 'node:fs/promises';
const dir = 'docs/investigacion';
const d = JSON.parse(await readFile(`${dir}/captura-publica.json`, 'utf8'));
const entities = {aacute:'á',eacute:'é',iacute:'í',oacute:'ó',uacute:'ú',Aacute:'Á',Eacute:'É',Iacute:'Í',Oacute:'Ó',Uacute:'Ú',ntilde:'ñ',Ntilde:'Ñ',uuml:'ü',Uuml:'Ü',iexcl:'¡',iquest:'¿',copy:'©',bull:'•'};
const decode = s => s.replace(/&([A-Za-z]+);/g, (all,k) => entities[k] ?? all);
function deep(v) { if(typeof v === 'string') return decode(v); if(Array.isArray(v)) return v.map(deep); if(v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,deep(x)])); return v; }
d.pages = deep(d.pages);
d.sitemapTotal ??= d.sitemapUrls.length;
d.excludedProfileCount ??= d.sitemapUrls.filter(u=>new URL(u).pathname.startsWith('/profile/')).length;
d.sitemapUrls = d.sitemapUrls.filter(u=>!new URL(u).pathname.startsWith('/profile/'));
d.methodology = 'GET público de sitemap y enlaces HTML. Excluidos perfiles personales, parámetros, descarga de medios y operaciones autenticadas. Extracción estática: no demuestra funcionamiento de widgets ni sustituye exportación de Wix. Tiempos HTTP no son Core Web Vitals.';
await writeFile(`${dir}/captura-publica.json`, JSON.stringify(d,null,2));
const ministries = {
 '/ministerio-infantil':['Infantil','infantil'], '/misiones-transculturales':['Misiones transculturales','misiones-transculturales'], '/generación-emergente-jovenes':['Generación emergente','jovenes'], '/conestadas-ministerio-de-la-mujer':['Conestadas (nombre por confirmar)','mujer'], '/ministerio-de-hombres':['Hombres','hombres'], '/ministerio-de-matrimonio-y-familia':['Matrimonio y familia','matrimonio-y-familia'], '/educación':['Educación','educacion'], '/evangelismo-y-discipulado':['Evangelismo y discipulado','evangelismo-y-discipulado'], '/plantación-de-iglesias':['Plantación de iglesias','plantacion-de-iglesias'], '/insidencia-publica-y-social':['Incidencia pública y social','incidencia-publica-y-social'], '/capellania':['Capellanía','capellania'], '/cuidado-y-desarrollo-ministerial':['Cuidado y desarrollo ministerial','cuidado-ministerial'], '/h-max-hijos-de-pastores-al-maximo':['H-MAX','h-max']
};
const institutional = {
 '/historia':['Historia','/historia','Conservar con revisión de fechas, nombres y cifras; distinguir historia internacional y colombiana.'],
 '/misión-y-visión':['Misión y visión','/mision-y-vision','Transcribir y validar misión y visión incluidas en imágenes.'],
 '/organigrama':['Organigrama','/organigrama','Recuperar estructura y nombres desde imagen; validar vigencia de cargos.'],
 '/copia-de-organigrama':['Ruta estratégica','/ruta-estrategica','Transcribir infografía y sustituir slug genérico.'],
 '/declaración-de-fe':['Declaración de fe','/declaracion-de-fe','Conservar las 14 afirmaciones doctrinales con validación institucional.'],
 '/iglesia-internacional':['Iglesia internacional','/iglesia-internacional','Conservar y revisar enlaces institucionales externos.'],
 '/conexión-20-30':['Conexión 20/30','/conexion-2030','Confirmar vigencia del plan 2021–2030 y responsables.']
};
const other = {
 '/':['Inicio','Inicio','/','Rediseñar jerarquía para visitantes y miembros; corregir enlaces sociales del pie.'],
 '/about-1':['Credencialización','Recursos','/credencializacion','Conservar cuatro niveles y formularios Google; confirmar convocatorias y requisitos.'],
 '/biblioteca':['Biblioteca','Recursos','/recursos','Navegador confirma carpetas Logos (19), Credencialización (2) y Educación FETP (2); catalogar archivos y exportar widget. HTML no incluye el contenido.'],
 '/blog':['Blog','Actualidad','/blog','Tres artículos visibles; revisión editorial antes de migrar.'],
 '/contáctanos':['Contacto','Contacto','/contacto','Confirmar contactos y destinatario; envío no probado.'],
 '/formulario':['Formulario alternativo','Contacto','/contacto','Validar propósito y consolidar si duplica contacto; no migrar campos innecesarios.'],
 '/datos-personales':['Política de datos personales','Institucional','/datos-personales','Revisión prioritaria: instrucciones de borrador y contactos contradictorios. No equivale a revisión legal.'],
 '/iglesiasdedios':['Directorio de iglesias','Iglesias','/iglesias','10 fichas visibles; verificar cobertura, duplicados, horarios y contactos.'],
 '/ubicaciones':['Ubicaciones','Iglesias',null,'Solo estructura compartida en HTML; confirmar propósito antes de fusionar.'],
 '/copia-de-historia':['Calendario 2026','Agenda','/agenda','Calendario en imágenes; transcribir eventos y fechas desde fuente aprobada.'],
 '/eventos':['Listado de eventos','Agenda','/agenda','Contiene tres eventos de ejemplo con fechas de 2023; revisar y excluir borradores.'],
 '/events-page':['Eventos alternativo','Agenda',null,'Contenido específico no recuperado; revisar widget y consolidación con agenda.'],
 '/convencion2024':['Convención Enfocados 2024','Archivo','/agenda/convencion-2024','Archivar como pasado; HTML muestra aplicación no disponible y registro antiguo.'],
 '/donar':['Colabora / donar','Participación',null,'Validar programa, responsable y destino de donativos; pasarela no verificada.'],
 '/servicios':['Servicios y cultos','Participación',null,'Validar origen de horarios 10:00 y 18:00; no aplicar a todas las congregaciones.']
};
function classify(p) {
 const pathname = decodeURIComponent(new URL(p.url).pathname);
 if(ministries[pathname]) { const [title,slug]=ministries[pathname]; const specific=['/educación','/plantación-de-iglesias','/insidencia-publica-y-social'].includes(pathname); return {category:'Ministerios',label:title,proposedPath:`/ministerios/${slug}`,action:specific?'Conservar contenido específico; validar programas, metas, fechas y responsables.':'Completar: contenido genérico repetido; solicitar propósito, programas, responsable y recursos.',contentState:specific?'Texto específico por validar':'Texto genérico'}; }
 if(institutional[pathname]) {const [label,proposedPath,action]=institutional[pathname]; return {category:'Institucional',label,proposedPath,action,contentState: ['/misión-y-visión','/organigrama','/copia-de-organigrama'].includes(pathname)?'Información principal en imágenes':'Texto recuperado por validar'};}
 if(other[pathname]) {const [label,category,proposedPath,action]=other[pathname];return{label,category,proposedPath,action,contentState:pathname==='/biblioteca'?'Widget verificado en navegador; archivos por catalogar':['/ubicaciones','/events-page'].includes(pathname)?'Contenido específico no recuperado':pathname==='/copia-de-historia'?'Información principal en imágenes':'Revisión editorial'};}
 if(pathname.startsWith('/items/')) return {label:p.title.split(' | ')[0],category:'Fichas de iglesias',proposedPath:null,action:'Relacionar con las 10 fichas del listado mediante ID estable; nueve URL de detalle halladas. Definir slug solo tras resolver duplicados.',contentState:'Ficha pública recuperada'};
 if(pathname.startsWith('/post/')) return {label:p.title,category:'Artículos',proposedPath:new URL(p.url).pathname,action:'Mantener URL si se conserva el artículo; sustituir instrucciones de plantilla por contenido aprobado. No inventar testimonios.',contentState:'Borrador editorial publicado'};
 if(pathname.startsWith('/events-1/')) return {label:p.title.split(' | ')[0],category:'Eventos de ejemplo',proposedPath:null,action:'Fecha 2023, descripción de editor y ubicación Madrid; confirmar descarte. No presentar como agenda colombiana vigente.',contentState:'Ejemplo de plantilla'};
 if(/reportes|estadisticas|iglesias-datos|miembros|\/account\//.test(pathname)) return {label:p.title.split(' | ')[0],category:'Área operativa',proposedPath:null,action:pathname==='/reportes'?'Navegador confirma acceso por contraseña (Solo para invitados). Inventariar con responsable autorizado; no reconstruir como formulario público.':'Inventariar con responsable autenticado antes de migrar; autorización, datos y procesos sin verificar. No redirigir a inicio ni reconstruir como formulario público.',contentState:pathname==='/reportes'?'Protección por contraseña observada':'Acceso o contenido dinámico por investigar'};
 throw new Error('Ruta sin clasificar: '+pathname);
}
const pages=d.pages.map((p,i)=>{
 const info=classify(p);
 const start=p.textBlocks[9]==='Más'?10:0;
 const end=p.textBlocks.indexOf('NUESTRA IGLESIA',start);
 return {id:`IDD-${String(i+1).padStart(3,'0')}`,url:p.url,path:new URL(p.url).pathname,...info,httpStatus:p.status,title:p.title,canonical:p.canonical,description:p.metas.find(m=>m.name==='description')?.content || null,h1Count:p.headings.filter(h=>h.level===1).length,sourceFile:p.sourceFile,contentBlocks:p.textBlocks.slice(start,end<0?undefined:end),imageCount:p.images.length,reviewStatus:'Pendiente de validación institucional',migrationDecision:'Propuesta, no ejecutada',notes:'Los bloques provienen del HTML estático; pueden omitir listas, embeds y contenido generado por JavaScript.'};
});
const assets=new Map();
const external=new Map();
const documents=new Map();
for(const p of d.pages) {
 for(const img of p.images) {
  const match=img.src.match(/^(https:\/\/static\.wixstatic\.com\/media\/[^/]+)/);
  const key=match?.[1]||img.src;
  if(!assets.has(key)) assets.set(key,{id:`ASSET-${String(assets.size+1).padStart(3,'0')}`,sourceKey:key,originalCandidate:match?.[1]||null,originalVerified:false,observedUrls:[],alts:[],sourcePages:[],action:'Confirmar archivo original, uso autorizado, vigencia y texto alternativo.'});
  const row=assets.get(key); if(!row.observedUrls.includes(img.src))row.observedUrls.push(img.src);if(!row.alts.includes(img.alt))row.alts.push(img.alt);if(!row.sourcePages.includes(p.url))row.sourcePages.push(p.url);
 }
 for(const l of p.links) {
  if(/\.(pdf|pptx?|docx?|xlsx?)(?:\?|$)/i.test(l.href)){if(!documents.has(l.href))documents.set(l.href,{url:l.href,text:l.text,sourcePages:[],verifiedContent:false});const r=documents.get(l.href);if(!r.sourcePages.includes(p.url))r.sourcePages.push(p.url);}
  if(/^https?:/.test(l.href)&&new URL(l.href).origin!==d.origin&&!/sharer|\/intent\/|shareArticle/.test(l.href)){if(!external.has(l.href))external.set(l.href,{url:l.href,labels:[],sourcePages:[],destinationVerified:false});const r=external.get(l.href);if(!r.labels.includes(l.text))r.labels.push(l.text);if(!r.sourcePages.includes(p.url))r.sourcePages.push(p.url);}
 }
}
const counts=pages.reduce((r,p)=>(r[p.category]=(r[p.category]||0)+1,r),{});
const summary={date:'2026-10-16',timezone:'America/Bogota',sitemapTotal:d.sitemapTotal,excludedProfileCount:d.excludedProfileCount,sitemapInScope:d.sitemapUrls.length,pagesCaptured:pages.length,categories:counts,uniqueImageSources:assets.size,linkedDocuments:documents.size,externalDestinations:external.size,noDescription:pages.filter(p=>!p.description).length,noH1:pages.filter(p=>!p.h1Count).length,scope:'Muestra pública por sitemap y enlaces, sin certificar totalidad CMS ni funcionalidad.',redirectStatus:'Propuesta editorial; aún no configurada ni probada.'};
await writeFile(`${dir}/inventario-paginas.json`,JSON.stringify({summary,pages},null,2));
await writeFile(`${dir}/inventario-recursos.json`,JSON.stringify({images:[...assets.values()],documents:[...documents.values()],externalLinks:[...external.values()]},null,2));
await writeFile(`${dir}/redirecciones-propuestas.json`,JSON.stringify({status:'DRAFT — confirmar y activar solo cuando exista el destino',rules:pages.filter(p=>p.proposedPath&&p.proposedPath!==p.path).map(p=>({source:p.path,destination:p.proposedPath,statusCode:301,enabled:false,reason:p.action})),pending:pages.filter(p=>!p.proposedPath).map(p=>({source:p.path,reason:p.action}))},null,2));
const esc=s=>String(s||'—').replace(/\|/g,' / ').replace(/\n/g,' ');
let md='# Inventario del sitio actual\n\nFecha de corte: 16 de octubre de 2026, America/Bogota.\n\n'+`${pages.length} rutas consultadas mediante GET público. ${d.sitemapTotal} URL anunciadas en sitemap: ${d.excludedProfileCount} perfiles excluidos y ${d.sitemapUrls.length} rutas dentro de alcance; se añadió una ruta de cuenta descubierta por enlace. Todas las consultas devolvieron HTTP 200; eso no acredita que los widgets funcionen ni que haya contenido completo.\n\n`;
md+='El [JSON de páginas](investigacion/inventario-paginas.json) conserva bloques de texto, metadatos, fuentes y decisiones por ruta. El [catálogo de recursos](investigacion/inventario-recursos.json) conserva imágenes, archivos y destinos externos. Los textos extraídos son evidencia de migración, no contenido aprobado para publicar.\n\n';
for(const cat of Object.keys(counts)) {md+=`## ${cat} (${counts[cat]})\n\n| ID / página | URL actual | Estado / acción | Ruta propuesta |\n|---|---|---|---|\n`;for(const p of pages.filter(p=>p.category===cat))md+=`| ${p.id} · ${esc(p.label)} | [${decodeURIComponent(p.path)}](${p.url}) | ${esc(p.action)} | ${esc(p.proposedPath||'Por decidir')} |\n`;md+='\n';}
md+='## Límites y continuidad\n\n- Los perfiles públicos no forman parte del inventario de contenido; no se reconstruyeron cuentas ni membresías.\n- El HTML no revela todos los datos de Wix, widgets, colecciones o integraciones. Se requiere exportación con acceso del administrador para cerrar la migración.\n- Los originales de imágenes son candidatos derivados de las URL observadas, no descargas verificadas. Los dos documentos se registraron sin inspección de contenido.\n- Las páginas operativas quedan pendientes de revisión de responsables, permisos y datos. No se probó acceso a información privada.\n- Ninguna redirección se ha aplicado; conservar rutas sin reemplazo hasta decidir conservar, consolidar, archivar o retirar. No redirigir indiscriminadamente a inicio.\n';
await writeFile('docs/INVENTARIO-SITIO-ACTUAL.md',md);
console.log(JSON.stringify(summary,null,2));
