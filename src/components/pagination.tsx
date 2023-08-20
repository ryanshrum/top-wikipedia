import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { ChevronIcon } from './icon/chevron'

export const Pagination = ({
  pageCount = 0,
}: Pick<ReactPaginateProps, 'pageCount'>) => {
  const linkClassList =
    'rounded-full border border-neutral-400 bg-neutral-000 hover:bg-neutral-300 w-10 h-10 flex items-center justify-center'

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={4}
      marginPagesDisplayed={1}
      previousLabel={<ChevronIcon className="rotate-90" />}
      nextLabel={<ChevronIcon className="-rotate-90" />}
      containerClassName="flex justify-center items-center text-sm text-neutral-900"
      pageClassName="mx-1"
      previousClassName="mr-5"
      nextClassName="ml-5"
      pageLinkClassName={linkClassList}
      previousLinkClassName={linkClassList}
      nextLinkClassName={linkClassList}
      // look into why important needed here, shouldn't be
      activeLinkClassName="!bg-avocado-300 !hover:bg-avocado-300 !text-green-500 !border-avocado-300 cursor-default"
      disabledLinkClassName="bg-neutral-400 hover:bg-neutral-400 cursor-auto text-neutral-600 border-neutral-400"
      renderOnZeroPageCount={null}
    />
  )
}
