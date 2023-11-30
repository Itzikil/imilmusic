<template>
    <section class="container text-center media-container">
        <div class="videos-container">
            <div v-for="(video, idx) in videos" :key="idx"
                :class="['video-container',
                    { 'small-video': idx !== middleVideo }, { 'medium-video': (idx === middleVideo + 1) || (idx === middleVideo - 1) }]">
                <iframe :src="`https://www.youtube.com/embed/${video}`" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'media',
    data() {
        return {
            videos: ['tk3eWKoa3U4?si=azIl2tRfEJhD7PQJ',
                'HfEkwL0_n1Y?si=qa34wItEzRCiw1ne',
                'HfEkwL0_n1Y?si=qa34wItEzRCiw1ne',
                'HfEkwL0_n1Y?si=qa34wItEzRCiw1ne',
                'NMJcTbhDMqc?si=nf7FvYRbZSbKAv8A'],
        }
    },
    computed: {
        middleVideo() {
            return Math.floor(this.videos.length / 2)
        }
    },
    created() {
    },
    methods: {
    }

}
</script>
  