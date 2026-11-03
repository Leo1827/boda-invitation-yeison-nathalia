
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import styles from "./Dashboard.module.css";

type Confirmacion = {
  id: string;
  nombre: string;
  asistencia: boolean;
  acompanantes: number;
  mensaje: string | null;
  created_at: string;
};

type Props = {
  initialData: Confirmacion[];
};

export default function Dashboard({ initialData }: Props) {
  const router = useRouter();
  const supabase = createClient();

  const [confirmaciones, setConfirmaciones] = useState(initialData);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [seleccionado, setSeleccionado] =
    useState<Confirmacion | null>(null);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const total = confirmaciones.length;

  const asistentes = confirmaciones.filter(
    (item) => item.asistencia
  ).length;

  const noAsistentes = confirmaciones.filter(
    (item) => !item.asistencia
  ).length;

  const personas = confirmaciones.reduce(
    (sum, item) =>
      sum + (item.asistencia ? 1 + item.acompanantes : 0),
    0
  );

  const filtradas = useMemo(() => {
    return confirmaciones.filter((item) => {
      const coincideNombre = item.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase().trim());

      const coincideFiltro =
        filtro === "todos" ||
        (filtro === "asisten" && item.asistencia) ||
        (filtro === "no-asisten" && !item.asistencia);

      return coincideNombre && coincideFiltro;
    });
  }, [confirmaciones, busqueda, filtro]);

  const fecha = (value: string) => {
    const date = new Date(value);

    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const anio = date.getFullYear();

    const horas = String(date.getHours()).padStart(2, "0");
    const minutos = String(date.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
  };

  const cerrarSesion = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  };

  const guardarEdicion = async () => {
    if (!seleccionado || loading) return;

    if (!seleccionado.nombre.trim()) {
      setMensaje("El nombre no puede estar vacío.");
      return;
    }

    setLoading(true);
    setMensaje("");

    const { error } = await supabase
      .from("confirmaciones")
      .update({
        nombre: seleccionado.nombre.trim(),
        asistencia: seleccionado.asistencia,
        acompanantes: seleccionado.asistencia
          ? seleccionado.acompanantes
          : 0,
        mensaje: seleccionado.mensaje?.trim() || null,
      })
      .eq("id", seleccionado.id);

    if (error) {
      setMensaje("No se pudo actualizar el registro.");
      setLoading(false);
      return;
    }

    setConfirmaciones((actuales) =>
      actuales.map((item) =>
        item.id === seleccionado.id
          ? {
              ...seleccionado,
              nombre: seleccionado.nombre.trim(),
              acompanantes: seleccionado.asistencia
                ? seleccionado.acompanantes
                : 0,
            }
          : item
      )
    );

    setSeleccionado(null);
    setLoading(false);
    setMensaje("Confirmación actualizada correctamente.");
  };

  const eliminarConfirmacion = async (id: string) => {
    const confirmar = window.confirm(
      "¿Estás seguro de eliminar esta confirmación?"
    );

    if (!confirmar || loading) return;

    setLoading(true);

    const { error } = await supabase
      .from("confirmaciones")
      .delete()
      .eq("id", id);

    if (error) {
      setMensaje("No se pudo eliminar el registro.");
      setLoading(false);
      return;
    }

    setConfirmaciones((actuales) =>
      actuales.filter((item) => item.id !== id)
    );

    setMensaje("Confirmación eliminada.");
    setLoading(false);
  };

  const exportarExcel = () => {
    const datos = filtradas.map((item) => ({
      Nombre: item.nombre,
      Asistencia: item.asistencia ? "Sí" : "No",
      Acompanantes: item.acompanantes,
      Total_personas: item.asistencia
        ? 1 + item.acompanantes
        : 0,
      Mensaje: item.mensaje || "",
      Fecha: fecha(item.created_at),
    }));

    const hoja = XLSX.utils.json_to_sheet(datos);
    const libro = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      libro,
      hoja,
      "Confirmaciones"
    );

    hoja["!cols"] = [
      { wch: 28 },
      { wch: 15 },
      { wch: 15 },
      { wch: 17 },
      { wch: 40 },
      { wch: 24 },
    ];

    XLSX.writeFile(libro, "confirmaciones-boda.xlsx");
  };

  const exportarPDF = () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    pdf.setFontSize(19);
    pdf.text("Confirmaciones de boda", 14, 18);

    pdf.setFontSize(10);
    pdf.text(
      `Respuestas: ${filtradas.length} | Asistirán: ${
        filtradas.filter((item) => item.asistencia).length
      } | No asistirán: ${
        filtradas.filter((item) => !item.asistencia).length
      }`,
      14,
      26
    );

    autoTable(pdf, {
      startY: 33,
      head: [[
        "Nombre",
        "Asistencia",
        "Acompañantes",
        "Total personas",
        "Mensaje",
        "Fecha",
      ]],
      body: filtradas.map((item) => [
        item.nombre,
        item.asistencia ? "Sí" : "No",
        String(item.acompanantes),
        String(
          item.asistencia ? 1 + item.acompanantes : 0
        ),
        item.mensaje || "-",
        fecha(item.created_at),
      ]),
      styles: {
        fontSize: 8,
        cellPadding: 3,
        overflow: "linebreak",
      },
      headStyles: {
        fillColor: [164, 125, 80],
      },
      columnStyles: {
        0: { cellWidth: 35 },
        1: { cellWidth: 25 },
        2: { cellWidth: 25 },
        3: { cellWidth: 25 },
        4: { cellWidth: 85 },
        5: { cellWidth: 40 },
      },
    });

    pdf.save("confirmaciones-boda.pdf");
  };

  return (
    <main className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>
            ADMINISTRACIÓN PRIVADA
          </span>
          <h1>Confirmaciones</h1>
          <p>Gestiona las respuestas de tus invitados.</p>
        </div>

        <button
          className={styles.logout}
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>
      </header>

      <section className={styles.stats}>
        <article className={styles.statCard}>
          <span>Total de respuestas</span>
          <strong>{total}</strong>
          <small>Registros recibidos</small>
        </article>

        <article className={styles.statCard}>
          <span>Asistirán</span>
          <strong>{asistentes}</strong>
          <small>Confirmaciones positivas</small>
        </article>

        <article className={styles.statCard}>
          <span>No asistirán</span>
          <strong>{noAsistentes}</strong>
          <small>Respuestas negativas</small>
        </article>

        <article className={styles.statCard}>
          <span>Personas en total</span>
          <strong>{personas}</strong>
          <small>Incluye acompañantes</small>
        </article>
      </section>

      <section className={styles.content}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Lista de invitados</h2>
            <p>
              {filtradas.length} resultados encontrados
            </p>
          </div>

          <div className={styles.exports}>
            <button onClick={exportarExcel}>
              ↓ Excel
            </button>

            <button onClick={exportarPDF}>
              ↓ PDF
            </button>
          </div>
        </div>

        <div className={styles.filters}>
          <input
            type="search"
            placeholder="Buscar invitado por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="todos">Todas las respuestas</option>
            <option value="asisten">Asistirán</option>
            <option value="no-asisten">No asistirán</option>
          </select>
        </div>

        {mensaje && (
          <p className={styles.notice} role="status">
            {mensaje}
          </p>
        )}

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Invitado</th>
                <th>Asistencia</th>
                <th>Acompañantes</th>
                <th>Mensaje</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {filtradas.map((item) => (
                <tr key={item.id}>
                  <td data-label="Invitado">
                    <strong>{item.nombre}</strong>
                  </td>

                  <td data-label="Asistencia">
                    <span
                      className={
                        item.asistencia
                          ? styles.yes
                          : styles.no
                      }
                    >
                      {item.asistencia
                        ? "Asistirá"
                        : "No asistirá"}
                    </span>
                  </td>

                  <td data-label="Acompañantes">
                    {item.acompanantes}
                  </td>

                  <td
                    data-label="Mensaje"
                    className={styles.message}
                  >
                    {item.mensaje || "Sin mensaje"}
                  </td>

                  <td data-label="Fecha">
                    {fecha(item.created_at)}
                  </td>

                  <td data-label="Acciones">
                    <div className={styles.actions}>
                      <button
                        onClick={() => {
                          setMensaje("");
                          setSeleccionado({ ...item });
                        }}
                        aria-label={`Editar ${item.nombre}`}
                        title="Editar"
                      >
                        ✎
                      </button>

                      <button
                        onClick={() =>
                          eliminarConfirmacion(item.id)
                        }
                        aria-label={`Eliminar ${item.nombre}`}
                        title="Eliminar"
                      >
                        ×
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtradas.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className={styles.empty}
                  >
                    No se encontraron confirmaciones.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {seleccionado && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSeleccionado(null);
            }
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-title"
          >
            <h2 id="edit-title">Editar confirmación</h2>

            <label>Nombre completo</label>
            <input
              value={seleccionado.nombre}
              onChange={(e) =>
                setSeleccionado({
                  ...seleccionado,
                  nombre: e.target.value,
                })
              }
            />

            <label>Asistencia</label>
            <select
              value={seleccionado.asistencia ? "si" : "no"}
              onChange={(e) => {
                const asistencia = e.target.value === "si";

                setSeleccionado({
                  ...seleccionado,
                  asistencia,
                  acompanantes: asistencia
                    ? seleccionado.acompanantes
                    : 0,
                });
              }}
            >
              <option value="si">Asistirá</option>
              <option value="no">No asistirá</option>
            </select>

            {seleccionado.asistencia && (
              <>
                <label>Número de acompañantes</label>
                <select
                  value={seleccionado.acompanantes}
                  onChange={(e) =>
                    setSeleccionado({
                      ...seleccionado,
                      acompanantes: Number(e.target.value),
                    })
                  }
                >
                  {[0, 1, 2, 3].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </>
            )}

            <label>Mensaje</label>
            <textarea
              value={seleccionado.mensaje || ""}
              onChange={(e) =>
                setSeleccionado({
                  ...seleccionado,
                  mensaje: e.target.value,
                })
              }
              rows={4}
            />

            <div className={styles.modalActions}>
              <button
                className={styles.cancel}
                onClick={() => setSeleccionado(null)}
                disabled={loading}
              >
                Cancelar
              </button>

              <button
                className={styles.save}
                onClick={guardarEdicion}
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar cambios"}
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
