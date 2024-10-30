import React from 'react'
import { observer } from 'mobx-react'
import box from './Box'
import getRandomColor from '../../utils/getRandomColor'
import PropTypes from 'prop-types'

export const BoxDraggable = observer((props) => {
  const { id, width, height, color, left, top, isSelected, onClick, children } = props

  const style = {
    backgroundColor: color,
    width,
    height,
    transform: `translate(${left}px, ${top}px)`,
    border: isSelected ? `2px dotted ${getRandomColor()}` : 'none',
  }

  return (
    <div id={id} className="box" onClick={onClick} style={style}>
      {children}
    </div>
  )
})

BoxDraggable.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

BoxDraggable.defaultProps = {
  isSelected: false,
  children: null,
}
