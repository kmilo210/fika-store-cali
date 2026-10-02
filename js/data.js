/* =========================================================================
   FIKA STORE — DATOS DEL CATÁLOGO
   =========================================================================
   Este es el ÚNICO archivo que necesitas editar para:
   - Crear o renombrar categorías (colecciones)
   - Agregar, editar o eliminar productos
   - Configurar ciudades y valores de envío
   - Editar reseñas de clientes y logos de métodos de pago

   No necesitas tocar el HTML, CSS ni el resto del JS.
   Lee el README.md para instrucciones paso a paso con ejemplos.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) CATEGORÍAS / COLECCIONES
------------------------------------------------------------------------- */
const CATEGORIES = [
  { slug: "cuadros-parejas",  name: "Cuadros para Parejas",  image: "images/Banner_Parejas_Cali.png" },
  { slug: "cuadros-albumes",  name: "Cuadros de Álbumes",    image: "images/Banner_Albumes_Cali.png" },
  { slug: "cuadros-diplomas", name: "Cuadros Diplomas",      image: "images/Banner_Diplomas.png" },
  { slug: "cuadros-mama",     name: "Cuadros para Mamá",     image: "images/Banner_Mama_Cali.png" },
  { slug: "cuadros-papa",     name: "Cuadros para Papá",     image: "images/Banner_Papa_Cali.png" }
];

