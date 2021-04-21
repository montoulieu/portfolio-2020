import {
  Github,
  Twitter,
  Linkedin,
  PhoneFill,
  EnvelopeFill,
  Link,
} from "react-bootstrap-icons";

export default function Home() {
  const contactLinks = [
    {
      label: "Phone",
      icon: PhoneFill,
      url: "tel:2392904002",
      color: "green",
    },
    {
      label: "Email",
      icon: EnvelopeFill,
      url: "mailto:pieter@montoulieu.dev?subject=Hello, Pieter",
      color: "red",
    },
    {
      label: "Github",
      icon: Github,
      url: "https://github.com/montoulieu",
      color: "yellow",
    },
    {
      label: "Linkedin",
      icon: Linkedin,
      url: "https://linkedin.com/montoulieu",
      color: "fuchsia",
    },
    {
      label: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/_montoulieu",
      color: "blue",
    },
    {
      label: "Links",
      icon: Link,
      url: "https://links.montoulieu.dev",
      color: "purple",
    },
  ];

  return (
    <div className="mx-auto flex flex-col justify-center overflow-hidden h-full relative">
      <div className="mx-auto">
        <div className="relative ">
          <div className="phone w-64 border-4 border-gray-500 rounded-3xl bg-black p-3 relative z-10">
            <div className="bg-gray-900 p-3 rounded-3xl">
              <h1 className="text-teal-400 font-bold text-4xl tracking-wide mb-4">Contact</h1>
              {contactLinks && (
                <ul className="grid grid-cols-2 grid-row-3 gap-2 rounded-3xl">
                  {contactLinks.map((link) => (
                    <li
                      className={`bg-${link.color}-400 border-b-8 border-${link.color}-600 transform transition-all hover:-translate-y-1 hover:z-30 hover:border-none duration-200 rounded-3xl text-center text-2xl py-2`}
                      key={link.label}
                    >
                      <a
                        href={link.url}
                        className="flex flex-col items-center p-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <link.icon className="" size="32" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <svg className="contact-fingers" width="150" height="301" viewBox="0 0 150 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="21.7649" y="271.325" width="75" height="97.5095" rx="37.5" transform="rotate(-75 21.7649 271.325)" fill="#34d399" stroke="black" strokeWidth="6"/>
            <path d="M97.6225 233C88.3774 245.471 84.3469 254.404 86.6225 275" stroke="black" strokeWidth="3"/>
            <rect x="14.9037" y="171.807" width="75" height="114.966" rx="37.5" transform="rotate(-75 14.9037 171.807)" fill="#f87171" stroke="black" strokeWidth="6"/>
            <path d="M113.622 138C104.377 150.471 100.347 159.404 102.622 180" stroke="black" strokeWidth="3"/>
            <rect x="4.47065" y="76.6911" width="75" height="115.414" rx="37.5" transform="rotate(-75 4.47065 76.6911)" fill="#a78bfa" stroke="black" strokeWidth="6"/>
            <path d="M103.802 41.9999C94.5566 54.4707 90.5261 63.4044 92.8017 83.9999" stroke="black" strokeWidth="3"/>
          </svg>

          <svg className="contact-hand" width="1338" height="1302" viewBox="0 0 1338 1302" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M281.451 593.309L279.363 595.262L281.213 597.442L1034.21 1484.44L1035.35 1485.78L1037.08 1485.44L1443.58 1405.94L1448.98 1404.89L1445.16 1400.92L487.162 404.92L485.111 402.788L482.951 404.809L281.451 593.309Z" fill="#34d399" stroke="black" strokeWidth="6"/>
            <rect x="279.454" y="648.859" width="372.866" height="349.59" rx="113" transform="rotate(-133.658 279.454 648.859)" fill="#e879f9" stroke="black" strokeWidth="6"/>
            <mask id="path-3-outside-1" maskUnits="userSpaceOnUse" x="396.006" y="73.7686" width="131" height="310" fill="black">
              <rect fill="white" x="396.006" y="73.7686" width="131" height="310"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M420.117 85.0736C403.972 94.1457 398.239 114.588 407.311 130.732L444.725 197.313C443.824 199.5 443.107 201.798 442.596 204.194L415.817 329.89C411.26 351.28 424.906 372.315 446.296 376.872C467.686 381.429 488.721 367.783 493.278 346.393L520.057 220.697C520.984 216.348 521.158 212.013 520.667 207.828C521.308 201.238 520.009 194.393 516.52 188.183L465.775 97.8792C456.703 81.7349 436.261 76.0016 420.117 85.0736Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M420.117 85.0736C403.972 94.1457 398.239 114.588 407.311 130.732L444.725 197.313C443.824 199.5 443.107 201.798 442.596 204.194L415.817 329.89C411.26 351.28 424.906 372.315 446.296 376.872C467.686 381.429 488.721 367.783 493.278 346.393L520.057 220.697C520.984 216.348 521.158 212.013 520.667 207.828C521.308 201.238 520.009 194.393 516.52 188.183L465.775 97.8792C456.703 81.7349 436.261 76.0016 420.117 85.0736Z" fill="#fbbf24"/>
            <path d="M407.311 130.732L402.08 133.671H402.08L407.311 130.732ZM420.117 85.0736L417.177 79.8429V79.8429L420.117 85.0736ZM444.725 197.313L450.273 199.599L451.381 196.909L449.956 194.374L444.725 197.313ZM442.596 204.194L448.465 205.445L442.596 204.194ZM415.817 329.89L409.949 328.64L415.817 329.89ZM446.296 376.872L447.546 371.004H447.546L446.296 376.872ZM493.278 346.393L487.41 345.143L493.278 346.393ZM520.057 220.697L514.189 219.447L520.057 220.697ZM520.667 207.828L514.695 207.247L514.633 207.887L514.708 208.527L520.667 207.828ZM516.52 188.183L511.289 191.122L516.52 188.183ZM465.775 97.8792L471.006 94.9399L465.775 97.8792ZM412.542 127.793C405.093 114.537 409.801 97.7531 423.056 90.3044L417.177 79.8429C398.144 90.5383 391.385 114.638 402.08 133.671L412.542 127.793ZM449.956 194.374L412.542 127.793L402.08 133.671L439.494 200.252L449.956 194.374ZM448.465 205.445C448.899 203.405 449.509 201.453 450.273 199.599L439.178 195.027C438.139 197.547 437.314 200.192 436.728 202.944L448.465 205.445ZM421.685 331.14L448.465 205.445L436.728 202.944L409.949 328.64L421.685 331.14ZM447.546 371.004C429.397 367.137 417.819 349.29 421.685 331.14L409.949 328.64C404.701 353.271 420.415 377.493 445.046 382.74L447.546 371.004ZM487.41 345.143C483.543 363.292 465.695 374.87 447.546 371.004L445.046 382.74C469.677 387.988 493.898 372.274 499.146 347.643L487.41 345.143ZM514.189 219.447L487.41 345.143L499.146 347.643L525.925 221.947L514.189 219.447ZM514.708 208.527C515.123 212.07 514.977 215.746 514.189 219.447L525.925 221.947C526.99 216.949 527.192 211.956 526.626 207.129L514.708 208.527ZM511.289 191.122C514.158 196.228 515.221 201.839 514.695 207.247L526.639 208.409C527.395 200.637 525.86 192.558 521.75 185.244L511.289 191.122ZM460.544 100.819L511.289 191.122L521.75 185.244L471.006 94.9399L460.544 100.819ZM423.056 90.3044C436.312 82.8557 453.096 87.563 460.544 100.819L471.006 94.9399C460.31 75.9067 436.211 69.1475 417.177 79.8429L423.056 90.3044Z" fill="black" mask="url(#path-3-outside-1)"/>
            <rect x="3.67423" y="76.1187" width="75" height="136.944" rx="37.5" transform="rotate(-75 3.67423 76.1187)" fill="#60a5fa" stroke="black" strokeWidth="6"/>
          </svg>
          <div class="block warp-drive">
            <div class="warp-wrap">
                <div class="warp-side warp-right"></div>
                <div class="warp-side warp-left"></div>
                <div class="warp-side warp-top"></div>
                <div class="warp-side warp-bottom"></div>
                <div class="warp-side warp-back"></div>
            </div>
            <div class="warp-wrap">
                <div class="warp-side warp-right"></div>
                <div class="warp-side warp-left"></div>
                <div class="warp-side warp-top"></div>
                <div class="warp-side warp-bottom"></div>
                <div class="warp-side warp-back"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
