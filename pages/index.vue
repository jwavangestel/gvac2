<template>
    <div>
        <main class="text-base" >  
            <UCard class="mb-2 ring-0">
                <div class="grid grid-cols-6">

                    <div class="col-start-2 and col-end-6">
                        <div class="font-bold flex justify-center">GVAC wandelprogramma Februari 2024</div> 
                        <br>
                        <div>         
                             <p>
                                Dit is het programma voor beide wandel groepen, 10 km en 12 km. De 10 km groep loopt gemiddeld ongeveer 4,5 km per uur en de 12 km groep loopt gemiddeld 5,1 km per uur.  
                                Vertrekpunt en pauzeplaats zijn in principe voor beide groepen hetzelfde. Bij een wandeling met afwijkende startplaats is dit per groep aangegeven.
                            </p>
                            <br>
                            <p>
                                Bij vertrek op Kerkplein Burgemeester van Hoofflaan proberen we te carpoolen. 
                                Dit lukt uiteraard alleen met voldoende auto’s maar dat gaat praktisch altijd goed. 
                                Meerijd vergoeding € 2,00 p.p. per wandeling ongeacht de afstand naar het vertrekpunt.
                            </p>
                        </div>
                    </div>
                </div>
            </UCard>
 
            <div>  
                <EventCard v-for="(event, index) in events.events" :key="event.id" :event="event"  :index="index" />

              </div>
  
            <UCard class="mb-2 ring-0">
                <div class="grid grid-cols-6">
                    <div class="col-start-2 and col-end-6">
                        <p>
          Verwacht je niet op tijd te kunnen zijn op het vertrekpunt van de wandeling, neem dan contact op met een van onderstaande telefoonnummers. Eventueel kunnen we dan een paar minuten wachten.
        </p>
        <p>
          Voor informatie over de groep 12 km kun je bellen met Rob Ploegmakers 06 48 20 66 17, met Janus Roosen 06 22 46 08 13 of met Jack van Hoof 06 10 49 79 85.
          Voor informatie over de groep 10 km kun je bellen met Ludwig Eggermont 06 49 13 94 91.
        </p>
        <br>
        <p>
        Fotogalerij:                                                                                                                            
        Ontbreekt je foto nog of wil je je foto vervangen door een andere, stuur die dan naar Ludwig Eggermont, e-mail LDJE@xs4all.nl
        </p>
        <br>
        <p>
        Nieuwe leden moeten toestemming geven voor plaatsing van hun foto. Dit kun je aangeven op het inschrijfformulier of stuur een e-mail naar s.ebben@onsbrabantnet.nl
        </p>
        <br>
        <p>
        De wandelprogramma’s staan op de website GVAC Recreatief wandelen en worden aan de wandelleden per e-mail verstuurd door Sophie Ebben s.ebben@onsbrabantnet.nl
        </p>
      </div>
      <div class="w3-col w3-container m2 l2 ">


                    </div>
                </div>
            </UCard>        
        </main>

    </div>
</template>

<script setup>

    import EventCard from '@/components/EventCard.vue'
    import { usedataStore } from '@/stores/dataStore.js'

    const data_Store = usedataStore()
    const editmode = computed(() => data_Store.editmode);

    const { data: allroutes } = await useAsyncData('allroutes', () => {
        return $fetch('https://gvacdata.janenlenneke.nl/?allroutes=%27%20%27&Rjaar=2024&Rmaand=2')
    })   
    data_Store.allroutes = allroutes.value 

    const { data: events } = await useAsyncData('events', () => {
        return $fetch('https://gvacdata.janenlenneke.nl/?jaar=2024&maand=2')
    })
    data_Store.events = events.value

    let aantalEvents = (events.value.events.length)
    let aantalPauzepl = (events.value.PpauzeL.length) 
    for (let y = 0; y < aantalEvents ; y++) {
        let datum = (events.value.events[y].datum)
        let z = 0
        for (let i = 0; i < aantalPauzepl ; i++) {
            if (datum === events.value.PpauzeL[i].datum) {
            data_Store.Ppauzeloc[1][y] = events.value.events[y].pauzeplaats
            data_Store.Ppauzeloc[0][y] [z] = events.value.PpauzeL[i]
            z = z + 1
            }
       }
    }

    watch (data_Store.Ppauzeloc[1], async (newData, oldData) => {
    const cindex = 99
    const l = data_Store.events.Ppauze.length
    console.log (l)
    for (let j = 0; j < l ; j++){
        if (data_Store.Ppauzeloc[1][j] != data_Store.events.Ppauze[j].pauzeplaats) {
            
            console.log (data_Store.Ppauzeloc[1][j])
            console.log (data_Store.events.Ppauze[j].pauzeplaats)
            const { data: events } = await useAsyncData('events', () => {
                return $fetch('https://gvacdata.janenlenneke.nl/?datum=20240201&pauzeplaats=9', {
                method: "POST" })

    })

    
    const { data: allroutes } = await useAsyncData('allroutes', () => {
        return $fetch('https://gvacdata.janenlenneke.nl/?allroutes=%27%20%27&Rjaar=2024&Rmaand=2')
    })   
    data_Store.allroutes = allroutes.value 

    const { data: events2 } = await useAsyncData('events', () => {
        return $fetch('https://gvacdata.janenlenneke.nl/?jaar=2024&maand=2')
    })
    data_Store.events = events2.value

    

        }
    }
})


</script>

<style lang="scss" scoped>

</style>