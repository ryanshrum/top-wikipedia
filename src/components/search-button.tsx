interface SearchButtonProps {
  children: string
  onClick: () => void
}
export const SearchButton = ({ children, onClick }: SearchButtonProps) => (
  <button className="text-neutral-000 hover:bg-green-500-hover w-full rounded-full bg-green-500 px-6 py-3 font-medium md:ml-auto md:max-w-[160px]">
    {children}
  </button>
)
