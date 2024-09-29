import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const packingList = [
  { name: 'Passport', quantity: 1, packed: false },
  { name: 'Bag', quantity: 2, packed: false },
  { name: 'Papers', quantity: 5, packed: true },
];

export default function App() {
  const [packList, setPackList] = useState(packingList);

  function handleAddItem(item) {
    setPackList((list) => [...list, item]);
  }

  function handleDeleteItem(name) {
    setPackList((list) => list.filter((item) => item.name !== name));
  }

  function handleToggleItem(name) {
    setPackList((list) =>
      list.map((x) => (x.name === name ? { ...x, packed: !x.packed } : x))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        packList={packList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
