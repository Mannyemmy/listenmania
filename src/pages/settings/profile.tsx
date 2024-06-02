import Settings from '@/components/settings/Settings'
import { Meta } from '@/layouts/Meta'
import { Main } from '@/templates/Main'
import React from 'react'

const profile = () => {
  
  return (
    <Main
      meta={<Meta title="ListenMania" description="ListenMania Music" />}
      title="Settings"
      nested={true}
    >
      <Settings />
    </Main>
  )
}

export default profile
