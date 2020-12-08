import Vue from "nativescript-vue";
import '~/boot/elements';

import Home from "./components/Home";

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
