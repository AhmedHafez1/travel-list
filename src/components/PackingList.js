import React from "react";

const packingList = [
  { name: "Passport", quantity: 1, packed: false },
  { name: "Bag", quantity: 2, packed: false },
  { name: "Papers", quantity: 5, packed: true },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {packingList.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity} {item.name}
      </span>
      <button>❌</button>
    </li>
  );
}
