import UploadForm from "@/components/muro/UploadForm";
import Gallery from "@/components/muro/Gallery";

export default function Muro() {
  return (
    <main>
      <h1>Muro de recuerdos</h1>
      <UploadForm />
      <Gallery />
    </main>
  );
}