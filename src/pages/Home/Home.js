import React from 'react'

import store from '../../stores/MainStore'
import Canvas from '../../components/Canvas/Canvas'
import { Toolbar } from '../../components/Toolbar/Toolbar'
import { observer } from 'mobx-react'
import './Home.css'

export const Home = observer(() => {
  return (
    <div className="home">
      <Toolbar />
      <Canvas store={store} />
    </div>
  )
})
