<template>
    <section class="container text-center media-container">
        <div class="videos-container" ref="videoContainer">
            <div v-for="(video, idx) in videos" :key="idx"
                :style="{ transform: `translateX(${(idx + offset) % videos.length * 250}px)` }"
                :class="['video-container', getPosition(idx), playVideo(idx)]">
                <iframe :src="`https://www.youtube.com/embed/${video}`" @mousedown.stop title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
                <div class="video-cover" @click="showVideo(idx)"></div>
            </div>
        </div>
        <button @click="slide(-1)" class="arrow"><img src="@/assets/imgs/arrow.png" alt=""></button>
        <button @click="slide(1)" class="arrow right-arrow"><img src="@/assets/imgs/arrow.png" alt=""></button>
    </section>
</template>
  
<script>
export default {
    name: 'media',
    data() {
        return {
            videos: [
                'tk3eWKoa3U4?si=azIl2tRfEJhD7PQJ',
                '70RTp-udCys?si=PQfrkKvx5rZaAUbn',
                'HfEkwL0_n1Y?si=qa34wItEzRCiw1ne',
                'uJtdgtm0Mhc?si=XgDDNcT7HGPbkcAt',
                'NMJcTbhDMqc?si=nf7FvYRbZSbKAv8A',
            ],
            offset: 0,
            playingVideo: null
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
        playVideo(idx) {
            return this.playingVideo === idx ? 'played-video' : ''
        },
        getPosition(index) {
            var middleIndex = this.middleVideo - this.offset;
            if (middleIndex < 0) {
                let reduceFromEnd = middleIndex
                middleIndex = this.videos.length + reduceFromEnd
            }
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
            console.log(this.offset, 'one');
        },
        showVideo(idx) {
            var middleIndex = this.middleVideo;
            if (middleIndex - idx < 0) {
                this.offset = this.videos.length + middleIndex - idx
            } else this.offset = middleIndex - idx

            this.playingVideo = idx
            console.log(this.playingVideo);
        }
    }

}
</script>
  