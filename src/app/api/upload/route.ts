// app/api/upload/route.ts
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  const { file } = await req.json();

  const result = await cloudinary.uploader.upload(file, {
    folder: "boda",
  });

  return Response.json(result);
}