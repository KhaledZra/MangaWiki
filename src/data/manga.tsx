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
