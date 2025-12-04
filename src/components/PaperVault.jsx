import React, { useState } from 'react';
import { BookOpen, FileText, Download, Search, ChevronRight, Clock, CheckCircle, Star, AlignJustify, XCircle } from 'lucide-react';

const PaperVault = () => {
  const [selectedSem, setSelectedSem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const semesters = [
    { id: 1, name: 'Semester 1', papers: 24, color: 'from-yellow-400 to-yellow-500' },
    { id: 2, name: 'Semester 2', papers: 26, color: 'from-yellow-500 to-yellow-600' },
    { id: 3, name: 'Semester 3', papers: 28, color: 'from-yellow-400 to-yellow-500' },
    { id: 4, name: 'Semester 4', papers: 25, color: 'from-yellow-500 to-yellow-600' },
    { id: 5, name: 'Semester 5', papers: 27, color: 'from-yellow-400 to-yellow-500' },
  ];

  const examTypes = [
    { type: 'endsem', label: 'End Semester', icon: FileText },
    { type: 'midsem', label: 'Mid Semester', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(250, 204, 21) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-yellow-500/20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/50 transform hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  PAPER VAULT
                </h1>
                <p className="text-xs text-gray-400 font-medium">Academic Excellence Repository</p>
              </div>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              {mobileMenuOpen ? <XCircle className="w-6 h-6" /> : <AlignJustify className="w-6 h-6" />}
            </button>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-yellow-500/20">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300 font-medium">130+ Papers</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-yellow-500/20">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300 font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Your Gateway to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mt-2">
              Academic Success
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Access comprehensive past papers from all semesters. Prepare smarter, not harder.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-yellow-400 transition-colors" />
              <input
                type="text"
                placeholder="Search for subjects, papers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500/20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { label: 'Semesters', value: '5' },
              { label: 'Total Papers', value: '130+' },
              { label: 'End Sem', value: '65+' },
              { label: 'Mid Sem', value: '65+' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Semester Cards */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-black text-white mb-8">Select Your Semester</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semesters.map((sem) => (
              <div
                key={sem.id}
                onClick={() => setSelectedSem(selectedSem === sem.id ? null : sem.id)}
                className="group cursor-pointer"
              >
                <div className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-3xl border-2 transition-all duration-500 backdrop-blur-sm ${
                  selectedSem === sem.id 
                    ? 'border-yellow-500 shadow-2xl shadow-yellow-500/30 scale-105' 
                    : 'border-gray-700 hover:border-yellow-500/50 hover:scale-102'
                }`}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${sem.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl font-black text-black">{sem.id}</span>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-gray-400 transform transition-all duration-300 ${
                        selectedSem === sem.id ? 'rotate-90 text-yellow-400' : 'group-hover:translate-x-1 group-hover:text-yellow-400'
                      }`} />
                    </div>
                    
                    <h4 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {sem.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-6 font-medium">{sem.papers} papers available</p>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      selectedSem === sem.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-6 border-t border-gray-700 space-y-3">
                        {examTypes.map((exam) => (
                          <button
                            key={exam.type}
                            className="w-full flex items-center justify-between p-4 bg-black/40 rounded-xl border border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 group/btn"
                          >
                            <div className="flex items-center space-x-3">
                              <exam.icon className="w-5 h-5 text-yellow-400" />
                              <span className="text-white font-bold group-hover/btn:text-yellow-400 transition-colors">
                                {exam.label}
                              </span>
                            </div>
                            <Download className="w-5 h-5 text-gray-400 group-hover/btn:text-yellow-400 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-yellow-500/20 bg-black/50 backdrop-blur-xl py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-medium">
            Made with <span className="text-yellow-400">★</span> for Academic Excellence
          </p>
          <p className="text-gray-600 text-sm mt-2">© 2024 Paper Vault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaperVault;