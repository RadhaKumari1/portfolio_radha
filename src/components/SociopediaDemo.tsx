import React, { useState } from 'react';
import {
  Heart,
  MessageSquare,
  Share2,
  Lock,
  User,
  Image as ImageIcon,
  Send,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export const SociopediaDemo: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Radha Kumari',
      handle: '@radhakumari',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      content:
        'Just deployed the new Sociopedia feed with JWT authentication & MongoDB aggregation pipeline! 🚀 #ReactJS #NodeJS #FullStack',
      likes: 42,
      isLiked: false,
      timestamp: '10m ago',
    },
    {
      id: 2,
      author: 'Tech Innovator',
      handle: '@tech_nexus',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      content:
        'Secure authentication using JWT tokens and bcrypt password hashing ensures optimal user privacy across full-stack applications.',
      likes: 128,
      isLiked: true,
      timestamp: '2h ago',
    },
  ]);

  const [newPostText, setNewPostText] = useState('');
  const [showToken, setShowToken] = useState(false);

  const handleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              likes: p.isLiked ? p.likes - 1 : p.likes + 1,
              isLiked: !p.isLiked,
            }
          : p
      )
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'Radha Kumari',
      handle: '@radhakumari',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      content: newPostText,
      likes: 0,
      isLiked: false,
      timestamp: 'Just now',
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Full-Stack Social Network Platform Demo</span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">
            Sociopedia Live Feed & Auth Simulator
          </h4>
        </div>

        <button
          onClick={() => setShowToken(!showToken)}
          className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-indigo-300 text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{showToken ? 'Hide JWT Payload' : 'Inspect JWT Payload'}</span>
        </button>
      </div>

      {/* Token Inspector Modal / Drawer */}
      {showToken && (
        <div className="p-4 rounded-xl bg-slate-900 border border-indigo-500/30 font-mono text-xs space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-emerald-400 font-semibold border-b border-slate-800 pb-2">
            <span>HEADER: &#123; "alg": "HS256", "typ": "JWT" &#125;</span>
            <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">
              VERIFIED_TOKEN
            </span>
          </div>
          <div className="text-slate-300 leading-relaxed">
            <span className="text-purple-400">PAYLOAD:</span> &#123; <br />
            &nbsp;&nbsp;<span className="text-indigo-300">"id"</span>: "usr_radha_2024", <br />
            &nbsp;&nbsp;<span className="text-indigo-300">"email"</span>: "radhakumari162002@gmail.com", <br />
            &nbsp;&nbsp;<span className="text-indigo-300">"role"</span>: "SOFTWARE_ENGINEER", <br />
            &nbsp;&nbsp;<span className="text-indigo-300">"iat"</span>: 1721980000, <br />
            &nbsp;&nbsp;<span className="text-indigo-300">"exp"</span>: 1722066400 <br />
            &#125;
          </div>
        </div>
      )}

      {/* Post Composer */}
      <form onSubmit={handleCreatePost} className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
            alt="Radha"
            className="w-9 h-9 rounded-full object-cover border border-indigo-500/30 shrink-0"
          />
          <input
            type="text"
            placeholder="Share an update or thoughts on Sociopedia..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-slate-800/80">
          <div className="flex gap-2 text-slate-400 text-xs">
            <button type="button" className="p-1.5 rounded bg-slate-950 border border-slate-800 hover:text-indigo-400 flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Image</span>
            </button>
          </div>

          <button
            type="submit"
            className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/20"
          >
            <span>Publish</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Social Feed Items */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-9 h-9 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h5 className="text-xs font-bold text-slate-100 flex items-center gap-1">
                    {post.author}
                    <CheckCircle className="w-3 h-3 text-indigo-400" />
                  </h5>
                  <span className="text-[11px] text-slate-400">{post.handle}</span>
                </div>
              </div>

              <span className="text-[11px] text-slate-500">{post.timestamp}</span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">{post.content}</p>

            <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
              <button
                onClick={() => handleLike(post.id)}
                className={`flex items-center gap-1.5 transition-colors ${
                  post.isLiked ? 'text-rose-400 font-semibold' : 'hover:text-rose-400'
                }`}
              >
                <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-rose-400' : ''}`} />
                <span>{post.likes}</span>
              </button>

              <button className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>Comment</span>
              </button>

              <button className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
