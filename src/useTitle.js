import { useEffect } from "react"

const useTitle = (count) => {
    useEffect(() => {
        if(count >= 1) {
          document.title = `Chats ${count}`
        } else {
          document.title = `Chats`
        }
      })
}
export default useTitle;