import { useEffect, useMemo, useState } from 'react'
import { getMostViewedArticles } from './api'
import {
  Article,
  ArticleListItem,
  ArticleListItemProps,
  Card,
  DatePicker,
  Dropdown,
  Header,
  Pagination,
  SearchButton,
} from './components'
import { YESTERDAY, ARTICLES_PER_PAGE } from './constants'
import { formatDateForAPI } from './utilities'

export const App = () => {
  // pinned articles
  const storedPinnedArticles = JSON.parse(localStorage.getItem('pinnedArticles') || '')
  const [pinnedArticles, setPinnedArticles] = useState<Article[]>(storedPinnedArticles || [])

  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  // form values
  const [articlesPerPage, setArticlesPerPage] = useState(ARTICLES_PER_PAGE[3])
  const [date, setDate] = useState(YESTERDAY)

  const pagesCount = Math.ceil(articles.length / articlesPerPage)
  const offset = currentPage * articlesPerPage
  const currentPageArticles = useMemo(() => {
    return articles.slice(offset, offset + articlesPerPage)
  }, [articles, articlesPerPage, offset])

  // initial data fetch
  useEffect(() => {
    getMostViewedArticles()
      .then((response) => {
        setArticles(response.items[0].articles)
      })
      .then(() => setCurrentPage(0))
  }, [])

  // this is a short-term solution
  useEffect(() => {
    localStorage.setItem('pinnedArticles', JSON.stringify(pinnedArticles))
  }, [pinnedArticles])

  const onClickPageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const onClickPin = (clickedArticle: Article) => {
    if (pinnedArticles.some((pinnedArticle) => pinnedArticle.article === clickedArticle.article)) {
      setPinnedArticles(
        pinnedArticles.filter((pinnedArticle) => pinnedArticle.article !== clickedArticle.article)
      )
    } else {
      setPinnedArticles([...pinnedArticles, clickedArticle])
    }
  }

  const onClickSearch = () => {
    const formattedDate = formatDateForAPI(date)
    getMostViewedArticles(formattedDate, countryCode)
      .then((response) => {
        setArticles(response.items[0].articles)
      })
      .then(() => setCurrentPage(0))
  }

  return (
    <div className="bg-neutral-100">
      <div className="h-16 bg-neutral-000 shadow-blunt" />
      <div className="md:px-16">
        <div className="mx-auto h-full max-w-[948px]">
          <Header>Top Wikipedia articles</Header>

          {/* form controls */}
          <div className="bg-neutral-000 p-6 shadow-card md:flex md:rounded-full md:p-4">
            <div className="flex border-neutral-300 md:border-r md:pr-9 ">
              <DatePicker date={date} onChange={(date: Date) => setDate(date)} />
            </div>
            <div className="md:pl-9">
              <Dropdown
                selected={articlesPerPage}
                options={ARTICLES_PER_PAGE}
                onClick={(selected: number) => setArticlesPerPage(selected)}
              />
            </div>
            {/* <Country picker /> */}
            <SearchButton onClick={onClickSearch}>Search</SearchButton>
          </div>
          {pinnedArticles.length > 0 && (
            <Card>
              {pinnedArticles.map(({ article, views }: Article) => (
                <ArticleListItem
                  key={article}
                  article={article}
                  views={views}
                  pinned
                  onClickPin={(article: Article) => onClickPin(article)}
                />
              ))}
            </Card>
          )}
          {/* article list */}
          {currentPageArticles.length > 0 && (
            <>
              <Card>
                {currentPageArticles.map(({ article, rank, views }: ArticleListItemProps) => {
                  const isPinned = pinnedArticles.some((a) => a.article === article)

                  return (
                    <ArticleListItem
                      key={article}
                      rank={rank}
                      article={article}
                      views={views}
                      pinned={isPinned}
                      onClickPin={(article: Article) => onClickPin(article)}
                    />
                  )
                })}
              </Card>
              {/* pagination */}
              <Pagination
                pageCount={pagesCount}
                forcePage={currentPage}
                onPageChange={onClickPageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
