interface stepcardProps {
    steps?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const StepCard = ({ steps, title, children, className }: stepcardProps) => {
  return (
    <>
        <div className={className}>
            <p className="title-text text-2xl">{steps}</p>
            <p className="title-text text-lg">{title}</p>
            {children}
        </div>
    </>
  )
}

export default StepCard