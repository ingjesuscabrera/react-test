import React, { useState } from 'react';

function MyCRUDComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  function handleCreate(newItem) {
    setItems([...items, newItem]);
  }

  function handleRead() {
    return items;
  }

  function handleUpdate(updatedItem) {
    setItems(items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    }));
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <button onClick={() => handleCreate({ id: 4, name: 'Item 4' })}>
        Create
      </button>
      <button onClick={() => console.log(handleRead())}>Read</button>
      <button
        onClick={() => handleUpdate({ id: 2, name: 'Updated Item 2' })}
      >
        Update
      </button>
      <button onClick={() => handleDelete(1)}>Delete</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyCRUDComponent;
