
import type { _divideColor } from '#tailwind-config/theme';

import type { _divideColor } from '#tailwind-config/theme';
<script  setup>
import { ref, computed, watch } from 'vue'
import { useProgramStore } from '@/stores/programStore.js'

const programStore = useProgramStore()

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

function formatDateDay(date) {
      const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('nl', options)
    }

function formatDagNaam(date) {
      const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('nl', options).substring(0, 3)
    }
</script>

<template>
    <UCard class="ring-0">
    <div class="grid grid-cols-12">
        <div class="col-start-3 and col-end-12"> 
            <div class="hover:scale-[1.01] hover:shadow-md">
            <div class="grid grid-cols-12">
                <div class="col-start-1 and col-end-2"> 
                    Datum: 
                </div>
                <div class="col-start-3 and col-end-12 font-bold"> 
                    <div class="grid grid-cols-12">
                        <div class="col-start-1 and col-end-4 "> 
                            {{ formatDateDay(programStore.events.events[index].datum ) }}
                        </div>
                        <div class="col-start-5 and col-end-10"> 
                            {{ programStore.events.events[index].route  }} {{ programStore.events.events[index].naam  }}
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

                    <div v-if="formatDagNaam(programStore.events.events[index].datum )=== 'don'">
                        <div v-if="programStore.events.events[index].reistijd === '30'">

                            9:00 uur vanaf kerkplein Burgemeester van Hoofflaan
                        </div>
                        <div v-if="programStore.events.events[index].reistijd === '15'">
                            9:15 uur vanaf kerkplein Burgemeester van Hofflaan
                        </div>
                        <div>9:30 uur vanaf beginpunt</div>
                    </div>
                    <div v-if="formatDagNaam(programStore.events.events[index].datum )=== 'din'">
                        <div v-if="programStore.events.events[index].reistijd === '30'">

                            13:00 uur vanaf kerkplein Burgemeester van Hoofflaan
                        </div>
                        <div v-if="programStore.events.events[index].reistijd === '15'">
                            13:15 uur vanaf kerkplein Burgemeester van Hofflaan
                        </div>
                        <div>13:30 uur vanaf beginpunt</div>
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
                <div class="col-start-3 and col-end-12"> 
                    {{ event.restaurant }} in {{ event.plaats}}, telefoon: {{ event.telefoon }}
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
    </div>
    </UCard>
</template>