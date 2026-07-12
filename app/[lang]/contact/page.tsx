import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import { getTranslation, Language } from '@/data/translations';

interface ContactPageProps {
  params: Promise<{ lang: string }> | any;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang === 'en' ? 'en' : 'fr';

  return createPageMetadata({
    title: 'Contact',
    description:
      lang === 'en'
        ? 'Contact Fernando HOUSSOU via email @ fernandohoussou@gmail.com or through his professional networks.'
        : 'Contactez Fernando HOUSSOU par e-mail @ fernandohoussou@gmail.com ou via ses réseaux professionnels.',
    path: `/${lang}/contact/`,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const resolvedParams = await params;
  const lang: Language = resolvedParams?.lang === 'en' ? 'en' : 'fr';
  const t = getTranslation(lang);

  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">{t['contact.subtitle']}</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">{t['contact.hint']}</p>
          </div>

          <div className="contact-divider">
            <span>{t['contact.divider']}</span>
          </div>

          <ContactIcons />
        </div>
      </section>
    </PageWrapper>
  );
}
