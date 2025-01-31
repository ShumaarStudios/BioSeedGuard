import { useTranslations } from 'next-intl';
import SolutionFinder from '@/components/SolutionFinder';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="min-h-screen bg-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">{t('title')}</h1>
        <SolutionFinder />
      </div>
    </main>
  );
}