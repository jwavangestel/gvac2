import { defineStore } from  'pinia'
import eventData from '../data/events.json'

export const useProgramStore = defineStore('programStore', () => {
    const events = ref(eventData)

    return {
        events
    }
})