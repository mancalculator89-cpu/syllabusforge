export default function Home() {
  return (
    <>
      {/* Top Navigation Header */}
      <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-4 z-10 shrink-0">
          <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg shadow-sm">
                  <i data-lucide="layers" className="w-5 h-5"></i>
              </div>
              <span className="font-semibold text-slate-900 tracking-tight text-lg">Syllabex</span>
          </div>

          {/* Mode Switcher Tabs */}
          <nav className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/80">
              <button id="tab-syllabus" onClick={() => window.switchTab('syllabus')} className="nav-tab active flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all">
                  <i data-lucide="book-open" className="w-3.5 h-3.5"></i>
                  <span>1. Syllabus</span>
              </button>
              <button id="tab-mindmap" onClick={() => window.switchTab('mindmap')} className="nav-tab flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 transition-all">
                  <i data-lucide="git-fork" className="w-3.5 h-3.5"></i>
                  <span>2. Mindmap Workspace</span>
              </button>
              <button id="tab-pastpapers" onClick={() => window.switchTab('pastpapers')} className="nav-tab flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 transition-all">
                  <i data-lucide="file-check-2" className="w-3.5 h-3.5"></i>
                  <span>3. Past Papers</span>
              </button>
          </nav>

          <div className="flex items-center space-x-2">
              <button className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <i data-lucide="settings" className="w-4 h-4"></i>
              </button>
          </div>
      </header>

      {/* Main Workspace Area */}
      <div className="flex-1 flex overflow-hidden relative">
          
          {/* Sidebar */}
          <aside className="w-72 border-r border-slate-200 bg-white flex flex-col shrink-0">
              <div className="p-3 border-b border-slate-200">
                  <label htmlFor="syllabus-select" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Select Syllabus</label>
                  <select id="syllabus-select" className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg p-2 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                      <option value="loading">Loading...</option>
                  </select>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">Structure</div>
                  <div className="sidebar-tree space-y-1 text-xs"></div>
              </div>
              <div className="p-3 border-t border-slate-200">
                  <button className="w-full flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium py-2 px-3 rounded-lg border border-slate-200 transition-colors">
                      <i data-lucide="upload-cloud" className="w-3.5 h-3.5"></i>
                      <span>Upload Syllabus PDF</span>
                  </button>
              </div>
          </aside>

          {/* View 1: SYLLABUS */}
          <main id="view-syllabus" className="flex-1 overflow-y-auto bg-white p-8 max-w-4xl mx-auto border-x border-slate-100 shadow-sm my-4 rounded-xl">
              <div className="border-b border-slate-200 pb-4 mb-6">
                  <div className="text-xs font-mono text-indigo-600 uppercase tracking-wide">Syllabus Reference</div>
                  <h1 className="text-2xl font-bold text-slate-900 mt-1">Curriculum Specification</h1>
              </div>
              <div id="syllabus-content" className="syllabus-root space-y-8 text-sm leading-relaxed"></div>
          </main>

          {/* View 2: MINDMAP */}
          <main id="view-mindmap" className="flex-1 bg-slate-100 hidden relative overflow-hidden flex flex-col">
              <div className="h-10 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-10 shrink-0">
                  <div className="text-xs text-slate-500 font-medium">Workspace: Manual Canvas</div>
              </div>
              <div className="flex-1 overflow-auto p-8 flex items-center justify-center border-2 border-dashed border-slate-200 m-4 rounded-xl bg-slate-50/50">
                  <div className="text-center max-w-sm">
                      <i data-lucide="git-fork" className="w-10 h-10 text-slate-300 mx-auto mb-3"></i>
                      <h3 className="text-sm font-semibold text-slate-700">Mindmap Canvas</h3>
                      <p className="text-xs text-slate-400 mt-1">Manual entry space.</p>
                  </div>
              </div>
          </main>

          {/* View 3: PAST PAPERS */}
          <main id="view-pastpapers" className="flex-1 bg-white hidden overflow-y-auto p-8 max-w-4xl mx-auto border-x border-slate-100 shadow-sm my-4 rounded-xl">
              <div className="border-b border-slate-200 pb-4 mb-6">
                  <div className="text-xs font-mono text-emerald-600 uppercase tracking-wide">Assessment Engine</div>
                  <h1 className="text-2xl font-bold text-slate-900 mt-1">Past Paper Assembler</h1>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium py-2 px-4 rounded-lg shadow-sm transition-colors flex items-center space-x-2">
                      <i data-lucide="file-text" className="w-4 h-4"></i>
                      <span>Generate Practice Examination</span>
                  </button>
              </div>
          </main>
      </div>
    </>
  )
}
