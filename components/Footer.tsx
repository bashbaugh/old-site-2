import clsx from 'clsx'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex-shrink-0 p-7 text-center font-bold text-faded-light text-sm opacity-50'>
      <p className='mb-3'>
        Made by Benjamin Ashbaugh. Copyright &copy; {new Date().getFullYear()}
      </p>
      <p>
        <a href='https://github.com/bashbaugh/sitev2'><u>source</u></a>
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
