export default function ArticleDetail({
  params,
}: {
  params: { articleId: string };
}) {
  return <h1>Details about article {params.articleId}</h1>;
}
