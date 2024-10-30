import React from 'react'
import { observer } from 'mobx-react'

import Canvas from '../../components/Canvas/Canvas'
import { Toolbar } from '../../components/Toolbar/Toolbar'
import { store } from '../../stores/store'
import './Home.css'

export const Home = observer(() => {
  return (
    <div className="home">
      <Toolbar store={store} />
      <Canvas store={store} />
    </div>
  )
})
