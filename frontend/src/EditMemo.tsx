import { Navbar } from "@blueprintjs/core";
import { css } from "@emotion/react";
import { Editor } from "./components/Editor";

export function EditMemo() {
  let track = import.meta.env.TRACK || undefined;
  return (
    <>
      <Navbar fixedToTop={true}>
        <Navbar.Group>
          <Navbar.Heading>Memo{track && track} - small change!</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
      <div css={css`margin-top: 50px;`}>
        <Editor />
      </div>
    </>
  )
}