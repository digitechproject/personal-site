import type { Course as CourseType } from '@/data/resume/courses';
import Course from './Courses/Course';
import { getTranslation, Language } from '@/data/translations';

interface CoursesProps {
  data: CourseType[];
  lang: Language;
}

function getRows(courses: CourseType[], lang: Language) {
  return courses
    .sort((a, b) => {
      let ret = 0;
      if (a.university > b.university) ret = -1;
      else if (a.university < b.university) ret = 1;
      else if (a.number > b.number) ret = 1;
      else if (a.number < b.number) ret = -1;
      return ret;
    })
    .map((course) => {
      const title = lang === 'en' ? course.titleEn : course.titleFr;
      return <Course data={course} key={title} lang={lang} />;
    });
}

export default function Courses({ data, lang }: CoursesProps) {
  const t = getTranslation(lang);

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>{t['resume.nav.courses']}</h3>
      </div>
      <ul className="course-list">{getRows(data, lang)}</ul>
    </div>
  );
}
