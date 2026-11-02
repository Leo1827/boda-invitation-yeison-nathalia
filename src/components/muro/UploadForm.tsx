"use client";

import { ChangeEvent } from "react";

export default function UploadForm() {
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // Validación robusta
    if (!files || files.length === 0) return;

    const file = files[0];

    // Validar tamaño (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Máximo 5MB");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ file: reader.result }),
      });
    };
  };

  return <input type="file" onChange={handleUpload} />;
}