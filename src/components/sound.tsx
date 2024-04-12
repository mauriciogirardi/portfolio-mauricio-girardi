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
  const [showModal, setShowModal] = useState(false)

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
      setShowModal(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggle = () => {
    const newState = !isPlaying
    setIsPlaying(!isPlaying)
    newState ? audioRef.current?.play() : audioRef.current?.pause()
    localStorage.setItem('musicConsent', String(newState))
    setShowModal(false)
  }

  return (
    <div className="fixed bottom-4 left-3 z-20 lg:bottom-6 lg:left-6">
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

      <AlertDialog open={showModal} onOpenChange={setShowModal}>
        <AlertDialogContent className="my-2 w-80 border-zinc-800 bg-zinc-900">
          <AlertDialogHeader>
            <AlertDialogTitle>Music</AlertDialogTitle>
            <AlertDialogDescription>
              Do you like to play the background music?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              className="border-zinc-500 bg-transparent text-white hover:bg-zinc-700"
              size="sm"
              onClick={() => setShowModal(false)}
            >
              No
            </Button>
            <Button
              size="sm"
              onClick={handleToggle}
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
