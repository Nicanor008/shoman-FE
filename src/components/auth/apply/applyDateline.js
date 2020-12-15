import { Link } from "@material-ui/core"
import React from "react"

export default function ApplyDateline({ classname }) {
  return (
    <p className={classname}>
      Application closes <b>5th Janury 2021</b>.Mentorship starts{" "}
      <b>11th Janury, 2021.</b>
      <br />
      Be sure to have read <Link href="/about" target="_blank">about</Link> section to understand
      the requirements
    </p>
  )
}
