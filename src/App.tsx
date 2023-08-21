import { useEffect, useMemo, useState } from 'react'
import { getArticles } from './api'
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
  const storedPinnedArticles = JSON.parse(
    localStorage.getItem('pinnedArticles') || ''
  )
  const [articles, setArticles] = useState([])
  const [articlesPerPage, setArticlesPerPage] = useState(ARTICLES_PER_PAGE[3])
  const [currentPage, setCurrentPage] = useState(0)
  const [date, setDate] = useState(YESTERDAY)
  const [pinnedArticles, setPinnedArticles] = useState<Article[]>(
    storedPinnedArticles || []
  )

  const pagesCount = Math.ceil(articles.length / articlesPerPage)
  const offset = currentPage * articlesPerPage
  const currentPageArticles = useMemo(() => {
    return articles.slice(offset, offset + articlesPerPage)
  }, [articles, articlesPerPage, offset])

  useEffect(() => {
    setCurrentPage(0)
    const formattedDate = formatDateForAPI(date)
    getArticles(formattedDate).then((response) => {
      setArticles(response.items[0].articles)
    })
  }, [date])

  useEffect(() => {
    localStorage.setItem('pinnedArticles', JSON.stringify(pinnedArticles))
  }, [pinnedArticles])

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const handleOnClickPin = (article: Article) => {
    if (pinnedArticles.some((a) => a.article === article.article)) {
      setPinnedArticles(
        pinnedArticles.filter((a) => a.article !== article.article)
      )
    } else {
      setPinnedArticles([...pinnedArticles, article])
    }
  }

  return (
    <div className="bg-neutral-100">
      <div className="shadow-blunt bg-neutral-000 h-16" />
      <div className="md:px-16">
        <div className="mx-auto h-full max-w-[948px]">
          <Header>Top Wikipedia articles</Header>

          {/* form controls */}
          <div className="bg-neutral-000 shadow-card p-6 md:flex md:rounded-full md:p-4">
            <div className="flex border-neutral-300 md:border-r md:pr-9 ">
              <DatePicker
                date={date}
                onChange={(date: Date) => setDate(date)}
              />
            </div>
            <div className="md:pl-9">
              <Dropdown
                selected={articlesPerPage}
                options={ARTICLES_PER_PAGE}
                onClick={(selected: number) => setArticlesPerPage(selected)}
              />
            </div>
            {/* <Country picker /> */}
            <SearchButton onClick={() => console.log('search')}>
              Search
            </SearchButton>
          </div>
          {pinnedArticles.length > 0 && (
            <Card>
              {pinnedArticles.map(({ article, views }: Article) => (
                <ArticleListItem
                  key={article}
                  article={article}
                  views={views}
                  pinned
                  onClickPin={(article: Article) => handleOnClickPin(article)}
                />
              ))}
            </Card>
          )}
          {/* article list */}
          {currentPageArticles.length > 0 && (
            <>
              <Card>
                {currentPageArticles.map(
                  ({ article, rank, views }: ArticleListItemProps) => {
                    const isPinned = pinnedArticles.some(
                      (a) => a.article === article
                    )

                    return (
                      <ArticleListItem
                        key={article}
                        rank={rank}
                        article={article}
                        views={views}
                        pinned={isPinned}
                        onClickPin={(article: Article) =>
                          handleOnClickPin(article)
                        }
                      />
                    )
                  }
                )}
              </Card>
              {/* pagination */}
              <Pagination
                pageCount={pagesCount}
                forcePage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
