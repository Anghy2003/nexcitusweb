export default function BrowserMock({ children, url = 'app.nexcitus.com' }) {
  return (
    <div className="browser-mock">
      <div className="browser-mock-bar">
        <span className="bm-dot r" />
        <span className="bm-dot y" />
        <span className="bm-dot g" />
        <span className="browser-mock-url">{url}</span>
      </div>
      <div className="browser-mock-body">{children}</div>
    </div>
  )
}
