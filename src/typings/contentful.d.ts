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

type AllContentfulDocuments = Edges<ContentfulDocument>;
type AllContentfulText = Edges<ContentfulText>;
