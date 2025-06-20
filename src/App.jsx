import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('featured')

  // Mock data for content
  const featuredContent = [
    {
      id: 1,
      type: 'podcast',
      title: 'The Future of AI in Content Creation',
      author: 'Sarah Chen',
      duration: '45 min',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      excerpt: 'Exploring how artificial intelligence is transforming the way we create and consume content.'
    },
    {
      id: 2,
      type: 'article',
      title: 'Building a Sustainable Content Strategy',
      author: 'Marcus Rodriguez',
      readTime: '8 min read',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      excerpt: 'Learn the fundamentals of creating content that resonates with your audience and drives results.'
    },
    {
      id: 3,
      type: 'podcast',
      title: 'Mindful Productivity: Work Smarter, Not Harder',
      author: 'Emma Thompson',
      duration: '32 min',
      category: 'Productivity',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      excerpt: 'Discover practical techniques for maintaining focus and achieving more with less stress.'
    }
  ]

  const recentContent = [
    {
      id: 4,
      type: 'article',
      title: 'The Psychology of Viral Content',
      author: 'Dr. James Wilson',
      readTime: '12 min read',
      category: 'Psychology',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      excerpt: 'Understanding what makes content go viral and how to apply these principles to your work.'
    },
    {
      id: 5,
      type: 'podcast',
      title: 'Creative Block: Breaking Through Barriers',
      author: 'Lisa Park',
      duration: '28 min',
      category: 'Creativity',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop',
      excerpt: 'Practical strategies for overcoming creative blocks and finding inspiration.'
    }
  ]

  const renderContentCard = (content) => (
    <div key={content.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-0 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={content.image} 
          alt={content.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
            content.type === 'podcast' 
              ? 'bg-orange-100 text-orange-700' 
              : 'bg-teal-100 text-teal-700'
          }`}>
            {content.type === 'podcast' ? '🎙️ Podcast' : '📝 Article'}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 bg-white bg-opacity-90 text-gray-700 text-sm rounded-full font-medium">
            {content.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
          {content.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {content.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {content.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="text-sm text-gray-700 font-medium">{content.author}</span>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            {content.type === 'podcast' ? content.duration : content.readTime}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                AIIAKI
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <a href="#podcasts" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Podcasts</a>
              <a href="#articles" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Articles</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                Start Creating
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-orange-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Home</a>
                <a href="#podcasts" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Podcasts</a>
                <a href="#articles" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Articles</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">About</a>
                <button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-pink-600 font-medium">
                  Start Creating
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              The Future of 
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"> Content</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A platform for creators to publish podcasts and articles that inspire, educate, and connect with audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Creating
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                Explore Content
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-600">Podcasts</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-gray-800 mb-2">1.2K+</div>
                <div className="text-gray-600">Articles</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
                <div className="text-gray-600">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest podcasts and articles from our community
            </p>
          </div>

          {/* Content Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('featured')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'featured'
                    ? 'bg-white text-orange-600 shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => setActiveTab('recent')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'recent'
                    ? 'bg-white text-orange-600 shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Recent
              </button>
              <button
                onClick={() => setActiveTab('trending')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'trending'
                    ? 'bg-white text-orange-600 shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Trending
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'featured' && featuredContent.map(renderContentCard)}
            {activeTab === 'recent' && recentContent.map(renderContentCard)}
            {activeTab === 'trending' && [...featuredContent, ...recentContent].slice(0, 3).map(renderContentCard)}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find content that matches your interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Technology', icon: '💻', color: 'from-blue-400 to-cyan-500' },
              { name: 'Business', icon: '💼', color: 'from-purple-400 to-pink-500' },
              { name: 'Creativity', icon: '🎨', color: 'from-green-400 to-teal-500' },
              { name: 'Productivity', icon: '⚡', color: 'from-orange-400 to-red-500' },
              { name: 'Health', icon: '🏥', color: 'from-indigo-400 to-purple-500' },
              { name: 'Education', icon: '📚', color: 'from-pink-400 to-rose-500' },
              { name: 'Science', icon: '🔬', color: 'from-yellow-400 to-orange-500' },
              { name: 'Psychology', icon: '🧠', color: 'from-teal-400 to-cyan-500' }
            ].map((category) => (
              <div key={category.name} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-0">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Spotlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Creator Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the amazing creators behind our content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Tech Podcaster',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
                bio: 'Exploring the intersection of technology and human experience through thoughtful conversations.',
                followers: '12.5K'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Business Writer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                bio: 'Sharing insights on business strategy and leadership for the modern entrepreneur.',
                followers: '8.9K'
              },
              {
                name: 'Emma Thompson',
                role: 'Productivity Coach',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
                bio: 'Helping people achieve their goals through mindful productivity and intentional living.',
                followers: '15.2K'
              }
            ].map((creator) => (
              <div key={creator.name} className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={creator.avatar} 
                  alt={creator.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover ring-4 ring-white shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{creator.name}</h3>
                <p className="text-orange-600 mb-4 font-medium">{creator.role}</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{creator.bio}</p>
                <div className="text-sm text-gray-500 font-medium">{creator.followers} followers</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Share Your Work?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who are already publishing their podcasts and articles on AIIAKI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Publishing
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-orange-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">AIIAKI</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering creators to share their stories with the world.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Content</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Podcasts</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Articles</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Categories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Creators</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Start Creating</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 AIIAKI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App