
import uuid from 'uuid/v4';
import getRandomColor from '../../utils/getRandomColor'
import { BoxModel } from '../models/Box'

export const createBox = (left, top) => {
  return BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    left,
    top
  });
};