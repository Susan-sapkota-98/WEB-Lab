import { useState } from "react";

function ItemList({ items, onDelete }) {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          <span>{item}</span>
          <button
            className="danger"
            type="button"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function ParentChildList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    const value = newItem.trim();
    if (!value) {
      return;
    }

    setItems((prev) => [...prev, value]);
    setNewItem("");
  };

  const deleteItem = (indexToDelete) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="task-card">
      <h2>Q3: Parent to Child List with Props</h2>
      <div className="row">
        <input
          type="text"
          placeholder="Enter item"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button type="button" onClick={addItem}>
          Add
        </button>
      </div>
      <ItemList items={items} onDelete={deleteItem} />
    </section>
  );
}

export default ParentChildList;
