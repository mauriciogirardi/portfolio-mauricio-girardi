import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Loader2 className="size-9 animate-spin text-zinc-300" />
        <h3 className="animate-pulse text-2xl font-medium tracking-wider duration-1000 [text-shadow:_0_0_10px_#fff_,_0_0_20px_#fff_,_0_0_40px_#fff_,_0_0_80px_#fff_,_0_0_120px_#fff,_0_0_160px_#fff] hover:duration-0">
          Mauricio Girardi
        </h3>
      </div>
    </div>
  )
}
