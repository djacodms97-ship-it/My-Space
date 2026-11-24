
import { useState } from 'react'
import './style.css'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <main className="app">
      <header>
        <h1>MY SPACE</h1>
        <p>YOUR PERSONAL DASHBOARD</p>
      </header>

      <nav>
        {['home', 'finance', 'schedule', 'links'].map(item => (
          <button key={item} onClick={() => setPage(item)}>
            {item.toUpperCase()}
          </button>
        ))}
      </nav>

      <section>
        <h2>{page === 'home' ? 'Welcome to MY SPACE' : page.toUpperCase()}</h2>
        {page === 'home' && <p>나만의 공간을 시작해 보세요.</p>}
        {page === 'finance' && <p>수입과 지출을 관리하는 공간</p>}
        {page === 'schedule' && <p>일정과 할 일을 관리하는 공간</p>}
        {page === 'links' && <p>저장한 링크를 모아두는 공간</p>}
      </section>
    </main>
  )
}
