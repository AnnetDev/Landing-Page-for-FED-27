import { Search, Menu, Calendar, Users, Image } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Class Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-lg">
              <span className="text-white font-mono text-lg">&lt;/&gt;</span>
            </div>
            <div>
              <h1 className="text-2xl font-mono text-foreground">FED 27</h1>
              <p className="text-sm text-muted-foreground font-mono">Frontend Development Class</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="flex items-center space-x-2 text-foreground hover:text-blue-400 transition-colors">
              <Users className="w-4 h-4" />
              <span>Home</span>
            </a>
            <a href="#announcements" className="flex items-center space-x-2 text-foreground hover:text-green-400 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Announcements</span>
            </a>
            <a href="#gallery" className="flex items-center space-x-2 text-foreground hover:text-purple-400 transition-colors">
              <Image className="w-4 h-4" />
              <span>Gallery</span>
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search announcements, photos..." 
                className="pl-10 w-64 bg-input-background border-border focus:border-blue-400"
              />
            </div>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
          <div className="flex justify-around">
            <a href="#home" className="flex flex-col items-center space-y-1 text-foreground hover:text-blue-400">
              <Users className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </a>
            <a href="#announcements" className="flex flex-col items-center space-y-1 text-foreground hover:text-green-400">
              <Calendar className="w-5 h-5" />
              <span className="text-xs">News</span>
            </a>
            <a href="#gallery" className="flex flex-col items-center space-y-1 text-foreground hover:text-purple-400">
              <Image className="w-5 h-5" />
              <span className="text-xs">Gallery</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}