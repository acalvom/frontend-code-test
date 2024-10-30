import { getRandomColor, getRandomUuid } from '../../utils'
import { BoxModel } from '../models/Box'

export const createBox = (left, top) => {
  return BoxModel.create({
    id: getRandomUuid(),
    color: getRandomColor(),
    left,
    top,
  })
}
