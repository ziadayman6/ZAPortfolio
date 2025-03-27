function Service({ title, desc }) {
  return (
    <div className="parent">
      <div className="child">
        <div className="serve">{title}</div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Service;
