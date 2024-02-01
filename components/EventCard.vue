<template>
    <div>
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
                                        {{ event.datum }}
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
                                <div>9:30 uur vanaf beginpunt</div>
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
</script>

<style lang="scss" scoped>

</style>