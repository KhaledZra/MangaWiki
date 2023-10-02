export interface Manga {
  id: number
  title: string
  slug: string
  cover: string
  synopsis: string
  chapters: Chapters
  genres: string[]
  langs: string[]

  score: number
  published: string
  status: string
  type: string
}

export interface Chapters {
  total: string
  lang: string
}


export interface MangaVerse {
  code: number
  data: MangaVerseData[]
}

export interface MangaVerseData {
  id: number
  title: string
  sub_title: string
  status: string
  thumb: string
  summary: string
  authors: string[]
  genres: string[]
  nsfw: boolean
  type: string
}