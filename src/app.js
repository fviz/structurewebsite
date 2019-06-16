import Vue from "vue";

Vue.component("scrollcolumn", require("./ScrollColumn").default);


document.addEventListener("DOMContentLoaded", (event) => {

    const app = new Vue({

        data: {
            imagesArray: [1, 2]
        },

        created() {
            // Create array of items to load
            let items = [];

            // Fill array with ordered/patterned file names
            for (let i = 1; i < 41; i++) {
                let string = i + "src.png";
                items.push(string);
            }

            this.imagesArray = items;
        }

    }).$mount("#app");

});