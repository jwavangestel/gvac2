import { defineStore } from  "pinia";

export 
const usedataStore = defineStore('dataStore', {
    state: () => ({
        events: []
    }),
    actions: {
        getEvents() {
        async $fetch() {
            const events = await $fetch('https://gvacdata:8890/?jaar=2024&maand=2')
            .then(response => {
                return this.events = response.data 
 
            })
            .catch(error => {
                throw error
            })
        }
    }
    }
})