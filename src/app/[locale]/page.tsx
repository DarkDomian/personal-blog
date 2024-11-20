import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/routing';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className='h-full flex justify-center items-center '>
      <h1 className='font-bold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>{t('welcome')}</h1>
    </div>
  );
}