import React from 'react';
import { createStore, createEffect } from 'effector';
import { APIgetAllComments, APIgetInitialNews } from 'api/api';

export const getNews = createEffect((id: number) => APIgetInitialNews(id).then((res) => res.data));
export const getComment = createEffect((id: number) =>
  APIgetAllComments(id).then((res) => res.data.comments)
);

export const $news = createStore([]).on(getNews.done, (state, { result }) => [...state, ...result]);
export const $comments = createStore(null).on(getComment.done, (state, { result }) => result);
