interface SearchButtonProps {
  children: string
  onClick: () => void
}
export const SearchButton = ({ children, onClick }: SearchButtonProps) => (
  <button
    onClick={onClick}
    className="w-full rounded-full bg-green-500 px-6 py-3 font-medium text-neutral-000 hover:bg-green-500-hover md:ml-auto md:max-w-[160px]"
  >
    {children}
  </button>
)
