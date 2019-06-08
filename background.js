chrome.runtime.onMessage.addListener(
  function (request, sender) {
    const tabId = {'tabId': sender.tab.id}

    if (request.commentsPresent !== undefined) {
      chrome.browserAction.setBadgeText({'text': request.commentsPresent.toString(), ...tabId})

      const color = request.commentsPresent > 0 ? '#690' : 'Silver' // #690 as MDN's attribute color, 'Silver' as a default
      chrome.browserAction.setBadgeBackgroundColor({'color': color, ...tabId})
    }
  })

chrome.browserAction.onClicked.addListener((tab) => {
  const newUrl = `view-source:${tab.url}`
  const index = tab.index + 1
  chrome.tabs.create({url: newUrl, index})
})