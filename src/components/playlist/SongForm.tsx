"use client";

import { useState } from "react";

export default function SongForm() {
  const [song, setSong] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/playlist", {
      method: "POST",
      body: JSON.stringify({ song }),
    });
  };

  return (
    <div>
      <input onChange={(e) => setSong(e.target.value)} />
      <button onClick={handleSubmit}>Agregar canción</button>
    </div>
  );
}