import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsArticle extends Struct.ComponentSchema {
  collectionName: 'components_components_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {
    date: Schema.Attribute.Date;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsArticleList extends Struct.ComponentSchema {
  collectionName: 'components_components_article_lists';
  info: {
    displayName: 'ArticleList';
  };
  attributes: {
    Article: Schema.Attribute.Component<'components.article', true>;
  };
}

export interface ComponentsFirstButton extends Struct.ComponentSchema {
  collectionName: 'components_components_first_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['Primary', 'Secondary', 'Outline', 'Outline Icon']
    >;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_components_info_cards';
  info: {
    displayName: 'InfoCard';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<
      ['blue', 'purple', 'grey', 'white']
    >;
    CTAButton: Schema.Attribute.Component<'components.first-button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTwoButtonCta extends Struct.ComponentSchema {
  collectionName: 'components_components_two_button_ctas';
  info: {
    displayName: 'TwoButtonCTA';
  };
  attributes: {
    FirstButton: Schema.Attribute.Component<'components.first-button', false>;
    SecondButton: Schema.Attribute.Component<'components.first-button', false>;
  };
}

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
      'components.article': ComponentsArticle;
      'components.article-list': ComponentsArticleList;
      'components.first-button': ComponentsFirstButton;
      'components.header': ComponentsHeader;
      'components.info-card': ComponentsInfoCard;
      'components.title': ComponentsTitle;
      'components.two-button-cta': ComponentsTwoButtonCta;
      'shared.book-info': SharedBookInfo;
    }
  }
}
