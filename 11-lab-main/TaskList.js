import React from 'react';

export default function TaskList({ tasks, removeTask }) {
  if (tasks.length === 0) {
    return <p>Список задач пуст. Добавьте первую задачу!</p>;
  }

  return (
    <ul>
      {tasks.map((t, i) => (
        <li 
          key={i} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '5px 0',
            borderBottom: '1px solid #eee' 
          }}
        >
          {t} 
          <button 
            onClick={() => removeTask(i)}
            style={{ 
              marginLeft: '15px', 
              cursor: 'pointer', 
              background: 'red', 
              color: 'white', 
              border: 'none', 
              padding: '5px 10px' 
            }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}