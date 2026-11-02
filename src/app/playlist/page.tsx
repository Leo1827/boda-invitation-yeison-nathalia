import SongForm from "@/components/playlist/SongForm";
import SongList from "@/components/playlist/SongList";

export default function Playlist() {
  return (
    <main>
      <h1>Playlist de la boda</h1>
      <SongForm />
      <SongList />
    </main>
  );
}