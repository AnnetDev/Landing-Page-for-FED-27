import { Github, Linkedin, Twitter, Mail, MessageSquare, ExternalLink, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-mono">FED 27</h3>
                <p className="text-sm text-muted-foreground font-mono">Frontend Dev Class</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building the future of web development, one line of code at a time. Connect, learn, and grow together.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="hover:border-blue-400">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:border-blue-400">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:border-blue-400">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-blue-400 transition-colors text-sm">
                Home
              </a>
              <a href="#announcements" className="block text-muted-foreground hover:text-green-400 transition-colors text-sm">
                Announcements
              </a>
              <a href="#gallery" className="block text-muted-foreground hover:text-purple-400 transition-colors text-sm">
                Photo Gallery
              </a>
              <a href="#resources" className="block text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
                Resources
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:fed27@example.com" className="text-muted-foreground hover:text-blue-400 transition-colors">
                  fed27@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Class Discord</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors">
                  Course Portal
                </a>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="space-y-4">
            <h4 className="text-base text-foreground">Send Feedback</h4>
            <Card className="bg-muted/50 border-border">
              <CardContent className="p-4 space-y-3">
                <Input 
                  placeholder="Your name" 
                  className="bg-background border-border text-sm"
                />
                <Textarea 
                  placeholder="Your feedback or suggestions..." 
                  className="bg-background border-border text-sm min-h-[80px]"
                />
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resources Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors text-sm font-mono">
              → MDN Web Docs
            </a>
            <a href="#" className="text-muted-foreground hover:text-green-400 transition-colors text-sm font-mono">
              → React Documentation
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors text-sm font-mono">
              → CSS Tricks
            </a>
            <a href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm font-mono">
              → JavaScript Info
            </a>
            <a href="#" className="text-muted-foreground hover:text-pink-400 transition-colors text-sm font-mono">
              → Figma Resources
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; 2025 FED 27 Class. Built with ❤️ by future web developers.
              </p>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                Accessibility compliant • Mobile responsive • Modern web standards
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Class Active</span>
              </span>
              <span>•</span>
              <span>24 Students Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}