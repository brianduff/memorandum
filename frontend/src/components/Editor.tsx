import { css } from '@emotion/react'
import { MDXEditor, headingsPlugin, linkPlugin, listsPlugin, markdownShortcutPlugin, quotePlugin } from '@mdxeditor/editor'

export function Editor() {
  return (
  <div css={css`overflow: scroll; background: rgba(17, 20, 24, 0.3); color: #f6f7f9; box-shadow: 0 0 0 0 rgba(76, 144, 240, 0), 0 0 0 0 rgba(76, 144, 240, 0), 0 0 0 0 rgba(76, 144, 240, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.3); padding: 5px;`}>
    <MDXEditor
      plugins={[
          headingsPlugin(),
          listsPlugin(),
          linkPlugin(),
          quotePlugin(),
          markdownShortcutPlugin()
      ]}
      css={css`height: 50vh; text-align: left;`}
      markdown="" />
  </div>)

}