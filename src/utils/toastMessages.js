import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const TOAST = {
  NO_BOXES: 'NO_BOXES',
  NO_SELECTED_BOXES: 'NO_SELECTED_BOXES',
  REMOVED_BOXES: 'REMOVED_BOXES',
}

const MESSAGES = {
  NO_BOXES: 'There are no boxes to remove',
  NO_SELECTED_BOXES: 'No boxes are selected',
  REMOVED_BOXES: 'Selected boxes have been removed successfully',
}

export function showToast(key) {
  const message = MESSAGES[key]
  if (message) {
    toast(message)
  } else {
    console.warn(`No toast message found for key: ${key}`)
  }
}
