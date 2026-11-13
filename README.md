# casafebe.com

Sitio de Casa Febe, fotografía y video social (XV años, bodas, bautizos, fiestas). Parte de CosmoMateria.
Publicado con GitHub Pages; el dominio está en `CNAME`.

## Estructura
- `index.html` una sola página: portada, intro, galería, foto a sangre, contacto, historia
- `css/styles.css` colores y tipografía (variables al inicio)
- `js/main.js` menú que cambia al bajar, parallax, texto que se ilumina con el scroll, aparición de fotos, botón flotante de WhatsApp
- `assets/img/` fotos en dos tamaños (900 y 1800 px), logos, favicons, `og.jpg` para compartir en redes

## Agregar fotos
1. Exporta la foto en JPG a 1800 px de ancho y otra a 900 px (calidad ~80).
2. Nómbralas `algo-1800.jpg` y `algo-900.jpg` en `assets/img/`.
3. Copia un bloque `<figure>` dentro de `.grid` en `index.html` y cambia nombres y texto `alt`.

## Agregar el video
1. Expórtalo en MP4 (H.264), 1080p, idealmente menos de 25 MB. Si pesa más, súbelo a YouTube o Vimeo y se incrusta.
2. Guárdalo como `assets/video/casafebe.mp4` y una portada en `assets/img/video-portada.jpg`.
3. En `index.html` quita los comentarios del bloque VIDEO al inicio de la galería.

## Foto de la nana Febe
En la sección Historia está el monograma de relleno. Cuando tengas la foto, guárdala como `assets/img/nana-febe.jpg` y sigue la nota del comentario.
