import { defineStore } from  "pinia";

export 
const usedataStore = defineStore('dataStore', {
    state: () => ({
        editmode: ["off","off", "off", "off"]
    }),
})