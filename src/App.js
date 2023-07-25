import "./styles.css";

function Item({ importance, name }) {
  return (
    <li className="item">
      {name} {importance > 0 && " "}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}
export default function Important() {
  return (
    <section>
      <h1>importance of items</h1>
      <ul>
        <Item importance={9} name="Trips" />
        <Item importance={0} name="Girlfriend" />
        <Item importance={6} name="Software Engineering" />
      </ul>
    </section>
  );
}
