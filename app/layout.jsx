import './styles.css';
import './overrides.css';

export const metadata = {
  title: 'РќРµРјРµС†РєР°СЏ СЃР»РѕР±РѕРґР° вЂ” СЌРєСЃРєСѓСЂСЃРёСЏ',
  description: 'Р—Р°РїРёСЃСЊ РЅР° РїСЂРѕРіСѓР»РєСѓ РїРѕ РќРµРјРµС†РєРѕР№ СЃР»РѕР±РѕРґРµ РЅР° РћРєС‚СЏР±СЂСЊСЃРєРѕРј РїРѕР»Рµ'
};

export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}

