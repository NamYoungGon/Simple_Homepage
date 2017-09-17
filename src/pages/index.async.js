import asyncRoute from 'lib/asyncRoute';

export const Introduction = asyncRoute(() => import('./Introduction/Introduction'));
export const Gallery = asyncRoute(() => import('./Gallery/Gallery'));
export const FreeBoard = asyncRoute(() => import('./FreeBoard/FreeBoard'));
export const TalkRoom = asyncRoute(() => import('./TalkRoom/TalkRoom'));
export const Post = asyncRoute(() => import('./Post/Post'));
export const Posts = asyncRoute(() => import('./Post/Posts'));