import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

import {
  ArticleListItem,
  CalendarIcon,
  ChevronIcon,
  Header,
  ListIcon,
  Pagination,
} from './components'
import { YESTERDAY, formatDateForAPI } from './utilities'
import { getArticles } from './api'
import { ArticleListItemProps } from './components/article-list-item'

export const App = () => {
  const [date, setDate] = useState(YESTERDAY)
  const [articlesPerPage, setArticlesPerPage] = useState(10)
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

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
                maxDate={YESTERDAY}
                selected={date}
                customInput={
                  <button className="mb-6 flex items-center rounded-full md:mb-0 md:p-3 md:hover:bg-neutral-100">
                    <div className="bg-avocado-200 mr-6 flex rounded-full p-3 text-green-500 ">
                      <CalendarIcon />
                    </div>
                    <div className="pr-4">
                      <div className="flex items-center text-xs uppercase text-neutral-500">
                        Date <ChevronIcon className="ml-1" />
                      </div>
                      <div className="text-neutral-900">
                        {date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </button>
                }
                previousMonthButtonLabel={<ChevronIcon className="rotate-90" />}
                nextMonthButtonLabel={<ChevronIcon className="-rotate-90" />}
                onChange={(date: Date) => setDate(date)}
                formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                popperClassName="bg-neutral-000 shadow-calendar rounded-3xl px-4 py-8 z-10"
                renderCustomHeader={({
                  monthDate,
                  decreaseMonth,
                  increaseMonth,
                  nextMonthButtonDisabled,
                }) => {
                  return (
                    <div className="mb-8 flex items-center justify-between">
                      <button onClick={() => decreaseMonth()}>
                        <ChevronIcon className="rotate-90" />
                      </button>
                      {monthDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                      {nextMonthButtonDisabled ? (
                        // hack for justify-between
                        <div />
                      ) : (
                        <button onClick={() => increaseMonth()}>
                          <ChevronIcon className="-rotate-90" />
                        </button>
                      )}
                    </div>
                  )
                }}
              />
            </div>
            <div className="md:pl-9">
              <div className="mb-6 flex items-center rounded-full md:mb-0 md:p-3 md:hover:bg-neutral-100">
                <div className="bg-marigold-200 text-marigold-500 mr-6 flex rounded-full p-3 ">
                  <ListIcon />
                </div>
                <div className="pr-4">
                  <div className="flex items-center text-xs uppercase text-neutral-500">
                    Num. Results <ChevronIcon className="ml-1" />
                  </div>
                  <div className="text-neutral-900">{articlesPerPage}</div>
                </div>
              </div>
            </div>
            {/* <div>country picker</div> */}
            <button className="text-neutral-000 hover:bg-green-500-hover w-full rounded-full bg-green-500 px-6 py-3 font-medium md:ml-auto md:max-w-[160px]">
              Search
            </button>
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
