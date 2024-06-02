import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import MainPage from '../../components/library/mainpage'

function Library() {
  return (
  <Main
      meta={
        <Meta
          title="ListenMania"
          description="ListenMania Music"
        />
      }
      title='Library'
    >
      <MainPage />

    </Main>
  )
}

export default Library