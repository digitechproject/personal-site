import { Document } from '@react-pdf/renderer';
import { renderTemplate, TemplateId } from './templates';
import type { PDFTheme, ResumeData } from './types';

interface PDFDocumentProps {
  data: ResumeData;
  theme: PDFTheme;
  templateId: TemplateId;
  lang: 'fr' | 'en';
}

export default function PDFDocument({
  data,
  theme,
  templateId,
  lang,
}: PDFDocumentProps) {
  const title =
    lang === 'en' ? 'CV - Fernando HOUSSOU' : 'CV - Fernando HOUSSOU';

  return (
    <Document title={title} author={data.personal.name}>
      {renderTemplate(templateId, { data, theme, lang })}
    </Document>
  );
}
