
const urlParamGet = (url) => {
  const obj = {
    id: new URLSearchParams(url.split('?')[1]).get('collection_id'),
    tag: new URLSearchParams(url.split('?')[1]).get('tags')
  }
  return obj
}

export default urlParamGet