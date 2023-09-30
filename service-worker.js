// Example of a simple user data object
const user = {
    username: 'demo-user'
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // chrome.action.setBadgeText(message.greeting)
    if ("badge" in message) {
        chrome.action.setBadgeText({text: message.badge, tabId: sender.tab.id})
    }
});