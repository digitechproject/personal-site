'use client';

import { useEffect, useState } from 'react';
import { Language } from '@/data/translations';

interface CountdownProps {
  lang: Language;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ lang }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const getNextSaturday18UTC = (): Date => {
      const now = new Date();
      const target = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        18, 0, 0, 0 // 19h00 GMT+1 (heure du Bénin) corresponds to 18h00 UTC
      ));

      const day = now.getUTCDay();
      let daysToAdd = 6 - day;
      
      // If today is Saturday and we have passed 18h00 UTC, or if it is Sunday (day = 0)
      if (daysToAdd < 0 || (daysToAdd === 0 && now.getTime() >= target.getTime())) {
        daysToAdd += 7;
      }

      target.setUTCDate(target.getUTCDate() + daysToAdd);
      return target;
    };

    const calculateTimeLeft = () => {
      const target = getNextSaturday18UTC();
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted || !timeLeft) {
    return (
      <div className="countdown-loading">
        <span className="spinner"></span>
      </div>
    );
  }

  const labels = {
    fr: {
      days: 'Jours',
      hours: 'Heures',
      minutes: 'Minutes',
      seconds: 'Secondes',
    },
    en: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
  };

  const currentLabels = labels[lang] || labels.fr;

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="countdown-container">
      <div className="countdown-segment">
        <div className="countdown-number">{formatNumber(timeLeft.days)}</div>
        <div className="countdown-label">{currentLabels.days}</div>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-segment">
        <div className="countdown-number">{formatNumber(timeLeft.hours)}</div>
        <div className="countdown-label">{currentLabels.hours}</div>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-segment">
        <div className="countdown-number">{formatNumber(timeLeft.minutes)}</div>
        <div className="countdown-label">{currentLabels.minutes}</div>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-segment">
        <div className="countdown-number">{formatNumber(timeLeft.seconds)}</div>
        <div className="countdown-label">{currentLabels.seconds}</div>
      </div>
    </div>
  );
}
