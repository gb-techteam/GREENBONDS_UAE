const COMMUNITY_URL = 'https://t.me/Volatilitysignalsgreenbonds'

function Mark() {
  return (
    <svg viewBox="0 0 3 4" className="h-5 w-[15px]" aria-hidden="true">
      <path fill="currentColor" d="M1 0H3V1H1V3L2 2H3V3L2 4V3H0V1Z" />
    </svg>
  )
}

function Corners() {
  const tick = 'pointer-events-none absolute h-2.5 w-2.5 border-white/10'
  return (
    <>
      <span className={`${tick} top-[-1px] left-[-1px] border-t border-l`} />
      <span className={`${tick} top-[-1px] right-[-1px] border-t border-r`} />
      <span className={`${tick} bottom-[-1px] left-[-1px] border-b border-l`} />
      <span className={`${tick} right-[-1px] bottom-[-1px] border-r border-b`} />
    </>
  )
}

export default function App() {
  return (
    <main className="flex h-svh w-full items-center justify-center bg-black text-white">
      <div className="flex h-[84vh] w-[68vw] flex-col">
        <div className="hatch shrink-0" />

        <section className="relative flex min-h-0 flex-1 items-center justify-center border border-white/10 px-6">
          <Corners />

          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <p className="mb-6 flex items-center gap-2 text-sm font-medium text-white">
              <Mark />
              Greenbonds
            </p>

            <h1 className="text-balance text-[1.75rem] leading-[1.2] font-semibold tracking-[-0.025em] text-white sm:text-[2.45rem]">
              Greenbonds International UAE
            </h1>

            <p className="mt-4 max-w-md text-balance text-[15px] leading-6 text-white/75">
              A practical platform for green bonds and sustainable investing in
              the UAE. Launching soon.
            </p>

            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 bg-white px-3.5 py-2 text-[13px] font-medium text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join Our Community
            </a>
          </div>
        </section>

        <div className="hatch shrink-0" />
      </div>
    </main>
  )
}
