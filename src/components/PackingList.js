import React from 'react';

export default function PackingList({ packList, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {packList.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.name}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.name)}
      />
      <span style={{ textDecoration: item.packed ? 'line-through' : '' }}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.name)}>❌</button>
    </li>
  );
}
