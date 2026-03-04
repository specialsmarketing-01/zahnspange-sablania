"use client";

export type DentalIconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/** Upper and lower dentures (Teil und Vollprothesen) */
export function IconDentures({ size = 24, strokeWidth = 1.5, className }: DentalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Upper arch */}
      <path d="M4 7c1.5 0 3 .5 4 1.5 1 1 2 1.5 4 1.5s3-.5 4-1.5c1-1 2.5-1.5 4-1.5" />
      <path d="M5 7v2.5M9 6.8v2.7M13 6.8v2.7M19 7v2.5" />
      {/* Lower arch */}
      <path d="M4 17c1.5 0 3 .5 4 1.5 1 1 2 1.5 4 1.5s3-.5 4-1.5c1-1 2.5-1.5 4-1.5" />
      <path d="M5 14.5V17M9 14.5V17M13 14.5V17M19 14.5V17" />
    </svg>
  );
}

/** Molar with filling (Ästhetische Zahnfarbige Füllungen) */
export function IconToothFilling({ size = 24, strokeWidth = 1.5, className }: DentalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Crown + roots */}
      <path d="M12 3.5c-.8 1-1.8 2.2-1.8 4 0 2 .5 4 1 5.5.5 1.5 1 2.5 1.5 3 .5.5 1 .8 1.3.8s.8-.3 1.3-.8c.5-.5 1-1.5 1.5-3 .5-1.5 1-3.5 1-5.5 0-1.8-1-3-1.8-4-.4-.5-.8-.5-1.2 0z" />
      <path d="M9 13v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-4" />
      {/* Filling patch (angular, tooth-colored) */}
      <path
        d="M13.5 8.5l-1.5 2 1 2.5h2l1-2.5-1.5-2z"
        fill="currentColor"
        fillOpacity={0.2}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Tooth with sparkles (Zahnbleaching – Mundhygiene) */
export function IconToothSparkle({ size = 24, strokeWidth = 1.5, className }: DentalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 4c-.6.8-1.2 2.2-1.2 3.8 0 2.2.4 4.2.8 5.8.4 1.6.8 2.6 1.2 3 .4.4.8.6 1.2.6s.8-.2 1.2-.6c.4-.4.8-1.4 1.2-3 .4-1.6.8-3.6.8-5.8 0-1.6-.6-3-1.2-3.8-.3-.4-.6-.4-.9 0z" />
      <path d="M16 6.5l.6-1.2.6 1.2 1.2.6-1.2.6-.6 1.2-.6-1.2-1.2-.6 1.2-.6z" />
      <path d="M7 11l.4-.8.4.8.8.4-.8.4-.4.8-.4-.8-.8-.4.8-.4z" />
    </svg>
  );
}

/** Three teeth with braces, X on central (Gratiszahnspange) */
export function IconBracesChild({ size = 24, strokeWidth = 1.5, className }: DentalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 8.5h14" />
      <path d="M6.5 9.5v5.5c0 .6.4 1 1 1s1-.4 1-1V9.5" />
      <path d="M11 9.5v5.5c0 .6.4 1 1 1s1-.4 1-1V9.5" />
      <path d="M16.5 9.5v5.5c0 .6.4 1 1 1s1-.4 1-1V9.5" />
      <path d="M5 15.5h14" />
      <rect x="6" y="8.5" width="1.8" height="2.2" rx="0.3" />
      <rect x="11.1" y="8.5" width="1.8" height="2.2" rx="0.3" />
      <rect x="16.2" y="8.5" width="1.8" height="2.2" rx="0.3" />
      <path d="M10.2 11.2l2.6 2.6M12.8 11.2l-2.6 2.6" strokeWidth={strokeWidth * 1.1} />
    </svg>
  );
}

/** Top-down dental arch (Invisalign / aligner) */
export function IconDentalArch({ size = 24, strokeWidth = 1.5, className }: DentalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 7c0 2 1.5 5 8 5s8-3 8-5c0 2-1.5 5-8 5s-8-3-8-5z" />
      <path d="M5 9c1.2.8 3.2 1.5 7 1.5s5.8-.7 7-1.5" strokeDasharray="2.5 1.2" opacity={0.85} />
    </svg>
  );
}

/** Tooth with magnifying glass (Veneers – Krone – Brücke) */
export function IconToothMagnify({ size = 24, strokeWidth = 1.5, className }: DentalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11 5.5c-.5.6-1 1.8-1 3.2 0 2 .4 3.8.8 5.2.4 1.4.7 2.3 1 2.7.3.4.6.6 1 .6s.7-.2 1-.6c.3-.4.6-1.3 1-2.7.4-1.4.8-3.2.8-5.2 0-1.4-.5-2.6-1-3.2-.3-.4-.6-.4-.9 0z" />
      <circle cx="15" cy="9" r="4.2" />
      <path d="M17.5 11.5l2 2" />
      <path d="M13.5 9h3M15 7.5v3" strokeWidth={strokeWidth * 0.85} />
    </svg>
  );
}
