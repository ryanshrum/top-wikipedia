import {
  ArticleListItem,
  CalendarIcon,
  ChevronIcon,
  Header,
  ListIcon,
  Pagination,
} from './components'

export const App = () => {
  return (
    <div className="h-screen bg-neutral-100">
      <div className="shadow-blunt bg-neutral-000 h-16" />
      <div className="md:px-16">
        <div className="mx-auto h-full max-w-[800px]">
          <Header>Top Wikipedia articles</Header>

          {/* form controls */}
          <div className="bg-neutral-000 shadow-card mb-6 p-6 md:flex md:rounded-full md:p-4">
            <div className="flex border-neutral-300 md:border-r md:pr-9">
              <div className="mb-6 flex items-center rounded-full md:mb-0 md:p-3 md:hover:bg-neutral-100">
                <div className="bg-avocado-200 text-green-500m mr-6 flex rounded-full p-3 ">
                  <CalendarIcon />
                </div>
                <div className="pr-4">
                  <div className="flex items-center text-xs uppercase text-neutral-500">
                    Date <ChevronIcon className="ml-1" />
                  </div>
                  <div className="text-neutral-900">January 12, 2023</div>
                </div>
              </div>
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
                  <div className="text-neutral-900">100</div>
                </div>
              </div>
            </div>
            {/* <div>country picker</div> */}
            <button className="text-neutral-000 w-full rounded-full bg-green-500 px-6 py-3 font-medium md:ml-auto md:max-w-[160px]">
              Search
            </button>
          </div>

          {/* article list */}
          <div className="md:shadow-card bg-neutral-000 mb-10 p-6 md:rounded-2xl">
            <ArticleListItem
              order={1}
              title="Title of the article"
              views={500123211}
            />
          </div>

          {/* pagination */}
          <Pagination pageCount={5} />
        </div>
      </div>
    </div>
  )
}
