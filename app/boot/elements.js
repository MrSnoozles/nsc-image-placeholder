import Vue from 'nativescript-vue'
import * as app from '@nativescript/core/application';
import * as imageModule from '@nativescript-community/ui-image';
import ImagePlugin from "@nativescript-community/ui-image/vue";

Vue.use(ImagePlugin);

app.on(app.launchEvent, () => {
    console.log('launched');
    imageModule.initialize({ isDownsampleEnabled: true })
});
app.on(app.exitEvent, args => imageModule.shutDown());
