import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { ChevronIcon } from './icon/chevron'

export const Pagination = (props: ReactPaginateProps) => {
  const linkClassList =
    'rounded-full border border-neutral-400 bg-neutral-000 hover:bg-neutral-300 w-10 h-10 flex items-center justify-center'

  return (
    <ReactPaginate
      // pass all props through, but everything below we want as overrides
      {...props}
      // look into why important needed here, shouldn't be
      activeLinkClassName="!bg-avocado-300 !hover:bg-avocado-300 !text-green-500 !border-avocado-300 cursor-default"
      containerClassName="flex justify-center items-center text-sm text-neutral-900 pb-20 mt-10"
      disabledLinkClassName="bg-neutral-400 hover:bg-neutral-400 cursor-auto text-neutral-600 border-neutral-400"
      marginPagesDisplayed={1}
      nextClassName="ml-5"
      nextLabel={<ChevronIcon className="-rotate-90" />}
      nextLinkClassName={linkClassList}
      pageClassName="mx-1"
      pageLinkClassName={linkClassList}
      pageRangeDisplayed={4}
      previousClassName="mr-5"
      previousLabel={<ChevronIcon className="rotate-90" />}
      previousLinkClassName={linkClassList}
      renderOnZeroPageCount={null}
    />
  )
}
