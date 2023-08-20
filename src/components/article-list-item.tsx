interface ArticleListItemProps {
  order: number
  title: string
  views: number
}

export const ArticleListItem = ({
  order,
  title,
  views = 0,
}: ArticleListItemProps) => {
  return (
    <div className="mb-5 flex items-center rounded-xl border border-neutral-300 p-6">
      <div className="w-5 font-serif text-neutral-500">{order}</div>
      <div className="mx-5 font-serif font-medium text-neutral-900">
        {title}
      </div>
      <div className="ml-auto flex-shrink-0 text-right text-sm text-neutral-600">
        {views} views
      </div>
    </div>
  )
}
