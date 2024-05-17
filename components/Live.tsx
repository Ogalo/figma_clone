import { useMyPresence, useOthers } from '@/liveblocks.config'
import React, { useCallback } from 'react'
import LiveCursors from './cursor/LiveCursors'

const Live = () => {
  const others = useOthers()
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((event: React.PointerEvent) =>{
    event.preventDefault();

    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: {x, y}})

  }, [])
  const handlePointerLeave = useCallback((event: React.PointerEvent) =>{
    event.preventDefault();

    updateMyPresence({ cursor: null, message: null });

  }, [])

  const handlePointerDown = useCallback((event: React.PointerEvent) =>{

    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: {x, y}})

  }, [])

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className="h-[100vh] w-full flex justify-center text-center items-center"
    >
      <h1 className="text-2xl text-white">
      LiveBlocks Figma Clone
    </h1>
      <LiveCursors others={others}/>
    </div>
  )
}

export default Live
