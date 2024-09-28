import React from 'react';

export default function PackingList({ packList, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {packList.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.name} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? 'line-through' : '' }}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.name)}>❌</button>
    </li>
  );
}
