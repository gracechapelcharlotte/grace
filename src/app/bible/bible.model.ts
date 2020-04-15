export interface BibleModel {
  books: BibleBook[];
}

export interface BibleBook {
  name: string;
  chapters: Chapter[];
}

export interface Chapter {
  chapter: number;
  verses: Verse[];
}

export interface Verse {
  chapter: number;
  text: string;
  verse: number;
  name: string;
}
