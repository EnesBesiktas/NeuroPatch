import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from '@mui/material';
import {
  People as PeopleIcon,
  Psychology as PsychologyIcon,
  Assessment as AssessmentIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  // Sample data for charts
  const patientProgressData = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
    datasets: [
      {
        label: 'Ortalama Test Skoru',
        data: [65, 68, 72, 70, 75, 78],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Sample data for recent patients
  const recentPatients = [
    { id: 1, name: 'Ahmet Yılmaz', lastVisit: '2024-05-20', status: 'İyileşme' },
    { id: 2, name: 'Ayşe Demir', lastVisit: '2024-05-19', status: 'Stabil' },
    { id: 3, name: 'Mehmet Kaya', lastVisit: '2024-05-18', status: 'İyileşme' },
  ];

  // Sample data for upcoming tests
  const upcomingTests = [
    { id: 1, patient: 'Ahmet Yılmaz', type: 'Kognitif Değerlendirme', date: '2024-05-25' },
    { id: 2, patient: 'Ayşe Demir', type: 'Hafıza Testi', date: '2024-05-26' },
    { id: 3, patient: 'Mehmet Kaya', type: 'Ruh Hali Değerlendirmesi', date: '2024-05-27' },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Hoş Geldiniz, Dr. Yılmaz
      </Typography>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'primary.light',
              color: 'white',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Toplam Hasta
            </Typography>
            <Typography variant="h3">156</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'success.light',
              color: 'white',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Bu Ay Test
            </Typography>
            <Typography variant="h3">24</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'warning.light',
              color: 'white',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Bekleyen Rapor
            </Typography>
            <Typography variant="h3">8</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'info.light',
              color: 'white',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Yeni Mesaj
            </Typography>
            <Typography variant="h3">12</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Patient Progress Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Hasta İlerleme Grafiği" />
            <CardContent>
              <Line data={patientProgressData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Patients */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Son Hastalar"
              action={
                <Button size="small" color="primary">
                  Tümünü Gör
                </Button>
              }
            />
            <CardContent>
              <List>
                {recentPatients.map((patient) => (
                  <ListItem key={patient.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <PeopleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={patient.name}
                      secondary={`Son Ziyaret: ${patient.lastVisit} - ${patient.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Tests */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title="Yaklaşan Testler"
              action={
                <Button size="small" color="primary">
                  Tümünü Gör
                </Button>
              }
            />
            <CardContent>
              <List>
                {upcomingTests.map((test) => (
                  <ListItem key={test.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <PsychologyIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={test.patient}
                      secondary={`${test.type} - ${test.date}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Hızlı İşlemler" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<PeopleIcon />}
                    sx={{ mb: 2 }}
                  >
                    Yeni Hasta
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<PsychologyIcon />}
                    sx={{ mb: 2 }}
                  >
                    Test Oluştur
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<AssessmentIcon />}
                    sx={{ mb: 2 }}
                  >
                    Rapor Oluştur
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<MessageIcon />}
                    sx={{ mb: 2 }}
                  >
                    Mesaj Gönder
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 