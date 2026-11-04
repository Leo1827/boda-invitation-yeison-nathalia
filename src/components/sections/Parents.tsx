
import styles from "./Parents.module.css";

interface ParentsProps {
  groomParents: {
    father: string;
    mother: string;
  };
  brideParents: {
    father: string;
    mother: string;
  };
}

export default function Parents({
  groomParents,
  brideParents,
}: ParentsProps) {
  return (
    <section className={styles.parents}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>
          CON LA BENDICIÓN DE NUESTRAS FAMILIAS
        </span>

        <div className={styles.ornament}>
          <span />
          <span className={styles.flower}>✧</span>
          <span />
        </div>

        <h2 className="italic">Padres de los novios</h2>
        <p>Con amor y gratitud</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.family}>
          <span className={styles.label}>PADRES DEL NOVIO</span>
          <div className={styles.line} />
          <p>{groomParents.father}</p>
          <p>{groomParents.mother}</p>
        </div>

        <div className={styles.family}>
          <span className={styles.label}>PADRES DE LA NOVIA</span>
          <div className={styles.line} />
          <p>{brideParents.father}</p>
          <p>{brideParents.mother}</p>
        </div>
      </div>

      <div className={styles.bottomOrnament}>
        <span />
        <span>♡</span>
        <span />
      </div>
    </section>
  );
}
