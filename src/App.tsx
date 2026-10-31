import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <main className="app" dir="rtl">
      <header>
        <div className="logo">FL</div>
        <h2>FOOT <span>LEAGUE</span></h2>
      </header>

      <section className="hero">
        <p className="tag">YOUR CLUB. YOUR LEGACY.</p>
        <h1>اصنع تاريخ <span>ناديك</span></h1>
        <p>أنشئ دوريّك، اجمع أصدقاءك، وابدأ المنافسة.</p>
      </section>

      {page === 'home' ? (
        <section className="cards">
          <button onClick={() => setPage('create')}>
            <b>＋</b>
            <strong>إنشاء دوري</strong>
            <small>أنشئ منافستك الخاصة</small>
          </button>
          <button onClick={() => setPage('join')}>
            <b>↗</b>
            <strong>الانضمام إلى دوري</strong>
            <small>ادخل رمز دعوة أصدقائك</small>
          </button>
          <button onClick={() => setPage('history')}>
            <b>◷</b>
            <strong>سجلات الدوريات</strong>
            <small>راجع إنجازاتك السابقة</small>
          </button>
        </section>
      ) : (
        <section className="panel">
          <button className="back" onClick={() => setPage('home')}>← رجوع</button>
          <h2>
            {page === 'create' ? 'إنشاء دوري جديد' :
             page === 'join' ? 'الانضمام إلى دوري' : 'سجلات الدوريات'}
          </h2>
          {page === 'create' && (
            <input placeholder="اسم الدوري" />
          )}
          {page === 'join' && (
            <input placeholder="رمز الدعوة" />
          )}
          {page !== 'history' && (
            <button className="primary">متابعة</button>
          )}
          {page === 'history' && <p>لا توجد دوريات سابقة حالياً.</p>}
        </section>
      )}
      <footer>FOOT LEAGUE © 2026</footer>
    </main>
  );
}
