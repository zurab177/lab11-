import React, { useState, useEffect } from 'react';
import TaskList from './TaskList.js';
import TaskForm from './TaskForm.js';

// Ключ для LocalStorage
const LOCAL_STORAGE_KEY = 'react-lab11-tasks';

export default function App() {
  // 1. Инициализация состояния: 
  // Пытаемся получить данные из LocalStorage или используем пустой массив.
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    // Парсим JSON, если данные есть, иначе возвращаем пустой массив
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 2. Эффект для сохранения данных:
  // Запускается каждый раз, когда меняется состояние tasks.
  useEffect(() => {
    // Сохраняем актуальный массив задач в LocalStorage, конвертируя его в JSON-строку
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Функция для добавления новой задачи
  const addTask = (text) => {
    setTasks((prevTasks) => [...prevTasks, text]);
  };

  // Функция для удаления задачи по индексу
  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
 };

 