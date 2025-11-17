import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask(text.trim());
      setText(''); // Очищаем поле ввода
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text"
        placeholder="Новая задача..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button type="submit">
        Добавить
      </button>
    </form>
  );
}