function getAllCommentElements () {
  const list = []
  const iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_COMMENT)

  let currentNode
  while (currentNode = iterator.nextNode()) {
    list.push(currentNode)
  }

  return list
}

const commentsPresent = getAllCommentElements().length
chrome.runtime.sendMessage({'commentsPresent': commentsPresent})