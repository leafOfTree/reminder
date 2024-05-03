document.addEventListener('DOMContentLoaded', () => {
  if (!Notification) {
    alert('Notification not available! Try a differnt browser')
  }
  if (!Notification.permission !== 'granted') {
    Notification.requestPermission()
  }
})

function notify(hours) {
  fetch('www.example.com')
  if (Notification.permission !== 'granted') {
    Notification.requestPermission()
  } else {
    const n = new Notification('网页提醒工具', {
      body: '休息一下', 
      icon: './icon.svg', 
    })

  }
}

setInterval(() => {
  const now = new Date()
  const hours = now.getHours()
  const mins = now.getMinutes()
  if (hours > 9 && hours < 22 && mins === 50) {
    notify(hours)
  }
}, 1000*60)
