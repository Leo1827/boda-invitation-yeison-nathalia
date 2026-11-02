export default function Hotels() {
  const hotels = ["Hotel Taroa", "Hotel Guajira Real"];

  return (
    <section className="text-center">
      <h2 className="text-xl font-bold">Hospedaje</h2>
      <ul>
        {hotels.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </section>
  );
}