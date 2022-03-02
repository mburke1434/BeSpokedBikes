import { React, useState } from "react"
import { EditText, EditTextArea } from "react-edit-text"

const Editable = (props) => {

    console.log(props)
    const [value, setValue] = useState(props.value)

    return (
        <div>
            <EditText defaultValue={value} onChange={setValue} />
        </div>
    )
}

export default Editable