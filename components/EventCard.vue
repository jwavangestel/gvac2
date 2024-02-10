<template>
    <div>
        <br>
        <UCard class="ring-0" >
            <div class="grid grid-cols-12">

                <div class="col-start-3 and col-end-11"> 
                    <div class="hover:scale-[1.01] hover:shadow-md">
                        <div class="grid grid-cols-12">
                            <div class="col-start-1 and col-end-2 font-bold"> 
                                Datum: 
                            </div>
                            <div class="col-start-3 and col-end-12 font-bold"> 
                                <div class="grid grid-cols-12">
                                    <div class="col-start-1 and col-end-4 "> 
                                        {{ formatDateDay(event.datum) }}
                                    </div>
                                    <div class="col-start-5 and col-end-10"> 

                                        <div v-if="editmode[index] === 'on'">
                                            <USelect v-model="routenr[index][0]" :options="allroutes" option-attribute="naam" />

                                        </div>
                                        <div v-if="editmode[index] === 'off'">
                                            {{ event.route  }} {{ event.naam  }}
                                        </div>
                                    </div>
                                    <div class="col-start-10 and col-end-13"> 
                                        {{event.heen10}}+{{ event.terug10 }} / {{event.heen}}+{{ event.terug }} km
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-12">
                            <div class="col-start-1 and col-end-2"> 
                                Vertrek: 
                            </div>
                            <div class="col-start-3 and col-end-12"> 
                                <div v-if="formatDateDay(event.datum).substring(0,3) === 'din'">
                                    <div v-if="event.reistijd === '0:30'">
                                        <div>13:00 uur vanaf kerkplein Burg. van Hoofflaan</div>
                                    </div>
                                    <div v-if="event.reistijd === '0:15'">
                                        <div>13:15 uur vanaf kerkplein Burg. van Hoofflaan</div>
                                    </div>
                                    <div>13:30 uur vanaf beginpunt</div>
                                
                                </div>
                                <div v-if="formatDateDay(event.datum).substring(0,3) === 'don'">
                                    <div v-if="event.reistijd === '0:30'">
                                        <div>9:00 uur vanaf kerkplein Burg. van Hoofflaan</div>
                                    </div>
                                    <div v-if="event.reistijd === '0:15'">
                                        <div>9:15 uur vanaf kerkplein Burg. van Hoofflaan</div>
                                    </div>
                                    <div>9:30 uur vanaf beginpunt</div>
                                
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-12">
                            <div class="col-start-1 and col-end-2"> 
                                Begin/eindpunt: 
                            </div>
                            <div class="col-start-3 and col-end-12"> 
                                <p> {{ event.startlocatie }} </p>
                                <p> {{ event.reisroute }} </p> 
                            </div>
                        </div>               
                        <div class="grid grid-cols-12">
                            <div class="col-start-1 and col-end-2"> 
                                Pauze: 
                            </div>
                            <div class="col-start-3 and col-end-12 .bg-gray-200"> 

                                <div  v-if="editmode[index] === 'on'">
                        
                                    <USelect v-model="country[index]" :options="pPauzeLoc[index]" option-attribute="restaurant" />

                                </div>
                                <div v-if="editmode[index] === 'off'">
                                    {{ event.restaurant }} in {{ event.plaats}}, telefoon: {{ event.telefoon }}
                               </div>
                            </div>
                        </div>               
                        <div class="grid grid-cols-12">
                            <div class="col-start-1 and col-end-2"> 
                                Beschrijving: 
                            </div>
                            <div class="col-start-3 and col-end-12"> 
                                {{ event.beschrijving }}
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="col-start-11 and col-end-13"> 
                    <div  v-if="editmode[index] === 'off'">
                        <UButton v-on:click="status(index)" icon="i-heroicons-pencil-square" size="sm" color="gray" variant="solid" label="Bewerken" :trailing="false"></UButton>
                    </div>
                    <div  v-if="editmode[index] === 'on'">
                        <UButton  v-on:click="status(index)" icon="i-heroicons-pencil-square" size="sm" color="gray" variant="solid" label="Stop bewerken" :trailing="false"></UButton>
                        <UButton  v-on:click="status(index)" icon="i-heroicons-pencil-square" size="sm" color="gray" variant="solid" label="Verwiijderen" :trailing="false"></UButton>
                    </div>
                </div>
            </div>
        </UCard>    
    </div>
</template>

<script setup>
    import { usedataStore } from '@/stores/dataStore.js'
    import { ref, watch } from 'vue'
defineProps({
  event: {
    type: Object,
    required: true,
  },

  index: {
    type: Number,
    required: true,
  },
})


const data_Store = usedataStore()
const editmode = computed(() => data_Store.editmode);
const pPauzeLoc = computed(() => data_Store.Ppauzeloc[0]);
const country = computed (() => data_Store.Ppauzeloc[1]);
const allroutes = computed(() => data_Store.allroutes.allroutes);
const routenr = computed(() => data_Store.allroutes.routenr);






 function formatDateDay(date) {
      const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('nl', options)
    }

function status(index) {
    if (data_Store.editmode[index] === 'off') {
    data_Store.editmode[index] = 'on'
    } else  {
        data_Store.editmode[index] = 'off'  
        data_Store.update = true   
    }
}

</script>

<style scoped>

</style>