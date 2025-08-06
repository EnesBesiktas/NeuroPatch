import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
  IconButton,
  Divider,
  Badge,
  InputAdornment,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import {
  Send as SendIcon,
  Search as SearchIcon,
  AttachFile as AttachFileIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';

interface Message {
  id: number;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  attachments?: string[];
}

interface Conversation {
  id: number;
  patientName: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar: string;
}

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const conversations: Conversation[] = [
    {
      id: 1,
      patientName: 'Ahmet Yılmaz',
      lastMessage: 'Test sonuçlarımı ne zaman alabilirim?',
      timestamp: '10:30',
      unreadCount: 2,
      avatar: 'AY',
    },
    {
      id: 2,
      patientName: 'Ayşe Demir',
      lastMessage: 'Randevu tarihini değiştirmek istiyorum.',
      timestamp: '09:15',
      unreadCount: 0,
      avatar: 'AD',
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Ahmet Yılmaz',
      receiver: 'Dr. Yılmaz',
      content: 'Merhaba doktor bey, test sonuçlarımı ne zaman alabilirim?',
      timestamp: '10:30',
      isRead: true,
    },
    {
      id: 2,
      sender: 'Dr. Yılmaz',
      receiver: 'Ahmet Yılmaz',
      content: 'Merhaba Ahmet bey, test sonuçlarınız yarın hazır olacak.',
      timestamp: '10:32',
      isRead: true,
    },
    {
      id: 3,
      sender: 'Ahmet Yılmaz',
      receiver: 'Dr. Yılmaz',
      content: 'Teşekkür ederim, yarın geliyorum.',
      timestamp: '10:33',
      isRead: false,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Implement send message logic
      setMessage('');
    }
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Mesajlar
      </Typography>

      <Grid container spacing={3}>
        {/* Conversations List */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ height: 'calc(100vh - 200px)' }}>
            <Box sx={{ p: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Hasta Ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <List sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 300px)' }}>
              {filteredConversations.map((conversation) => (
                <React.Fragment key={conversation.id}>
                  <ListItem
                    button
                    selected={selectedConversation === conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <ListItemAvatar>
                      <Badge
                        badgeContent={conversation.unreadCount}
                        color="primary"
                      >
                        <Avatar>{conversation.avatar}</Avatar>
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={conversation.patientName}
                      secondary={conversation.lastMessage}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {conversation.timestamp}
                    </Typography>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Messages */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column' }}>
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Avatar>
                        {conversations.find((c) => c.id === selectedConversation)?.avatar}
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6" sx={{ ml: 2 }}>
                        {conversations.find((c) => c.id === selectedConversation)?.patientName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>

                {/* Messages List */}
                <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
                  {messages.map((msg) => (
                    <Box
                      key={msg.id}
                      sx={{
                        display: 'flex',
                        justifyContent: msg.sender === 'Dr. Yılmaz' ? 'flex-end' : 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: '70%',
                          bgcolor: msg.sender === 'Dr. Yılmaz' ? 'primary.light' : 'grey.100',
                          color: msg.sender === 'Dr. Yılmaz' ? 'white' : 'text.primary',
                        }}
                      >
                        <CardContent>
                          <Typography variant="body1">{msg.content}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {msg.timestamp}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </Box>

                {/* Message Input */}
                <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <TextField
                        fullWidth
                        multiline
                        maxRows={4}
                        placeholder="Mesajınızı yazın..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <AttachFileIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                      >
                        Gönder
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </>
            ) : (
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Mesajlaşmak için bir hasta seçin
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Messages; 