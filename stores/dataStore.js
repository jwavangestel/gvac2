import { defineStore } from  "pinia";

export 
const usedataStore = defineStore('dataStore', {
    state: () => ({
        editmode: [1, 2, 3]
    }),
})