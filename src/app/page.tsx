import { Page } from "@/features/page";

export default function Home() {
  return (
    <main className="p-24 print:p-0 bg-gray-50 print:bg-none h-max print:h-min space-y-12 print:space-y-0">
      <Page>
        <div className="bg-red-500 text-white p-6">
          <h1 className="text-2xl">Testing</h1>
        </div>
      </Page>
      <Page>Gerald</Page>
    </main>
  );
}
