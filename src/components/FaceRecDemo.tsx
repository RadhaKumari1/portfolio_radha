import React, { useState } from 'react';
import { Camera, CheckCircle2, UserCheck, RefreshCw, FileSpreadsheet, ShieldAlert } from 'lucide-react';

export const FaceRecDemo: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState([
    {
      id: 1,
      name: 'Radha Kumari',
      role: 'Software Engineer',
      time: '09:15:22 AM',
      status: 'VERIFIED',
      confidence: '99.4%',
    },
    {
      id: 2,
      name: 'Amit Sharma',
      role: 'DevOps Lead',
      time: '09:18:40 AM',
      status: 'VERIFIED',
      confidence: '98.8%',
    },
    {
      id: 3,
      name: 'Priya Verma',
      role: 'Frontend Engineer',
      time: '09:22:11 AM',
      status: 'VERIFIED',
      confidence: '99.1%',
    },
  ]);

  const handleScanWebcam = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const newRecord = {
        id: Date.now(),
        name: 'Guest Tester',
        role: 'Visitor',
        time: new Date().toLocaleTimeString(),
        status: 'VERIFIED',
        confidence: '99.2%',
      };
      setLogs((prev) => [newRecord, ...prev]);
    }, 1500);
  };

  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Biometric Computer Vision Attendance System</span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">
            OpenCV & Flask Face Recognition Scanner
          </h4>
        </div>

        <button
          onClick={handleScanWebcam}
          disabled={isScanning}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-emerald-600/20"
        >
          <Camera className={`w-3.5 h-3.5 ${isScanning ? 'animate-pulse' : ''}`} />
          <span>{isScanning ? 'Detecting Face...' : 'Trigger Live Webcam Frame'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Webcam Live Frame Simulator */}
        <div className="md:col-span-5 bg-slate-900 p-4 rounded-xl border border-slate-800 text-center space-y-3">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
              alt="Live Scan"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Bounding Box Overlay */}
            <div
              className={`absolute inset-8 border-2 ${
                isScanning ? 'border-amber-400 animate-ping' : 'border-emerald-400'
              } rounded-xl flex items-center justify-center transition-all`}
            >
              <div className="absolute top-2 left-2 bg-emerald-500 text-slate-950 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                RADHA_KUMARI (99.4%)
              </div>
            </div>

            {/* Scan Line */}
            {isScanning && (
              <div className="absolute inset-x-0 h-1 bg-amber-400/80 shadow-[0_0_15px_#fbbf24] animate-bounce top-1/2" />
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
            <span>FPS: 30.2</span>
            <span className="text-emerald-400">STATUS: MATCH_FOUND</span>
          </div>
        </div>

        {/* Live Attendance Log Table */}
        <div className="md:col-span-7 bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Automated Daily Excel Manifest</span>
            </div>

            <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-slate-400 font-mono">
              TOTAL_RECORDS: {logs.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-mono">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Timestamp</th>
                  <th className="p-2">Confidence</th>
                  <th className="p-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-800/40 font-mono text-[11px]">
                    <td className="p-2 font-bold text-slate-100">{log.name}</td>
                    <td className="p-2 text-slate-400">{log.role}</td>
                    <td className="p-2 text-indigo-300">{log.time}</td>
                    <td className="p-2 text-amber-300">{log.confidence}</td>
                    <td className="p-2 text-right">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>LOGGED</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
