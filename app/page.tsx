import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SolutionFinder = dynamic(() => import('@/components/SolutionFinder'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="min-h-screen bg-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">{t('title')}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <SolutionFinder />
        </Suspense>
      </div>
    </main>
  );
}