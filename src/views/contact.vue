<template>
    <section class="container contact-container text-center">
        <h2 data-trans="Contact us">Contact us</h2>
        <a target="_blank" href="https://share.google/qs7i6dBJnQSrOABoO"><img class="logo google-logo"
                src="@/assets/logos/google.svg" alt="youtube"></a>
        <div class="flex space-between">
            <div class="contacts-container">
                <h4 data-trans="Miriam">Miriam</h4>
                <h5 class="text-center">054-3060864</h5>
                <h5 class="text-center">mirik.b@gmail.com</h5>
                <a target="_blank" href="https://www.facebook.com/miriam.bier.7"><img class="logo"
                        src="@/assets/logos/facebook.svg" alt="facebook"></a>
                <a target="_blank" href="https://www.youtube.com/@miriambier2563"><img class="logo"
                        src="@/assets/logos/youtube.svg" alt="youtube"></a>
            </div>
            <div class="contacts-container">
                <h4 data-trans="Itzhak">Itzhak</h4>
                <h5 class="text-center">054-2609225</h5>
                <h5 class="text-center">itzikil@icloud.com</h5>
                <a target="_blank" href="https://www.facebook.com/itzik.levi.142/"><img class="logo"
                        src="@/assets/logos/facebook.svg" alt="facebook"></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCy80epR-nGOkL9QA2m_8-8g"><img class="logo"
                        src="@/assets/logos/youtube.svg" alt="youtube"></a>
                <a target="_blank" href="https://www.instagram.com/issac.lev/">
                    <img class="left-logo" src=@/assets/logos/instagram2.svg alt="instagram">
                    <img class="right-logo" src=@/assets/logos/instagram.svg alt="instagram">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { i18Service } from '../services/i18-service.js';

export default {
    name: 'home',
    data() {
        return {
            currLang: i18Service.getTransLang()
        }
    },
    computed: {
    },
    mounted() {
        i18Service.setLang()
        i18Service.doTrans()
    },
    created() {
    },
    methods: {
    }
}
</script>