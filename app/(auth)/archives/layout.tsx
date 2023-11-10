type Props = {
  children: React.ReactNode
  archivePanel: React.ReactNode
  archiveForm: React.ReactNode
}

export default function Layout({ children, archivePanel, archiveForm }: Props) {
  return (
      <div className="h-full">
          {children}
          {archivePanel}
          {archiveForm}
      </div>
  )
}
