import type { Project } from "@/lib/site-data";

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.id === "copyyt") {
    return (
      <div className="project-visual copyyt-visual" aria-label="Copyyt cross-device clipboard interface preview" role="img">
        <div className="browser-chrome"><i /><i /><i /><span>copyyt.psami.com</span></div>
        <div className="copy-panel copy-panel-left">
          <span className="visual-kicker">SOURCE · DESKTOP</span>
          <div className="copy-lines"><i /><i /><i /></div>
          <span className="copy-action">Copied</span>
        </div>
        <div className="transfer-line"><span>01</span><span>SYNC</span><span>02</span></div>
        <div className="copy-panel copy-panel-right">
          <span className="visual-kicker">RECEIVED · MOBILE</span>
          <div className="copy-lines"><i /><i /></div>
          <span className="copy-cursor" />
        </div>
      </div>
    );
  }

  if (project.id === "skye-health") {
    return (
      <div className="project-visual skye-visual" aria-label="PROMease clinical outcome analytics interface preview" role="img">
        <div className="clinical-nav"><strong>P</strong><i /><i /><i /><i /></div>
        <div className="clinical-content">
          <span className="visual-kicker">PATIENT OUTCOMES / LIVE</span>
          <div className="clinical-score"><span>Recovery score</span><strong>84</strong><small>+12%</small></div>
          <div className="clinical-graph"><i /><i /><i /><i /><i /><i /><i /><span /></div>
          <div className="clinical-stats"><span><b>124</b> Responses</span><span><b>18</b> Procedures</span><span><b>92%</b> Complete</span></div>
        </div>
      </div>
    );
  }

  if (project.id === "health-anchor") {
    return (
      <div className="project-visual anchor-visual" aria-label="Health Anchor clinical appointment calendar preview" role="img">
        <div className="calendar-shell">
          <div className="calendar-head"><span>CareCalendar</span><strong>May 2026</strong></div>
          <div className="calendar-grid">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <b key={`${day}-${index}`}>{day}</b>)}
            {Array.from({ length: 28 }, (_, index) => <i key={index} className={index === 16 ? "is-selected" : index === 9 || index === 22 ? "has-slot" : ""}>{index + 1}</i>)}
          </div>
          <div className="calendar-slot"><span>Next pathway</span><strong>ENT follow-up · 10:30</strong></div>
        </div>
      </div>
    );
  }

  if (project.id === "solidray") {
    return (
      <div className="project-visual solidray-visual" aria-label="Solidray digital asset exchange interface preview" role="img">
        <div className="market-top"><strong>SOLIDRAY</strong><span>MARKETS</span><span>EXCHANGE</span><span>ACADEMY</span></div>
        <div className="market-body">
          <div className="market-price"><span>SRAY / USDT</span><strong>0.8421</strong><small>+4.82%</small></div>
          <div className="market-chart"><svg viewBox="0 0 400 150" preserveAspectRatio="none"><path d="M0 130 C35 110 45 125 78 88 S125 118 158 72 S210 96 238 53 S290 68 322 31 S365 49 400 12" /></svg></div>
          <div className="market-order"><span>Buy SRAY</span><span>Limit order</span><strong>Connect wallet</strong></div>
        </div>
      </div>
    );
  }

  if (project.id === "rie-ticket") {
    return (
      <div className="project-visual ticket-visual" aria-label="Rie Ticket event purchase interface preview" role="img">
        <div className="ticket-poster">
          <span className="visual-kicker">LIVE / LAGOS</span>
          <strong>RIE<br />NIGHTS</strong>
          <span className="poster-date">24 · 08</span>
        </div>
        <div className="ticket-stub">
          <div><span>ADMIT</span><strong>01</strong></div>
          <div className="barcode" />
          <span className="status-chip">Payment verified</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual billza-visual" aria-label="Billza utility payment dashboard preview" role="img">
      <div className="bill-sidebar"><span>B</span><i /><i /><i /></div>
      <div className="bill-content">
        <span className="visual-kicker">PAYMENT OVERVIEW</span>
        <strong className="balance">₦ 48,250.00</strong>
        <div className="bill-chart">
          {[32, 58, 43, 76, 65, 88, 72].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="bill-row"><span>Electricity</span><span>Completed</span></div>
        <div className="bill-row"><span>Internet</span><span>Processing</span></div>
      </div>
    </div>
  );
}
