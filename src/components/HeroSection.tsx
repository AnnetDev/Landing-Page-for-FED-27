import { Code, Users, Lightbulb, Rocket } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section id="home" className="py-16 px-4 bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto text-center">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full mb-4">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-mono text-muted-foreground">Frontend Development Cohort</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-mono mb-6 text-foreground">
              Welcome to <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">FED 27</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our community of passionate frontend developers. Share your journey, learn together, 
              and build amazing web experiences. From HTML foundations to React mastery.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-blue-400 transition-colors">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg mb-2">Community First</h3>
              <p className="text-muted-foreground text-sm">Connect with fellow developers, share experiences, and grow together.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-green-400 transition-colors">
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg mb-2">Learn & Share</h3>
              <p className="text-muted-foreground text-sm">Access resources, announcements, and share your learning progress.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-purple-400 transition-colors">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg mb-2">Build Together</h3>
              <p className="text-muted-foreground text-sm">Showcase your projects, get feedback, and celebrate achievements.</p>
            </div>
          </div>

          {/* Code Snippet Preview */}
          <div className="bg-card border border-border rounded-lg p-6 text-left max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground font-mono">welcome.js</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <pre className="font-mono text-sm text-foreground">
              <code>
{`const fedClass = {
  name: 'FED 27',
  students: 'Awesome developers',
  mission: 'Building the future web',
  status: 'Ready to code! 🚀'
};

console.log(fedClass.status);`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}