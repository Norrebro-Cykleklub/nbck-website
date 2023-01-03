interface ContentfulDocument {
  id: string;
  identifier: string;
  title: string;
  headline: string;
  text: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    raw: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json?: any;
}

interface ContentfulText {
  id: string;
  contentfulid: number;
  text_: {
    text_: string;
  };
}

interface _InstagramPost {
  id: string;
  media_type: 'CAROUSEL_ALBUM' | 'IMAGE' | 'VIDEO';
  media_url: string;
  username: string;
  timestamp: string;
  caption: string;
  permalink: string;
}

interface InstagramPost extends _InstagramPost {
  children?: _InstagramPost[];
}

interface ContentfulInstragramFeed {
  childrenContentfulInstagramFeedFeedJsonNode: InstagramPost[];
}

type AllContentfulDocuments = Edges<ContentfulDocument>;
type AllContentfulText = Edges<ContentfulText>;
type AllContentfulInstagramFeed = Edges<ContentfulInstragramFeed>;
