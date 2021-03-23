export default function Footer() {
  return (
    <div>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Interested?</span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a
            href="https://form.typeform.com/to/jAaabLbi"
            data-mode="drawer_right"
            data-submit-close-delay="0"
            target="_blank"
            className="typeform-share flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700"
          >
            Hop on the beta list!
          </a>
        </div>
      </div>
    </div>
  );
}
