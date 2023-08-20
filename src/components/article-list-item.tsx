export interface ArticleListItemProps {
  rank: number
  article: string
  views: number
}

export const ArticleListItem = ({
  rank,
  article,
  views = 0,
}: ArticleListItemProps) => {
  return (
    <div className="flex items-center rounded-xl border border-neutral-300 p-6 [&:not(:last-child)]:mb-5">
      <div className="w-5 font-serif text-neutral-500">{rank}</div>
      <div className="mx-5 font-serif font-medium text-neutral-900">
        {article.replaceAll('_', ' ')}
      </div>
      <div className="ml-auto flex-shrink-0 text-right text-sm text-neutral-600">
        {views.toLocaleString()} views
      </div>
    </div>
  )
}
