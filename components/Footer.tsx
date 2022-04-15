import clsx from 'clsx'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex-shrink-0 p-7 text-center font-bold text-faded-light text-sm opacity-60 flex flex-col gap-2 items-center">
      <p className="px-2 py-1 rounded-lg bg-yellow-400 bg-opacity-20 text-white">
        Made by Benjamin Ashbaugh. Copyright &copy; {new Date().getFullYear()}
      </p>
      <p className="inline py-1">
        This site is a work-in-progress &middot;&nbsp;
        <a
          href="https://github.com/bashbaugh/sitev2"
          className="font-extrabold"
        >
          source
        </a>
      </p>
      <p className="inline py-1">
        <a
          href="https://www.buymeacoffee.com/bnjmn"
          className="font-extrabold"
        >
          ☕️ Buy me a coffee
        </a>
      </p>

      {/* <div id="webring-wrapper">
        <a href="https://webring.hackclub.com/" id="previousBtn" className="webring-anchor" title="Previous">‹</a>
        <a href="https://webring.hackclub.com/" className="webring-logo" title="Hack Club Webring"></a>
        <a href="https://webring.hackclub.com/" id="nextBtn" className="webring-anchor" title="Next">›</a>
        <script src="https://webring.hackclub.com/public/embed.min.js"></script>
      </div> */}
    </div>
  )
}
