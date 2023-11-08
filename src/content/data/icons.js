export const HOME_ICON = {
    old: "M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z",
    oldSelected:
        "M12 1.6875L0.625 8.8125L1.6875 10.5L3 9.6875L3 19.5C3 20.881 4.119 22 5.5 22L18.5 22C19.881 22 21 20.881 21 19.5L21 9.6875L22.3125 10.5L23.375 8.8125C23.375 8.8125 12 1.6875 12 1.6875ZM12 9.53125C13.9105 9.53125 15.4688 11.0895 15.4688 13C15.4688 14.9105 13.9105 16.4688 12 16.4688C10.0895 16.4688 8.53125 14.9105 8.53125 13C8.53125 11.0895 10.0895 9.53125 12 9.53125Z",
    latest: "M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z",
    latestSelected: "M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z",
};

export const SIDEBAR_BUTTON_ICON = {
    topics: {
        unselected:
            "M12 3.75C7.99 3.75 4.75 7 4.75 11s3.24 7.25 7.25 7.25h1v2.44c1.13-.45 2.42-1.3 3.54-2.54 1.52-1.67 2.66-3.95 2.71-6.67.07-4.46-3.28-7.73-7.25-7.73zM2.75 11c0-5.11 4.14-9.25 9.25-9.25s9.34 4.23 9.25 9.77c-.06 3.28-1.44 6.01-3.23 7.97-1.76 1.94-3.99 3.21-5.87 3.5l-1.15.17V20.2c-4.64-.5-8.25-4.43-8.25-9.2zM15 10H9V8h6v2zm-2 4H9v-2h4v2z",
        selected: "M12 1.75C6.89 1.75 2.75 5.89 2.75 11C2.75 15.77 6.36 19.6875 11 20.1875L11 23.1562L12.1562 23C14.0362 22.71 16.2712 21.44 18.0312 19.5C19.8212 17.54 21.19 14.8113 21.25 11.5312C21.34 5.99125 17.11 1.75 12 1.75ZM9 8L15 8L15 10L9 10L9 8ZM9 12L13 12L13 14L9 14L9 12Z",
    },
    circles: {
        unselected:
            "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.417-3.68c-.541.97-1.601 1.99-3.352 2.98l-.201.12-.202-.12c-1.751-.99-2.811-2.01-3.352-2.98-.545-.97-.564-1.88-.206-2.59.355-.69 1.059-1.13 1.84-1.17.661-.03 1.348.22 1.92.79.571-.57 1.258-.82 1.918-.79.781.04 1.485.48 1.84 1.17.358.71.339 1.62-.205 2.59z",
        selected:
            "M10 2C7.791 2 6 3.79 6 6C6 8.21 7.791 10 10 10C12.209 10 14 8.21 14 6C14 3.79 12.209 2 10 2ZM18.0938 6C17.3128 6.04 16.605 6.46625 16.25 7.15625C15.892 7.86625 15.8925 8.78 16.4375 9.75C16.9785 10.72 18.0615 11.76 19.8125 12.75L20 12.875L20.1875 12.75C21.9385 11.76 23.0215 10.72 23.5625 9.75C24.1065 8.78 24.108 7.86625 23.75 7.15625C23.395 6.46625 22.6873 6.04 21.9062 6C21.2463 5.97 20.571 6.21125 20 6.78125C19.428 6.21125 18.7548 5.97 18.0938 6ZM10 11C7.648 11 5.615 11.8475 4.125 13.4375C2.648 15.0175 1.766 17.2462 1.5 19.9062L1.40625 21L18.5938 21L18.5 19.9062C18.234 17.2463 17.352 15.0175 15.875 13.4375C14.385 11.8475 12.352 11 10 11Z",
    },
    drafts: {
        unselected:
            "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z",
        selected:
            "M2 3L2 5L10 5L10 3L2 3ZM23 3C16.38 2.9 12.6075 5.42225 9.9375 9.03125C7.2775 12.6113 6 17.331 6 22L8 22C8 20.993 8.0675 19.988 8.1875 19L12 19C15.2006 19 17.9117 17.0908 19.1875 14.375C18.8527 14.5212 18.551 14.7017 18.1562 14.7812C16.9432 15.0258 14.5 15.0312 14.5 15.0312L14.5 13L16.0938 12.9688C17.304 12.9247 18.8064 12.7546 19.9375 11.9375C22.7875 10.1385 23.17 6.359 23 3ZM2 7L2 9L7 9L7 7L2 7Z",
    },
    connect: {
        unselected:
            "M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z",
        selected:
            "M12 1.78125C6.339 1.78125 1.75 6.37025 1.75 12.0312C1.75 17.6923 6.339 22.2812 12 22.2812C13.977 22.2813 15.8382 21.722 17.4062 20.75C19.0458 19.6215 20.4063 17.9047 21.3407 15.7399C20.4728 16.4614 19.084 16.9536 17.875 16.8438C16.633 16.7308 15.581 16.0945 14.875 15.1875C13.914 16.4405 12.4233 17.1998 10.7812 16.9688C8.20025 16.6058 6.66425 14.0132 7.03125 11.4062C7.39725 8.80025 9.57525 6.6995 12.1562 7.0625C13.1753 7.2055 14.0455 7.70125 14.6875 8.40625L16.5 8.6875L15.9688 12.2188C15.7817 13.5287 16.7445 14.7238 18.0625 14.8438C18.4958 14.8831 19.6941 14.8142 20.6795 14.1432C21.6268 13.4981 22.3754 12.2865 22.1461 10.572C21.4355 5.60481 17.1638 1.78125 12 1.78125ZM11.875 9.0625C10.628 8.8875 9.248 9.9185 9 11.6875C8.751 13.4565 9.8155 14.824 11.0625 15C12.3095 15.175 13.6895 14.144 13.9375 12.375C14.1865 10.606 13.122 9.2375 11.875 9.0625Z",
    },
    display: {
        unselected:
            "M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z",
        selected:
            "M20.5 1.0625C19.8838 1.04375 19.2763 1.2475 18.7812 1.6875L11.5938 8.03125C9.57375 8.23125 8 9.93 8 12L8 16L12 16C14.07 16 15.7687 14.4262 15.9688 12.4062L22.3125 5.21875C23.1925 4.22875 23.1488 2.72125 22.2188 1.78125C21.7487 1.31625 21.1162 1.08125 20.5 1.0625ZM4.5 3C3.12 3 2 4.12 2 5.5L2 18.5C2 19.88 3.12 21 4.5 21L19.5 21C20.88 21 22 19.88 22 18.5L22 8.59375L17.7188 13.4375C17.0604 16.0524 14.7849 18 12 18L8 18C6.89543 18 6 17.1046 6 16L6 12C6 9.21513 7.94757 6.9396 10.5625 6.28125L14.25 3L4.5 3ZM20.0938 3.1875C20.2937 3.0075 20.5913 3.02875 20.7812 3.21875C20.9713 3.40875 20.9925 3.70625 20.8125 3.90625L15.4375 9.96875C15.0875 9.37875 14.6213 8.9125 14.0312 8.5625L20.0938 3.1875Z",
    },
    muteAndBlock: {
        unselected: "M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z",
        selected: "M18 1.1875L9.71875 6.375L9.71875 14.8438L7.71875 16.8438L7.71875 7L5.5 7C4.12 7 3 8.12 3 9.5L3 14.5C3 15.88 4.12 17 5.5 17L7.5625 17L5.28125 19.2812L6.71875 20.7188L22.2188 5.21875L20.7812 3.78125L17.8438 6.71875L18 1.1875ZM18 12.3125L11.5312 18.7812L18 22.8125L18 12.3125Z",
    },
    bookmarks: {
        unselected: "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z",
        selected: "M6.5 2C5.119 2 4 3.12 4 4.5L4 22.9375L12 17.2188L20 22.9375L20 4.5C20 3.12 18.881 2 17.5 2L6.5 2Z",
    },
};
