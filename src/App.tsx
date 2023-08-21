import { useEffect, useState } from 'react'
import { getArticles } from './api'
import {
  ArticleListItem,
  ArticleListItemProps,
  DatePicker,
  Dropdown,
  Header,
  Pagination,
  SearchButton,
} from './components'
import { YESTERDAY, ARTICLES_PER_PAGE } from './constants'
import { formatDateForAPI } from './utilities'

export const App = () => {
  const [articles, setArticles] = useState([])
  const [articlesPerPage, setArticlesPerPage] = useState(ARTICLES_PER_PAGE[3])
  const [currentPage, setCurrentPage] = useState(0)
  const [date, setDate] = useState(YESTERDAY)

  const pagesCount = Math.ceil(articles.length / articlesPerPage)
  const offset = currentPage * articlesPerPage
  const currentPageArticles = articles.slice(offset, offset + articlesPerPage)

  useEffect(() => {
    handlePageChange({ selected: 0 })
    const formattedDate = formatDateForAPI(date)
    getArticles(formattedDate).then((response) => {
      setArticles(response.items[0].articles)
    })
  }, [date])

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  return (
    <div className="bg-neutral-100">
      <div className="shadow-blunt bg-neutral-000 h-16" />
      <div className="md:px-16">
        <div className="mx-auto h-full max-w-[800px]">
          <Header>Top Wikipedia articles</Header>

          {/* form controls */}
          <div className="bg-neutral-000 shadow-card mb-6 p-6 md:flex md:rounded-full md:p-4">
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

          {/* article list */}
          {currentPageArticles.length > 0 && (
            <div className="md:shadow-card bg-neutral-000 mb-10 p-6 md:rounded-2xl">
              {currentPageArticles.map(
                ({ article, rank, views }: ArticleListItemProps) => (
                  <ArticleListItem
                    key={article}
                    rank={rank}
                    article={article}
                    views={views}
                  />
                )
              )}
            </div>
          )}

          {/* pagination */}
          <Pagination
            pageCount={pagesCount}
            forcePage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
