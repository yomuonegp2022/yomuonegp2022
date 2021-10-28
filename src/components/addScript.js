import React, { useEffect } from "react"

const AddScript = url => {
  useEffect(() => {
		const script = document.createElement("script")
		script.src = url
		script.async = true
		document.body.appendChild(script)
	}, [])

	return (<div />)
}

export default AddScript