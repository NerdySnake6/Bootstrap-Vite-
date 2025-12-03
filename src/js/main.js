import { DateTime } from 'luxon'

let timeInterval = null

function updateTime() {
    const el = document.getElementById('currentTime')
    if (el) {
        el.textContent = DateTime.now()
            .setLocale('ru')
            .toFormat('dd.MM.yyyy HH:mm:ss')
    }
}

function showModal() {
    document.getElementById('timeModal').classList.add('show')
}

function hideModal() {
    document.getElementById('timeModal').classList.remove('show')
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('showTimeBtn')
    const modal = document.getElementById('timeModal')
    
    btn.addEventListener('click', () => {
        updateTime()
        if (timeInterval) clearInterval(timeInterval)
        timeInterval = setInterval(updateTime, 1000)
        showModal()
    })
    
    document.querySelector('.close-btn').addEventListener('click', hideModal)
    document.getElementById('closeModalBtn').addEventListener('click', hideModal)
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal()
    })
})
