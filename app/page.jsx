'use client';

import { useState } from 'react';

const slots = ['10:00вЂ“12:00', '12:00вЂ“14:00', '14:00вЂ“16:00', '16:00вЂ“18:00', '18:00вЂ“20:00'];

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
      <div className="topline"><span>РџР•РЁРР• РРЎРўРћР РР</span><span>РњРћРЎРљР’Рђ В· 25 РР®Р›РЇ</span></div>
      <div className="hero-copy">
        <p className="eyebrow">РћРљРўРЇР‘Р Р¬РЎРљРћР• РџРћР›Р•</p>
        <h1>РќРµРјРµС†РєР°СЏ<br/><i>СЃР»РѕР±РѕРґР°</i></h1>
        <p className="lead">РќРµСЃРїРµС€РЅР°СЏ РїСЂРѕРіСѓР»РєР° РїРѕ СЂР°Р№РѕРЅСѓ СЃ РёСЃС‚РѕСЂРёРµР№, РІРѕРїСЂРѕСЃР°РјРё Рё РІРёС€РЅС‘РІС‹Рј С„РёР»СЊС‚СЂРѕРј.</p>
        <a className="cta" href="#booking">Р’С‹Р±СЂР°С‚СЊ РІСЂРµРјСЏ <span>в†“</span></a>
      </div>
      <div className="stamp">25<br/><small>РР®Р›РЇ</small></div>
      <div className="house"><div className="roof"/><div className="facade"><span/><span/><span/><span/><span/><span/></div></div>
    </section>

    <section className="about">
      <p className="section-label">Р§РўРћ РўР•Р‘РЇ Р–Р”РЃРў</p>
      <div className="about-grid">
        <h2>РљРІР°СЂС‚Р°Р»,<br/>РєРѕС‚РѕСЂС‹Р№<br/><i>РІС‹РґРµР»СЏРµС‚СЃСЏ</i><br/>РёР·СЏС‰РµСЃС‚РІРѕРј С„РѕСЂРј<br/>Рё СѓСЋС‚РѕРј</h2>
        <div><p>РўС‹ РїРѕР·РЅР°РєРѕРјРёС€СЊСЃСЏ СЃ В«РЅРµРјРµС†РєРѕР№ СЃР»РѕР±РѕРґРѕР№В» вЂ” РµС‘ Р°С‚РјРѕСЃС„РµСЂРѕР№, РґРµС‚Р°Р»СЏРјРё Рё РёСЃС‚РѕСЂРёСЏРјРё. Р“РёРґ РїСЂРѕРІРµРґС‘С‚ РїРѕ РјР°СЂС€СЂСѓС‚Сѓ, Р° С‚С‹ СЃРјРѕР¶РµС€СЊ Р·Р°РґР°С‚СЊ Р»СЋР±С‹Рµ РІРѕРїСЂРѕСЃС‹.</p><p>Р’ РїСЂРѕРіСѓР»РєСѓ РІС…РѕРґРёС‚ РґРµРіСѓСЃС‚Р°С†РёСЏ РІРёС€РЅС‘РІРѕРіРѕ С„РёР»СЊС‚СЂР°. Рђ РµСЃР»Рё Р·Р°С…РѕС‡РµС€СЊ РїСЂРѕРґРѕР»Р¶РёС‚СЊ Р·РЅР°РєРѕРјСЃС‚РІРѕ СЃРѕ РІРєСѓСЃР°РјРё, РїРѕРїСЂРѕР±СѓРµС€СЊ Рё РґСЂСѓРіРёРµ РЅР°РїРёС‚РєРё РёР· РєРѕР»Р»РµРєС†РёРё.</p></div>
      </div>
    </section>

    <section className="details">
      <div><span>РљРћР“Р”Рђ</span><strong>25 РёСЋР»СЏ</strong></div>
      <div><span>Р”Р›РРўР•Р›Р¬РќРћРЎРўР¬</span><strong>2 С‡Р°СЃР°</strong></div>
      <div><span>Р’РЎРўР Р•Р§Рђ</span><strong>Рј. В«РћРєС‚СЏР±СЂСЊСЃРєРѕРµ РїРѕР»РµВ»<br/>РІС‹С…РѕРґ 2</strong></div>
    </section>

    <section id="booking" className="booking">
      <div><p className="section-label">Р—РђРџРРЎР¬ РќРђ РџР РћР“РЈР›РљРЈ</p><h2>Р’С‹Р±РµСЂРё<br/><i>СЃРІРѕР№ РјР°СЂС€СЂСѓС‚</i></h2><p className="note">РћСЃС‚Р°РІСЊ С‚РµР»РµС„РѕРЅ вЂ” С‚РѕР»СЊРєРѕ С‡С‚РѕР±С‹ РЅРµ РїРѕС‚РµСЂСЏС‚СЊСЃСЏ РІ РґРµРЅСЊ СЌРєСЃРєСѓСЂСЃРёРё.</p></div>
      <form onSubmit={submit}>
        <label>25 РР®Р›РЇ В· Р’Р Р•РњРЇ РџР РћР“РЈР›РљР</label>
        <div className="slots">{slots.map(s => <button type="button" onClick={() => setSlot(s)} className={slot === s ? 'selected' : ''} key={s}>{s}</button>)}</div>
        <label htmlFor="phone">РќРћРњР•Р  РўР•Р›Р•Р¤РћРќРђ</label>
        <input id="phone" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" type="tel"/>
        <label className="check"><input required type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}/><span>Р”Р°СЋ СЃРѕРіР»Р°СЃРёРµ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С…</span></label>
        <button className="submit" type="submit">{sent ? 'РўС‹ Р·Р°РїРёСЃР°РЅ(Р°) вЂ” РґРѕ РІСЃС‚СЂРµС‡Рё!' : 'Р—Р°Р±СЂРѕРЅРёСЂСѓР№ РјРµСЃС‚Рѕ'}</button>
        {sent && <p className="success">Р’СЂРµРјСЏ: {slot}. РњС‹ СЃРІСЏР¶РµРјСЃСЏ СЃ С‚РѕР±РѕР№ РїРѕ СѓРєР°Р·Р°РЅРЅРѕРјСѓ РЅРѕРјРµСЂСѓ.</p>}
      </form>
    </section>
    <footer>РќР•РњР•Р¦РљРђРЇ РЎР›РћР‘РћР”Рђ <span>В·</span> РњРћРЎРљР’Рђ <span>В·</span> 2026</footer>
  </main>;
}

