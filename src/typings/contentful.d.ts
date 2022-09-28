interface ContentfulDocuments {
  id: string;
  title: string;
  headline: string;
}

type AllContentfulDocuments = Edges<ContentfulDocuments>;
