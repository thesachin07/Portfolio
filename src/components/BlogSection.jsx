'use client';

import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export default function BlogSection({ darkMode }) {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices and patterns for building large-scale React applications that are maintainable and performant.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      tags: ['React', 'JavaScript', 'Architecture'],
      image: '/blog/react.jpg',
      slug: 'building-scalable-react-applications',
    },
    {
      id: 2,
      title: 'Modern CSS Techniques in 2024',
      excerpt: 'Explore the latest CSS features including container queries, cascade layers, and modern layout techniques.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'CSS',
      tags: ['CSS', 'Web Design', 'Frontend'],
      image: '/blog/css.jpg',
      slug: 'modern-css-techniques-2024',
    },
    {
      id: 3,
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices that will make your code more robust and maintainable.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      image: '/blog/typescript.jpg',
      slug: 'typescript-best-practices',
    },
    {
      id: 4,
      title: 'Next.js 14: What\'s New',
      excerpt: 'A comprehensive guide to the new features and improvements in Next.js 14, including server actions and more.',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Next.js',
      tags: ['Next.js', 'React', 'Web Development'],
      image: '/blog/nextjs.jpg',
      slug: 'nextjs-14-whats-new',
    },
    {
      id: 5,
      title: 'API Design Best Practices',
      excerpt: 'Learn how to design RESTful APIs that are intuitive, scalable, and easy to maintain.',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Backend',
      tags: ['API', 'Backend', 'Architecture'],
      image: '/blog/api.jpg',
      slug: 'api-design-best-practices',
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques',
      excerpt: 'Practical tips and techniques to improve the performance of your web applications.',
      date: '2023-12-15',
      readTime: '12 min read',
      category: 'Performance',
      tags: ['Performance', 'Optimization', 'Web'],
      image: '/blog/performance.jpg',
      slug: 'performance-optimization-techniques',
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="blog" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Latest <span className="text-yellow-400">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-12 rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl hover:shadow-2xl transition-all duration-300`}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Featured Image */}
            <div className="relative h-64 md:h-auto bg-gradient-to-br from-yellow-400 to-orange-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold opacity-20">
                ★
              </div>
              <div className="absolute top-4 left-4 px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full text-sm">
                Featured
              </div>
            </div>

            {/* Featured Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold">
                  {blogPosts[0].category}
                </span>
                <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar size={16} />
                  {formatDate(blogPosts[0].date)}
                </div>
                <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Clock size={16} />
                  {blogPosts[0].readTime}
                </div>
              </div>

              <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {blogPosts[0].title}
              </h3>

              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {blogPosts[0].excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {blogPosts[0].tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`/blog/${blogPosts[0].slug}`}
                className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors group"
              >
                Read Full Article
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className={`group rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {post.id}
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className={`flex items-center gap-4 mb-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-yellow-400 transition-colors`}>
                  {post.title}
                </h3>

                <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Blog Posts
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