/* -------------------------------------------------------------------------
   2) PRODUCTOS
   -------------------------------------------------------------------------
   - id: identificador único (no repetir, ej: "p11")
   - name: nombre del producto
   - price: precio en pesos, solo número
   - category: debe coincidir EXACTO con un "slug" de CATEGORIES
   - images: LISTA de fotos del producto (mínimo 1). La primera es la
     imagen principal que se ve en las tarjetas y galerías.
   - description: texto de la página del producto
   - bestseller: true/false → aparece en "Los más vendidos"
------------------------------------------------------------------------- */
const PRODUCTS = [


  /* -------------------------------------------------------------------------
   
  Categoria: Cuadros para Parejas
   
  ------------------------------------------------------------------------- */
  {
    id: "cuadro-spotify-1",
    name: "Cuadro con Foto y Canción Spotify",
    price: 30000,
    category: "cuadros-parejas",
    images: [
      "images/Parejas/M1/1001_Grueso_M1.png",
      "images/Medidas_Cuadro_Cali.png"
    ],
    description: "Convierte una canción especial en un recuerdo único. Este cuadro personalizado combina tu foto favorita con la canción y artista que elijas, creando un detalle original y emotivo para regalar. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• Título de la canción y artista.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "cuadro-spotify-2",
    name: "Cuadro con Canción y Frase",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1002_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Haz de una canción y una foto un recuerdo inolvidable. Este cuadro personalizado combina tu fotografía favorita, la canción que elijas y una frase especial para crear un regalo único y emotivo. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• Título de la canción y artista.\n• 1 frase corta.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-collage-corazon",
    name: "Cuadro Collage Corazón",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1003_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un recuerdo lleno de momentos especiales. Este cuadro personalizado reúne hasta 16 de tus fotos favoritas, acompañadas de los nombres, una fecha importante y un mensaje corto para crear un detalle único y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 16 fotos.\n• Nombres.\n• Fecha especial.\n• 1 mensaje corto.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "cuadro-fecha-3",
    name: "Cuadro Fecha + 3 Fotos",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1004_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle sencillo y lleno de significado para celebrar una fecha especial. Este cuadro personalizado combina tres fotografías con una fecha importante, creando un recuerdo único para conservar esos momentos para siempre. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 3 fotos.\n• Fecha especial.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-fecha-4",
    name: "Cuadro Fecha + 4 Fotos",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1005_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un recuerdo único para celebrar el amor y una fecha especial. Este cuadro personalizado reúne cuatro fotografías de la pareja, su fecha especial y sus nombres, creando un detalle romántico para conservar sus mejores momentos. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 4 fotos.\n• Fecha especial.\n• Nombres de la pareja.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-fecha-8",
    name: "Cuadro Fecha + 8 Fotos",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1006_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Celebra su historia de amor con un recuerdo lleno de momentos especiales. Este cuadro personalizado reúne ocho fotografías, una fecha importante y un mensaje especial para crear un detalle romántico y único. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 8 fotos.\n• Fecha especial.\n• 1 mensaje.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-iniciales-3",
    name: "Cuadro Iniciales + 3 Fotos",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1007_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle especial para celebrar una conexión única. Este cuadro personalizado combina tres fotografías con las iniciales de dos personas, creando un recuerdo sencillo, elegante y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 3 fotos.\n• 2 letras iniciales.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-google",
    name: "Cuadro Buscador de Google",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1008_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un recuerdo personalizado inspirado en tus momentos más especiales. Este cuadro combina seis fotografías con un título único, creando un detalle original y emotivo para regalar a alguien especial. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 6 fotos.\n• 1 título.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-calendario-1",
    name: "Cuadro Calendario #1",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1009_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Haz de una fecha especial un recuerdo inolvidable. Este cuadro personalizado combina tu fotografía favorita con la fecha más importante para ti, resaltada en un diseño de calendario elegante y emotivo. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• 1 fecha especial.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "cuadro-calendario-2",
    name: "Cuadro Calendario #2",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1010_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Convierte una fecha especial en un recuerdo único para celebrar el amor. Este cuadro personalizado combina una fotografía especial, una fecha importante y una frase corta en un diseño elegante y emotivo. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 1 foto.\n• 1 fecha especial.\n• Nombres de la pareja.\n• 1 frase corta.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-collage-calendario",
    name: "Cuadro Collage Calendario",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1011_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Cuenta la historia de tu amor a través de tus recuerdos favoritos. Este cuadro personalizado reúne hasta 18 fotografías y una fecha especial, creando un collage único para recordar esos momentos que hacen parte de su historia. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 18 fotos.\n• 1 fecha especial.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-collage-cancion",
    name: "Cuadro Collage Canción",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1012_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle lleno de recuerdos y música para celebrar el amor. Este cuadro personalizado reúne hasta 16 fotografías, los nombres de la pareja y la canción que quieren dedicar, creando un regalo único y especial. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 16 fotos.\n• Nombres de la pareja.\n• Título de la canción a dedicar.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-frase-12",
    name: "Cuadro Frase + 12 Fotos",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1013_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un recuerdo lleno de momentos especiales para celebrar a esa persona que llegó para mejorar tu vida. Este cuadro personalizado reúne hasta 12 fotografías y un mensaje corto, creando un regalo único y lleno de amor. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 12 fotos.\n• 1 mensaje corto.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-infinito-calendario",
    name: "Cuadro Infinito Calendario",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1014_Grueso_M1.png",  "images/Medidas_Cuadro_Cali.png"],
    description: "Celebra el amor con un recuerdo lleno de momentos especiales. Este cuadro personalizado reúne ocho fotografías, los nombres de la pareja, una fecha importante y una frase corta, creando un regalo único y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 8 fotos.\n• Los dos nombres.\n• 1 fecha especial.\n• 1 frase corta.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-instalove",
    name: "Cuadro InstaLove con Fotos",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1015_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un pedacito de su propio InstaLove. Este cuadro personalizado recrea el estilo de un perfil de Instagram para convertir sus recuerdos y su historia de amor en un detalle único y original. ❤️📱\n\n📸 Para personalizarlo necesitamos:\n\n• 7 fotos.\n• 1 fecha especial.\n• Nombres de la pareja \n• Tiempo que lleva la relación.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-superheroes",
    name: "Cuadro Superhéroes de Amor",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1016_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un amor digno de una historia de superhéroes. Este cuadro personalizado combina tus mejores recuerdos con un diseño inspirado en Marvel, creando un regalo original para celebrar un amor que puede con todo. ❤️🦸‍♂️🦸‍♀️\n\n📸 Para personalizarlo necesitamos:\n\n• 8 fotos.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: false
  },
  {
    id: "cuadro-mensaje-3-fotos",
    name: "Cuadro Mensaje + 3 Fotos",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1017_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un recuerdo para celebrar una historia de amor y todos los momentos que han compartido. Este cuadro personalizado combina tus fotografías favoritas con un mensaje especial y una fecha importante, creando un regalo romántico y lleno de significado. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 3 fotos.\n• 1 mensaje.\n• 1 fecha especial.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-noticia-amor",
    name: "Cuadro Noticia de Amor",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1018_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Una noticia de amor que merece ser contada. Este cuadro personalizado presenta su historia como una portada especial, combinando sus mejores recuerdos, creando un detalle romántico y único. ❤️📰\n\n📸 Para personalizarlo necesitamos:\n\n• 2 fotos.\n• Nombres de la pareja.\n• 1 fecha especial.\n• 1 canción para dedicar.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },
  {
    id: "cuadro-significado-amor",
    name: "Cuadro Significado de Amor",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1019_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un diseño elegante para convertir sus mejores recuerdos en una historia de amor. Este cuadro personalizado reúne nueve fotografías y un mensaje especial que puedes cambiar para hacerlo completamente único. ❤️\n\n📸 Para personalizarlo necesitamos:\n\n• 9 fotos.\n• 1 mensaje personalizado.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-corazon-cancion",
    name: "Cuadro Corazón + Canción Spotify",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1020_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un recuerdo lleno de amor, fotografías y música. Este cuadro personalizado reúne los mejores momentos de la pareja junto con una canción para dedicar, creando un detalle único y romántico. ❤️🎶\n\n📸 Para personalizarlo necesitamos:\n\n• Hasta 16 fotos.\n• Nombres de la pareja.\n• 1 fecha especial.\n• 1 canción para dedicar.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "cuadro-netflix-1",
    name: "Cuadro Estilo Netflix",
    price: 30000,
    category: "cuadros-parejas",
    images: ["images/Parejas/M1/1021_Grueso_M1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Convierte su historia de amor en una producción digna de Netflix. Este cuadro personalizado recrea el estilo de una plataforma de streaming, combinando sus fotografías, nombres y un mensaje especial para crear un regalo original y único. ❤️🎬\n\n📸 Para personalizarlo necesitamos:\n\n• 7 fotos.\n• Nombres de la pareja.\n• 1 mensaje.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: false
  },


  /* -------------------------------------------------------------------------
   
  Categoria: Cuadros para Mamá
   
  ------------------------------------------------------------------------- */
  {
    id: "mama-01",
    name: "Cuadro Para Mamá REF-01",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_01.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 1 Foto.\n• Nombre de la mamá \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-02",
    name: "Cuadro Para Mamá REF-02",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_02.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-03",
    name: "Cuadro Para Mamá REF-03",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_03.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-04",
    name: "Cuadro Para Mamá REF-04",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_04.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-05",
    name: "Cuadro Para Mamá REF-05",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_05.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-06",
    name: "Cuadro Para Mamá REF-06",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_06.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-07",
    name: "Cuadro Para Mamá REF-07",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_07.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 1 Foto. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-08",
    name: "Cuadro Para Mamá REF-08",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_08.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n• Nombre de la mamá \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-09",
    name: "Cuadro Para Mamá REF-09",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_09.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n• Nombre de la mamá \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-10",
    name: "Cuadro Para Mamá REF-10",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_10.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 3 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-11",
    name: "Cuadro Para Mamá REF-11",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_11.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 8 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-12",
    name: "Cuadro Para Mamá REF-12",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_12.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 5 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-13",
    name: "Cuadro Para Mamá REF-13",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_13.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-14",
    name: "Cuadro Para Mamá REF-14",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_14.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "mama-15",
    name: "Cuadro Para Mamá REF-15",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_15.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 12 Fotos. \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "mama-16",
    name: "Cuadro Para Mamá REF-16",
    price: 30000,
    category: "cuadros-mama",
    images: ["images/Mamá/M1/Mamá_M1_16.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle hecho para celebrar a mamá y agradecerle por todo su amor. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n• Mensaje Personalizado \n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  /* -------------------------------------------------------------------------
   
  Categoria: Diplomas
   
  ------------------------------------------------------------------------- */
  {
    id: "diploma-mama-01",
    name: "Diploma a la Mejor Mamá",
    price: 30000,
    category: "cuadros-diplomas",
    images: ["images/Diplomas/Diploma_Mamá_1.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Porque mamá merece un reconocimiento por todo lo que hace. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• Nombre de la mamá. \n• Nombre de quien entrega el diploma.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "diploma-mama-02",
    name: "Diploma Reconocimiento Mamá",
    price: 30000,
    category: "cuadros-diplomas",
    images: ["images/Diplomas/Diploma_Mamá_2.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Porque mamá merece un reconocimiento por todo lo que hace. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• Nombre de la mamá.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "diploma-mama-foto",
    name: "Diploma Mejor Mamá con Foto",
    price: 30000,
    category: "cuadros-diplomas",
    images: ["images/Diplomas/Diploma_Mamá_Foto.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Porque mamá merece un reconocimiento por todo lo que hace. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• Nombre de la mamá.\n• 1 foto.\n• Nombre de quien entrega el diploma.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },


  /* -------------------------------------------------------------------------
   
  Categoria: Cuadros para Papá
   
  ------------------------------------------------------------------------- */
  {
    id: "papa-01",
    name: "Cuadro Para Papá REF-01",
    price: 30000,
    category: "cuadros-papa",
    images: ["images/Papá/M1/Papá_M1_01.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 3 Fotos.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-02",
    name: "Cuadro Para Papá REF-02",
    price: 30000,
    category: "cuadros-papa",
    images: ["images/Papá/M1/Papá_M1_02.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-03",
    name: "Cuadro Para Papá REF-03",
    price: 30000,
    category: "cuadros-papa",
    images: ["images/Papá/M1/Papá_M1_03.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 4 Fotos.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-04",
    name: "Cuadro Para Papá REF-04",
    price: 30000,
    category: "cuadros-papa",
    images: ["images/Papá/M1/Papá_M1_04.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 9 Fotos.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-05",
    name: "Cuadro Para Papá REF-05",
    price: 30000,
    category: "cuadros-papa",
    images: ["images/Papá/M1/Papá_M1_05.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 12 Fotos.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },
  {
    id: "papa-06",
    name: "Cuadro Para Papá REF-06",
    price: 30000,
    category: "cuadros-papa",
    images: ["images/Papá/M1/Papá_M1_06.png", "images/Medidas_Cuadro_Cali.png"],
    description: "Un detalle especial para celebrar a papá y agradecerle por todo su amor, apoyo y enseñanzas. ❤️ \n\n📸 Para personalizarlo necesitamos:\n\n• 6 Fotos.\n\n📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },


  /* -------------------------------------------------------------------------
   
  Categoria: Cuadros Álbumes
   
  ------------------------------------------------------------------------- */
  {
    id: "cuadro-1989",
    name: "Cuadro - 1989 - TS ",
    price: 30000,
    category: "cuadros-albumes",
    images: ["images/Albumes/1989_M1.png", "images/Medidas_Cuadro_Cali_2.png"],
    description: "📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "cuadro-cosa-nuestra",
    name: "Cuadro - Cosa Nuestra",
    price: 30000,
    category: "cuadros-albumes",
    images: ["images/Albumes/CosaNuestra_M1.png", "images/Medidas_Cuadro_Cali_2.png"],
    description: "📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "cuadro-en-dormir-sin-madrid",
    name: "Cuadro - En Dormir Sin Madrid",
    price: 30000,
    category: "cuadros-albumes",
    images: ["images/Albumes/EnDormirSinMadrid_M1.png", "images/Medidas_Cuadro_Cali_2.png"],
    description: "📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "cuadro-l3tra-2",
    name: "Cuadro - L3TRA 2",
    price: 30000,
    category: "cuadros-albumes",
    images: ["images/Albumes/L3TRA2_M1.png", "images/Medidas_Cuadro_Cali_2.png"],
    description: "📏 Medidas: 25 × 30 cm\n⚒️ Materiales: Madera sintética y vidrio protector.\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },








];

/* -------------------------------------------------------------------------
   3) CIUDADES Y VALORES DE ENVÍO
   -------------------------------------------------------------------------
   Esta es tu "base de datos" de ciudades. Agrega, edita o elimina las
   ciudades a las que despachas, con el valor del envío según la forma de
   pago del envío (anticipado o contraentrega). El carrito usa esta lista
   para calcular el costo automáticamente según lo que elija el cliente.
   - name: nombre de la ciudad (se muestra en el selector)
   - shippingPrepaid: costo de envío si el cliente paga el envío anticipado
   - shippingCOD: costo de envío si el cliente paga el envío contraentrega
------------------------------------------------------------------------- */
const CITIES = [
  { name: "Cali",         shippingPrepaid: 10000, shippingCOD: 10000 }
];

/* -------------------------------------------------------------------------
   4) MÉTODOS DE PAGO (sección "Pagos seguros" en el Inicio)
   -------------------------------------------------------------------------
   Reemplaza el "logo" por la ruta de tu imagen real cuando la tengas
   (guárdala en la carpeta images/, por ejemplo images/logo-nequi.png).
------------------------------------------------------------------------- */
const PAYMENT_METHODS = [
  { name: "Nequi",        logo: "images/LogosPagos/Nequi_Logo_2.png" },
  { name: "Bancolombia",  logo: "images/LogosPagos/Bancolombia_Logo.png" },
  { name: "Daviplata",    logo: "images/LogosPagos/Daviplata_Logo.png" },
  { name: "Bre-B",        logo: "images/LogosPagos/Bre-B_Logo.png" },
  { name: "PayPal",       logo: "images/LogosPagos/Paypal_Logo.png" }
];

/* -------------------------------------------------------------------------
   5) RESEÑAS DE CLIENTES (sección "Lo que dicen nuestros clientes")
   -------------------------------------------------------------------------
   - stars: número del 1 al 5
   - photo: foto del cliente (opcional, puedes dejar el placeholder)
------------------------------------------------------------------------- */
const REVIEWS = [
  {
    name: "Mariana C.",
    photo: "images/reviewer-1.svg",
    stars: 5,
    comment: "El cuadro quedó hermoso, la calidad superó lo que esperaba y llegó en buen tiempo. ¡Totalmente recomendados!"
  },
  {
    name: "Julián R.",
    photo: "images/reviewer-2.svg",
    stars: 5,
    comment: "Pedí un cuadro para el cumpleaños de mi mamá y le encantó. La atención por WhatsApp fue súper rápida."
  },
  {
    name: "Andrea L.",
    photo: "images/reviewer-3.svg",
    stars: 5,
    comment: "Muy buen producto y llegó a tiempo a mi ciudad. Lo volvería a pedir sin duda."
  }
];

/* -------------------------------------------------------------------------
   6) DATOS GENERALES DEL NEGOCIO
------------------------------------------------------------------------- */
const STORE = {
  name: "Fika Store Cali",
  logo: "images/LogoFikaStore.svg",
  shippingText: "Cuadros Personalizados en Cali ",
  whatsappNumber: "573159159677", // sin "+" y sin espacios
  instagram: "fika_store_col",
  tiktok: "fika_store_col",
  bannerImage: "images/Banner-Fika-Cali-3.png",
  bannerTitle: "Cuadros que cuentan tu historia",
  bannerSubtitle: "Personalizados, hechos con amor",
  codTitle: "Pago Contraentrega",
  codText: "Manejamos domicilios y entregas en Cali con la opción de pago contraentrega: Pagas el valor del producto y domicilio cuando recibes tu pedido en la puerta de tu casa"
};
