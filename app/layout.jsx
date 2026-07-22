import './styles.css';
import './overrides.css';

export const metadata = {
  title: 'Немецкая слобода — экскурсия',
  description: 'Запись на прогулку по Немецкой слободе на Октябрьском поле'
};

export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}
