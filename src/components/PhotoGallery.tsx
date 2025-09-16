import { Heart, MessageCircle, Share2, Upload, Filter, Grid3X3, Camera } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PhotoGallery() {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzdHVkZW50cyUyMGxhcHRvcHxlbnwxfHx8fDE3NTgwMjYzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Students coding together",
      title: "Late Night Coding Session",
      author: "Sarah M.",
      likes: 24,
      comments: 8,
      tags: ["coding", "teamwork", "javascript"],
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1627599936744-51d288f89af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW18ZW58MXx8fHwxNzU4MDI1MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Web development team working",
      title: "Project Collaboration",
      author: "Mike J.",
      likes: 31,
      comments: 12,
      tags: ["project", "react", "teamwork"],
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1653179241439-c4c10083879a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTgwMjYzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Programming workspace setup",
      title: "My Dev Setup",
      author: "Alex K.",
      likes: 18,
      comments: 5,
      tags: ["workspace", "setup", "productivity"],
      timestamp: "1 day ago"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1693386556810-43d9451bdda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcmV2aWV3JTIwbWVldGluZ3xlbnwxfHx8fDE3NTgwMjY0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Code review meeting",
      title: "Code Review Session",
      author: "Emma L.",
      likes: 27,
      comments: 15,
      tags: ["code-review", "learning", "feedback"],
      timestamp: "1 day ago"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nfGVufDF8fHx8MTc1ODAyNjQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Students studying together",
      title: "Study Group Session",
      author: "David R.",
      likes: 22,
      comments: 9,
      tags: ["study-group", "html", "css"],
      timestamp: "2 days ago"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbWVldHVwfGVufDF8fHx8MTc1ODAyNjQxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Tech meetup event",
      title: "Guest Speaker Event",
      author: "Lisa W.",
      likes: 35,
      comments: 18,
      tags: ["event", "speaker", "networking"],
      timestamp: "3 days ago"
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'coding': 'bg-blue-500/10 text-blue-400 border-blue-400/20',
      'teamwork': 'bg-green-500/10 text-green-400 border-green-400/20',
      'javascript': 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20',
      'project': 'bg-purple-500/10 text-purple-400 border-purple-400/20',
      'react': 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20',
      'workspace': 'bg-orange-500/10 text-orange-400 border-orange-400/20',
      'setup': 'bg-pink-500/10 text-pink-400 border-pink-400/20',
      'productivity': 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20',
      'code-review': 'bg-red-500/10 text-red-400 border-red-400/20',
      'learning': 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20',
      'feedback': 'bg-teal-500/10 text-teal-400 border-teal-400/20',
      'study-group': 'bg-violet-500/10 text-violet-400 border-violet-400/20',
      'html': 'bg-amber-500/10 text-amber-400 border-amber-400/20',
      'css': 'bg-sky-500/10 text-sky-400 border-sky-400/20',
      'event': 'bg-rose-500/10 text-rose-400 border-rose-400/20',
      'speaker': 'bg-lime-500/10 text-lime-400 border-lime-400/20',
      'networking': 'bg-slate-500/10 text-slate-400 border-slate-400/20'
    };
    return colors[tag] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono mb-4 text-foreground">
            <span className="text-purple-400">&lt;</span>
            Photo Gallery
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Share your coding journey, celebrate achievements, and connect with your classmates through moments that matter.
          </p>
          
          {/* Gallery Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Upload className="w-4 h-4 mr-2" />
              Upload Photo
            </Button>
            <Button variant="outline" className="hover:border-purple-400">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="hover:border-purple-400">
              <Grid3X3 className="w-4 h-4 mr-2" />
              View Mode
            </Button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="bg-card border-border hover:border-accent transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <Camera className="w-5 h-5 text-white/80" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg mb-1">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">by {photo.author} • {photo.timestamp}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {photo.tags.map((tag) => (
                      <Badge key={tag} className={`text-xs ${getTagColor(tag)}`}>
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{photo.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{photo.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-purple-400">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="hover:border-purple-400">
            Load More Photos
          </Button>
        </div>
      </div>
    </section>
  );
}