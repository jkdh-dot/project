import type { WorkflowStatus } from '@/types';

interface StatusBadgeProps {
  status: WorkflowStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = {
    '待整改': { bg: 'bg-info/10', text: 'text-info', label: '待整改' },
    '整改中': { bg: 'bg-primary-600/10', text: 'text-primary-600', label: '整改中' },
    '待复查': { bg: 'bg-warning/10', text: 'text-warning', label: '待复查' },
    '已销号': { bg: 'bg-success/10', text: 'text-success', label: '已销号' },
    '超期': { bg: 'bg-danger/10', text: 'text-danger', label: '超期' },
  };

  const { bg, text, label } = config[status];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${bg} ${text}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{label}</span>
    </span>
  );
}