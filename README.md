This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



-- ==========================================
-- TABLA DE CONFIRMACIONES DE BODA
-- ==========================================

CREATE TABLE public.confirmaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    nombre TEXT NOT NULL
        CHECK (char_length(trim(nombre)) BETWEEN 2 AND 100),

    asistencia BOOLEAN NOT NULL,

    acompanantes SMALLINT NOT NULL DEFAULT 0
        CHECK (acompanantes BETWEEN 0 AND 3),

    mensaje TEXT
        CHECK (mensaje IS NULL OR char_length(mensaje) <= 500),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT acompanantes_si_asiste
        CHECK (asistencia = TRUE OR acompanantes = 0)
);

-- ==========================================
-- ACTIVAR SEGURIDAD RLS
-- ==========================================

ALTER TABLE public.confirmaciones
ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- PERMITIR REGISTRO DE CONFIRMACIONES
-- ==========================================

CREATE POLICY "Permitir registrar confirmaciones"
ON public.confirmaciones
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- ==========================================
-- PERMISOS DE INSERCIÓN
-- ==========================================

GRANT INSERT ON TABLE public.confirmaciones
TO anon, authenticated;




@supabase/supabase-js: permite consultar e insertar información en PostgreSQL.

@supabase/ssr: permite manejar la conexión y las cookies de sesión correctamente con Next.js


1. Verde Oliva Oscuro (Letras principales y títulos)
Nombre descriptivo: Verde Oliva Profundo / Deep Olive Text

Código HEX: #3E4334

Código RGB: (62, 67, 52)

Uso recomendado en una invitación web: Ideal para los títulos principales, caligrafía destacada y subtítulos importantes (como "Nuestra Boda", nombres de los novios y fechas), garantizando excelente legibilidad sobre fondos claros sin el contraste agresivo de un negro puro.

2. Verde Oliva Medio (Hojas de la estructura botánica)
Nombre descriptivo: Verde Oliva Botánico / Botanical Olive Medium

Código HEX: #5B634B

Código RGB: (91, 99, 75)

Uso recomendado en una invitación web: Perfecto para las ilustraciones de follaje, iconos secundarios, líneas divisorias y acentos gráficos medianos que acompañan la estructura visual.

3. Verde Salvia (Detalles botánicos y acentos sutiles)
Nombre descriptivo: Verde Salvia Suave / Soft Sage Leaf

Código HEX: #8B957A

Código RGB: (139, 149, 122)

Uso recomendado en una invitación web: Excelente para pequeños detalles florales, tallos difuminados, viñetas secundarias o estados de desplazamiento (hover) sutiles en elementos interactivos.

4. Dorado Envejecido (Bordes, marcos e iconos)
Nombre descriptivo: Dorado Vintage Antiguo / Antique Muted Gold

Código HEX: #9E885B

Código RGB: (158, 136, 91)

Uso recomendado en una invitación web: Reservado para el marco perimetral elegante, líneas ornamentales, iconos decorativos (como la iglesia o los marcadores de ubicación) y detalles de lujo discreto.

5. Crema Cálido (Fondo principal del sitio web)
Nombre descriptivo: Crema Pergamino / Warm Parchment Cream

Código HEX: #F7F3EA

Código RGB: (247, 243, 234)

Uso recomendado en una invitación web: El tono base ideal para el fondo de toda la página o secciones principales, aportando esa textura visual limpia, cálida y de aspecto clásico analógico.

6. Beige Champaña (Sombras, texturas y contenedores)
Nombre descriptivo: Champaña Degradado / Champagne Shadow & Card BG

Código HEX: #EBE3D0

Código RGB: (235, 227, 208)

Uso recomendado en una invitación web: Útil para tarjetas de contenido flotantes (cards), fondos de secciones alternas, o áreas de contenedores de texto que requieran sutil profundidad.

7. Marrón Sepia (Textos secundarios y contrastes de lectura)
Nombre descriptivo: Marrón Sepia Cálido / Warm Sepia Text

Código HEX: #4D4336

Código RGB: (77, 67, 54)

Uso recomendado en una invitación web: Excelente para los párrafos de texto corrido, versículos o notas informativas (como la dirección de la parroquia y la recepción), aportando una lectura muy armónica y orgánica.