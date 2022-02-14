import React from 'react';
import parse from 'react-html-parser';
import { Box, Typography, Card } from '@mui/material';
import { $comments, getComment } from 'store/newsStore';
import { useStore } from 'effector-react';
import { Item } from 'store/model';
import { useParams } from 'react-router-dom';

type Comment = {
  user: string;
  content: string;
  level: number;
};

export const NewsComments = () => {
  const { id } = useParams();
  const soreComments = useStore($comments);
  const [comments, setComments] = React.useState<Comment[] | null>(null);

  React.useEffect(() => {
    getComment(+id);
  }, []);

  React.useEffect(() => {
    const arrayComments = [];
    const commentsParser = (arg: Item[] | Item) => {
      if (Array.isArray(arg)) {
        arg.forEach((comment) => {
          arrayComments.push({
            user: comment.user,
            content: comment.content,
            level: comment.level,
          });
          Array.isArray(comment.comments) && commentsParser(comment.comments);
        });
      }
    };
    soreComments && commentsParser(soreComments);
    setComments(arrayComments);
  }, [soreComments]);

  return (
    <Box sx={{ mx: 2, my: 2 }}>
      <Typography variant="h4">Comments</Typography>
      {comments ? (
        comments.map((comment, idx) => (
          <Box
            key={idx}
            sx={{
              p: 2,
              ml: comment.level ? comment.level * 3 : 0,
            }}
          >
            <Card sx={{ p: 1 }} variant="outlined">
              <Typography sx={{ p: 1, mb: 1 }} variant="subtitle2">
                {comment.user}
              </Typography>
              {parse(comment.content)}
            </Card>
          </Box>
        ))
      ) : (
        <h1>LOADING.........</h1>
      )}
    </Box>
  );
};
