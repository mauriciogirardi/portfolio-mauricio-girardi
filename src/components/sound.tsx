'use client'

import { useEffect, useRef, useState } from 'react'

import { ButtonRounded } from './button-rounded'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from './ui/alert-dialog'
import { Button } from './ui/button'

export function Sound() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsPlaying((prev) => !prev)
    !isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
    localStorage.setItem('musicConsent', String(!isPlaying))
    setIsOpen(false)
  }

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem('musicConsent')

    if (musicConsent === 'true' && !isPlaying) {
      audioRef.current?.play()
      setIsPlaying(true)
    }

    ;['click', 'keydown', 'touchstart'].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    )
  }

  useEffect(() => {
    const consent = localStorage.getItem('musicConsent')

    if (consent) {
      setIsPlaying(consent === 'true')
      if (consent === 'true') {
        ;['click', 'keydown', 'touchstart'].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        )
      }
    } else {
      setIsOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <audio loop ref={audioRef}>
        <source src="./birds-forest.mp3" type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>

      <ButtonRounded
        type="button"
        label=""
        onClick={handleToggle}
        icon={isPlaying ? 'volume-2' : 'volume-x'}
      />

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="my-2 border-zinc-800 bg-zinc-900">
          <AlertDialogHeader>
            <AlertDialogTitle>Music</AlertDialogTitle>
            <AlertDialogDescription>
              Do you like to play the background music?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              className="border-zinc-700 bg-transparent text-white hover:bg-zinc-700"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              No
            </Button>
            <Button
              size="sm"
              className="mb-4 bg-yellow-300 text-black hover:bg-yellow-400 md:mb-0"
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
