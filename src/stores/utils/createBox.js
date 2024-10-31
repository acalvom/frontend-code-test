import { getRandomColor, getRandomUuid } from '../../utils'
import { BoxModel } from '../models/Box'

export const createBox = (box) => {
  const { name, left, top } = box
  
  return BoxModel.create({
    id: getRandomUuid(),
    color: getRandomColor(),
    name,
    left,
    top,
  })
}
