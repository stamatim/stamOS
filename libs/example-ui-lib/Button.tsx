import React from "react";

// packages/shared-ui/Button.tsx
export function Button(props: any) {
    return <button onClick={() => props.onClick()}>{props.children}</button>;
}

export default Button;