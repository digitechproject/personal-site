import type { Metadata } from 'next';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import GalleryClient from '@/components/Gallery/GalleryClient';

interface GalleryPageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: lang === 'en' ? 'Gallery' : 'Galerie',
    description:
      lang === 'en'
        ? 'Photos of WordPress and professional video editing training given at Digital Marketing Academy (DMA).'
        : 'Photos des formations WordPress et montage vidéo professionnel données au Digital Marketing Academy (DMA).',
    path: `/${lang}/gallery/`,
  });
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return (
    <PageWrapper>
      <GalleryClient lang={lang} />
    </PageWrapper>
  );
}
