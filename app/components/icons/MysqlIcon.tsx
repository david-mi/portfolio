interface Props {
  className?: string
}

function MysqlIcon({ className }: Props) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 21c-1.427-1.026-3.59-3.854-4-6c-.486.77-1.501 2-2 2c-1.499-.888-.574-3.973 0-6c-1.596-1.433-2.468-2.458-2.5-4C1.15 3.56 4.056 1.73 7 4h1c8.482.5 6.421 8.07 9 11.5c2.295.522 3.665 2.254 5 3.5c-2.086-.2-2.784-.344-3.5 0c.478 1.64 2.123 2.2 3.5 3M9 7h.01"></path>
    </svg>
  )
}

export default MysqlIcon