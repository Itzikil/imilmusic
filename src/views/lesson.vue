<template>
    <section class="container lesson-container text-center background-image-container">
        <h1 data-trans="Lessons">Lessons</h1>

        <div class="note-book">
            <div class="bookmarks">
                <div v-for="instrument in instruments" :class="[instrument, displayInstrument(instrument)]"
                    :key="instrument + 1" @click="chooseInstrument(instrument)">
                    <p class="bold instrument-name" :data-trans=instrument>{{ instrument }}</p>
                </div>
            </div>
            <div class="instrument-pages">
                <div v-for="instrument in instruments" :class="[instrument, displayInstrument(instrument)]" :key=instrument>
                    <h3 class="instrument-name" :data-trans=instrument>{{ instrument }}</h3>
                    <p>{{ this.instrumentText[instrument] }}</p>
                </div>
            </div>
        </div>
        <div>
            <P>אנחנו מלמדים בבית שלנו</P>
        </div>
    </section>
</template>
  
<script>
import { i18Service } from '../services/i18n-service.js'
export default {
    name: 'home',
    data() {
        return {
            currentInstrument: 'guitar',
            instruments: ['guitar', 'piano', 'harmonica', 'bass'],
            instrumentText: {
                guitar: ` guitarLorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam eaque, odit reprehenderit inventore voluptatibus
                  dolorem voluptatem impedit beatae provident voluptate sit asperiores fugiat dolorum deleniti ratione ea facilis magnam.`,
                piano: ` pianoLorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam eaque, odit reprehenderit inventore voluptatibus
                  dolorem voluptatem impedit beatae provident voluptate sit asperiores fugiat dolorum deleniti ratione ea facilis magnam.`,
                harmonica: ` harmonicaLorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam eaque, odit reprehenderit inventore voluptatibus
                  dolorem voluptatem impedit beatae provident voluptate sit asperiores fugiat dolorum deleniti ratione ea facilis magnam.`,
                bass: ` bassLorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam eaque, odit reprehenderit inventore voluptatibus
                  dolorem voluptatem impedit beatae provident voluptate sit asperiores fugiat dolorum .`,
            }
        }
    },
    created() {
        const id = this.$route.params.id
        if (id) this.currentInstrument = id
    },
    mounted() {
        i18Service.setLang()
        i18Service.doTrans()
    },
    computed: {
    },
    methods: {
        displayInstrument(instrument) {
            return instrument === this.currentInstrument ? 'current-instrument' : ''
        },
        chooseInstrument(instrument) {
            this.currentInstrument = instrument
        }
    }

}
</script>
  