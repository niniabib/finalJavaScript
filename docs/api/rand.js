export function check(){
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.floor(Math.random() * 10);
      if(rand > 3)resolve('success');
      else reject('error');
    }, 3000);
  })
  return pr;
}

export async function saveToStorage(tweet){
  const pr = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const rand = Math.floor(Math.random() * 10);
      if(rand > 3){
        const tweets = loadFromStorage();
        tweets.push(tweet)
        window.localStorage.setItem('tweets', JSON.stringify(tweets))
        resolve(tweets)
      }
      else {
        reject('error');
        window.alert('ტექნიკური ხარვეზი')
      }
    }, 1500);
  })
  return pr;
}

export function loadFromStorage() {
  const tweets = window.localStorage.getItem('tweets')
  if (tweets)
    return JSON.parse(tweets)
  else return [];
}

export async function deleteFromStorage(index){
  const tweets = loadFromStorage();
  tweets.splice(index,1);
  window.localStorage.setItem('tweets', JSON.stringify(tweets))
}

export function clearStorage() {
  window.localStorage.removeItem('tweets')
}
