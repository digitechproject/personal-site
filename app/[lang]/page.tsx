import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import { Language } from '@/data/translations';

export const metadata: Metadata = {
  description:
    'Entrepreneur Tech, Designer Produit & Builder de solutions digitales adaptées aux réalités africaines — entre design, développement web, marketing digital, IA et stratégie opérationnelle.',
};

interface HomePageProps {
  params: Promise<{ lang: { lang: string } }> | any;
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return (
    <PageWrapper>
      <PersonSchema lang={lang} />
      <Hero lang={lang} />
    </PageWrapper>
  );
}
