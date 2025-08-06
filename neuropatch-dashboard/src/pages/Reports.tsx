import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Chip,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Assessment as AssessmentIcon,
  Download as DownloadIcon,
  Print as PrintIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Report {
  id: number;
  patientName: string;
  type: string;
  date: string;
  status: 'draft' | 'published' | 'archived';
  summary: string;
}

const Reports: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [dateRange, setDateRange] = useState('month');

  // Sample data
  const reports: Report[] = [
    {
      id: 1,
      patientName: 'Ahmet Yılmaz',
      type: 'Kognitif Değerlendirme Raporu',
      date: '2024-05-20',
      status: 'published',
      summary: 'Hastanın kognitif fonksiyonlarında iyileşme gözlemlendi.',
    },
    {
      id: 2,
      patientName: 'Ayşe Demir',
      type: 'Hafıza Testi Raporu',
      date: '2024-05-19',
      status: 'draft',
      summary: 'Kısa süreli hafıza testi sonuçları değerlendirildi.',
    },
  ];

  // Sample chart data
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

  const diagnosisDistributionData = {
    labels: ['Alzheimer', 'Depresyon', 'Depresif Pseudodemans'],
    datasets: [
      {
        label: 'Hasta Sayısı',
        data: [45, 30, 25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
      },
    ],
  };

  const handleOpenDialog = (report?: Report) => {
    setSelectedReport(report || null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedReport(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'success';
      case 'draft':
        return 'warning';
      case 'archived':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Raporlar</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Yeni Rapor
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Charts */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Hasta İlerleme Analizi</Typography>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Tarih Aralığı</InputLabel>
                <Select
                  value={dateRange}
                  label="Tarih Aralığı"
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <MenuItem value="week">Son 1 Hafta</MenuItem>
                  <MenuItem value="month">Son 1 Ay</MenuItem>
                  <MenuItem value="year">Son 1 Yıl</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Line data={patientProgressData} />
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Tanı Dağılımı
            </Typography>
            <Bar data={diagnosisDistributionData} />
          </Paper>
        </Grid>

        {/* Statistics */}
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardHeader title="Rapor İstatistikleri" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">24</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bu Ay Rapor
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">156</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Toplam Rapor
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">8</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Taslak Rapor
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">12</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Arşivlenmiş
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Report List */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Son Raporlar
            </Typography>
            <List>
              {reports.map((report) => (
                <React.Fragment key={report.id}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AssessmentIcon sx={{ mr: 1 }} />
                          <Typography variant="h6">{report.type}</Typography>
                          <Chip
                            label={report.status}
                            color={getStatusColor(report.status)}
                            size="small"
                            sx={{ ml: 1 }}
                          />
                        </Box>
                      }
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            Hasta: {report.patientName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Tarih: {report.date}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {report.summary}
                          </Typography>
                        </>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        color="primary"
                        onClick={() => handleOpenDialog(report)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" color="primary">
                        <DownloadIcon />
                      </IconButton>
                      <IconButton edge="end" color="primary">
                        <PrintIcon />
                      </IconButton>
                      <IconButton edge="end" color="primary">
                        <ShareIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Add/Edit Report Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedReport ? 'Rapor Düzenle' : 'Yeni Rapor Oluştur'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Hasta"
                defaultValue={selectedReport?.patientName || ''}
              >
                <MenuItem value="Ahmet Yılmaz">Ahmet Yılmaz</MenuItem>
                <MenuItem value="Ayşe Demir">Ayşe Demir</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Rapor Tipi"
                defaultValue={selectedReport?.type || ''}
              >
                <MenuItem value="Kognitif Değerlendirme Raporu">
                  Kognitif Değerlendirme Raporu
                </MenuItem>
                <MenuItem value="Hafıza Testi Raporu">
                  Hafıza Testi Raporu
                </MenuItem>
                <MenuItem value="Ruh Hali Değerlendirme Raporu">
                  Ruh Hali Değerlendirme Raporu
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="Rapor İçeriği"
                defaultValue={selectedReport?.summary}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>İptal</Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            {selectedReport ? 'Güncelle' : 'Oluştur'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Reports; 