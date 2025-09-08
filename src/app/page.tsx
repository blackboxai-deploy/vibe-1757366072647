export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
          Hello World!
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 font-medium">
          Welcome to your Next.js application
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          This is a simple hello world page built with Next.js, TypeScript, and Tailwind CSS. 
          Ready to start building something amazing!
        </p>
        
        {/* Decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </main>
  )
}