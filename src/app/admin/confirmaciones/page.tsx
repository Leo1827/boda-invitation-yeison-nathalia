
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Dashboard from "./Dashboard";

export const dynamic = "force-dynamic";

export default async function ConfirmacionesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== "nathalia@gmail.com") {
    redirect("/admin/login");
  }

  const { data, error } = await supabase
    .from("confirmaciones")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main style={{ padding: 30 }}>
        <h1>Error cargando confirmaciones</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  return <Dashboard initialData={data ?? []} />;
}
