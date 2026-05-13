import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBookInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_book_infos';
  info: {
    displayName: 'book-info';
    icon: 'book';
  };
  attributes: {
    language: Schema.Attribute.String;
    pages: Schema.Attribute.Integer;
    publisher: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.book-info': SharedBookInfo;
    }
  }
}
