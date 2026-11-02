export async function POST(req: Request) {
  const data = await req.json();

  // luego conectas Google Sheets
  console.log(data);

  return Response.json({ ok: true });
}