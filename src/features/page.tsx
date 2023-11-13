export function Page({ children }) {
  return (
    <section className="bg-white border h-[66rem] w-[51rem] break-before-page mx-auto print:w-full print:h-screen print:border-none overflow-hidden">
      {children}
    </section>
  );
}
