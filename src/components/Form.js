import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      return;
    }
    onAddItem({ quantity, name, packed: false });
    setName('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip 😁?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 15 }, (_, i) => i + 1).map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
