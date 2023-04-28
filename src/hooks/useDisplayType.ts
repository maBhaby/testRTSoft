import { useStores } from "./useStores";
import { TDisplay } from "@/stores/DisplayTypeStore";

export const useDisplayType = () => {
  const { DisplayTypeStore } = useStores()
  const { displayType, toggle } = DisplayTypeStore

  const handleToggle = (type: TDisplay): void => {
    if (type !== displayType) {
      toggle(type)
    }
  }

  return {
    displayType,
    handleToggle
  }
}