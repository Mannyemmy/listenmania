import player, { usePlayerState } from '../../../lib/player'
import { Button } from '@/components/UI'
import { PlayIcon, PauseIcon, PlayNext, PlayPrev } from '@/components/Icons'
import { TfiControlShuffle } from 'react-icons/tfi'
import { FiRepeat } from 'react-icons/fi'

function PlayerSliderControls() {
  const { currentTrack, playing, currentTrackIndex } = usePlayerState()

  if (!currentTrack) {
    return null
  }

  const handlePlay = () => {
    if (playing) {
      player.pause()
    } else {
      // player.play()
      player.playTrack(currentTrackIndex || 2)
    }
  }

  const PlayTrack = (index: number = 2) => {
    if (playing && index === currentTrackIndex) {
      player.pause()
    } else if (index !== currentTrackIndex) {
      player.playTrack(index)
      player.play()
    } else {
      player.play()
    }
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <Button variant="naked">
        <TfiControlShuffle width={30} height={30} />
      </Button>
      {/* onClick={() => player.prev()} */}
      <Button variant="naked" >
        <PlayPrev />
      </Button>
      <Button variant="white" onClick={() => PlayTrack(2)}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </Button>
      <Button variant="naked" >
        {/* onClick={() => player.next()} */}
        <PlayNext />
      </Button>
      <Button variant="naked">
        <FiRepeat width={30} height={30} />
      </Button>
    </div>
  )
}

export default PlayerSliderControls
