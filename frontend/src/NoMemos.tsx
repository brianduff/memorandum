import { Button, NonIdealState } from "@blueprintjs/core";

export function NoMemos() {
  return (
    <NonIdealState
        title="Nothing to see here :("
        description={<span>There are no memos yet. Why not create a new one?</span>}
        icon="ninja"
        action={<Button intent="primary">Create Memo</Button>}
    />
  );
}