import { useEffect, useMemo, useState, useCallback } from 'react'

const STORAGE_KEY = 'todos-v1'

function loadTodos() {
  try {
    const json = localStorage.getItem(STORAGE_KEY)
    return json ? JSON.parse(json) : []
  } catch {
    return []
  }
}

function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch {
    /* ignore */
  }
}

function App() {
  const [todos, setTodos] = useState(() => loadTodos())
  const [inputText, setInputText] = useState('')
  const [filter, setFilter] = useState('all') // all | active | completed
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const itemsLeft = useMemo(() => todos.filter(t => !t.completed).length, [todos])

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter(t => !t.completed)
    if (filter === 'completed') return todos.filter(t => t.completed)
    return todos
  }, [todos, filter])

  const addTodo = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos(prev => [
      { id: crypto.randomUUID(), text: trimmed, completed: false, createdAt: Date.now() },
      ...prev,
    ])
    setInputText('')
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }, [])

  const startEdit = useCallback((id, text) => {
    setEditingId(id)
    setEditingText(text)
  }, [])

  const commitEdit = useCallback(() => {
    const trimmed = editingText.trim()
    if (!editingId) return setEditingText('')
    if (!trimmed) {
      setTodos(prev => prev.filter(t => t.id !== editingId))
    } else {
      setTodos(prev => prev.map(t => (t.id === editingId ? { ...t, text: trimmed } : t)))
    }
    setEditingId(null)
    setEditingText('')
  }, [editingId, editingText])

  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(t => !t.completed))
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(inputText)
  }

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto w-full max-w-md">
        <header className="mb-4">
          <h1 className="text-3xl font-semibold tracking-tight">Todos</h1>
          <p className="text-sm text-gray-500">Minimal, fast, mobile-friendly.</p>
        </header>

        <form onSubmit={onSubmit} className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-sm ring-1 ring-gray-200">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a task…"
            className="flex-1 rounded-md px-3 py-2 text-base outline-none placeholder:text-gray-400"
            autoComplete="off"
            enterKeyHint="done"
            aria-label="New todo"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 active:bg-gray-900/90"
          >
            Add
          </button>
        </form>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {itemsLeft} item{itemsLeft !== 1 ? 's' : ''} left
          </div>
          <div className="flex gap-1">
            {['all','active','completed'].map(key => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-md px-2.5 py-1.5 text-sm ring-1 ring-inset ${
                  filter === key ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white text-gray-800 ring-gray-200'
                }`}
              >
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-3 space-y-2">
          {filteredTodos.length === 0 && (
            <li className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-500">
              Nothing here yet. Add your first task!
            </li>
          )}
          {filteredTodos.map(todo => (
            <li key={todo.id} className="group flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="size-5 accent-gray-900"
                aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
              />

              {editingId === todo.id ? (
                <input
                  autoFocus
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={commitEdit}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') commitEdit()
                    if (e.key === 'Escape') { setEditingId(null); setEditingText('') }
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base outline-none"
                />
              ) : (
                <button
                  onClick={() => startEdit(todo.id, todo.text)}
                  className={`flex-1 text-left text-base leading-6 ${todo.completed ? 'text-gray-400 line-through' : ''}`}
                >
                  {todo.text}
                </button>
              )}

              <button
                onClick={() => deleteTodo(todo.id)}
                className="invisible ml-auto rounded-md px-2 py-1 text-sm text-gray-500 ring-1 ring-transparent hover:bg-gray-50 hover:text-gray-700 hover:ring-gray-200 group-hover:visible"
                aria-label="Delete"
                title="Delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.some(t => t.completed) && (
          <div className="mt-3 text-right">
            <button onClick={clearCompleted} className="text-sm text-gray-600 underline underline-offset-4 hover:text-gray-800">
              Clear completed
            </button>
          </div>
        )}

        <footer className="mt-8 text-center text-xs text-gray-500">
          Data is stored locally in your browser.
        </footer>
      </div>
    </div>
  )
}

export default App
