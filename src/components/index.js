import HelloButton from './HelloButton.vue';
HelloButton.install = function (Vue) {
    Vue.component('hello-button', HelloButton);
};
export default HelloButton;
