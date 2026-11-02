export async function POST(req: Request) {
  const data = await req.json();

  console.log("Confirmado:", data);

  return Response.json({ ok: true });
}