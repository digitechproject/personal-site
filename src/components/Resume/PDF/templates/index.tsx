import type { PDFTemplateProps } from '../types';
import MinimalTemplate from './MinimalTemplate';
import ModernTemplate from './ModernTemplate';

export const templates = {
  modern: ModernTemplate,
  minimal: MinimalTemplate,
} as const;

export type TemplateId = keyof typeof templates;

export function renderTemplate(id: TemplateId, props: PDFTemplateProps) {
  const TemplateComponent = templates[id] || ModernTemplate;
  return <TemplateComponent {...props} />;
}
