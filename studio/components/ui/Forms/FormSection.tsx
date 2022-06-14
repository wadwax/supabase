const FormSection = ({
  children,
  header,
  disabled,
}: {
  children: React.ReactNode
  header?: React.ReactNode
  disabled?: boolean
}) => {
  const classes = `
    grid grid-cols-12 gap-6 px-8 py-2 lg:gap-12
    transition-opacity
    ${disabled ? 'opacity-30 pointer-events-none' : 'opacity-100'}
  `

  return (
    <div className={classes}>
      {header}
      {children}
    </div>
  )
}

const FormSectionLabel = ({ children }: { children: React.ReactNode | string }) => {
  return <label className="text-scale-1200 col-span-12 text-sm lg:col-span-5">{children}</label>
}
const FormSectionContent = ({
  children,
  loading = true,
}: {
  children: React.ReactNode | string
  loading?: boolean
}) => {
  return (
    <div className="relative col-span-12 flex flex-col gap-6 lg:col-span-7">
      {loading ? (
        <div className="flex w-full flex-col gap-2">
          <div className="shimmering-loader h-2 w-1/3 rounded"></div>
          <div className="flex flex-col justify-between space-y-2">
            <div className="shimmering-loader h-[34px] w-2/3 rounded" />
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export { FormSection, FormSectionContent, FormSectionLabel }