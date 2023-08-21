import { PinOutlineIcon, PinSolidIcon } from '.'

export interface Article {
  article: string
  views: number
  rank?: number
}

export interface ArticleListItemProps extends Article {
  pinned?: boolean
  onClickPin: (article: Article) => void
}

export const ArticleListItem = ({
  article,
  rank,
  pinned = false,
  views = 0,
  onClickPin,
}: ArticleListItemProps) => {
  return (
    <div className="flex items-center rounded-xl border border-neutral-300 p-6 [&:not(:last-child)]:mb-5">
      {rank && <div className="mr-5 w-6 font-serif text-neutral-500">{rank.toLocaleString()}</div>}
      <div className="mr-5 font-serif font-medium text-neutral-900">
        {article.replaceAll('_', ' ')}
      </div>
      <div className="ml-auto flex-shrink-0 text-right text-sm text-neutral-600">
        {views.toLocaleString()} views
      </div>
      <button
        className="ml-5 text-marigold-600 hover:text-marigold-500"
        onClick={() => onClickPin({ article, views })}
      >
        {pinned ? <PinSolidIcon /> : <PinOutlineIcon />}
      </button>
    </div>
  )
}
