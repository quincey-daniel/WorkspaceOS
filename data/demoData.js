export const contexts = [
  {
    id: 'project-alpha',
    name: 'Project Alpha',
    type: 'project',
    icon: '📊',
    status: 'active',
    description: 'Dashboard redesign project',
    stats: {
      tasksCompleted: 45,
      tasksInProgress: 12,
      deadline: '2 weeks'
    },
    quickActions: [
      { name: 'View Tasks', icon: '📋' },
      { name: 'Project Timeline', icon: '📅' },
      { name: 'Resources', icon: '📚' }
    ]
  },
  {
    id: 'design-team',
    name: 'Design Team',
    type: 'team',
    icon: '👥',
    status: 'active',
    description: 'UX/UI design discussions',
    members: 8,
    stats: {
      activeTasks: 15,
      reviewsPending: 4,
      nextSync: 'Tomorrow 10 AM'
    },
    quickActions: [
      { name: 'Team Chat', icon: '💬' },
      { name: 'Design Files', icon: '🎨' },
      { name: 'Schedule', icon: '📅' }
    ]
  },
  {
    id: 'client-meetings',
    name: 'Client Meetings',
    type: 'focus',
    icon: '🎯',
    status: 'scheduled',
    description: 'External communications and client interactions',
    members: 5,
    lastActivity: '1h ago',
    nextMeeting: 'Today at 4:00 PM',
    upcomingMeetings: 3,
    actionItems: 7,
    feedback: 'Positive',
    quickActions: [
      { label: 'Join Meeting', icon: '🎥', action: 'join' },
      { label: 'View Agenda', icon: '📝', action: 'agenda' },
      { label: 'Share Files', icon: '📤', action: 'share' }
    ]
  }
];

export const notifications = [
  {
    id: 1,
    source: 'Email',
    channel: 'client@acme.com',
    content: 'Updated project requirements document attached - please review by EOD',
    priority: 'high',
    time: '10min ago',
    sender: 'John Wilson',
    avatar: '👨‍💼',
    context: 'project-alpha',
    unread: true,
    hasAttachment: true
  },
  {
    id: 2,
    source: 'Slack',
    channel: 'design-reviews',
    content: 'New wireframes ready for the analytics dashboard section',
    priority: 'medium',
    time: '25min ago',
    sender: 'Sarah Chen',
    avatar: '👩‍🎨',
    context: 'design-team',
    unread: true
  },
  {
    id: 3,
    source: 'Calendar',
    channel: 'Client Review',
    content: 'Q2 Planning Meeting starting in 30 minutes',
    priority: 'high',
    time: '30min ago',
    context: 'client-meetings',
    unread: true,
    type: 'reminder'
  }
];

export const aiSuggestions = [
  {
    id: 1,
    type: 'conflict',
    content: 'Meeting conflict detected',
    details: 'Client call overlaps with design review at 4 PM',
    priority: 'high',
    action: 'Suggest reschedule',
    context: 'client-meetings'
  },
  {
    id: 2,
    type: 'reminder',
    content: 'Action items due soon',
    details: '3 tasks need attention before client meeting',
    priority: 'medium',
    action: 'Review tasks',
    context: 'project-alpha'
  },
  {
    id: 3,
    type: 'productivity',
    content: 'Focus time available',
    details: 'Calendar clear from 2-4 PM',
    priority: 'low',
    action: 'Block time',
    context: 'general'
  }
];