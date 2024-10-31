import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MESSAGES = {
  NO_BOXES: 'There are no boxes to remove',
  NO_SELECTED_BOX: 'No box is selected',
  REMOVED_BOX: 'The box has been removed successfully',
};

export function showToast(key) {
  const message = MESSAGES[key];
  if (message) {
    toast(message);
  } else {
    console.warn(`No toast message found for key: ${key}`);
  }
}