import { Navbar } from "@blueprintjs/core";
import { css } from "@emotion/react";
import { Editor } from "./components/Editor";

export function EditMemo() {
  return (
    <>
      <Navbar fixedToTop={true}>
        <Navbar.Group>
          <Navbar.Heading>Foobar - this is the dev version</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
      <div css={css`margin-top: 50px;`}>
        <Editor />
      </div>
    </>
  )
}