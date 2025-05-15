interface sideTextProps {
    className?: string;
    children?: React.ReactNode;
}

const SideText = ({ className, children }: sideTextProps) => {
  return (
    <>
    <div className={className}>
        {children}
    </div>
    </>
  )
}

export default SideText