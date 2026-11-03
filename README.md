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