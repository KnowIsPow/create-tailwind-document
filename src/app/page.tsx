import { Page } from "@/features/page";

export default function Home() {
  return (
    <main className="p-24 print:p-0 bg-gray-50 print:bg-none h-max print:h-min space-y-12 print:space-y-0">
      {[Cover, Stats, Stats].map((Content, idx, arr) => (
        <>
          <Page key={idx}>
            <Content />
          </Page>
          <div className="print:hidden mx-auto text-center text-gray-400">
            {idx < arr.length - 1 && `--- ${`Page ${idx + 2}`} ---`}
          </div>
        </>
      ))}
    </main>
  );
}

function Cover() {
  return (
    <div className="bg-blue-500 text-white p-6 h-full flex justify-center">
      <div className="text-center mt-64">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Fantastic Cover Page
        </h1>
        <p className="mt-6 text-base leading-7 text-blue-50">
          Start something great with TailwindCSS document editing.
        </p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Craft sleek, responsive documents with TailwindCSS for an enhanced
            user experience.
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Effortlessly design professional, visually stunning PDF documents
            with TailwindCSS precision, enhancing your productivity and ensuring
            consistently high-quality outputs for every project.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
              95%
            </p>
            <div className="sm:w-80 sm:shrink">
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                Product-market Fit
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Llamas prefer our layout designs for their document creation.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              $12.3 trillion
            </p>
            <div className="sm:w-80 sm:shrink">
              <p className="text-lg font-semibold tracking-tight text-white">
                We&apos;re proud to be open source
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                Our users have collectively saved the equivalent of the GDP of a
                small galaxy in time and resources.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              506,241
            </p>
            <div className="sm:w-80 sm:shrink">
              <p className="text-lg font-semibold tracking-tight text-white">
                Tunes Whistled to Date
              </p>
              <p className="mt-2 text-base leading-7 text-indigo-200">
                Whistling while working increases document creativity by 58%.
                Our users have whistled over 500,000 tunes while creating
                documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
