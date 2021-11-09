export default function HackclubWebring() {
  return (
    <div id="webring-wrapper">
      <a
        href="https://webring.hackclub.com/"
        id="previousBtn"
        className="webring-anchor"
        title="Previous"
      >
        ‹
      </a>
      <a
        href="https://webring.hackclub.com/"
        className="webring-logo"
        title="Hack Club Webring"
      ></a>
      <a
        href="https://webring.hackclub.com/"
        id="nextBtn"
        className="webring-anchor"
        title="Next"
      >
        ›
      </a>
      <script src="https://webring.hackclub.com/public/embed.min.js"></script>
    </div>
  )
}
