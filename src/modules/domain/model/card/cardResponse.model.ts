export interface CardsResponse {
    entries: CardResponse[];
}

export interface CardResponse {
  meta: Meta;
  fields: Fields;
}

export interface Fields {
  image: Image;
}

export interface Image {
  url: string;
  tags: any[];
  uuid: string;
  title: string;
  alt_text: null;
  description: null;
  content_type: string;
}

export interface Meta {
  name: string;
  slug: string;
  tags: any[];
  type: string;
  uuid: string;
  space: string;
  author: {};
  locale: string;
  excerpt: string;
  private: boolean;
  targets: any[];
  category: null;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  version_type: string;
  category_name: null;
  category_slug: null;
  unpublished_at: null;
  available_locales: string[];
}
