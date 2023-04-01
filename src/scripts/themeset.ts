function waitForElm(selector: string) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

export const setTheme = (newMode: string) => {
    const modeClasses = ["light","dark","amoled"];
    const html = document.querySelector("html");
    html!.classList.remove(...modeClasses);
    html!.classList.add(newMode);
    document.cookie = `theme=${newMode};Fri, 31 Dec 9999 23:59:59 GMT;path=/`;
}

export const loadTheme = async () => {
    const themeName = getCookie("theme");
    const html: HTMLElement = await waitForElm('html') as HTMLElement;
    html.addEventListener('load', loadTheme);
    setTheme(themeName);
}
