import { Bell, Search, Wifi, WifiOff } from 'lucide-react';
import { useState } from 'react';

export function Header({ title }: { title: string }) {
  const [searchValue, setSearchValue] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  return (
    <header className="fixed top-0 right-0 left-[240px] h-16 bg-card border-b border-border flex items-center justify-between px-6 z-40">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="搜索..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-600 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`p-2 rounded-lg transition-colors ${isOnline ? 'text-success hover:bg-success/10' : 'text-danger hover:bg-danger/10'}`}
          >
            {isOnline ? <Wifi className="w-5 h-5" /> : <WifiOff className="w-5 h-5" />}
          </button>
          <span className={`text-sm ${isOnline ? 'text-success' : 'text-danger'}`}>
            {isOnline ? '系统正常' : '系统异常'}
          </span>
        </div>

        <button className="relative p-2 rounded-lg hover:bg-bg transition-colors">
          <Bell className="w-5 h-5 text-text-secondary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
        </button>
      </div>
    </header>
  );
}