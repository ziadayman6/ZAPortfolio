function Skill({ image, name, size }) {
  return (
    <div className="child">
      <div className="son">
        <img src={image} width={size} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Skill;
