'use client';

import { useState } from 'react';

const slots = ['10:00–12:00', '12:00–14:00', '14:00–16:00', '16:00–18:00', '18:00–20:00'];

export default function Home() {
  const [slot, setSlot] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (slot && phone && consent) setSent(true);
  }

  return <main>
    <section className="hero">
      <div className="topline"><span>ПЕШИЕ ИСТОРИИ</span><span>МОСКВА · 25 ИЮЛЯ</span></div>
      <div className="hero-copy">
        <p className="eyebrow">ОКТЯБРЬСКОЕ ПОЛЕ</p>
        <h1>Немецкая<br/><i>слобода</i></h1>
        <p className="lead">Неспешная прогулка по району с историей, вопросами и вишнёвым фильтром.</p>
        <a className="cta" href="#booking">Выбрать время <span>↓</span></a>
      </div>
      <div className="stamp">25<br/><small>ИЮЛЯ</small></div>
      <div className="house"><div className="roof"/><div className="facade"><span/><span/><span/><span/><span/><span/></div></div>
    </section>

    <section className="about">
      <p className="section-label">ЧТО ТЕБЯ ЖДЁТ</p>
      <div className="about-grid">
        <h2>Квартал,<br/>который<br/><i>выделяется</i><br/>изяществом форм<br/>и уютом</h2>
        <div><p>Ты познакомишься с «немецкой слободой» — её атмосферой, деталями и историями. Гид проведёт по маршруту, а ты сможешь задать любые вопросы.</p><p>В прогулку входит дегустация вишнёвого фильтра. А если захочешь продолжить знакомство со вкусами, попробуешь и другие напитки из коллекции.</p></div>
      </div>
    </section>

    <section className="details">
      <div><span>КОГДА</span><strong>25 июля</strong></div>
      <div><span>ДЛИТЕЛЬНОСТЬ</span><strong>2 часа</strong></div>
      <div><span>ВСТРЕЧА</span><strong>м. «Октябрьское поле»<br/>выход 2</strong></div>
    </section>

    <section id="booking" className="booking">
      <div><p className="section-label">ЗАПИСЬ НА ПРОГУЛКУ</p><h2>Выбери<br/><i>свой маршрут</i></h2><p className="note">Оставь телефон — только чтобы не потеряться в день экскурсии.</p></div>
      <form onSubmit={submit}>
        <label>25 ИЮЛЯ · ВРЕМЯ ПРОГУЛКИ</label>
        <div className="slots">{slots.map(s => <button type="button" onClick={() => setSlot(s)} className={slot === s ? 'selected' : ''} key={s}>{s}</button>)}</div>
        <label htmlFor="phone">НОМЕР ТЕЛЕФОНА</label>
        <input id="phone" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" type="tel"/>
        <label className="check"><input required type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}/><span>Даю согласие на обработку персональных данных</span></label>
        <button className="submit" type="submit">{sent ? 'Ты записан(а) — до встречи!' : 'Забронируй место'}</button>
        {sent && <p className="success">Время: {slot}. Мы свяжемся с тобой по указанному номеру.</p>}
      </form>
    </section>
    <footer>НЕМЕЦКАЯ СЛОБОДА <span>·</span> МОСКВА <span>·</span> 2026</footer>
  </main>;
}
