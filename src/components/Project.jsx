function Project({ image, url, desc, title, tools, code }) {
  return (
    <div className="parent">
      <div className="child12">
        <img src={image} alt="none" />
      </div>
      <div className="backk">
        <p style={{ color: "#660000" }}>{title}</p>
        <p>{desc}</p>
        <div className="tools">
          {tools.map((tool) => (
            <img src={tool.url} alt="none" width={tool.size} />
          ))}
        </div>
        <div className="anchors">
          <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className="anchor1"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </a>
          <a
            href={code}
            rel="noopener noreferrer"
            target="_blank"
            className="anchor2"
          >
            <i class="fa-solid fa-code"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
