function Title({ children, onClick, isOpen }) {
  return (
    <div className="animate__animated animate__slideInUp wow">
      <h1>{children}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={`bi bi-arrow-down-circle arrow1 ${isOpen && "rotated"}`}
        viewBox="0 0 16 16"
        onClick={onClick}
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
        />
      </svg>
    </div>
  );
}

export default Title;
