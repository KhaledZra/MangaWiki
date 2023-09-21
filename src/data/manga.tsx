export interface Manga {
  id: number
  title: string
  slug: string
  cover: string
  synopsis: string
  chapters: Chapters
  genres: string[]
}

export interface Chapters {
  total: string
  lang: string
}
