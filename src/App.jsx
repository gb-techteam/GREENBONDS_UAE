const COMMUNITY_NUMBERS = [
  '919961339296',
  '918129053738',
  '918891833738',
  '919249551670',
]
const COMMUNITY_MESSAGE = 'How can i join greenbonds free traders community?'
const COMMUNITY_INDEX_KEY = 'greenbonds-community-index'

function nextCommunityUrl() {
  const stored = Number(localStorage.getItem(COMMUNITY_INDEX_KEY) || '0')
  const index = Number.isFinite(stored) ? stored % COMMUNITY_NUMBERS.length : 0
  const next = (index + 1) % COMMUNITY_NUMBERS.length
  localStorage.setItem(COMMUNITY_INDEX_KEY, String(next))

  const text = encodeURIComponent(COMMUNITY_MESSAGE)
  return `https://wa.me/${COMMUNITY_NUMBERS[index]}?text=${text}`
}

function joinCommunity(event) {
  event.preventDefault()
  window.open(nextCommunityUrl(), '_blank', 'noopener,noreferrer')
}

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
    <main className="flex h-svh w-full items-center justify-center bg-black text-white max-md:px-5">
      <div className="flex h-[84vh] w-[68vw] flex-col max-lg:h-[86svh] max-lg:w-[82vw] max-md:h-auto max-md:w-full">
        <div className="hatch shrink-0" />

        <section className="relative flex min-h-0 flex-1 items-center justify-center border border-white/10 px-6 max-md:flex-none max-md:px-6 max-md:py-11">
          <Corners />

          <div className="mx-auto flex w-full flex-col items-center text-center">
            <p className="mb-6 flex items-center gap-2 text-sm font-medium text-white max-md:mb-5">
              <Mark />
              Greenbonds
            </p>

            <div className="title-fit w-full">
              <h1 className="headline text-balance text-white">
                Greenbonds International UAE
              </h1>
            </div>

            <p className="subhead mt-4 max-w-md text-balance text-white/75 max-md:mt-4 max-md:max-w-[17.5rem]">
              A practical platform for green bonds and sustainable investing in
              the UAE. Launching soon.
            </p>

            <a
              href={`https://wa.me/${COMMUNITY_NUMBERS[0]}?text=${encodeURIComponent(COMMUNITY_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={joinCommunity}
              className="mt-7 bg-white px-3.5 py-2 text-center text-[13px] font-medium text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-md:mt-7 max-md:px-5 max-md:py-2.5"
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
