import { useState } from "react"
import PropTypes from "prop-types"
import Editor from "@monaco-editor/react"

export default function CodeEditorWindow({
  onChange,
  language = "cpp",
  code = "",
  theme = "light"
}) {
  const [value, setValue] = useState(code || "")

  const handleEditorChange = (value) => {
    setValue(value)
    onChange("code", value)
  }

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "cpp"}
        value={value}
        theme={theme}
        onChange={handleEditorChange}
      />
    </div>
  )
}

CodeEditorWindow.propTypes = {
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string,
  code: PropTypes.string,
  theme: PropTypes.string
}
