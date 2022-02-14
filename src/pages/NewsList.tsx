import React from 'react';
import { Box, Button, Card, Grid } from '@mui/material';
import { useStore } from 'effector-react';
import { getNews, $news } from 'store/newsStore';
import { useInView } from 'react-intersection-observer';
import { NewsItem } from 'components/NewsItem';
import { FeedItem } from 'store/model';

type TableTitles = 'title' | 'time' | 'domain';

export const NewsList = () => {
  const news = useStore($news);
  const [sortedNews, setSortedNews] = React.useState<FeedItem[] | null>(null);
  const [page, setPage] = React.useState(1);
  const [title, setTitle] = React.useState<TableTitles | null>(null);
  const [ref, inView] = useInView();

  React.useEffect(() => {
    getNews(1);
  }, []);
  React.useEffect(() => {
    setSortedNews(news);
  }, [news]);

  React.useEffect(() => {
    if (inView) {
      setPage(page + 1);
      page !== 1 && getNews(page);
    }
  }, [inView]);

  React.useEffect(() => {
    setSortedNews(sortedNews && sortedNews.sort((a, b) => (a[title] > b[title] ? 1 : -1)));
  }, [title]);

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Card sx={{ p: 1 }} variant="outlined">
            <Button onClick={() => setTitle((tab) => (tab === 'time' ? null : 'time'))}>
              Time
            </Button>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ p: 1 }} variant="outlined">
            <Button onClick={() => setTitle((tab) => (tab === 'title' ? null : 'title'))}>
              Title
            </Button>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ p: 1 }} variant="outlined">
            <Button onClick={() => setTitle((tab) => (tab === 'domain' ? null : 'domain'))}>
              Domain
            </Button>
          </Card>
        </Grid>
        {sortedNews ? (
          sortedNews.map((news) => <NewsItem key={news.id} news={news} />)
        ) : (
          <h1>LOADING.........</h1>
        )}
      </Grid>
      <div ref={ref} style={{ height: 40 }} />
    </Box>
  );
};
