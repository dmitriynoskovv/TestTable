import { Grid, Typography, Card } from '@mui/material';
import { FeedItem } from 'store/model';
import { Link } from 'react-router-dom';

export const NewsItem: React.FC<{ news: FeedItem }> = ({ news }) => {
  return (
    <>
      <Grid item xs={4}>
        <Card sx={{ p: 1, height: '100%' }} variant="outlined">
          <Typography variant="subtitle2">{news.time}</Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ p: 1, height: '100%' }} variant="outlined">
          <Typography variant="subtitle2">
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`${news.id}`}>
              {news.title}
            </Link>
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ p: 1, height: '100%' }} variant="outlined">
          <Typography variant="subtitle2">{news.domain}</Typography>
        </Card>
      </Grid>
    </>
  );
};
