import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  const [leagueName, setLeagueName] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [message, setMessage] = useState('');

  const handleContinue = () => {
    if (page === 'create') {
      if (!leagueName.trim()) {
        setMessage('الرجاء كتابة اسم الدوري أولاً');
        return;
      }

      setMessage(`تم إدخال اسم الدوري: ${leagueName}`);
    }

    if (page === 'join') {
      if (!inviteCode.trim()) {
        setMessage('الرجاء كتابة رمز الدعوة أولاً');
        return;
      }

      setMessage(`تم إدخال رمز الدعوة: ${inviteCode}`);
    }
  };

  const goBack = () => {
    setPage('home');
    setMessage('');
  };

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
          <button onClick={() => {
            setPage('create');
            setMessage('');
          }}>
            <b>＋</b>
            <strong>إنشاء دوري</strong>
            <small>أنشئ منافستك الخاصة</small>
          </button>

          <button onClick={() => {
            setPage('join');
            setMessage('');
          }}>
            <b>↗</b>
            <strong>الانضمام إلى دوري</strong>
            <small>ادخل رمز دعوة أصدقائك</small>
          </button>

          <button onClick={() => {
            setPage('history');
            setMessage('');
          }}>
            <b>◷</b>
            <strong>سجلات الدوريات</strong>
            <small>راجع إنجازاتك السابقة</small>
          </button>
        </section>
      ) : (
        <section className="panel">
          <button className="back" onClick={goBack}>
            ← رجوع
          </button>

          <h2>
            {page === 'create'
              ? 'إنشاء دوري جديد'
              : page === 'join'
              ? 'الانضمام إلى دوري'
              : 'سجلات الدوريات'}
          </h2>

          {page === 'create' && (
            <input
              placeholder="اسم الدوري"
              value={leagueName}
              onChange={(e) => {
                setLeagueName(e.target.value);
                setMessage('');
              }}
            />
          )}

          {page === 'join' && (
            <input
              placeholder="رمز الدعوة"
              value={inviteCode}
              onChange={(e) => {
                setInviteCode(e.target.value);
                setMessage('');
              }}
            />
          )}

          {page !== 'history' && (
            <button className="primary" onClick={handleContinue}>
              متابعة
            </button>
          )}

          {message && <p>{message}</p>}

          {page === 'history' && (
            <p>لا توجد دوريات سابقة حالياً.</p>
          )}
        </section>
      )}

      <footer>FOOT LEAGUE © 2026</footer>
    </main>
  );
}
