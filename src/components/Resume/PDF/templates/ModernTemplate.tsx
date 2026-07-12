import { Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { baseStyles } from '../styles';
import type { PDFTemplateProps } from '../types';

export default function ModernTemplate({
  data,
  theme,
  lang,
}: PDFTemplateProps) {
  const isEn = lang === 'en';

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: theme.bgLight,
    },
    // Sidebar Style (Dark)
    sidebar: {
      width: '33%',
      backgroundColor: theme.bgDark,
      color: theme.textLight,
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
    },
    avatarContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 75,
      height: 75,
      borderRadius: 37.5,
      border: '2px solid #ffffff',
    },
    sidebarSection: {
      marginBottom: 18,
    },
    sidebarTitle: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.2)',
      paddingBottom: 4,
      marginBottom: 8,
    },
    profileText: {
      fontSize: 7.5,
      lineHeight: 1.35,
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.85)',
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 7.5,
      color: 'rgba(255, 255, 255, 0.85)',
    },
    contactIcon: {
      marginRight: 6,
      fontSize: 9,
    },
    contactLink: {
      color: 'rgba(255, 255, 255, 0.85)',
      textDecoration: 'none',
    },
    skillGroup: {
      marginBottom: 8,
    },
    skillGroupTitle: {
      fontSize: 8,
      fontWeight: 600,
      color: theme.accentSecondary,
      marginBottom: 3,
    },
    skillTagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 3,
    },
    skillTag: {
      fontSize: 6.5,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      padding: '2px 5px',
      borderRadius: 3,
    },
    languageItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: 7.5,
      marginBottom: 4,
    },
    languageName: {
      fontWeight: 600,
    },
    languageLevel: {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    // Main Content Area Style (Light)
    mainContent: {
      width: '67%',
      padding: '28px 24px',
    },
    headerName: {
      fontSize: 22,
      fontWeight: 800,
      color: theme.textDark,
      letterSpacing: -0.5,
      marginBottom: 3,
    },
    headerTitle: {
      fontSize: 10,
      fontWeight: 600,
      color: theme.accent,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginBottom: 15,
    },
    section: {
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 11,
      fontWeight: 700,
      color: theme.textDark,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      borderBottomWidth: 1.5,
      borderBottomColor: theme.accent,
      paddingBottom: 3,
      marginBottom: 10,
    },
    card: {
      marginBottom: 10,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 3,
    },
    cardTitle: {
      fontSize: 9,
      fontWeight: 700,
      color: theme.textDark,
    },
    cardSubTitle: {
      fontSize: 8,
      fontWeight: 500,
      color: theme.textMuted,
    },
    cardDates: {
      fontSize: 7.5,
      fontWeight: 400,
      color: theme.textMuted,
    },
    cardSummary: {
      fontSize: 8,
      lineHeight: 1.35,
      color: theme.textDark,
      marginBottom: 4,
    },
    bulletList: {
      paddingLeft: 8,
    },
    bulletPoint: {
      flexDirection: 'row',
      marginBottom: 2,
    },
    bulletChar: {
      width: 6,
      fontSize: 8,
      color: theme.accent,
    },
    bulletText: {
      flex: 1,
      fontSize: 7.5,
      lineHeight: 1.3,
      color: theme.textDark,
    },
    interestGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    interestItem: {
      fontSize: 8,
      backgroundColor: '#f1f5f9',
      color: theme.textDark,
      padding: '3px 8px',
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: theme.border,
    },
  });

  // Group skills by category to render them in structured layout
  const groupedSkills = data.skillCategories.reduce(
    (groups, category) => {
      const categorySkills = data.skills.filter((skill) =>
        skill.category.includes(category.name),
      );
      if (categorySkills.length > 0) {
        groups[category.name] = categorySkills;
      }
      return groups;
    },
    {} as Record<string, typeof data.skills>,
  );

  return (
    <Page size="A4" style={[baseStyles.page, styles.page]}>
      {/* Left Sidebar (Dark Blue/Slate) */}
      <View style={styles.sidebar}>
        {/* Avatar */}
        {data.personal.avatarUrl && (
          <View style={styles.avatarContainer}>
            <Image src={data.personal.avatarUrl} style={styles.avatar} />
          </View>
        )}

        {/* Profil Section */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>{isEn ? 'Profile' : 'Profil'}</Text>
          <Text style={styles.profileText}>{data.personal.summary}</Text>
        </View>

        {/* Contact Section */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Contact</Text>
          <View style={styles.contactList}>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>📍</Text>
              <Text>{data.personal.location}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>✉️</Text>
              <Text style={styles.contactLink}>{data.personal.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>📞</Text>
              <Text style={styles.contactLink}>{data.personal.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>🌐</Text>
              <Text style={styles.contactLink}>{data.personal.website}</Text>
            </View>
            {data.socials.map((social) => (
              <View key={social.platform} style={styles.contactItem}>
                <Text style={styles.contactIcon}>
                  {social.platform === 'Linkedin'
                    ? '🔗'
                    : social.platform === 'Github'
                      ? '💻'
                      : '📱'}
                </Text>
                <Text style={styles.contactLink}>{social.username}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Compétences Section */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>
            {isEn ? 'Skills' : 'Compétences'}
          </Text>
          {Object.entries(groupedSkills).map(
            ([categoryName, categorySkills]) => (
              <View key={categoryName} style={styles.skillGroup}>
                <Text style={styles.skillGroupTitle}>{categoryName}</Text>
                <View style={styles.skillTagsContainer}>
                  {categorySkills.map((skill) => {
                    const title = isEn ? skill.titleEn : skill.titleFr;
                    return (
                      <Text key={title} style={styles.skillTag}>
                        {title}
                      </Text>
                    );
                  })}
                </View>
              </View>
            ),
          )}
        </View>

        {/* Langues Section */}
        {data.languages.length > 0 && (
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarTitle}>
              {isEn ? 'Languages' : 'Langues'}
            </Text>
            {data.languages.map((langItem) => (
              <View key={langItem.name} style={styles.languageItem}>
                <Text style={styles.languageName}>{langItem.name}</Text>
                <Text style={styles.languageLevel}>{langItem.level}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Right Main Content Column */}
      <View style={styles.mainContent}>
        {/* Name and Professional Title */}
        <Text style={styles.headerName}>{data.personal.name}</Text>
        <Text style={styles.headerTitle}>{data.personal.title}</Text>

        {/* Expérience Professionnelle Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {isEn ? 'Experience' : 'Expérience'}
          </Text>
          {data.experience.map((job) => {
            const jobTitle = isEn ? job.positionEn : job.positionFr;
            const jobSummary = isEn ? job.summaryEn : job.summaryFr;
            const jobHighlights = isEn ? job.highlightsEn : job.highlightsFr;
            const dateStr = `${job.startDate} - ${job.endDate || (isEn ? 'Present' : 'Aujourd’hui')}`;

            return (
              // Prevent experience card splitting across pages
              <View key={job.name + jobTitle} style={styles.card} wrap={false}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>
                    {job.name}{' '}
                    <Text style={styles.cardSubTitle}>| {jobTitle}</Text>
                  </Text>
                  <Text style={styles.cardDates}>{dateStr}</Text>
                </View>
                {jobSummary && (
                  <Text style={styles.cardSummary}>{jobSummary}</Text>
                )}
                {jobHighlights && (
                  <View style={styles.bulletList}>
                    {jobHighlights.map((highlight) => (
                      <View key={highlight} style={styles.bulletPoint}>
                        <Text style={styles.bulletChar}>•</Text>
                        <Text style={styles.bulletText}>{highlight}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Formation / Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {isEn ? 'Education' : 'Formation'}
          </Text>
          {data.education.map((degreeItem) => {
            const degName = isEn ? degreeItem.degreeEn : degreeItem.degreeFr;
            const degDetails = isEn
              ? degreeItem.detailsEn
              : degreeItem.detailsFr;

            return (
              // Prevent education card splitting across pages
              <View
                key={degreeItem.school + degName}
                style={styles.card}
                wrap={false}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>
                    {degreeItem.school}{' '}
                    <Text style={styles.cardSubTitle}>| {degName}</Text>
                  </Text>
                  <Text style={styles.cardDates}>
                    {degreeItem.period || degreeItem.year}
                  </Text>
                </View>
                {degDetails && (
                  <View style={styles.bulletList}>
                    {degDetails.map((detail, index) => (
                      <View key={index} style={styles.bulletPoint}>
                        <Text style={styles.bulletChar}>•</Text>
                        <Text style={styles.bulletText}>{detail}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Certifications / Formations Additionnelles Section */}
        {data.courses.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {isEn
                ? 'Courses & Certifications'
                : 'Formations & Certifications'}
            </Text>
            {data.courses.map((course) => {
              const courseTitle = isEn ? course.titleEn : course.titleFr;
              return (
                <View key={courseTitle} style={styles.card} wrap={false}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>
                      {course.university}{' '}
                      <Text style={styles.cardSubTitle}>| {courseTitle}</Text>
                    </Text>
                    <Text style={styles.cardDates}>{course.number}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}

        {/* Centres d'intérêt Section */}
        {data.interests.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {isEn ? 'Interests' : 'Centres d’intérêt'}
            </Text>
            <View style={styles.interestGrid}>
              {data.interests.map((interest) => (
                <Text key={interest.name} style={styles.interestItem}>
                  {interest.icon ? `${interest.icon} ` : ''}
                  {interest.name}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>
    </Page>
  );
}
