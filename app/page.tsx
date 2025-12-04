'use client'
import { useEffect, useState} from 'react'
import {Enviornment} from '../config'
import release from '../release.json'

export default function Home() {
  const enviornment = process.env.ENVIORNMENT
  return (
    // https://github.com/calebkrauter/illum/commit/c09de921fd95d14c91cd06a80d57e9eab17f4a1e
    <div>
      {enviornment !== Enviornment.prod && (
        <nav>
          <div className='releaseText center'>
            <a href='https://github.com/calebkrauter/illum/tree/main' target='_blank'>
              {`${release.branch}`}
            </a>
            <div className='space'/>
            <a href={`https://github.com/calebkrauter/illum/commit/${release.sha}`} target='_blank'>
            commit
            </a>
            <div className='space'/>
            <a href={`https://github.com/calebkrauter/illum/releases/tag/${release.version}`} target='_blank'>
              {release.version}
            </a>
            <div className='space'/>
            <div>{release.enviornment}</div>

            
          </div>
        </nav>
      )}
      
      <div>
        text
      </div>
    </div>
  )
}
