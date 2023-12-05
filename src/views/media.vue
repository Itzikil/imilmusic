<template>
    <section class="container text-center media-container">
        <div class="videos-container" ref="videoContainer">
            <div v-for="(video, idx) in videos" :key="idx"
                :style="{ transform: `translateX(${(idx + offset) % videos.length * 250}px)` }"
                :class="['video-container', getPosition(idx)]"
                @click="showVideo(idx)">
                <iframe :src="`https://www.youtube.com/embed/${video}`" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
        <button @click="slide(-1)">-1</button>
        <button @click="slide(1)">1</button>
    </section>
</template>
  
<script>
export default {
    name: 'media',
    data() {
        return {
            videos: [
                'tk3eWKoa3U4?si=azIl2tRfEJhD7PQJ',
                'HfEkwL0_n1Y?si=qa34wItEzRCiw1ne',
                'HfEkwL0_n1Y?si=qa34wItEzRCiw1ne',
                'HfEkwL0_n1Y?si=qa34wItEzRCiw1ne',
                'NMJcTbhDMqc?si=nf7FvYRbZSbKAv8A',
            ],
            offset: 0
        }
    },
    created() {
    },
    mounted() {
    },
    computed: {
        middleVideo() {
            return Math.floor(this.videos.length / 2)
        },
    },
    methods: {
        getPosition(index) {
            var middleIndex = Math.floor(this.videos.length / 2) - this.offset;
            if (middleIndex < 0) {
                let reduceFromEnd = middleIndex
                middleIndex = this.videos.length + reduceFromEnd
            }
            console.log(middleIndex);
            if (index === middleIndex) {
                return '';
            } else if (index + 1 === middleIndex || index - 1 === middleIndex ||
                middleIndex === 0 && index === this.videos.length - 1 || middleIndex === this.videos.length - 1 && index === 0) {
                return 'medium-video';
            } else {
                return 'small-video';
            }
        },
        slide(dir) {
            this.offset = (this.offset + dir + this.videos.length) % this.videos.length;
        },
        showVideo(idx){
            console.log(1);
            this.offset = 1
        }
    }

}
</script>
  