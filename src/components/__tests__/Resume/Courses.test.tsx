import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Courses from '../../Resume/Courses';
import Course from '../../Resume/Courses/Course';

const mockCourses = [
  {
    titleFr: 'Apprentissage Automatique',
    titleEn: 'Machine Learning',
    number: 'CS 229',
    link: 'http://cs229.stanford.edu/',
    university: 'Stanford',
  },
  {
    titleFr: 'Apprentissage Profond',
    titleEn: 'Deep Learning',
    number: 'CS 230',
    link: 'http://cs230.stanford.edu/',
    university: 'Stanford',
  },
  {
    titleFr: 'Algorithmes',
    titleEn: 'Algorithms',
    number: 'CS 161',
    link: 'http://cs161.stanford.edu/',
    university: 'MIT',
  },
];

describe('Courses', () => {
  it('renders the courses section with localized title', () => {
    render(<Courses data={mockCourses} lang="en" />);
    expect(
      screen.getByRole('heading', { name: /courses/i }),
    ).toBeInTheDocument();

    render(<Courses data={mockCourses} lang="fr" />);
    expect(
      screen.getByRole('heading', { name: /formations/i }),
    ).toBeInTheDocument();
  });

  it('renders all courses based on lang', () => {
    render(<Courses data={mockCourses} lang="en" />);
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Deep Learning')).toBeInTheDocument();
    expect(screen.getByText('Algorithms')).toBeInTheDocument();

    render(<Courses data={mockCourses} lang="fr" />);
    expect(screen.getByText('Apprentissage Automatique')).toBeInTheDocument();
    expect(screen.getByText('Apprentissage Profond')).toBeInTheDocument();
    expect(screen.getByText('Algorithmes')).toBeInTheDocument();
  });

  it('renders course numbers', () => {
    render(<Courses data={mockCourses} lang="en" />);

    expect(screen.getByText(/CS 229/)).toBeInTheDocument();
    expect(screen.getByText(/CS 230/)).toBeInTheDocument();
    expect(screen.getByText(/CS 161/)).toBeInTheDocument();
  });

  it('renders courses as list items', () => {
    render(<Courses data={mockCourses} lang="en" />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(mockCourses.length);
  });

  it('has anchor link for navigation', () => {
    render(<Courses data={mockCourses} lang="en" />);

    const anchor = document.getElementById('courses');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Course', () => {
  const mockCourse = {
    titleFr: 'Apprentissage Automatique',
    titleEn: 'Machine Learning',
    number: 'CS 229',
    link: 'http://cs229.stanford.edu/',
    university: 'Stanford',
  };

  it('renders course number and title in English', () => {
    render(<Course data={mockCourse} lang="en" />);
    expect(screen.getByText(/CS 229/)).toBeInTheDocument();
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
  });

  it('renders course number and title in French', () => {
    render(<Course data={mockCourse} lang="fr" />);
    expect(screen.getByText(/CS 229/)).toBeInTheDocument();
    expect(screen.getByText('Apprentissage Automatique')).toBeInTheDocument();
  });

  it('renders course as link', () => {
    render(<Course data={mockCourse} lang="en" />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockCourse.link);
  });

  it('renders as list item', () => {
    render(<Course data={mockCourse} lang="en" />);

    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });
});
