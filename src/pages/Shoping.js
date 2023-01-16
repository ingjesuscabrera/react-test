import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(item) {
    setItems(items.filter(i => i !== item));
  }

  function updateItem(item) {
    setItems(
      items.map(i => {
        if (i === item) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      })
    );
  }

  function totalCost() {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  return (
    <div>

    <div>
      <button onClick={addItem}>Click me</button>
    </div>

      <div>
        {items.map(item => (
          <div key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </div>
        ))}
      </div>
      <div>Total: ${totalCost()}</div>
    </div>
  );
}

export default ShoppingCart;
