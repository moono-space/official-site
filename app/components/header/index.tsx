import { Brand } from './brand'

export default function Header(): React.ReactElement {
  return (
    <header className="flex items-center px-5 laptop:px-0 h-20 bg-background container mx-auto">
      <div className="flex w-full tablet:w-10/12 laptop:w-7/12 mx-auto">
        <Brand />
      </div>
    </header>
  )
}
