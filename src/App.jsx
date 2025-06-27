import { useState } from 'react'

function App() {
  // State for Podcast-Archive filters
  const [podcastFilter, setPodcastFilter] = useState('All')
  // State for Learning tag filters
  const [learningTag, setLearningTag] = useState('All')

  // Mock data
  const podcastArchive = [
    { id: 1, title: 'AI Weekly News #1', type: 'Weekly News' },
    { id: 2, title: 'AI Special: LLMs', type: 'Specials' },
    { id: 3, title: 'AI Weekly News #2', type: 'Weekly News' },
  ]
  const learningResources = [
    { id: 1, title: 'Intro to AI', tags: ['Basics'] },
    { id: 2, title: 'Prompt Engineering', tags: ['Advanced'] },
    { id: 3, title: 'Ethics in AI', tags: ['Ethics'] },
  ]
  const learningTags = ['All', 'Basics', 'Advanced', 'Ethics']

  // Filtered data
  const filteredPodcasts = podcastFilter === 'All' ? podcastArchive : podcastArchive.filter(p => p.type === podcastFilter)
  const filteredLearning = learningTag === 'All' ? learningResources : learningResources.filter(l => l.tags.includes(learningTag))

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center h-16 px-4">
          <div className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mr-8">LOGO</div>
          <div className="flex gap-6 text-gray-700 text-base font-medium">
            <a href="#" className="hover:text-orange-600 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Podcasts</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Learning</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Maps/Links</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Tools</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Newsletter</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 py-16 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Understand AI. Every week.</h1>
          <div className="text-lg mb-6 text-orange-700 font-semibold">Weekly AI News</div>
          <div className="mb-4">
            {/* Audio player placeholder */}
            <div className="flex items-center border rounded-full px-4 py-3 w-full max-w-md bg-white/80 shadow-md">
              <button className="mr-4 text-orange-600 hover:text-pink-600 transition"><svg width="28" height="28" fill="none" stroke="currentColor"><polygon points="6,4 24,14 6,24" fill="currentColor" /></svg></button>
              <div className="flex-1 h-1 bg-orange-200 rounded-full"><div className="w-1/3 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div></div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium shadow hover:from-orange-600 hover:to-pink-600 transition-all">Listen to more episodes →</button>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-10 border-b">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Podcast-Archive */}
          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Podcast-Archive</h2>
            <div className="flex gap-2 mb-4">
              {['All', 'Weekly News', 'Specials'].map(f => (
                <button key={f} onClick={() => setPodcastFilter(f)} className={`px-3 py-1 rounded-full border font-medium transition-all duration-200 ${podcastFilter === f ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow' : 'bg-white text-orange-600 border-orange-200 hover:bg-orange-50'}`}>{f}</button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mb-2">
              {filteredPodcasts.map(p => (
                <div key={p.id} className="bg-white rounded-2xl shadow hover:shadow-xl transition-all flex flex-col items-center justify-center h-24 p-2 border-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded mb-1"></div>
                  <div className="text-xs font-medium text-gray-800 text-center">{p.title}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Learning */}
          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Learning</h2>
            <div className="flex gap-2 mb-4">
              {learningTags.map(tag => (
                <button key={tag} onClick={() => setLearningTag(tag)} className={`px-3 py-1 rounded-full border font-medium transition-all duration-200 ${learningTag === tag ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow' : 'bg-white text-orange-600 border-orange-200 hover:bg-orange-50'}`}>{tag}</button>
              ))}
              <button className="px-3 py-1 rounded-full border bg-white text-orange-600 border-orange-200 hover:bg-orange-50">...</button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-2">
              {filteredLearning.map(l => (
                <div key={l.id} className="bg-white rounded-2xl shadow hover:shadow-xl transition-all flex flex-col items-center justify-center h-24 p-2 border-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded mb-1"></div>
                  <div className="text-xs font-medium text-gray-800 text-center">{l.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maps, Useful Links, Tools to Try */}
      <section className="py-10 border-b">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 bg-white text-center shadow hover:shadow-xl transition-all cursor-pointer">
            <div className="font-bold text-lg mb-2 text-orange-700">Maps</div>
            <div className="text-sm mb-2 text-gray-600">Explore the AI landscape</div>
          </div>
          <div className="border rounded-2xl p-6 bg-white text-center shadow hover:shadow-xl transition-all cursor-pointer">
            <div className="font-bold text-lg mb-2 text-pink-700">Useful Links</div>
            <div className="text-sm mb-2 text-gray-600">Discover more AI resources</div>
          </div>
          <div className="border rounded-2xl p-6 bg-white text-center shadow hover:shadow-xl transition-all cursor-pointer">
            <div className="font-bold text-lg mb-2 text-yellow-700">Tools to Try</div>
            <div className="text-sm mb-2 text-gray-600">Mini apps for everyday use</div>
          </div>
        </div>
      </section>

      {/* AI Tool of the Week & Newsletter */}
      <section className="py-10 border-b">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Tool of the Week */}
          <div className="flex items-center gap-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-6 shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded mr-4"></div>
            <div>
              <div className="font-bold text-lg text-orange-700">Top name</div>
              <div className="text-sm text-gray-600">AI cine of the week</div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="border rounded-2xl p-6 bg-white flex flex-col items-start shadow">
            <div className="font-bold text-lg mb-2 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Subscribe to the newsletter</div>
            <input type="email" placeholder="Email address" className="border rounded px-3 py-2 mb-2 w-full focus:ring-2 focus:ring-orange-400" />
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium shadow hover:from-orange-600 hover:to-pink-600 transition-all">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm mt-auto">
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:underline">Imprint</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App