import DOG from "@content/icons/logo/dog.png?url";
import TWITTER from "@content/icons/logo/twitter.svg?raw";
import X from "@content/icons/logo/x.svg?raw";
import EMPTY from "@content/icons/logo/empty.svg?url";
import { TUICPref } from "../..";
import { TUICLibrary } from "@content/library";

let iconObserver: MutationObserver | null = null;

const iconObserverFunc = (elem: Element) => {
    if (elem) {
        if (iconObserver) iconObserver.disconnect();
        else {
            iconObserver = new MutationObserver(() => {
                iconObserverFunc(elem);
            });
        }
        changeIconProcess(elem, document.querySelector(`header [role="heading"]`));
        iconObserver.observe(document.querySelector("header h1 a > div"), {
            childList: true,
            subtree: true,
            attributes: true,
        });
    }
};

function changeIconProcess(elem: Element, base: Element) {
    const favicon = document.querySelector<HTMLLinkElement>(`[rel="shortcut icon"]`);
    switch (TUICPref.getPref("twitterIcon")) {
        case "invisible":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                favicon.href = chrome.runtime.getURL(EMPTY);
            }
            elem.classList.add("TUIC_SVGDISPNONE");
            base.hide();
            break;
        case "twitter":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                favicon.href = "data:image/svg+xml," + encodeURIComponent(TWITTER.replace("var(--TUIC-favicon-color)", TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color", null)));
                //replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`)
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_Twitter");
            break;
        case "dog":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                favicon.href = chrome.runtime.getURL(DOG);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_Dog");
            break;
        case "custom":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                const imageURL = localStorage.getItem(TUICPref.getPref("otherBoolSetting.roundIcon") ? "TUIC_IconImg_Favicon" : "TUIC_IconImg");
                favicon.href = imageURL ?? chrome.runtime.getURL(EMPTY);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_IconImg");
            break;
        case "twitterIcon-X":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                console.log(encodeURIComponent(X.replace("var(--TUIC-favicon-color)", TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color", null))));
                favicon.href = "data:image/svg+xml," + encodeURIComponent(X.replace("var(--TUIC-favicon-color)", TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color", null)));
                //.replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_X");
            break;
        default:
            favicon.href = "//abs.twimg.com/favicons/twitter.3.ico";
            elem.classList.add("TUIC_NOTSVGDISPNONE");
            break;
    }
    elem.process();
    if (!TUICPref.getPref("otherBoolSetting.faviconSet")) {
        favicon.href = "//abs.twimg.com/favicons/twitter.3.ico";
    }
}

//* setup icon observer
export function changeIcon() {
    const notProcessed = `:not(.TUIC_SVGDISPNONE):not(.TUIC_NOTSVGDISPNONE)`;
    {
        const elem = document.querySelector(`header h1 a > div > svg${notProcessed}`);
        if (elem) {
            iconObserverFunc(elem);
        }
    }
    if (!document.querySelector(`header h1 a > div > svg`)) {
        iconObserver = null;
    }

    {
        const elem = document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg${notProcessed}`);
        if (elem) {
            changeIconProcess(elem, document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] [role="heading"]`));
        }
    }

    {
        const elem = document.querySelector(`[data-testid="interstitialGraphic"] > svg${notProcessed}`);
        if (elem) {
            changeIconProcess(elem, elem.parentElement);
        }
    }

    {
        const elem = document.querySelector(`#layers [data-testid="TopNavBar"] div+svg${notProcessed}`);
        if (elem) {
            changeIconProcess(elem, elem.parentElement);
        }
    }

    {
        const elem = document.querySelector(`article svg${notProcessed} > * > path[d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"]`);
        if (elem) {
            changeIconProcess(elem.closest("svg"), elem.closest("svg").parentElement);
        }
    }
}

// 起動時のアイコン
let initIconObserver: MutationObserver | null = null;

export const initIconObserverFunction = () => {
    if (initIconObserver) initIconObserver.disconnect();
    else initIconObserver = new MutationObserver(initIconObserverFunction);

    changeIconProcess(document.querySelector(`#placeholder > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`#placeholder`));

    initIconObserver.observe(document.querySelector(`#placeholder > svg`), {
        attributes: true,
        attributeFilter: ["class"],
    });
};
