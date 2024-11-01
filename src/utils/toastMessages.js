import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const TOAST = {
  NO_BOXES: 'NO_BOXES',
  NO_SELECTED_BOX: 'NO_SELECTED_BOX',
  REMOVED_BOX: 'REMOVED_BOX',
}

const MESSAGES = {
  NO_BOXES: 'There are no boxes to remove',
  NO_SELECTED_BOX: 'No box is selected',
  REMOVED_BOX: 'The box has been removed successfully',
}

export function showToast(key) {
  const message = MESSAGES[key]
  if (message) {
    toast(message)
  } else {
    console.warn(`No toast message found for key: ${key}`)
  }
}
