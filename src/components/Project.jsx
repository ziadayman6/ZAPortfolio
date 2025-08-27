function Project({ image, url, desc, title, tools, code }) {
  return (
    <div className="parent">
      <div className="child12">
        <img src={image} alt="none" />
      </div>
      <div className="backk">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <div className="tools">
          {tools.map((tool) => (
            <img src={tool.url} alt="none" width={tool.width} height={tool.height} />
          ))}
        </div>
        <div className="anchors">
          <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className="anchor1"
          >
            <i className="bi bi-arrow-up"></i>
          </a>
          <a
            href={code}
            rel="noopener noreferrer"
            target="_blank"
            className="anchor2"
          >
            <i class="bi bi-code"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
