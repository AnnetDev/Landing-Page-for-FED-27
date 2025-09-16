import { Calendar, Clock, Pin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function AnnouncementsSection() {
  const announcements = [
    {
      id: 1,
      title: 'Project 3: React Portfolio Due',
      content: 'Submit your React portfolio project by Friday. Include responsive design, component structure, and clean code practices.',
      date: '2025-09-20',
      time: '11:59 PM',
      type: 'assignment',
      pinned: true
    },
    {
      id: 2,
      title: 'Guest Speaker: Senior Frontend Dev',
      content: 'Join us for an inspiring talk about career paths in frontend development with industry insights and Q&A session.',
      date: '2025-09-18',
      time: '2:00 PM',
      type: 'event',
      pinned: false
    },
    {
      id: 3,
      title: 'Code Review Sessions - This Week',
      content: 'Peer code review sessions scheduled. Check your assigned groups and prepare your latest project for constructive feedback.',
      date: '2025-09-16',
      time: '10:00 AM',
      type: 'info',
      pinned: false
    },
    {
      id: 4,
      title: 'New Learning Resources Added',
      content: 'Updated resource library with advanced JavaScript patterns, CSS Grid mastery, and accessibility best practices.',
      date: '2025-09-15',
      time: '9:00 AM',
      type: 'update',
      pinned: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'assignment': return 'bg-red-500/10 text-red-400 border-red-400/20';
      case 'event': return 'bg-blue-500/10 text-blue-400 border-blue-400/20';
      case 'info': return 'bg-green-500/10 text-green-400 border-green-400/20';
      case 'update': return 'bg-purple-500/10 text-purple-400 border-purple-400/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const upcomingEvents = [
    { date: '16', month: 'SEP', event: 'Code Review', time: '10:00 AM' },
    { date: '18', month: 'SEP', event: 'Guest Speaker', time: '2:00 PM' },
    { date: '20', month: 'SEP', event: 'Project Due', time: '11:59 PM' },
    { date: '22', month: 'SEP', event: 'Study Group', time: '6:00 PM' }
  ];

  return (
    <section id="announcements" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono mb-4 text-foreground">
            <span className="text-green-400">&lt;</span>
            Announcements
            <span className="text-green-400">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, assignments, and events from your FED 27 class.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Announcements */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="bg-card border-border hover:border-accent transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {announcement.pinned && (
                          <Pin className="w-4 h-4 text-yellow-400 fill-current" />
                        )}
                        <Badge className={getTypeColor(announcement.type)}>
                          {announcement.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{announcement.date}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{announcement.time}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{announcement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{announcement.content}</p>
                    <Button variant="outline" size="sm" className="hover:border-blue-400">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Calendar Sidebar */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-mono text-foreground">{event.date}</div>
                      <div className="text-xs text-muted-foreground font-mono">{event.month}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-foreground">{event.event}</div>
                      <div className="text-xs text-muted-foreground">{event.time}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Class Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Students</span>
                  <span className="font-mono text-green-400">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-mono text-blue-400">48</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Days to Graduation</span>
                  <span className="font-mono text-purple-400">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Code Reviews</span>
                  <span className="font-mono text-yellow-400">12</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}