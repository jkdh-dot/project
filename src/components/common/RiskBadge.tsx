import type { RiskLevel } from '@/types';

interface RiskBadgeProps {
  level: RiskLevel;
  showText?: boolean;
}

export function RiskBadge({ level, showText = true }: RiskBadgeProps) {
  const config = {
    high: { bg: 'bg-danger/10', text: 'text-danger', label: '高风险' },
    medium: { bg: 'bg-warning/10', text: 'text-warning', label: '中风险' },
    low: { bg: 'bg-info/10', text: 'text-info', label: '低风险' },
    normal: { bg: 'bg-success/10', text: 'text-success', label: '正常' },
  };

  const { bg, text, label } = config[level];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${bg} ${text}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {showText && <span>{label}</span>}
    </span>
  );
}