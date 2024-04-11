import { ButtonRounded } from './button-rounded'
import { Sound } from './sound'

type HeaderProps = {
  showBtnHome?: boolean
}

export function Header({ showBtnHome = false }: HeaderProps) {
  return (
    <header className="relative z-30 flex items-center justify-between py-5">
      <h3 className="animate-pulse text-xl font-medium tracking-wider duration-1000 [text-shadow:_0_0_10px_#fff_,_0_0_20px_#fff_,_0_0_40px_#fff_,_0_0_80px_#fff_,_0_0_120px_#fff,_0_0_160px_#fff] hover:duration-0 md:text-2xl">
        Mauricio Girardi
      </h3>

      <div className="flex items-center gap-4">
        {showBtnHome && <ButtonRounded label="Home" link="/" icon="home" />}
        <Sound />
      </div>
    </header>
  )
}
