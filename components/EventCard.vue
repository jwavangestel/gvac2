<template>
    <div>
        <UCard class="ring-0">
            <div class="grid grid-cols-12">
                <div class="col-start-3 and col-end-11"> 
                    <div class="hover:scale-[1.01] hover:shadow-md">
                        <div class="grid grid-cols-12">
                            {{ index }}
                            <div class="col-start-1 and col-end-2"> 
                                Datum: 
                            </div>
                            <div class="col-start-3 and col-end-12 font-bold"> 
                                <div class="grid grid-cols-12">
                                    <div class="col-start-1 and col-end-4 "> 
                                        {{ formatDateDay(event.datum) }}
                                    </div>
                                    <div class="col-start-5 and col-end-10"> 
                                        {{ event.route  }} {{ event.naam  }}
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
                <div class="col-start-11 and col-end-13"> 
                    <UButton icon="i-heroicons-pencil-square" size="sm" color="gray" variant="solid" label="Bewerken" :trailing="false"></UButton>
                    <UButton icon="i-heroicons-pencil-square" size="sm" color="gray" variant="solid" label="Stop bewerken" :trailing="false"></UButton>
                    <UButton icon="i-heroicons-pencil-square" size="sm" color="gray" variant="solid" label="Verwiijderen" :trailing="false"></UButton>
                </div>
            </div>
        </UCard>    
    </div>
</template>

<script setup>
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


</script>

<style lang="scss" scoped>

</style>