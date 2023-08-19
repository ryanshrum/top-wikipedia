import React from 'react'

export const App = () => {
  return (
    <div className="h-screen bg-neutral-100">
      <div className="shadow-blunt bg-neutral-000 h-16" />
      <div className="md:px-16">
        <div className="mx-auto h-full max-w-[800px]">
          <div className="py-8 text-center md:py-14">
            <h1 className="font-serif text-2xl font-normal tracking-[-0.56px] text-neutral-900 md:text-4xl md:tracking-[-0.8px]">
              Top Wikipedia articles
            </h1>
          </div>
          <div className="bg-neutral-000 shadow-card mb-6 p-6 md:flex md:justify-between md:rounded-full">
            <div className="border-neutral-300 md:border-r md:pr-9">
              <div className="md:hover:bg-neutral-100">
                <div className="bg-avocado-200 rounded-full p-3">i</div>
                date picker
              </div>
            </div>
            <div>qty picker</div>
            <div>country picker</div>
            <button className="text-neutral-000 w-full rounded-full bg-green-500 px-6 py-3 md:ml-auto">
              Search
            </button>
          </div>

          <div className="md:shadow-card bg-neutral-000 p-6 md:rounded-2xl">
            <div className="mb-5 flex items-center rounded-xl border border-neutral-300 p-6">
              <div className="w-5 font-serif text-neutral-500">1</div>
              <div className="mx-5 font-serif font-medium">
                Title of the article Title of the article Title of the article
              </div>
              <div className="ml-auto flex-shrink-0 text-right text-sm text-neutral-600">
                500,123,211 views
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
