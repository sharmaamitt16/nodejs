export default function ArticleDetail({
  params,
}: {
  params: { articleId: string; reviewId: string };
}) {
  return (
    <h1>
      Review {params.reviewId} for article {params.articleId}
    </h1>
  );
}
