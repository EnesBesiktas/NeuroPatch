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
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Assessment as AssessmentIcon,
  Psychology as PsychologyIcon,
} from '@mui/icons-material';

interface Test {
  id: number;
  name: string;
  type: string;
  description: string;
  duration: number;
  questions: number;
  lastUsed: string;
  status: 'active' | 'draft' | 'archived';
}

interface TestResult {
  id: number;
  patientName: string;
  testName: string;
  date: string;
  score: number;
  status: 'completed' | 'in_progress' | 'pending';
}

const Tests: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [activeTab, setActiveTab] = useState<'tests' | 'results'>('tests');

  // Sample data
  const tests: Test[] = [
    {
      id: 1,
      name: 'Mini Mental Durum Değerlendirmesi',
      type: 'Kognitif Değerlendirme',
      description: 'Hastanın kognitif fonksiyonlarını değerlendiren kapsamlı test',
      duration: 30,
      questions: 30,
      lastUsed: '2024-05-20',
      status: 'active',
    },
    {
      id: 2,
      name: 'Hafıza Testi',
      type: 'Hafıza Değerlendirmesi',
      description: 'Kısa ve uzun süreli hafıza değerlendirmesi',
      duration: 20,
      questions: 15,
      lastUsed: '2024-05-19',
      status: 'active',
    },
  ];

  const testResults: TestResult[] = [
    {
      id: 1,
      patientName: 'Ahmet Yılmaz',
      testName: 'Mini Mental Durum Değerlendirmesi',
      date: '2024-05-20',
      score: 85,
      status: 'completed',
    },
    {
      id: 2,
      patientName: 'Ayşe Demir',
      testName: 'Hafıza Testi',
      date: '2024-05-19',
      score: 78,
      status: 'completed',
    },
  ];

  const handleOpenDialog = (test?: Test) => {
    setSelectedTest(test || null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTest(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
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
        <Typography variant="h4">Testler</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Yeni Test
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Test List */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
              <Button
                variant={activeTab === 'tests' ? 'contained' : 'text'}
                onClick={() => setActiveTab('tests')}
                sx={{ mr: 2 }}
              >
                Testler
              </Button>
              <Button
                variant={activeTab === 'results' ? 'contained' : 'text'}
                onClick={() => setActiveTab('results')}
              >
                Test Sonuçları
              </Button>
            </Box>

            {activeTab === 'tests' ? (
              <List>
                {tests.map((test) => (
                  <React.Fragment key={test.id}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PsychologyIcon sx={{ mr: 1 }} />
                            <Typography variant="h6">{test.name}</Typography>
                            <Chip
                              label={test.status}
                              color={getStatusColor(test.status)}
                              size="small"
                              sx={{ ml: 1 }}
                            />
                          </Box>
                        }
                        secondary={
                          <>
                            <Typography variant="body2" color="text.secondary">
                              {test.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Süre: {test.duration} dakika | Soru Sayısı:{' '}
                              {test.questions}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          color="primary"
                          onClick={() => handleOpenDialog(test)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" color="error">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            ) : (
              <List>
                {testResults.map((result) => (
                  <React.Fragment key={result.id}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AssessmentIcon sx={{ mr: 1 }} />
                            <Typography variant="h6">{result.testName}</Typography>
                            <Chip
                              label={result.status}
                              color={
                                result.status === 'completed'
                                  ? 'success'
                                  : 'warning'
                              }
                              size="small"
                              sx={{ ml: 1 }}
                            />
                          </Box>
                        }
                        secondary={
                          <>
                            <Typography variant="body2" color="text.secondary">
                              Hasta: {result.patientName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Tarih: {result.date} | Skor: {result.score}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<AssessmentIcon />}
                        >
                          Detay
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            )}
          </Paper>
        </Grid>

        {/* Statistics */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Test İstatistikleri" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">12</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Aktif Test
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">156</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tamamlanan Test
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">85%</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ortalama Başarı
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4">8</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bekleyen Test
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add/Edit Test Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedTest ? 'Test Düzenle' : 'Yeni Test Oluştur'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Test Adı"
                defaultValue={selectedTest?.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Test Tipi"
                defaultValue={selectedTest?.type || ''}
              >
                <MenuItem value="Kognitif Değerlendirme">
                  Kognitif Değerlendirme
                </MenuItem>
                <MenuItem value="Hafıza Değerlendirmesi">
                  Hafıza Değerlendirmesi
                </MenuItem>
                <MenuItem value="Ruh Hali Değerlendirmesi">
                  Ruh Hali Değerlendirmesi
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Süre (dakika)"
                defaultValue={selectedTest?.duration}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Açıklama"
                defaultValue={selectedTest?.description}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>İptal</Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            {selectedTest ? 'Güncelle' : 'Oluştur'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Tests; 