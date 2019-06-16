<template>
    <ul id="infiniteList" class="infiniteList" @scroll="checkForMore($event)">
        <li v-for="image in renderList">
            <img :src="'images/' + image">
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['images', 'speed'],
        name: "ScrollColumn.vue",
        data() {
            return {
                renderList: [],
                yPos: 0,
            }
        },
        created() {
            this.loadMore();

        },
        mounted() {
            let element = this.$el;
            console.log(this);
            window.setInterval(() => {
                element.scrollTo({top: this.yPos, behavior: "smooth"});
                this.yPos += this.speed;
            }, 10);
        },
        methods: {
            loadMore() {
                for (let i = 0; i < 20; i++) {
                    let nextItem = this.images[Math.floor(Math.random() * this.images.length)];
                    this.renderList.push(nextItem);
                }
            },
            checkForMore(el) {
                if (el.target.scrollTop + el.target.clientHeight >= el.target.scrollHeight) {
                    this.loadMore();
                }
            }
        }
    }
</script>

<style scoped>

    .infiniteList {
        width: 100%;
        height: 100vh;
        overflow: auto;
        margin-left: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
        display: block;
        margin-top: -6px;
    }

    li img {
        width: 100%;

    }

    li:hover {
        background: #000;
    }
</style>