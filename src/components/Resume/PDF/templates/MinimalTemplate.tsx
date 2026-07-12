import { Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { baseStyles } from '../styles';
import type { PDFTemplateProps } from '../types';

export default function MinimalTemplate({
  data,
  theme,
  lang,
}: PDFTemplateProps) {
  const isEn = lang === 'en';

  const styles = StyleSheet.create({
    page: {
      padding: '36px 40px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
    },
    // Top Centered Header
    header: {
      alignItems: 'center',
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.accent,
      paddingBottom: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: 800,
      color: theme.textDark,
      letterSpacing: -0.5,
      marginBottom: 2,
    },
    title: {
      fontSize: 10,
      fontWeight: 600,
      color: theme.accent,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 8,
    },
    contactRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 10,
      fontSize: 7.5,
      color: theme.textMuted,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    contactIcon: {
      marginRight: 3,
    },
    // Section Layout
    section: {
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 10,
      fontWeight: 700,
      color: theme.textDark,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      paddingBottom: 2,
      marginBottom: 8,
    },
    card: {
      marginBottom: 10,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 2,
    },
    cardTitle: {
      fontSize: 9,
      fontWeight: 700,
      color: theme.textDark,
    },
    cardSubTitle: {
      fontSize: 8.5,
      fontWeight: 500,
      color: theme.accent,
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
    // Skills print layout
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 5,
    },
    skillTag: {
      fontSize: 7.5,
      backgroundColor: '#f1f5f9',
      color: theme.textDark,
      padding: '2px 6px',
      borderRadius: 3,
      borderWidth: 0.5,
      borderColor: theme.border,
    },
    // Languages layout
    languagesRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 15,
    },
    languageItem: {
      fontSize: 8,
      flexDirection: 'row',
      gap: 4,
    },
    languageName: {
      fontWeight: 600,
      color: theme.textDark,
    },
    languageLevel: {
      color: theme.textMuted,
    },
  });

  return (
    <Page size="A4" style={[baseStyles.page, styles.page]}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.personal.name}</Text>
        <Text style={styles.title}>{data.personal.title}</Text>
        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📍</Text>
            <Text>{data.personal.location}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>✉️</Text>
            <Text>{data.personal.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📞</Text>
            <Text>{data.personal.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>🌐</Text>
            <Text>{data.personal.website}</Text>
          </View>
          {data.socials.map((social) => (
            <View key={social.platform} style={styles.contactItem}>
              <Text style={styles.contactIcon}>
                {social.platform === 'Linkedin' ? '🔗' : '💻'}
              </Text>
              <Text>{social.username}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Profil Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{isEn ? 'Profile' : 'Profil'}</Text>
        <Text style={styles.cardSummary}>{data.personal.summary}</Text>
      </View>

      {/* Expériences */}
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

      {/* Formation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEn ? 'Education' : 'Formation'}
        </Text>
        {data.education.map((degreeItem) => {
          const degName = isEn ? degreeItem.degreeEn : degreeItem.degreeFr;
          const degDetails = isEn ? degreeItem.detailsEn : degreeItem.detailsFr;

          return (
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

      {/* Competences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {isEn ? 'Skills' : 'Compétences'}
        </Text>
        <View style={styles.skillsContainer}>
          {data.skills.map((skill) => {
            const title = isEn ? skill.titleEn : skill.titleFr;
            return (
              <Text key={title} style={styles.skillTag}>
                {title}
              </Text>
            );
          })}
        </View>
      </View>

      {/* Certifications */}
      {data.courses.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {isEn ? 'Courses & Certifications' : 'Formations & Certifications'}
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

      {/* Langues */}
      {data.languages.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {isEn ? 'Languages' : 'Langues'}
          </Text>
          <View style={styles.languagesRow}>
            {data.languages.map((langItem) => (
              <View key={langItem.name} style={styles.languageItem}>
                <Text style={styles.languageName}>{langItem.name}:</Text>
                <Text style={styles.languageLevel}>{langItem.level}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </Page>
  );
}
