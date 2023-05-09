import React from "react";

function APICard({ api }) {
  return (
    <section className="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 px-2 mb-4 md:mx-2 p-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 p-6 flex flex-col lg:h-56" role="listitem">
      <main className="flex-1 flex md:px-4">
        <section className="flex-auto">
          <h2 className="text-lg font-bold mb-2">{api.API}</h2>
          <p className="mb-2">{api.Description}</p>
        </section>
        <aside className="flex-none text-md text-gray-400 md:pl-2">
          <p className="mb-1"><small>Auth: {api.Auth}</small></p>
          <p><small>{api.Category}</small></p>
        </aside>
      </main>
      <footer className="mt-auto text-center">
        <a href={api.Link} target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors duration-300" aria-label={`Go to ${api.API} API`}>Go to API</a>
      </footer>
    </section>
  )
}

export default APICard;
