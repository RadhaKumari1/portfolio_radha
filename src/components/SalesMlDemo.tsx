import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { Play, RefreshCw, Sliders, TrendingUp, Cpu, BarChart2 } from 'lucide-react';

export const SalesMlDemo: React.FC = () => {
  const [sequenceLength, setSequenceLength] = useState(12);
  const [epochs, setEpochs] = useState(50);
  const [isTraining, setIsTraining] = useState(false);
  const [trainedCount, setTrainedCount] = useState(50);

  // Sample LSTM Forecast Data
  const baseData = [
    { month: 'Jan', actual: 4200, lstmForecast: 4150 },
    { month: 'Feb', actual: 4800, lstmForecast: 4780 },
    { month: 'Mar', actual: 5100, lstmForecast: 5050 },
    { month: 'Apr', actual: 4900, lstmForecast: 4920 },
    { month: 'May', actual: 5600, lstmForecast: 5580 },
    { month: 'Jun', actual: 6200, lstmForecast: 6150 },
    { month: 'Jul', actual: 6800, lstmForecast: 6790 },
    { month: 'Aug', actual: 7100, lstmForecast: 7080 },
    { month: 'Sep (Forecast)', actual: null, lstmForecast: 7450 + (epochs - 50) * 10 },
    { month: 'Oct (Forecast)', actual: null, lstmForecast: 7900 + (epochs - 50) * 12 },
    { month: 'Nov (Forecast)', actual: null, lstmForecast: 8350 + (epochs - 50) * 15 },
    { month: 'Dec (Forecast)', actual: null, lstmForecast: 9100 + (epochs - 50) * 18 },
  ];

  const handleRetrain = () => {
    setIsTraining(true);
    setTimeout(() => {
      setIsTraining(false);
      setTrainedCount((prev) => prev + 1);
    }, 1200);
  };

  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>LSTM Neural Network Time-Series Simulator</span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">
            Sales Trend Forecast Pipeline
          </h4>
        </div>

        <button
          onClick={handleRetrain}
          disabled={isTraining}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-indigo-600/20"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isTraining ? 'animate-spin' : ''}`} />
          <span>{isTraining ? 'Training LSTM...' : 'Run Pipeline Training'}</span>
        </button>
      </div>

      {/* Model Hyperparameter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs">
        <div>
          <label className="text-slate-400 font-medium block mb-1">
            Sequence Window: <span className="text-indigo-400 font-bold">{sequenceLength} months</span>
          </label>
          <input
            type="range"
            min="3"
            max="24"
            value={sequenceLength}
            onChange={(e) => setSequenceLength(Number(e.target.value))}
            className="w-full accent-indigo-500 bg-slate-800 rounded-lg cursor-pointer h-1.5"
          />
        </div>

        <div>
          <label className="text-slate-400 font-medium block mb-1">
            Epochs: <span className="text-purple-400 font-bold">{epochs}</span>
          </label>
          <input
            type="range"
            min="10"
            max="150"
            step="10"
            value={epochs}
            onChange={(e) => setEpochs(Number(e.target.value))}
            className="w-full accent-purple-500 bg-slate-800 rounded-lg cursor-pointer h-1.5"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-slate-400 font-medium">Model Status:</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-mono font-semibold">
              RMSE: 0.0142 | MAE: 0.0098
            </span>
          </div>
        </div>
      </div>

      {/* Recharts Area Plot */}
      <div className="h-64 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={baseData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLstm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
            <YAxis stroke="#64748b" fontSize={11} tickFormatter={(val) => `$${val}`} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                borderRadius: '0.75rem',
                color: '#f8fafc',
                fontSize: '0.75rem',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
            <Area
              type="monotone"
              dataKey="actual"
              name="Historical Sales ($)"
              stroke="#6366f1"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorActual)"
            />
            <Area
              type="monotone"
              dataKey="lstmForecast"
              name="LSTM Neural Forecast ($)"
              stroke="#ec4899"
              strokeWidth={2.5}
              strokeDasharray="4 4"
              fillOpacity={1}
              fill="url(#colorLstm)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
        <p>Built with Python, TensorFlow/Keras, Scikit-learn, Pandas & Matplotlib.</p>
        <p className="text-slate-500 font-mono">Iterations Run: {trainedCount}</p>
      </div>
    </div>
  );
};
