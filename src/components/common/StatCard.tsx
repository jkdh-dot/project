import { type LucideIcon } from 'lucide-react';
import { type ReactElement } from 'react';

interface StatCardProps {
  icon?: LucideIcon | ReactElement;
  label?: string;
  title?: string;
  value: string | number;
  unit?: string;
  trend?: { value: number; isUp: boolean };
  color?: 'primary' | 'danger' | 'success' | 'warning' | string;
  subtitle?: string;
}

export function StatCard({ icon: Icon, label, title, value, unit, trend, color = 'primary', subtitle }: StatCardProps) {
  const displayLabel = label || title;
  
  const colorClasses: Record<string, string> = {
    primary: 'bg-primary-600',
    danger: 'bg-red-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
  };
  
  const bgColor = color.startsWith('bg-') ? color : colorClasses[color] || colorClasses['primary'];

  return (
    <div className="bg-card rounded-lg p-5 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {(displayLabel || subtitle) && (
            <p className="text-text-secondary text-sm mb-1">
              {displayLabel || subtitle}
            </p>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-text-primary">{value}</span>
            {unit && <span className="text-text-muted text-sm">{unit}</span>}
          </div>
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-sm ${trend.isUp ? 'text-danger' : 'text-success'}`}>
              <span>{trend.isUp ? '↑' : '↓'}</span>
              <span>{trend.value}%</span>
              <span className="text-text-muted">较上周</span>
            </div>
          )}
          {subtitle && !displayLabel && (
            <p className="text-text-muted text-xs mt-1">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
            {typeof Icon === 'function' ? (
              <Icon className="w-6 h-6 text-white" />
            ) : (
              Icon
            )}
          </div>
        )}
      </div>
    </div>
  );
}