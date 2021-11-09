const HomeSection: React.FC<{
  title: string
}> = ({ children, title }) => {
  return (
    <div className="mb-section">
      <h3 className="relative inline-block font-roboto-mono font-bold text-2xl mb-6">
        <span className="relative z-20 pl-[5px]">{title}</span>
        <div className="absolute z-0 bottom-[-1px] left-0 right-[8px] h-3 bg-accent-dark" />
      </h3>
      <section>{children}</section>
    </div>
  )
}

export default HomeSection
