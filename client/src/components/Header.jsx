function Header({
  title,
  subtitle,
  rightContent,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          {title}
        </h1>

        <p className="text-slate-400 mt-3">
          {subtitle}
        </p>
      </div>

      {rightContent}
    </div>
  );
}

export default Header;