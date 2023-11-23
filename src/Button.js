import { memo } from "react"

export default function Button ({ order, onClick }) {
    console.log('Render button', order)
    return <button onClick={onClick}>BUTTON {order}</button>
}
// export default memo(Button)