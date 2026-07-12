import { Page, Path, StyleSheet, Svg, Text, View } from '@react-pdf/renderer';
import { baseStyles } from '../styles';
import type { PDFTemplateProps } from '../types';

// Custom inline SVG icons for reliable PDF rendering without emoji glitches
const LocationIcon = ({ fill }: { fill: string }) => (
  <Svg width="8" height="8" viewBox="0 0 24 24" style={{ marginRight: 3 }}>
    <Path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill={fill}
    />
  </Svg>
);

const EmailIcon = ({ fill }: { fill: string }) => (
  <Svg width="8" height="8" viewBox="0 0 24 24" style={{ marginRight: 3 }}>
    <Path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      fill={fill}
    />
  </Svg>
);

const PhoneIcon = ({ fill }: { fill: string }) => (
  <Svg width="8" height="8" viewBox="0 0 24 24" style={{ marginRight: 3 }}>
    <Path
      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      fill={fill}
    />
  </Svg>
);

const WebsiteIcon = ({ fill }: { fill: string }) => (
  <Svg width="8" height="8" viewBox="0 0 24 24" style={{ marginRight: 3 }}>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"
      fill={fill}
    />
  </Svg>
);

const LinkedinIcon = ({ fill }: { fill: string }) => (
  <Svg width="8" height="8" viewBox="0 0 24 24" style={{ marginRight: 3 }}>
    <Path
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
      fill={fill}
    />
  </Svg>
);

const GithubIcon = ({ fill }: { fill: string }) => (
  <Svg width="8" height="8" viewBox="0 0 24 24" style={{ marginRight: 3 }}>
    <Path
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
      fill={fill}
    />
  </Svg>
);

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
      lineHeight: 1.25,
      marginBottom: 3,
    },
    title: {
      fontSize: 10,
      fontWeight: 600,
      color: theme.accent,
      textTransform: 'uppercase',
      letterSpacing: 1,
      lineHeight: 1.25,
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
            <LocationIcon fill={theme.accent} />
            <Text>{data.personal.location}</Text>
          </View>
          <View style={styles.contactItem}>
            <EmailIcon fill={theme.accent} />
            <Text>{data.personal.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <PhoneIcon fill={theme.accent} />
            <Text>{data.personal.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <WebsiteIcon fill={theme.accent} />
            <Text>{data.personal.website}</Text>
          </View>
          {data.socials.map((social) => (
            <View key={social.platform} style={styles.contactItem}>
              {social.platform === 'Linkedin' ? (
                <LinkedinIcon fill={theme.accent} />
              ) : social.platform === 'Github' ? (
                <GithubIcon fill={theme.accent} />
              ) : null}
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
                <View style={styles.bulletList} wrap={false}>
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
                <View style={styles.bulletList} wrap={false}>
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
