import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 11576,
  title: 'per fetch',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-01-09T10:01'),
};

export const sampleWithPartialData: IPost = {
  id: 3965,
  title: 'tingle',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-01-09T08:08'),
};

export const sampleWithFullData: IPost = {
  id: 13560,
  title: 'shakily',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-01-09T14:38'),
};

export const sampleWithNewData: NewPost = {
  title: 'yell upon since',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-01-09T18:38'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
